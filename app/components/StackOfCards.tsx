'use client';

import {Stack, Paper, Box} from '@mui/material';
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
  width: 140,
  height: 140,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
  square: false,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[4],
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
        xl: `repeat(${elements.length}, 1fr)`, // All elements in 1 row on extra large screens
      },
      gap: 2,
      justifyItems: 'center',
      alignItems: 'center',
      maxWidth: '100%',
    }}
  >
      {elements.map(item => (
        <SingleCard key={item.id} elevation={2}>
          <Box sx={{ mb: 1 }}>
            <img 
              src={item.icon} 
              alt={item.name}
              style={{ 
                width: '60px', 
                height: '60px',
                objectFit: 'contain'
              }}
            />
          </Box>
          <Box sx={{ 
            fontSize: { xs: '0.75rem', sm: '0.875rem' }, 
            fontWeight: 500,
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