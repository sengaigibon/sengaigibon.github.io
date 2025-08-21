'use client';

import { Button, Box, Breadcrumbs, Tooltip, IconButton, Link } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useRouter, usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl'; 
import { useTransition, useEffect } from 'react';
import { validLocales } from '@/i18n';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

export default function Header() {
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();
    const t = useTranslations('navigation');
    const [isPending, startTransition] = useTransition();

    // Restore scroll position after locale change
    useEffect(() => {
        const savedScrollY = sessionStorage.getItem('scrollPosition');
        if (savedScrollY) {
            const scrollPosition = parseInt(savedScrollY, 10);
            window.scrollTo(0, scrollPosition);
            sessionStorage.removeItem('scrollPosition'); // Clear after restoring
        }
    }, [locale]);

    const switchLocale = (newLocale: string) => {
        if (locale === newLocale) return; // Skip if it's the same locale

        // Save current scroll position
        const scrollY = window.scrollY

        sessionStorage.setItem('scrollPosition', scrollY.toString());

        startTransition(() => {
            var urlParts = pathname.split('/').filter(Boolean);
            urlParts[0] = `${newLocale}`;
            router.replace('/' + urlParts.join('/'));

        });
    };

    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    const isNotHome = pathWithoutLocale !== '/';

    const generateBreadcrumbs = (): BreadcrumbItem[] => {
        const pathSegments = pathWithoutLocale.split('/').filter(Boolean);
        const breadcrumbs: BreadcrumbItem[] = [
            { label: t('home'), href: `/${locale}` }
        ];

        // Build breadcrumbs based on path segments
        pathSegments.forEach((segment, index) => {
            const href = `/${locale}/${pathSegments.slice(0, index + 1).join('/')}`;
            
            switch (segment) {
                case 'realme':
                    breadcrumbs.push({ label: t('realme'), href });
                    break;
                case 'mountaineering':
                    breadcrumbs.push({ label: t('mountaineering') }); // No href for current page
                    break;
                default:
                    breadcrumbs.push({ label: segment, href });
            }
        });

        return breadcrumbs;
    };

    const breadcrumbs = generateBreadcrumbs();

    const handleBack = () => {
        router.back();
    };


    return (
        <>
            {isNotHome ? 
                <>
                    <Box sx={{ position: 'fixed', top: 20, left: 20, zIndex: 1000, display: 'flex', gap: 1 }}>
                        <Tooltip title='back'>
                            <IconButton
                                onClick={handleBack}
                                sx={{
                                    color: 'text.primary',
                                    '&:hover': {
                                        backgroundColor: 'rgba(0, 0, 0, 0.04)',
                                    },
                                }}
                            >
                                <ArrowBackIcon />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </>
            : null }
            <Box sx={{ position: 'fixed', top: 20, right: 20, zIndex: 1000, display: 'flex', gap: 1 }}>
                {validLocales.map((loc) => {
                    return (
                        <Button
                            key={loc}
                            variant={locale === loc ? 'contained' : 'outlined'}
                            size="small"
                            onClick={() => switchLocale(loc)}
                            disabled={isPending}
                            sx={{
                                color: locale === loc ? '#fff' : '#000',
                                backgroundColor: locale === loc ? '#000' : 'transparent',
                                borderColor: '#000',
                                '&:hover': {
                                    backgroundColor: locale === loc ? '#333' : 'rgba(0, 0, 0, 0.1)',
                                },
                                '&:disabled': {
                                    opacity: 0.6,
                                },
                            }}
                        >
                            {loc.toUpperCase()}
                        </Button>
                    );
                })}
            </Box>
        </>
    );
}
