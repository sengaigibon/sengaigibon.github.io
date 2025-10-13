'use client';

import { Container, Typography, Box, Chip, Card, CardMedia } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { useTranslations } from 'next-intl';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import { containerGradient } from '../../../../styles/config';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TerrainIcon from '@mui/icons-material/Terrain';
import { CalendarToday } from '@mui/icons-material';

export default function MountaineeringTimeline() {
    const t = useTranslations('mountaineering');
    const adventures = t.raw('adventures') as Array<{
        id: number;
        title: string;
        date: string;
        distance: number;
        elevation: number;
        gain: number;
        link?: string;
    }>;

    // Sort projects by ID to show chronological order
    const sortedAdentures = [...adventures].sort((a, b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
        // return b.elevation - a.elevation;
    });

    const getTimelineDotColor = (index: number) => {
        const colors = ['primary', 'secondary', 'error', 'warning', 'info', 'success'] as const;
        return colors[index % colors.length];
    };

    return (
        <main>
            <Header />
            
            <Container maxWidth={false} sx={{ 
                minHeight: '100vh', 
                background: containerGradient.bottomToTop, 
                py: 4 
            }}>
                <Container maxWidth="lg">
                    {/* Page Header */}
                    <Box sx={{ textAlign: 'center', mb: 6 }}>
                        <Typography variant="h2" component="h1" gutterBottom>
                            {t('portfolio')} - Timeline
                        </Typography>
                        <Typography variant="h5" color="text.secondary" sx={{ mb: 2 }}>
                            {t('subtitle')}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            A chronological journey through my mountaineering adventures
                        </Typography>
                    </Box>

                    {/* Timeline */}
                    <Timeline position="alternate">
                        {sortedAdentures.map((adv, index) => (
                            <TimelineItem key={adv.id}>
                                {/* Opposite Content - Project Number & Basic Info */}
                                <TimelineOppositeContent
                                    sx={{ 
                                        m: 'auto 0',
                                        display: { xs: 'none', md: 'block' } // Hide on mobile
                                    }}
                                    align={index % 2 === 0 ? 'right' : 'left'}
                                    variant="body2" 
                                    color="text.secondary"
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5, justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                                        <CalendarToday fontSize="medium" sx={{ mr: 0.5 }} />
                                        <Typography variant="h6">
                                            {new Date(adv.date).toLocaleDateString()}
                                        </Typography>
                                    </Box>
                                </TimelineOppositeContent>

                                {/* Timeline Separator */}
                                <TimelineSeparator>
                                    <TimelineDot 
                                        color={getTimelineDotColor(index)}
                                        sx={{ 
                                            width: 16, 
                                            height: 16,
                                            border: '3px solid',
                                            borderColor: 'background.paper'
                                        }}
                                    />
                                    {index < sortedAdentures.length - 1 && (
                                        <TimelineConnector sx={{ bgcolor: 'grey.300' }} />
                                    )}
                                </TimelineSeparator>

                                {/* Main Content */}
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <Card sx={{ 
                                        maxWidth: 400,
                                        boxShadow: 3,
                                        transition: 'transform 0.2s, box-shadow 0.2s',
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            boxShadow: 6
                                        }
                                    }}>
                                        
                                        {/* Card Content */}
                                        <Box sx={{ p: 3 }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5, justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                                                <Typography variant="h5" component="h3" gutterBottom>
                                                    {adv.title}
                                                </Typography>
                                                <TerrainIcon fontSize="medium" sx={{ ml: 1, mr: 0.5 }} />
                                                <Typography variant="h6">
                                                    {adv.elevation} m
                                                </Typography>
                                            </Box>
                                            {/* Mobile-only */}
                                            <Box sx={{ 
                                                display: { xs: 'flex', md: 'none' }, 
                                                gap: 1, 
                                                mb: 2,
                                                flexWrap: 'wrap'
                                            }}>
                                                {adv.elevation && (
                                                    <Chip
                                                        icon={<TerrainIcon />}
                                                        label={adv.elevation}
                                                        size="small"
                                                        variant="outlined"
                                                        color="primary"
                                                    />
                                                )}
                                            </Box>
                                        </Box>
                                    </Card>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>

                </Container>
            </Container>

            {/* Footer */}
            <Container maxWidth={false} sx={{ 
                width: '100vw', 
                background: containerGradient.topToBottom, 
                color: '#fff', 
                py: 4 
            }}>
                <Footer />
            </Container>
        </main>
    );
}