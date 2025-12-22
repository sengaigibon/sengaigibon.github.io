'use client';

import {
  Alert,
  Box,
  Card,
  CardContent,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import WbCloudyOutlinedIcon from '@mui/icons-material/WbCloudyOutlined';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import DehazeOutlinedIcon from '@mui/icons-material/DehazeOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { useEffect, useMemo, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';

type ApiDay = {
  date: string;
  temperatureMax: number | null;
  temperatureMin: number | null;
  precipitationProbability: number | null;
  precipitation: number | null;
  weatherSymbol: number | null;
};

type ApiLocation = {
  id: string;
  name: string;
  lat: number;
  lon: number;
};

type ApiLocationForecast = {
  location: ApiLocation;
  days: ApiDay[];
  source: 'meteoblue';
};

type ApiResponse = {
  locations: ApiLocationForecast[];
  error?: string;
};

function formatMaybeNumber(value: number | null, suffix?: string) {
  if (typeof value !== 'number') return '—';
  return `${value}${suffix ?? ''}`;
}

function WeatherSymbolIcon({ symbol }: { symbol: number | null }) {
  const sx = { color: 'text.secondary' as const };

  if (typeof symbol !== 'number') return <HelpOutlineOutlinedIcon fontSize="small" sx={sx} />;

  // Meteoblue pictocode/weather_symbol values: we map common buckets.
  switch (symbol) {
    case 1:
    case 2:
      return <WbSunnyOutlinedIcon fontSize="small" sx={sx} />;
    case 3:
    case 4:
      return <WbCloudyOutlinedIcon fontSize="small" sx={sx} />;
    case 5:
      return <DehazeOutlinedIcon fontSize="small" sx={sx} />;
    case 10:
    case 11:
    case 12:
      return <AcUnitOutlinedIcon fontSize="small" sx={sx} />;
    case 13:
    case 14:
    case 15:
      return <ThunderstormOutlinedIcon fontSize="small" sx={sx} />;
    case 6:
    case 7:
    case 8:
    case 9:
      return <WaterDropOutlinedIcon fontSize="small" sx={sx} />;
    default:
      return <CloudOutlinedIcon fontSize="small" sx={sx} />;
  }
}

export default function WeatherDashboard() {
  const t = useTranslations('checkWeather');
  const locale = useLocale();

  const [data, setData] = useState<ApiLocationForecast[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setError(null);
        const res = await fetch('/api/weather');
        const json = (await res.json()) as ApiResponse;

        if (!res.ok || json.error) {
          throw new Error(json.error || `Request failed: ${res.status}`);
        }

        if (!cancelled) setData(json.locations);
      } catch (e: any) {
        if (!cancelled) setError(e?.message ?? t('error'));
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [t]);

  const dateFormatter = useMemo(() => {
    return new Intl.DateTimeFormat(locale, { weekday: 'short', month: 'short', day: 'numeric' });
  }, [locale]);

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  if (!data) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <CircularProgress size={20} />
        <Typography variant="body2" color="text.secondary">{t('loading')}</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
      {data.map((entry) => (
        <Card key={entry.location.id} variant="outlined">
          <CardContent>
            <Typography variant="h6" component="h2">
              {entry.location.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              {t('subtitle')}
            </Typography>

            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell align="right">Max</TableCell>
                  <TableCell align="right">Min</TableCell>
                  <TableCell align="right">PoP</TableCell>
                  <TableCell align="right">Precip</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {entry.days.map((day) => {
                  const date = new Date(day.date);
                  const formattedDate = isNaN(date.getTime()) ? day.date : dateFormatter.format(date);
                  return (
                    <TableRow key={day.date}>
                      <TableCell>
                        <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1 }}>
                          <WeatherSymbolIcon symbol={day.weatherSymbol} />
                          <span>{formattedDate}</span>
                        </Box>
                      </TableCell>
                      <TableCell align="right">{formatMaybeNumber(day.temperatureMax, '°C')}</TableCell>
                      <TableCell align="right">{formatMaybeNumber(day.temperatureMin, '°C')}</TableCell>
                      <TableCell align="right">{formatMaybeNumber(day.precipitationProbability, '%')}</TableCell>
                      <TableCell align="right">{formatMaybeNumber(day.precipitation, ' mm')}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
