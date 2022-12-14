import { ListItem, ListItemButton, Paper, Typography } from '@mui/material';
import LoopIcon from '@mui/icons-material/Loop';
import HardwareIcon from '@mui/icons-material/Hardware';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

export default function Move({ move, onMoveClick, gameStatus }) {
  const {
    name,
    physicalDmg,
    magicDmg,
    physicArmorPercents,
    magicArmorPercents,
    cooldown,
    cooldownCounter,
    active,
    avaliable
  } = move;

  return (
    <ListItem mb={1}>
      <Paper elevation={active ? 8 : 1} sx={{ padding: 1, width: '100%' }}>
        <ListItemButton
          selected={active}
          disabled={!avaliable || !gameStatus.start}
          onClick={() => onMoveClick(move)}
          sx={{
            mb: 1,
            border: '1px solid grey',
            borderRadius: 2,
            '&.Mui-selected, &.Mui-selected:hover': {
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
        {!cooldown ? '' : <Typography variant='body2'>
          <LoopIcon sx={{ verticalAlign: 'middle' }} />
          {` Заряд: ${(cooldownCounter === 0) ? cooldown : cooldownCounter - 1} из ${cooldown}`}
        </Typography>}
      </Paper>
    </ListItem>
  );
}
