import React from 'react';
import { Box, LinearProgress, Typography } from '@mui/material';
export default function HealthLine({ health }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', m: 1 }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant='determinate' value={health * 10} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant='body2' color='text.secondary'>
          {health}
        </Typography>
      </Box>
    </Box>
  );
}
