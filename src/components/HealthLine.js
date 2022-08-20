import React from 'react';
import { Box, LinearProgress, Typography } from '@mui/material';

export default function HealthLine({ maxHealth, health }) {
    const normalise = (value) => (value * 100) / (maxHealth);
    return (
    <Box sx={{ display: 'flex', alignItems: 'center', m: 1, width: '100%' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant='determinate' value={normalise(health)} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant='body2' color='text.secondary' align='right'>
          {health}
        </Typography>
      </Box>
    </Box>
  );
}
