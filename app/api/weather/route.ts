import { NextResponse } from 'next/server';
import { WEATHER_LOCATIONS } from '../../../lib/weather/locations';

export const runtime = 'nodejs';
export const dynamic = 'force-static';

type MeteoblueDailyNormalizedDay = {
  date: string;
  temperatureMax?: number | null;
  temperatureMin?: number | null;
  precipitationProbability?: number | null;
  precipitation?: number | null;
  weatherSymbol?: number | null;
};

type MeteoblueDailyNormalized = {
  location: {
    id: string;
    name: string;
    lat: number;
    lon: number;
  };
  days: MeteoblueDailyNormalizedDay[];
  source: 'meteoblue';
};

function pickFirstNumber(obj: any, keys: string[]): number | null {
  for (const key of keys) {
    const value = obj?.[key];
    if (typeof value === 'number') return value;
    if (Array.isArray(value) && typeof value[0] === 'number') return value[0];
  }
  return null;
}

function normalizeBasicDay(payload: any): MeteoblueDailyNormalizedDay[] {
  const dataDay = payload?.data_day ?? payload?.dataDay ?? null;
  const time: string[] | undefined = dataDay?.time;
  if (!Array.isArray(time) || time.length === 0) return [];

  const maxArr: any[] | undefined = dataDay?.temperature_max ?? dataDay?.temperatureMax;
  const minArr: any[] | undefined = dataDay?.temperature_min ?? dataDay?.temperatureMin;
  const popArr: any[] | undefined = dataDay?.precipitation_probability ?? dataDay?.precipitationProbability;
  const precArr: any[] | undefined = dataDay?.precipitation ?? dataDay?.precipitation_sum ?? dataDay?.precipitationSum;
  // meteoblue commonly uses pictocode for daily data ("iday" set)
  const symbArr: any[] | undefined =
    dataDay?.weather_symbol ??
    dataDay?.weatherSymbol ??
    dataDay?.pictocode ??
    dataDay?.pictocode_detailed ??
    dataDay?.pictocodeDetailed;

  const days: MeteoblueDailyNormalizedDay[] = time.map((t, i) => ({
    date: String(t).slice(0, 10),
    temperatureMax: typeof maxArr?.[i] === 'number' ? maxArr[i] : null,
    temperatureMin: typeof minArr?.[i] === 'number' ? minArr[i] : null,
    precipitationProbability: typeof popArr?.[i] === 'number' ? popArr[i] : null,
    precipitation: typeof precArr?.[i] === 'number' ? precArr[i] : null,
    weatherSymbol: typeof symbArr?.[i] === 'number' ? symbArr[i] : null
  }));

  return days;
}

async function fetchMeteoblueBasicDay(params: {
  apiKey: string;
  lat: number;
  lon: number;
  asl?: number;
  tz?: string;
}): Promise<any> {
  const url = new URL('https://my.meteoblue.com/packages/basic-day');
  url.searchParams.set('apikey', params.apiKey);
  url.searchParams.set('lat', String(params.lat));
  url.searchParams.set('lon', String(params.lon));
  url.searchParams.set('format', 'json');

  if (typeof params.asl === 'number') url.searchParams.set('asl', String(params.asl));
  if (params.tz) url.searchParams.set('tz', params.tz);

  const res = await fetch(url.toString());

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Meteoblue request failed (${res.status}): ${text.slice(0, 300)}`);
  }

  return res.json();
}

export async function GET() {
  try {
    const apiKey = process.env.METEOBLUE_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Missing METEOBLUE_API_KEY', locations: [] },
        { status: 200 }
      );
    }

    const results = await Promise.all(
      WEATHER_LOCATIONS.map(async (loc) => {
        const raw = await fetchMeteoblueBasicDay({
          apiKey,
          lat: loc.lat,
          lon: loc.lon,
          asl: loc.asl,
          tz: loc.tz
        });

        const normalizedDays = normalizeBasicDay(raw);
        const days = normalizedDays.slice(0, 4);

        // If payload shape changes, at least return something predictable.
        if (days.length === 0) {
          const fallback: MeteoblueDailyNormalizedDay[] = [
            {
              date: new Date().toISOString().slice(0, 10),
              temperatureMax: pickFirstNumber(raw, ['temperature_max', 'temperatureMax']),
              temperatureMin: pickFirstNumber(raw, ['temperature_min', 'temperatureMin']),
              precipitationProbability: null,
              precipitation: null,
              weatherSymbol: pickFirstNumber(raw, [
                'weather_symbol',
                'weatherSymbol',
                'pictocode',
                'pictocode_detailed',
                'pictocodeDetailed'
              ])
            }
          ];

          return {
            location: { id: loc.id, name: loc.name, lat: loc.lat, lon: loc.lon },
            days: fallback,
            source: 'meteoblue'
          } satisfies MeteoblueDailyNormalized;
        }

        return {
          location: { id: loc.id, name: loc.name, lat: loc.lat, lon: loc.lon },
          days,
          source: 'meteoblue'
        } satisfies MeteoblueDailyNormalized;
      })
    );

    return NextResponse.json({ locations: results });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message ?? 'Unknown error' },
      { status: 500 }
    );
  }
}
