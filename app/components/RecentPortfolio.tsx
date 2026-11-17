'use client';

import { useState, type ElementType } from 'react';
import { Box, Button, Container, IconButton, Typography } from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TerrainIcon from '@mui/icons-material/Terrain';
import ExploreIcon from '@mui/icons-material/Explore';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { useTranslations } from 'next-intl';

type Project = {
    id: string;
    name: string;
    accent: string;
    /** Fallback icon, used when the project has no logo of its own. */
    icon: ElementType;
    /** The app's own icon (square image); shown instead of `icon` in the tab and next to the title. */
    logo?: string;
    stack: string[];
    /** 'phone' shows a phone mockup with the neighbouring screens fanned behind; 'browser' a desktop window. */
    device: 'phone' | 'browser';
    /** Screenshot paths, paired by position with the translation keys under portfolio.<id>.screens */
    screenshots: string[];
    screens: string[];
    href?: string;
    linkLabel?: string;
};

const projects: Project[] = [
    {
        id: 'orienteering',
        name: 'Augmented Orienteering',
        accent: '#c2007a',
        icon: ExploreIcon,
        logo: '/images/portfolio/icons/augmented-orienteering.webp',
        stack: ['Android', 'Kotlin', 'Jetpack Compose', 'CameraX', 'Room / SQLite', 'osmdroid'],
        device: 'phone',
        screenshots: [
            'race-detail', 'map-editor', 'course-check', 'dashboard',
            'camera-checkin', 'race-map', 'results', 'track-map',
        ].map((name) => `/images/portfolio/augmented-orienteering/augmented-orienteering-${name}.jpg`),
        screens: ['raceDetail', 'mapEditor', 'courseCheck', 'dashboard', 'camera', 'raceMap', 'results', 'trackMap'],
    },
    {
        id: 'library',
        name: 'Personal Library',
        accent: '#52745c',
        icon: AutoStoriesIcon,
        stack: ['Symfony 7', 'PHP 8.3', 'PostgreSQL', 'Twig', 'Podman/Docker'],
        device: 'browser',
        screenshots: ['reader-select', 'dashboard', 'book-list', 'edit-book']
            .map((name) => `/images/portfolio/personal-library/personal-library-${name}.png`),
        screens: ['readerSelect', 'dashboard', 'bookList', 'editBook'],
    },
    {
        id: 'adventure',
        name: 'Personal Adventure Journal',
        accent: '#147f83',
        icon: TerrainIcon,
        stack: ['Astro', 'Typescript', 'Node.js', 'Tailwind CSS', 'Leaflet', 'Cloudflare'],
        device: 'browser',
        screenshots: ['home', 'story-detail', 'route-detail', 'route-explorer', 'profile', 'contact']
            .map((name) => `/images/portfolio/personal-adventure-journal/adventure-journal-${name}.png`),
        screens: ['home', 'storyDetail', 'routeDetail', 'routeExplorer', 'profile', 'contact'],
        href: 'https://deaventura.me',
        linkLabel: 'visit',
    },
    {
        id: 'frasear',
        name: 'Frasear.io',
        accent: '#bd563b',
        icon: FormatQuoteIcon,
        logo: '/images/portfolio/icons/frasear.webp',
        stack: ['Android', 'Kotlin', 'Jetpack Compose', 'Room / SQLite', 'Coroutines'],
        device: 'phone',
        screenshots: [
            'search-home', 'add-phrase', 'overflow-menu', 'about',
            'search-results', 'import-confirmation', 'edit-phrase',
        ].map((name) => `/images/portfolio/fraseario/fraseario-${name}.jpg`),
        screens: ['searchHome', 'addPhrase', 'menu', 'about', 'searchResults', 'importConfirmation', 'editPhrase'],
    },
    {
        id: 'getThingsDone',
        name: 'GetThingsDone',
        accent: '#bd8735',
        icon: TaskAltIcon,
        stack: ['Electron', 'Node.js', 'ag-Grid', 'SQLite'],
        device: 'browser',
        screenshots: ['task-list', 'task-entry', 'reports-dialog', 'reports-window', 'task-details', 'edit-time']
            .map((name) => `/images/portfolio/get-things-done/get-things-done-${name}.png`),
        screens: ['taskList', 'taskEntry', 'reportsDialog', 'reportsWindow', 'taskDetails', 'editTime'],
        href: 'https://github.com/sengaigibon/get-things-done-electron-ag-grid',
        linkLabel: 'repository',
    },
];

