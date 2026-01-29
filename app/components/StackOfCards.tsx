'use client';

import { Stack, Paper, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

type CardElement = {
    id: number;
    name: string;
    icon: string;
};

type StackOfCardsProps = {
    elements: CardElement[];
};

const SingleCard = styled(Paper)(({ theme }) => ({
    position: 'relative',
    width: 140,
    height: 140,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    border: '1px solid rgba(255, 255, 255, 0.20)',
    backdropFilter: 'blur(8px)',
    // Transform composition via CSS variables for slide + hover
    '--x': '0px',
    '--y': '0px',
    '--s': 1,
    transform: 'translateX(var(--x)) translateY(var(--y)) scale(var(--s))',
    opacity: 0,
    willChange: 'transform, opacity',
    transition: 'transform 600ms ease, opacity 600ms ease, box-shadow 180ms ease, border-color 180ms ease',
    '&[data-offset="left"]': {
        '--x': '-24px'
    },
    '&[data-offset="right"]': {
        '--x': '24px'
    },
    '&.in-view': {
        opacity: 1,
        '--x': '0px'
    },
    '&:hover': {
        '--y': '-4px',
        '--s': 1.02,
        boxShadow: '0 8px 30px rgba(2, 8, 20, 0.15)',
        borderColor: 'rgba(255, 255, 255, 0.35)'
    },
    [theme.breakpoints.down('sm')]: {
        width: 120,
        height: 120,
        padding: theme.spacing(1.5),
    },
    [theme.breakpoints.down('xs')]: {
        width: 100,
        height: 100,
        padding: theme.spacing(1),
    }
}));

const StackOfCards: React.FC<StackOfCardsProps> = ({ elements }) => {
    const containerRef = React.useRef<HTMLDivElement | null>(null);

    React.useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        const cards = Array.from(container.querySelectorAll('.skill-card')) as HTMLElement[];
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const el = entry.target as HTMLElement;
                        el.classList.add('in-view');
                        observer.unobserve(el);
                    }
                });
            },
            { root: null, threshold: 0.2 }
        );
        cards.forEach((card) => observer.observe(card));
        return () => observer.disconnect();
    }, [elements.length]);

    return (
        <Box
            ref={containerRef}
            sx={{
                display: 'grid',
                gridTemplateColumns: {
                    xs: 'repeat(2, 1fr)',
                    sm: 'repeat(3, 1fr)',
                    md: 'repeat(5, 1fr)',
                    lg: 'repeat(8, 1fr)',
                    xl: `repeat(${elements.length}, 1fr)`,
                },
                gap: 2.5,
                justifyItems: 'center',
                alignItems: 'center',
                maxWidth: '100%',
            }}
        >
            {elements.map((item, index) => (
                <SingleCard
                    key={item.id}
                    elevation={0}
                    className="skill-card"
                    data-offset={index % 2 === 0 ? 'left' : 'right'}
                >
                    <Box sx={{ position: 'relative', mb: 1.5, width: 72, height: 72, display: 'grid', placeItems: 'center' }}>
                        <Box sx={{
                            position: 'absolute',
                            inset: 0,
                            borderRadius: '50%',
                            background: 'radial-gradient(circle at 50% 50%, rgba(140, 82, 255, 0.30), transparent 60%)',
                            filter: 'blur(12px)'
                        }} />
                        <img
                            src={item.icon}
                            alt={item.name}
                            style={{
                                width: '48px',
                                height: '48px',
                                objectFit: 'contain',
                                position: 'relative',
                                zIndex: 1
                            }}
                        />
                    </Box>
                    <Box sx={{
                        fontSize: { xs: '0.75rem', sm: '0.875rem' },
                        fontWeight: 600,
                        textAlign: 'center',
                        lineHeight: 1.2,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical'
                    }}>
                        {item.name}
                    </Box>
                </SingleCard>
            ))}
        </Box>
    );
};

export default StackOfCards;