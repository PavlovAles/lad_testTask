import Move from './Move';
import React from 'react';
import { List, Paper, Typography } from '@mui/material';
import HealthLine from './HealthLine';

export default function Hero({ maxHealth, name, moves }) {
  const [health, setHealth] = React.useState(maxHealth);

  function handleMoveClick(myMoove, hisMove) {
    let magicDamage =
      myMoove.magicArmorPercents - hisMove.magicDmg < 0
        ? myMoove.magicArmorPercents - hisMove.magicDmg
        : 0;
    let physicalDamage =
      myMoove.physicArmorPercents - hisMove.physicalDmg < 0
        ? myMoove.physicArmorPercents - hisMove.physicalDmg
        : 0;

    setHealth(health - magicDamage - physicalDamage);
  }

  return (
    <Paper variant='outlined' elevation={0} sx={{ p: 1 }}>
      <HealthLine health={health} />
      <Typography variant='h4' component='h2' textAlign='center'>
        {name}
      </Typography>
      <List component='ul'>
        {moves.map((move, index) => (
          <Move key={index} move={move} onMoveClick={handleMoveClick} />
        ))}
      </List>
    </Paper>
  );
}
