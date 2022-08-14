import React from 'react';

export default function Move({ move }) {
  const {physicalDmg, magicDmg, physicArmorPercents, magicArmorPercents} = move;
  const [cooldown, setCooldown] = React.useState(move.cooldown)
  return (
    <>
      <h3>{move.name}</h3>
      <p>{`Урон: ${physicalDmg}/${magicDmg}`}</p>
      <p>{`Защита: ${physicArmorPercents}/${magicArmorPercents}`}</p>
      <p>{`Cooldown: ${cooldown}`}</p>
    </>
  );
}
