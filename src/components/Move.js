import React from 'react';
import { ListItem, Paper, Typography } from '@mui/material';
import LoopIcon from '@mui/icons-material/Loop';
import HardwareIcon from '@mui/icons-material/Hardware';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

export default function Move({ move }) {
  const { physicalDmg, magicDmg, physicArmorPercents, magicArmorPercents } =
    move;
  const [cooldown, setCooldown] = React.useState(move.cooldown);
  return (
    <ListItem sx={{ mb: 1 }}>
      <Paper sx={{ padding: 1, width: '100%' }}>
        <Typography variant='button'>{move.name}</Typography>
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
