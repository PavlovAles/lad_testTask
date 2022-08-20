import { Box, Button, Paper, Typography } from "@mui/material";
import swordsPath from '../images/swords.png'
export default function CentralBlock({gameStatus, onDifficultClick}) {
  return (
    <Box
      sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 3 }}
    >
      <Paper p={2}>
        <Typography variant='h4' component='h3' textAlign='center'>
          {(!gameStatus.start && !gameStatus.end && 'Выбери сложность') ||
            (!gameStatus.end && !gameStatus.fight && 'Твой ход') ||
            (gameStatus.fight && 'Бдышщ') ||
            (gameStatus.end && `${gameStatus.looser} повержен! Ещё раз?`)}
        </Typography>
      </Paper>
      {(!gameStatus.start || gameStatus.end) && (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Button variant='outlined' onClick={() => onDifficultClick(25)}>
            Легкий
          </Button>
          <Button variant='outlined' onClick={() => onDifficultClick(18)}>
            Норм
          </Button>
          <Button variant='outlined' onClick={() => onDifficultClick(12)}>
            Дес матч
          </Button>
        </Box>
      )}
      {gameStatus.fight && <img src={swordsPath} style={{width: '100%'}} />}
    </Box>
  );
}
