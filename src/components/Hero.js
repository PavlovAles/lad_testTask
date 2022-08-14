import Move from './Move';
import React from 'react';

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
    <>
      <p>{health}</p>
      <h2>{name}</h2>
      <ul>
        {moves.map((move, index) => (
          <Move key={index} move={move} onMoveClick={handleMoveClick} />
        ))}
      </ul>
    </>
  );
}
