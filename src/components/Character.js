import Move from './Move';
import { List, Typography } from '@mui/material';
import HealthLine from './HealthLine';
import { Box } from '@mui/system';

export default function Character({
  maxHealth,
  health,
  name,
  imageName,
  moves,
  onMoveClick,
  gameStatus,
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '30px',
        flexShrink: 0,
        flexDirection: `${name === 'Евстафий' && 'row-reverse'}`,
      }}
    >
      <Box
        sx={{
          width: '150px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Typography variant='h4' component='h2'>
          {name}
        </Typography>
        <img
          alt={name}
          src={require(`../images/${imageName}.png`)}
          style={{ width: '124px' }}
        />
        {(gameStatus.start || gameStatus.end) && (
          <HealthLine maxHealth={maxHealth} health={health} />
        )}
      </Box>
      <List component='ul'>
        {moves.map((move, index) => (
          <Move
            key={index}
            move={move}
            onMoveClick={onMoveClick}
            gameStatus={gameStatus}
          />
        ))}
      </List>
    </Box>
  );
}