const ink = '#1f2a37';
const muted = '#5b6675';

const animations = {
    '@keyframes pfFadeUp': {
        from: { opacity: 0, transform: 'translateY(14px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
    },
    '@keyframes pfFadeIn': {
        from: { opacity: 0 },
        to: { opacity: 1 },
    },
    '@media (prefers-reduced-motion: reduce)': {
        '& *': { animation: 'none !important', transition: 'none !important' },
    },
};

function PhoneFrame({ src, alt, sx, onClick }: { src: string; alt: string; sx?: object; onClick?: () => void }) {
    return (
        <Box
            onClick={onClick}
            sx={{
                position: 'absolute',
                height: { xs: 420, sm: 520, md: 580 },
                aspectRatio: '9 / 19',
                p: '9px',
                borderRadius: { xs: '34px', md: '44px' },
                bgcolor: '#14181f',
                boxShadow: '0 30px 60px -18px rgba(15, 23, 42, 0.55), inset 0 0 0 2px #2c3340',
                transition: 'transform .5s cubic-bezier(.2,.8,.2,1), opacity .5s ease, filter .5s ease',
                ...sx,
            }}
        >
            <Box sx={{ position: 'relative', width: '100%', height: '100%', borderRadius: { xs: '26px', md: '35px' }, overflow: 'hidden', bgcolor: '#fff' }}>
                <img key={src} src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
            </Box>
        </Box>
    );
}

function navButton(accent: string) {
    return {
        width: 46,
        height: 46,
        flexShrink: 0,
        color: ink,
        bgcolor: '#fff',
        boxShadow: '0 6px 18px rgba(15, 23, 42, 0.12)',
        transition: 'all .25s ease',
        '&:hover': { bgcolor: accent, color: '#fff', transform: 'translateY(-2px)' },
    };
}

function Stage({ project, index, label, onPrevious, onNext, onSelect, previousLabel, nextLabel }: {
    project: Project;
    index: number;
    label: string;
    onPrevious: () => void;
    onNext: () => void;
    onSelect: (index: number) => void;
    previousLabel: string;
    nextLabel: string;
}) {
    const count = project.screenshots.length;
    const previous = (index - 1 + count) % count;
    const next = (index + 1) % count;
    const sidePhone = (side: 1 | -1) => ({
        cursor: 'pointer',
        opacity: 0.5,
        filter: 'saturate(0.7)',
        transform: {
            xs: `translateX(${side * 58}%) rotate(${side * 9}deg) scale(0.8)`,
            md: `translateX(${side * 62}%) rotate(${side * 9}deg) scale(0.82)`,
        },
        '&:hover': { opacity: 0.8 },
    });

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Box sx={{
                position: 'relative',
                flex: 1,
                minHeight: { xs: 470, sm: 580, md: 660 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: { xs: '22px', md: '28px' },
                overflow: 'hidden',
                background: `radial-gradient(circle at 50% 45%, ${project.accent}40 0%, ${project.accent}14 38%, transparent 70%),
                             linear-gradient(160deg, rgba(255,255,255,0.75), rgba(255,255,255,0.35))`,
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `radial-gradient(${project.accent}30 1.2px, transparent 1.2px)`,
                    backgroundSize: '22px 22px',
                    maskImage: 'radial-gradient(circle at 50% 50%, black 30%, transparent 75%)',
                },
            }}>
                {project.device === 'phone' ? (
                    <>
                        <PhoneFrame src={project.screenshots[previous]} alt="" onClick={onPrevious} sx={sidePhone(-1)} />
                        <PhoneFrame src={project.screenshots[next]} alt="" onClick={onNext} sx={sidePhone(1)} />
                        <PhoneFrame
                            src={project.screenshots[index]}
                            alt={label}
                            sx={{ zIndex: 2, '& img': { animation: 'pfFadeIn .45s ease' } }}
                        />
                    </>
                ) : (
                    <Box sx={{
                        position: 'relative',
                        width: { xs: 'calc(100% - 24px)', md: 'calc(100% - 64px)' },
                        borderRadius: '14px',
                        overflow: 'hidden',
                        bgcolor: '#fff',
                        boxShadow: '0 30px 70px -20px rgba(15, 23, 42, 0.45)',
                        transform: { md: 'perspective(1600px) rotateY(-7deg) rotateX(2deg)' },
                        transition: 'transform .6s cubic-bezier(.2,.8,.2,1)',
                        '&:hover': { transform: { md: 'perspective(1600px) rotateY(0deg) rotateX(0deg)' } },
                    }}>
                        <Box sx={{ height: 34, display: 'flex', alignItems: 'center', gap: '7px', px: 1.6, bgcolor: '#f1f3f6', borderBottom: '1px solid #e3e7ec' }}>
                            {['#ff5f57', '#febc2e', '#28c840'].map((color) => <Box key={color} sx={{ width: 11, height: 11, flexShrink: 0, borderRadius: '50%', bgcolor: color }} />)}
                            <Box sx={{ flex: 1, maxWidth: 320, height: 18, mx: 'auto', px: 1, borderRadius: '999px', bgcolor: '#e3e7ec', color: muted, fontSize: 10.5, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                                {label}
                            </Box>
                            <Box sx={{ width: { xs: 0, sm: 51 } }} />
                        </Box>
                        <Box sx={{ height: { xs: 300, sm: 420, md: 500 }, bgcolor: '#f6f8fa' }}>
                            <img
                                key={project.screenshots[index]}
                                src={project.screenshots[index]}
                                alt={label}
                                style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', animation: 'pfFadeIn .45s ease' }}
                            />
                        </Box>
                    </Box>
                )}
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2, mt: 2.5, px: { xs: 0, md: 1 } }}>
                <IconButton aria-label={previousLabel} onClick={onPrevious} sx={navButton(project.accent)}>
                    <ArrowBackIosNewIcon sx={{ fontSize: 16 }} />
                </IconButton>
                <Box sx={{ flex: 1, minWidth: 0, textAlign: 'center' }}>
                    <Typography noWrap sx={{ color: ink, fontSize: 14, fontWeight: 600 }}>
                        {label}
                        <Box component="span" sx={{ color: muted, fontWeight: 400 }}> · {index + 1}/{count}</Box>
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 0.75, mt: 1 }}>
                        {project.screenshots.map((src, dot) => (
                            <Box
                                key={src}
                                component="button"
                                aria-label={`${dot + 1}/${count}`}
                                aria-current={dot === index}
                                onClick={() => onSelect(dot)}
                                sx={{
                                    width: dot === index ? 26 : 8,
                                    height: 8,
                                    p: 0,
                                    borderRadius: '999px',
                                    bgcolor: dot === index ? project.accent : 'rgba(31, 42, 55, 0.18)',
                                    transition: 'all .3s ease',
                                    '&:hover': { bgcolor: dot === index ? project.accent : 'rgba(31, 42, 55, 0.35)' },
                                }}
                            />
                        ))}
                    </Box>
                </Box>
                <IconButton aria-label={nextLabel} onClick={onNext} sx={navButton(project.accent)}>
                    <ArrowForwardIosIcon sx={{ fontSize: 16 }} />
                </IconButton>
            </Box>
        </Box>
    );
}

