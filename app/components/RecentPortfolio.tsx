'use client';

import { useState } from 'react';
import { Box, Button, Chip, Container, IconButton, Typography } from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TerrainIcon from '@mui/icons-material/Terrain';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { useTranslations } from 'next-intl';

const projects = [
    {
        id: 'library',
        name: 'Personal Library',
        accent: '#52745c',
        icon: AutoStoriesIcon,
        stack: ['Symfony 7', 'PHP 8.3', 'PostgreSQL', 'Twig', 'Podman/Docker'],
        href: undefined,
        linkLabel: undefined,
    },
    {
        id: 'adventure',
        name: 'Personal Adventure Journal',
        accent: '#147f83',
        icon: TerrainIcon,
        stack: ['Astro', 'Typescript', 'Node.js', 'Tailwind CSS', 'Leaflet', 'Cloudflare'],
        href: 'https://deaventura.me',
        linkLabel: 'visit',
    },
    {
        id: 'frasear',
        name: 'Frasear.io',
        accent: '#bd563b',
        icon: FormatQuoteIcon,
        stack: ['Android', 'Kotlin', 'Jetpack Compose', 'Room / SQLite', 'Coroutines'],
        href: undefined,
        linkLabel: undefined,
    },
    {
        id: 'getThingsDone',
        name: 'GetThingsDone',
        accent: '#bd8735',
        icon: TaskAltIcon,
        stack: ['Electron', 'Node.js', 'ag-Grid', 'SQLite'],
        href: 'https://github.com/sengaigibon/get-things-done-electron-ag-grid',
        linkLabel: 'repository',
    },
] as const;

const libraryScreenshots = [
    '/images/portfolio/personal-library/personal-library-reader-select.png',
    '/images/portfolio/personal-library/personal-library-dashboard.png',
    '/images/portfolio/personal-library/personal-library-book-list.png',
    '/images/portfolio/personal-library/personal-library-edit-book.png',
];

const adventureScreenshots = [
    '/images/portfolio/personal-adventure-journal/adventure-journal-home.png',
    '/images/portfolio/personal-adventure-journal/adventure-journal-story-detail.png',
    '/images/portfolio/personal-adventure-journal/adventure-journal-route-detail.png',
    '/images/portfolio/personal-adventure-journal/adventure-journal-route-explorer.png',
    '/images/portfolio/personal-adventure-journal/adventure-journal-profile.png',
    '/images/portfolio/personal-adventure-journal/adventure-journal-contact.png',
];

const frasearScreenshots = [
    '/images/portfolio/fraseario/fraseario-search-home.jpg',
    '/images/portfolio/fraseario/fraseario-add-phrase.jpg',
    '/images/portfolio/fraseario/fraseario-overflow-menu.jpg',
    '/images/portfolio/fraseario/fraseario-about.jpg',
    '/images/portfolio/fraseario/fraseario-search-results.jpg',
    '/images/portfolio/fraseario/fraseario-import-confirmation.jpg',
    '/images/portfolio/fraseario/fraseario-edit-phrase.jpg',
];

const getThingsDoneScreenshots = [
    '/images/portfolio/get-things-done/get-things-done-task-list.png',
    '/images/portfolio/get-things-done/get-things-done-task-entry.png',
    '/images/portfolio/get-things-done/get-things-done-reports-dialog.png',
    '/images/portfolio/get-things-done/get-things-done-reports-window.png',
    '/images/portfolio/get-things-done/get-things-done-task-details.png',
    '/images/portfolio/get-things-done/get-things-done-edit-time.png',
];

