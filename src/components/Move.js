import React from 'react';
import { ListItem, ListItemButton, Paper, Typography } from '@mui/material';
import LoopIcon from '@mui/icons-material/Loop';
import HardwareIcon from '@mui/icons-material/Hardware';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

export default function Move({ move }) {
  const {
    name,
    physicalDmg,
    magicDmg,
    physicArmorPercents,
    magicArmorPercents,
    cooldown,
  } = move;
  const [isCoolingdown, setCoolingdown] = React.useState(false);
  return (
    <ListItem mb={1}>
      <Paper sx={{ padding: 1, width: '100%' }}>
        <ListItemButton
          disabled={isCoolingdown}
          sx={{ mb: 1, border: '1px solid grey', borderRadius: 2 }}
        >
          <Typography variant='button' mx='auto'>
            {name}
          </Typography>
        </ListItemButton>
        <Typography variant='body2'>
          <HardwareIcon sx={{ verticalAlign: 'middle' }} />
          {` Физический урон ${physicalDmg} / защита ${physicArmorPercents}`}
        </Typography>
        <Typography variant='body2'>
          <AutoFixHighIcon sx={{ verticalAlign: 'middle' }} />
          {` Магический урон ${magicDmg} / защита ${magicArmorPercents}`}
        </Typography>
        <Typography variant='body2'>
          <LoopIcon sx={{ verticalAlign: 'middle' }} />
          {` Cooldown: ${cooldown}`}
        </Typography>
      </Paper>
    </ListItem>
  );
}
