import React, { useEffect } from 'react';
import { useState } from 'react';
import { ListItem, ListItemButton, Paper, Typography } from '@mui/material';
import LoopIcon from '@mui/icons-material/Loop';
import HardwareIcon from '@mui/icons-material/Hardware';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

export default function MonsterMove({ move, setMove, fight, active }) {
  const {
    name,
    physicalDmg,
    magicDmg,
    physicArmorPercents,
    magicArmorPercents,
    cooldown,
  } = move;

  const [selected, setSelected] = useState(false);
  const [isCoolingdown, setCoolingdown] = useState(false);
  const [roundCounter, setRoundCounter] = useState(0);

  useEffect(() => {
    if (fight) {
      if (move.cooldown && selected) {
        setCoolingdown(true);
        setRoundCounter((prev) => prev + 1);
      }
      
      if (isCoolingdown) {
        setRoundCounter((prev) => prev + 1);
        if (roundCounter === move.cooldown) {
          setCoolingdown(false);
          setRoundCounter(0);
        }
      }

      setSelected(false);
      setMove(null);
    }
  }, [fight]);

  function handleMoveClick() {
    setMove(move);
    setSelected((prev) => !prev);
  }

  return (
    <ListItem mb={1}>
      <Paper elevation={active ? 8 : 1} sx={{ padding: 1, width: '100%' }}>
        <ListItemButton
          selected={active}
          disabled={isCoolingdown}
          onClick={handleMoveClick}
          sx={{
            mb: 1,
            border: '1px solid grey',
            borderRadius: 2,
            '&.Mui-selected': {
              backgroundColor: 'rgb(255 142 0 / 83%)',
            },
          }}
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
