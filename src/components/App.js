import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import React from 'react';
import Hero from './Hero';

function App() {
  const [heroMove, setHeroMove] = useState(null);
  const [monsterMove, setMonsterMove] = useState(null);
  const [heroDmg, setHeroDmg] = useState(0);
  const [monsterDmg, setMonsterDmg] = useState(0);
  const [fight, setFight] = useState(false);

  useEffect(() => {
    if (heroMove && monsterMove) {
      setFight(true);
      setHeroDmg(calcDamage(heroMove, monsterMove));
      setMonsterDmg(calcDamage(monsterMove, heroMove));
    } else {
      setFight(false);
      setHeroDmg(0);
      setMonsterDmg(0);
    }
  }, [heroMove, monsterMove])

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

  return (
    <Container sx={{ my:10, display: 'flex', justifyContent:'space-between' }}>
      <Hero
        maxHealth={10}
        name='Лютый'
        imageName='dragon'
        fight={fight}
        dmg={monsterDmg}
        setMove={setMonsterMove}
        moves={[
          {
            name: 'Удар когтистой лапой',
            physicalDmg: 3,
            magicDmg: 0,
            physicArmorPercents: 20,
            magicArmorPercents: 20,
            cooldown: 0,
          },
          {
            name: 'Огненное дыхание',
            physicalDmg: 0,
            magicDmg: 4,
            physicArmorPercents: 0,
            magicArmorPercents: 0,
            cooldown: 3,
          },
          {
            name: 'Удар хвостом',
            physicalDmg: 2,
            magicDmg: 0,
            physicArmorPercents: 50,
            magicArmorPercents: 0,
            cooldown: 2,
          },
        ]}
      />
      <Hero
        maxHealth={10}
        name='Евстафий'
        imageName='wizard'
        fight={fight}
        dmg={heroDmg}
        setMove={setHeroMove}
        moves={[
          {
            name: 'Удар боевым кадилом',
            physicalDmg: 2,
            magicDmg: 0,
            physicArmorPercents: 0,
            magicArmorPercents: 50,
            cooldown: 0,
          },
          {
            name: 'Вертушка левой пяткой',
            physicalDmg: 4,
            magicDmg: 0,
            physicArmorPercents: 0,
            magicArmorPercents: 0,
            cooldown: 4,
          },
          {
            name: 'Каноничный фаербол',
            physicalDmg: 0,
            magicDmg: 5,
            physicArmorPercents: 0,
            magicArmorPercents: 0,
            cooldown: 3,
          },
          {
            name: 'Магический блок',
            physicalDmg: 0,
            magicDmg: 0,
            physicArmorPercents: 100,
            magicArmorPercents: 100,
            cooldown: 4,
          },
        ]}
      />
    </Container>
  );
}

export default App;
