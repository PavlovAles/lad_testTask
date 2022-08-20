import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import React from 'react';
import Character from './Character';
import CentralBlock from './CentralBlock';

function App() {
  const monsterMovesProps = [
    {
      name: 'Удар когтистой лапой',
      physicalDmg: 3,
      magicDmg: 0,
      physicArmorPercents: 20,
      magicArmorPercents: 20,
      cooldown: 0,
      cooldownCounter: 0,
      active: false,
      avaliable: true,
    },
    {
      name: 'Огненное дыхание',
      physicalDmg: 0,
      magicDmg: 4,
      physicArmorPercents: 0,
      magicArmorPercents: 0,
      cooldown: 3,
      cooldownCounter: 0,
      active: false,
      avaliable: true,
    },
    {
      name: 'Удар хвостом',
      physicalDmg: 2,
      magicDmg: 0,
      physicArmorPercents: 50,
      magicArmorPercents: 0,
      cooldown: 2,
      cooldownCounter: 0,
      active: false,
      avaliable: true,
    },
  ];

  const heroMovesProps = [
    {
      name: 'Удар боевым кадилом',
      physicalDmg: 2,
      magicDmg: 0,
      physicArmorPercents: 0,
      magicArmorPercents: 50,
      cooldown: 0,
      cooldownCounter: 0,
      active: false,
      avaliable: true,
    },
    {
      name: 'Вертушка левой пяткой',
      physicalDmg: 4,
      magicDmg: 0,
      physicArmorPercents: 0,
      magicArmorPercents: 0,
      cooldown: 4,
      cooldownCounter: 0,
      active: false,
      avaliable: true,
    },
    {
      name: 'Каноничный фаербол',
      physicalDmg: 0,
      magicDmg: 5,
      physicArmorPercents: 0,
      magicArmorPercents: 0,
      cooldown: 3,
      cooldownCounter: 0,
      active: false,
      avaliable: true,
    },
    {
      name: 'Магический блок',
      physicalDmg: 0,
      magicDmg: 0,
      physicArmorPercents: 100,
      magicArmorPercents: 100,
      cooldown: 4,
      cooldownCounter: 0,
      active: false,
      avaliable: true,
    },
  ];

  const [monsterHealth, setMonsterHealth] = React.useState(10);
  const [monsterMove, setMonsterMove] = useState(null);
  const [monsterMoveList, setMonsterMoveList] =
    React.useState(monsterMovesProps);

  const [heroMaxHealth, setHeroMaxHealth] = useState(1);
  const [heroHealth, setHeroHealth] = React.useState(1);
  const [heroMove, setHeroMove] = useState(null);
  const [heroMoveList, setHeroMoveList] = React.useState(heroMovesProps);

  const [gameStatus, setGameStatus] = useState({
    start: false,
    fight: false,
    end: false,
    looser: '',
  });

  function calcDamage(myMoove, hisMove) {
    let magicDmg =
      myMoove.magicArmorPercents - hisMove.magicDmg < 0
        ? myMoove.magicArmorPercents - hisMove.magicDmg
        : 0;
    let physicalDmg =
      myMoove.physicArmorPercents - hisMove.physicalDmg < 0
        ? myMoove.physicArmorPercents - hisMove.physicalDmg
        : 0;
    return magicDmg + physicalDmg;
  }

  function resetFightWithDelay() {
    setTimeout(() => {
      setGameStatus((prev) => ({ ...prev, fight: false }));

      let moves = monsterMoveList.map((move) => ({
        ...updateMoveStatus(move),
      }));
      setMonsterMoveList(moves);
      setMonsterMove(null);

      moves = heroMoveList.map((move) => ({ ...updateMoveStatus(move) }));
      setHeroMoveList(moves);
      setHeroMove(null);
    }, 1000);
  }

  useEffect(() => {
    if (gameStatus.start && !monsterMove) {
      makeMonsterMove();
    }

    if (gameStatus.fight && !gameStatus.end) {
      const newMonsterHealth =
        monsterHealth + calcDamage(monsterMove, heroMove);
      const newHeroHealth = heroHealth + calcDamage(heroMove, monsterMove);

      setMonsterHealth(newMonsterHealth);
      setHeroHealth(newHeroHealth);

      if (newMonsterHealth <= 0 || newHeroHealth <= 0) {
        setHeroMoveList(heroMovesProps);
        setMonsterMoveList(monsterMovesProps);

        setGameStatus({
          start: false,
          fight: false,
          end: true,
          looser:
            newHeroHealth <= 0 && newMonsterHealth <= 0
              ? 'Мир'
              : newHeroHealth <= 0
              ? 'Евстафий'
              : 'Лютый',
        });
        return;
      }
      resetFightWithDelay();
    }
  }, [gameStatus]);

  function updateMoveStatus(move) {
    if (move.active) {
      if (move.cooldown) {
        move.avaliable = false;
      }
      move.active = false;
    }
    if (!move.avaliable) {
      move.cooldownCounter++;
      if (move.cooldownCounter > move.cooldown) {
        move.avaliable = true;
        move.cooldownCounter = 0;
      }
    }
    return move;
  }

  function makeMonsterMove() {
    setTimeout(() => {
      const avaliableMoves = monsterMoveList.filter((a) => a.avaliable);
      const randomMove =
        avaliableMoves[(avaliableMoves.length * Math.random()) << 0];
      setMonsterMoveList(
        monsterMoveList.map((move) => {
          if (move.name === randomMove.name) move.active = true;
          return { ...move };
        })
      );
      setMonsterMove(randomMove);
    }, 1000);
  }

  function makeHeroMove(heroMove) {
    if (gameStatus.fight) return;
    
    const moves = heroMoveList.map((move) => {
      if (move.name === heroMove.name) move.active = true;
      return { ...move };
    });
    setHeroMoveList(moves);
    setHeroMove(heroMove);
    setGameStatus((prev) => ({ ...prev, fight: true }));
  }

  function handleDifficultyClick(heroMaxHealth) {
    setHeroMaxHealth(heroMaxHealth);
    setHeroHealth(heroMaxHealth);
    setMonsterHealth(10);
    setHeroMove(null);
    setHeroMoveList(heroMovesProps);
    setMonsterMove(null);
    setMonsterMoveList(monsterMovesProps);
    setGameStatus({ start: true, fight: false, end: false, looser: '' });
  }

  return (
    <Container
      sx={{ my: 10, display: 'flex', justifyContent: 'space-between' }}
    >
      <Character
        maxHealth={10}
        health={monsterHealth}
        name='Лютый'
        imageName='dragon'
        moves={monsterMoveList}
        onMoveClick={() => {}}
        gameStatus={gameStatus}
      />
      <CentralBlock
        gameStatus={gameStatus}
        onDifficultClick={handleDifficultyClick}
      />
      <Character
        maxHealth={heroMaxHealth}
        health={heroHealth}
        name='Евстафий'
        imageName='wizard'
        moves={heroMoveList}
        onMoveClick={makeHeroMove}
        gameStatus={gameStatus}
      />
    </Container>
  );
}

export default App;
