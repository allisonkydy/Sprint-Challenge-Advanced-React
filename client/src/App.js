import React from 'react';

import Player from './components/Player';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      playerData: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(res => {
        // console.log(res);
        this.setState({ playerData: res });
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <h1>Women's World Cup</h1>
        {this.state.playerData.map(player => {
          return <Player player={player} key={player.id} />
        })}
      </div>
    );
  }
}

export default App;
