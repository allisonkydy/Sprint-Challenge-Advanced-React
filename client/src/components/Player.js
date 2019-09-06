import React from 'react';

const Player = ({ player }) => {
  return (
    <div>
      <h2>{player.name}</h2>
      <h3>{player.country}</h3>
      <p>Number of searches: {player.searches}</p>
    </div>
  )
}

export default Player;
