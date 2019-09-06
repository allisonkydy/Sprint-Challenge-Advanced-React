import React from 'react';

const Player = ({ player }) => {
  return (
    <div>
      <h2 data-testid="player-name">{player.name}</h2>
      <h3 data-testid="player-country">{player.country}</h3>
      <p>Number of searches: {player.searches}</p>
    </div>
  )
}

export default Player;
