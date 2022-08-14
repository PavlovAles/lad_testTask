import { Container } from '@mui/material';
import React from 'react';
import Hero from './Hero';

function App() {
  return (
    <Container sx={{ my:10, display: 'flex', justifyContent:'space-between' }}>
      <Hero
        maxHealth={10}
        name='Лютый'
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
