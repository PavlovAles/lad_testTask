import React from 'react';
import { useState } from 'react';
import { ListItem, ListItemButton, Paper, Typography } from '@mui/material';
import LoopIcon from '@mui/icons-material/Loop';
import HardwareIcon from '@mui/icons-material/Hardware';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

export default function Move({ move, setMove }) {
  const {
    name,
    physicalDmg,
    magicDmg,
    physicArmorPercents,
    magicArmorPercents,
    cooldown,
  } = move;

  const [isCoolingdown, setCoolingdown] = useState(false);
  const [selected, setSelected] = useState(false);

  function handleMoveClick() {
    setMove(move);
    setSelected((prev) => !prev);
  }

  return (
    <ListItem mb={1}>
      <Paper elevation={selected ? 8 : 1} sx={{ padding: 1, width: '100%' }}>
        <ListItemButton
          disabled={isCoolingdown}
          sx={{
            mb: 1,
            border: '1px solid grey',
            borderRadius: 2,
            '&.Mui-selected': {
              backgroundColor: 'rgb(255 142 0 / 83%)',
            },
          }}
          selected={selected}
          onClick={handleMoveClick}
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
