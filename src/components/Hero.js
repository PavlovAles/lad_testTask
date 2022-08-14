import Move from './Move';
import React, { useEffect } from 'react';
import { List, Typography } from '@mui/material';
import HealthLine from './HealthLine';
import { Box } from '@mui/system';

export default function Hero({ maxHealth, name, imageName, fight, dmg, setMove, moves }) {
  const [health, setHealth] = React.useState(maxHealth);

  useEffect(() => {
    setHealth(prev => prev + dmg)
  }, [dmg])

  return (
    <Box sx={{ display: 'flex', gap:'30px', flexDirection:`${name === 'Евстафий' && 'row-reverse'}`}}>
      <Box sx={{width:'150px'}}>
        <Typography variant='h4' component='h2' textAlign='center'>
          {name}
        </Typography>
        <img
          alt={name}
          src={require(`../images/${imageName}.png`)}
          style={{ width: '124px' }}
        />
        <HealthLine health={health} />
      </Box>
      <List component='ul'>
        {moves.map((move, index) => (
          <Move key={index} move={move} setMove={setMove} fight={fight} />
        ))}
      </List>
    </Box>
  );
}