export default function RecentPortfolio() {
    const t = useTranslations('main');
    const [activeIndex, setActiveIndex] = useState(0);
    const [screenIndex, setScreenIndex] = useState(0);
    const project = projects[activeIndex];
    const ProjectIcon = project.icon;
    const count = project.screenshots.length;

    const selectProject = (index: number) => {
        setActiveIndex(index);
        setScreenIndex(0);
    };

    return (
        <Container id="recentPortfolio" maxWidth={false} sx={{ width: '100vw', textAlign: 'center', py: { xs: 8, md: 12 }, ...animations }}>
            <Typography variant="h2" color="text.secondary" fontSize={{ xs: 34, sm: 48 }}>
                {t('recentPortfolio')}
            </Typography>

            <Box role="tablist" aria-label={t('recentPortfolio')} sx={{
                display: 'flex',
                justifyContent: { xs: 'flex-start', md: 'center' },
                gap: 1.2,
                my: { xs: 3, sm: 4 },
                mx: 'auto',
                px: { xs: 1, md: 2 },
                pt: 1,
                pb: 3,
                maxWidth: 1280,
                overflowX: 'auto',
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar': { display: 'none' },
            }}>
                {projects.map((item, index) => {
                    const ItemIcon = item.icon;
                    const selected = index === activeIndex;
                    return (
                        <Button
                            key={item.id}
                            id={`portfolio-tab-${item.id}`}
                            role="tab"
                            aria-selected={selected}
                            aria-controls="portfolio-panel"
                            onClick={() => selectProject(index)}
                            startIcon={item.logo
                                ? <Box component="img" src={item.logo} alt="" sx={{ width: 22, height: 22, borderRadius: '6px', display: 'block', boxShadow: selected ? '0 0 0 1.5px rgba(255, 255, 255, 0.9)' : 'none' }} />
                                : <ItemIcon sx={{ fontSize: 19 }} />}
                            sx={{
                                flexShrink: 0,
                                px: 2.2,
                                py: 1.1,
                                borderRadius: '999px',
                                textTransform: 'none',
                                fontSize: 14.5,
                                fontWeight: 600,
                                whiteSpace: 'nowrap',
                                color: selected ? '#fff' : ink,
                                bgcolor: selected ? item.accent : 'rgba(255, 255, 255, 0.7)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid',
                                borderColor: selected ? item.accent : 'rgba(255, 255, 255, 0.85)',
                                boxShadow: selected ? `0 8px 18px -10px ${item.accent}` : '0 4px 14px rgba(15, 23, 42, 0.08)',
                                transition: 'all .3s ease',
                                '& .MuiButton-startIcon': { color: selected ? '#fff' : item.accent, mr: 0.9 },
                                '&:hover': {
                                    bgcolor: selected ? item.accent : '#fff',
                                    transform: 'translateY(-2px)',
                                },
                            }}
                        >
                            {item.name}
                        </Button>
                    );
                })}
            </Box>

            <Box
                id="portfolio-panel"
                role="tabpanel"
                aria-labelledby={`portfolio-tab-${project.id}`}
                sx={{
                    position: 'relative',
                    width: 'min(1280px, calc(100% - 8px))',
                    mx: 'auto',
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: '0.85fr 1.15fr' },
                    alignItems: 'center',
                    gap: { xs: 3, md: 5 },
                    p: { xs: 2, sm: 3, md: 5 },
                    textAlign: 'left',
                    borderRadius: { xs: '26px', md: '36px' },
                    bgcolor: 'rgba(255, 255, 255, 0.62)',
                    backdropFilter: 'blur(22px) saturate(140%)',
                    border: '1px solid rgba(255, 255, 255, 0.8)',
                    boxShadow: '0 40px 90px -30px rgba(30, 41, 80, 0.45)',
                    overflow: 'hidden',
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: 420,
                        height: 420,
                        top: -180,
                        left: -160,
                        borderRadius: '50%',
                        background: project.accent,
                        opacity: 0.12,
                        filter: 'blur(40px)',
                        pointerEvents: 'none',
                        transition: 'background .5s ease',
                    },
                }}
            >
                <Box key={project.id} sx={{ position: 'relative', zIndex: 1, order: { xs: 2, md: 1 }, animation: 'pfFadeUp .55s ease both' }}>
                    <Typography aria-hidden sx={{
                        fontSize: { xs: 72, md: 120 },
                        fontWeight: 800,
                        lineHeight: 0.9,
                        letterSpacing: -4,
                        color: 'transparent',
                        WebkitTextStroke: `2px ${project.accent}55`,
                        mb: { xs: 1, md: 2 },
                        userSelect: 'none',
                    }}>
                        {String(activeIndex + 1).padStart(2, '0')}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                        {project.logo ? (
                            <Box component="img" src={project.logo} alt="" sx={{
                                width: 60,
                                height: 60,
                                flexShrink: 0,
                                display: 'block',
                                borderRadius: '18px',
                                boxShadow: `0 12px 24px -10px ${project.accent}, 0 0 0 1px rgba(15, 23, 42, 0.06)`,
                            }} />
                        ) : (
                            <Box sx={{
                                width: 48,
                                height: 48,
                                flexShrink: 0,
                                display: 'grid',
                                placeItems: 'center',
                                borderRadius: '16px',
                                color: '#fff',
                                background: `linear-gradient(135deg, ${project.accent}, ${project.accent}b3)`,
                                boxShadow: `0 10px 22px -8px ${project.accent}`,
                            }}>
                                <ProjectIcon sx={{ fontSize: 26 }} />
                            </Box>
                        )}
                        <Typography variant="h3" component="h3" sx={{ color: ink, fontSize: { xs: 28, sm: 36, md: 42 }, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.5 }}>
                            {project.name}
                        </Typography>
                    </Box>
                    <Typography sx={{ color: muted, fontSize: { xs: 16, md: 17.5 }, lineHeight: 1.75, mb: 3.5 }}>
                        {t(`portfolio.${project.id}.summary`)}
                    </Typography>
                    <Typography sx={{ color: ink, fontSize: 12, fontWeight: 700, letterSpacing: 1.4, textTransform: 'uppercase', mb: 1.4 }}>
                        {t('techStack')}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {project.stack.map((technology) => (
                            <Box key={technology} sx={{
                                px: 1.6,
                                py: 0.6,
                                borderRadius: '999px',
                                fontSize: 13,
                                fontWeight: 500,
                                color: ink,
                                bgcolor: 'rgba(255, 255, 255, 0.85)',
                                border: `1px solid ${project.accent}33`,
                            }}>
                                {technology}
                            </Box>
                        ))}
                    </Box>
                    {project.href && project.linkLabel && (
                        <Button
                            href={project.href}
                            target="_blank"
                            rel="noreferrer"
                            variant="contained"
                            disableElevation
                            sx={{
                                mt: 4,
                                px: 3.5,
                                py: 1.3,
                                borderRadius: '999px',
                                bgcolor: project.accent,
                                textTransform: 'none',
                                fontSize: 15,
                                fontWeight: 600,
                                boxShadow: `0 12px 26px -10px ${project.accent}`,
                                '&:hover': { bgcolor: project.accent, filter: 'brightness(0.92)', transform: 'translateY(-2px)' },
                            }}
                        >
                            {t(project.linkLabel)} ↗
                        </Button>
                    )}
                </Box>

                <Box sx={{ position: 'relative', zIndex: 1, order: { xs: 1, md: 2 }, minWidth: 0 }}>
                    <Stage
                        project={project}
                        index={screenIndex}
                        label={t(`portfolio.${project.id}.screens.${project.screens[screenIndex]}`)}
                        onPrevious={() => setScreenIndex((index) => (index - 1 + count) % count)}
                        onNext={() => setScreenIndex((index) => (index + 1) % count)}
                        onSelect={setScreenIndex}
                        previousLabel={t('previousScreenshot')}
                        nextLabel={t('nextScreenshot')}
                    />
                </Box>
            </Box>
        </Container>
    );
}
