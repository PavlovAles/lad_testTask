import MonsterMove from './MonsterMove';
import React, { useEffect } from 'react';
import { List, Typography } from '@mui/material';
import HealthLine from './HealthLine';
import { Box } from '@mui/system';

export default function Monster({
  maxHealth,
  name,
  imageName,
  dmg,
  gameStatus,
  setGameStatus,
  setMove,
  moves,
}) {
  const [health, setHealth] = React.useState(maxHealth);
  const [movesStatus, setMovesStatus] = React.useState(
    moves.reduce(
      (acc, move) => ({
        ...acc,
        [move.name]: { avaliable: true, active: false },
      }),
      {}
    )
  );

  useEffect(() => {
    setHealth((prev) => prev + dmg);
    if (health <= 0) {
      gameStatus.end = true;
      gameStatus.winner = name;
      setGameStatus({ ...gameStatus });
    }
  }, [dmg]);

  function makeRandomMove() {
    let avaliableMoves = Object.keys(movesStatus);
    avaliableMoves = avaliableMoves.filter((key) => movesStatus[key].avaliable);
    movesStatus[
      avaliableMoves[(avaliableMoves.length * Math.random()) << 0]
    ].active = true;
    setMovesStatus(movesStatus);
  }

  function updateMoveStatus(name, avaliable) {
    movesStatus[name].avaliable = avaliable;
    movesStatus[name].active = false;
    setMovesStatus({ ...movesStatus });
  }

  useEffect(() => {
    if (!gameStatus.fight) {
      makeRandomMove();
    }
  }, [gameStatus.fight]);

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '30px',
        flexDirection: `${name === 'Евстафий' && 'row-reverse'}`,
      }}
    >
      <Box sx={{ width: '150px' }}>
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
          <MonsterMove
            key={index}
            move={move}
            fight={gameStatus.fight}
            active={movesStatus[move.name].active}
            updateMoveStatus={updateMoveStatus}
            setMove={setMove}
          />
        ))}
      </List>
    </Box>
  );
}
