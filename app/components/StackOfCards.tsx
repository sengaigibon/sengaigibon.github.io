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
  square: false
}));

const StackOfCards: React.FC<StackOfCardsProps> = ({ elements }) => (
  <Stack direction="row" spacing={2}>
      {elements.map(item => (
        <SingleCard key={item.id} elevation={2}>
          <Box sx={{ mb: 1 }}>
            <img 
              src={item.icon} 
              alt={item.name}
              style={{ 
                width: '80px', 
                height: '80px',
                objectFit: 'contain'
              }}
            />
          </Box>
          <Box sx={{ fontSize: '0.875rem', fontWeight: 500 }}>
            {item.name}
          </Box>
        </SingleCard>
      ))}
  </Stack>
);

export default StackOfCards;