function InterfacePreview({ projectId, accent, label, screenLabels, previousScreenshotLabel, nextScreenshotLabel }: {
    projectId: string;
    accent: string;
    label: string;
    screenLabels: string[];
    previousScreenshotLabel: string;
    nextScreenshotLabel: string;
}) {
    const [activeScreenshotIndex, setActiveScreenshotIndex] = useState(0);
    const screenshots = projectId === 'library' ? libraryScreenshots
        : projectId === 'adventure' ? adventureScreenshots
            : projectId === 'frasear' ? frasearScreenshots
                : getThingsDoneScreenshots;
    const rows = projectId === 'adventure' ? ['Pico Almanzor', 'Via Ferrata', 'Sierra Nevada']
        : projectId === 'frasear' ? ['Save a phrase', 'Add author and tags', 'Search your collection']
            : projectId === 'getThingsDone' ? ['Plan the week', 'Prepare next climb', 'Review notes']
                : ['The mountain is you', 'A field guide', 'The creative act'];

    return (
        <Box sx={{
            width: '100%',
            minHeight: projectId === 'adventure' ? { xs: 275, sm: 390 }
                : projectId === 'frasear' ? { xs: 425, sm: 465 }
                    : projectId === 'getThingsDone' ? { xs: 275, sm: 390 }
                    : { xs: 190, sm: 250 },
            p: { xs: 1.5, sm: 2.5 },
            bgcolor: '#e9ece7',
            border: '1px solid #d5dad2',
            borderRadius: 1,
            overflow: 'hidden',
        }}>
            <Box sx={{
                height: projectId === 'adventure' ? { xs: 230, sm: 340 }
                    : projectId === 'frasear' ? { xs: 380, sm: 420 }
                        : projectId === 'getThingsDone' ? { xs: 230, sm: 340 }
                        : { xs: 162, sm: 218 },
                border: '1px solid #d9ddd7',
                borderRadius: '5px',
                bgcolor: '#fff',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(32, 41, 34, 0.10)',
            }}>
                {projectId === 'library' || projectId === 'adventure' || projectId === 'frasear' || projectId === 'getThingsDone' ? (
                    <Box sx={{ position: 'relative', width: '100%', height: '100%', bgcolor: '#e9eef0' }}>
                        <img
                            src={screenshots[activeScreenshotIndex]}
                            alt={screenLabels[activeScreenshotIndex]}
                            style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
                        />
                        <IconButton
                            aria-label={previousScreenshotLabel}
                            onClick={() => setActiveScreenshotIndex((index) => (index - 1 + screenshots.length) % screenshots.length)}
                            sx={{ position: 'absolute', left: 8, bottom: 8, width: 32, height: 32, color: '#fff', bgcolor: 'rgba(35, 49, 59, 0.82)', '&:hover': { bgcolor: 'rgba(35, 49, 59, 0.96)' } }}
                        >
                            <ArrowBackIosNewIcon sx={{ fontSize: 15 }} />
                        </IconButton>
                        <Typography sx={{ position: 'absolute', left: '50%', bottom: 11, transform: 'translateX(-50%)', px: 1.1, py: 0.35, maxWidth: '55%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: '#fff', bgcolor: 'rgba(35, 49, 59, 0.82)', borderRadius: '4px', fontSize: 10 }}>
                            {screenLabels[activeScreenshotIndex]} · {activeScreenshotIndex + 1}/{screenshots.length}
                        </Typography>
                        <IconButton
                            aria-label={nextScreenshotLabel}
                            onClick={() => setActiveScreenshotIndex((index) => (index + 1) % screenshots.length)}
                            sx={{ position: 'absolute', right: 8, bottom: 8, width: 32, height: 32, color: '#fff', bgcolor: 'rgba(35, 49, 59, 0.82)', '&:hover': { bgcolor: 'rgba(35, 49, 59, 0.96)' } }}
                        >
                            <ArrowForwardIosIcon sx={{ fontSize: 15 }} />
                        </IconButton>
                    </Box>
                ) : (
                    <>
                        <Box sx={{ height: 24, display: 'flex', alignItems: 'center', gap: 0.6, px: 1, bgcolor: '#f5f6f3', borderBottom: '1px solid #e6e8e3' }}>
                            {['#de8a7a', '#e4c36c', '#8caf8b'].map((color) => <Box key={color} sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: color }} />)}
                            <Box sx={{ height: 10, flex: 1, maxWidth: 190, ml: 1, borderRadius: 1, bgcolor: '#e9ebe7' }} />
                        </Box>
                        <Box sx={{ display: 'flex', height: 'calc(100% - 24px)' }}>
                            <Box sx={{ width: { xs: 45, sm: 75 }, p: { xs: 0.8, sm: 1.4 }, bgcolor: '#f7f8f5', borderRight: '1px solid #edf0eb' }}>
                                <Box sx={{ width: '65%', height: 8, mb: 1.6, borderRadius: 1, bgcolor: accent, opacity: 0.85 }} />
                                {[0, 1, 2, 3].map((item) => <Box key={item} sx={{ height: 5, width: item === 0 ? '90%' : `${55 + item * 8}%`, mb: 1, bgcolor: item === 0 ? `${accent}35` : '#e6e9e4', borderRadius: 1 }} />)}
                            </Box>
                            <Box sx={{ flex: 1, p: { xs: 1, sm: 2.2 }, minWidth: 0 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: { xs: 1.2, sm: 2 } }}>
                                    <Box>
                                        <Box sx={{ width: { xs: 86, sm: 145 }, height: { xs: 9, sm: 12 }, bgcolor: '#36403a', borderRadius: 1, mb: 0.7 }} />
                                        <Box sx={{ width: { xs: 52, sm: 82 }, height: 5, bgcolor: '#c9cec7', borderRadius: 1 }} />
                                    </Box>
                                    <Box sx={{ width: 37, height: 14, borderRadius: 0.7, bgcolor: `${accent}24` }} />
                                </Box>
                                {rows.map((row, index) => (
                                    <Box key={row} sx={{ display: 'flex', alignItems: 'center', gap: 1, py: { xs: 0.7, sm: 1.1 }, borderTop: '1px solid #edf0eb' }}>
                                        <Box sx={{ width: { xs: 20, sm: 31 }, height: { xs: 20, sm: 31 }, flexShrink: 0, borderRadius: 0.7, bgcolor: index === 0 ? `${accent}32` : '#eef0ec' }} />
                                        <Typography noWrap sx={{ flex: 1, color: '#48524a', fontSize: { xs: 8, sm: 11 }, textAlign: 'left' }}>{row}</Typography>
                                        <Box sx={{ width: { xs: 22, sm: 42 }, height: 5, flexShrink: 0, borderRadius: 1, bgcolor: '#e8ebe6' }} />
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </>
                )}
            </Box>
            {projectId !== 'library' && projectId !== 'adventure' && projectId !== 'frasear' && projectId !== 'getThingsDone' && (
                <Typography sx={{ mt: 1, color: '#5b645d', fontSize: 11, textAlign: 'right' }}>{label}</Typography>
            )}
        </Box>
    );
}

export default function RecentPortfolio() {
    const t = useTranslations('main');
    const [activeIndex, setActiveIndex] = useState(0);
    const project = projects[activeIndex];
    const ProjectIcon = project.icon;
    const libraryScreenLabels = [
        t('portfolio.library.screens.readerSelect'),
        t('portfolio.library.screens.dashboard'),
        t('portfolio.library.screens.bookList'),
        t('portfolio.library.screens.editBook'),
    ];
    const adventureScreenLabels = [
        t('portfolio.adventure.screens.home'),
        t('portfolio.adventure.screens.storyDetail'),
        t('portfolio.adventure.screens.routeDetail'),
        t('portfolio.adventure.screens.routeExplorer'),
        t('portfolio.adventure.screens.profile'),
        t('portfolio.adventure.screens.contact'),
    ];
    const frasearScreenLabels = [
        t('portfolio.frasear.screens.searchHome'),
        t('portfolio.frasear.screens.addPhrase'),
        t('portfolio.frasear.screens.menu'),
        t('portfolio.frasear.screens.about'),
        t('portfolio.frasear.screens.searchResults'),
        t('portfolio.frasear.screens.importConfirmation'),
        t('portfolio.frasear.screens.editPhrase'),
    ];
    const getThingsDoneScreenLabels = [
        t('portfolio.getThingsDone.screens.taskList'),
        t('portfolio.getThingsDone.screens.taskEntry'),
        t('portfolio.getThingsDone.screens.reportsDialog'),
        t('portfolio.getThingsDone.screens.reportsWindow'),
        t('portfolio.getThingsDone.screens.taskDetails'),
        t('portfolio.getThingsDone.screens.editTime'),
    ];

    return (
        <Container id="recentPortfolio" maxWidth={false} sx={{ width: '100vw', textAlign: 'center', pb: 12 }}>
            <Typography variant="h2" color="text.secondary" fontSize={{ xs: 34, sm: 48 }}>
                {t('recentPortfolio')}
            </Typography>
            <Box sx={{
                display: 'flex',
                width: 'min(1180px, calc(100% - 32px))',
                minHeight: { xs: 0, sm: 435 },
                mx: 'auto',
                mt: { xs: 4, sm: 6 },
                overflow: 'hidden',
                border: '1px solid rgba(50, 62, 52, 0.18)',
                borderRadius: 1,
                bgcolor: '#fbfcf9',
                boxShadow: '0 18px 55px rgba(31, 43, 34, 0.13)',
                flexDirection: { xs: 'column', sm: 'row' },
                textAlign: 'left',
            }}>
                <Box role="tablist" aria-label={t('recentPortfolio')} sx={{
                    width: { xs: '100%', sm: '20%' },
                    flex: { xs: 'none', sm: '0 0 20%' },
                    display: { xs: 'flex', sm: 'block' },
                    overflowX: { xs: 'auto', sm: 'visible' },
                    bgcolor: '#eff2ed',
                    borderRight: { sm: '1px solid #dfe4dc' },
                    borderBottom: { xs: '1px solid #dfe4dc', sm: 0 },
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
                                onClick={() => setActiveIndex(index)}
                                startIcon={<ItemIcon sx={{ fontSize: 19 }} />}
                                sx={{
                                    justifyContent: 'flex-start',
                                    width: { xs: 'auto', sm: '100%' },
                                    minWidth: { xs: 150, sm: 0 },
                                    minHeight: { xs: 54, sm: 84 },
                                    px: { xs: 1.5, sm: 2 },
                                    borderRadius: 0,
                                    borderLeft: { sm: selected ? `3px solid ${item.accent}` : '3px solid transparent' },
                                    borderBottom: { xs: selected ? `3px solid ${item.accent}` : '3px solid transparent', sm: 0 },
                                    color: selected ? '#26332a' : '#606a62',
                                    bgcolor: selected ? '#fbfcf9' : 'transparent',
                                    fontSize: 13,
                                    lineHeight: 1.35,
                                    fontWeight: selected ? 700 : 500,
                                    textAlign: 'left',
                                    '& .MuiButton-startIcon': { color: item.accent, mr: 1 },
                                    '&:hover': { bgcolor: selected ? '#fbfcf9' : '#e6eae4' },
                                }}
                            >
                                {item.name}
                            </Button>
                        );
                    })}
                </Box>
                <Box id="portfolio-panel" role="tabpanel" aria-labelledby={`portfolio-tab-${project.id}`} sx={{
                    width: { xs: '100%', sm: '80%' },
                    minWidth: 0,
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: '1fr 1.05fr' },
                    alignItems: 'center',
                    gap: { xs: 2.5, md: 4 },
                    p: { xs: 2, sm: 3, md: 4 },
                }}>
                    <Box sx={{ order: { xs: 2, md: 1 } }}>
                        <Typography sx={{ color: project.accent, fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', mb: 1 }}>
                            {String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2, mb: 1.4 }}>
                            <ProjectIcon sx={{ color: project.accent, fontSize: 26 }} />
                            <Typography variant="h4" component="h3" sx={{ color: '#29342c', fontSize: { xs: 23, sm: 29 }, lineHeight: 1.15 }}>
                                {project.name}
                            </Typography>
                        </Box>
                        <Typography sx={{ color: '#59635b', fontSize: 15, lineHeight: 1.75, mb: 2.5 }}>
                            {t(`portfolio.${project.id}.summary`)}
                        </Typography>
                        <Typography sx={{ color: '#344139', fontSize: 12, fontWeight: 700, mb: 1 }}>
                            {t('techStack')}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
                            {project.stack.map((technology) => (
                                <Chip key={technology} size="small" label={technology} sx={{ borderRadius: '4px', bgcolor: '#edf0eb', color: '#465148', fontSize: 11 }} />
                            ))}
                        </Box>
                        {project.href && (
                            <Button href={project.href} target="_blank" rel="noreferrer" variant="contained" sx={{ mt: 2.5, bgcolor: project.accent, '&:hover': { bgcolor: project.accent, filter: 'brightness(0.92)' }, textTransform: 'none' }}>
                                {t(project.linkLabel)}
                            </Button>
                        )}
                    </Box>
                    <Box sx={{ order: { xs: 1, md: 2 } }}>
                        <InterfacePreview
                            key={project.id}
                            projectId={project.id}
                            accent={project.accent}
                            label={t('previewPlaceholder')}
                            screenLabels={project.id === 'adventure' ? adventureScreenLabels
                                : project.id === 'frasear' ? frasearScreenLabels
                                    : project.id === 'getThingsDone' ? getThingsDoneScreenLabels
                                        : libraryScreenLabels}
                            previousScreenshotLabel={t('previousScreenshot')}
                            nextScreenshotLabel={t('nextScreenshot')}
                        />
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}