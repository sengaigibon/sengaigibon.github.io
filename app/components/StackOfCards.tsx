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
    transition: 'transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease',
    '&:hover': {
        transform: 'translateY(-4px) scale(1.02)',
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

const StackOfCards: React.FC<StackOfCardsProps> = ({ elements }) => (
    <Box
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
        {elements.map(item => (
            <SingleCard key={item.id} elevation={0}>
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

export default StackOfCards;