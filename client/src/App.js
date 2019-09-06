import React from 'react';

import Player from './components/Player';
import Search from './components/Search';
import Graph from './components/Graph';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      playerData: [],
      players: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(res => {
        this.setState({ playerData: res });
      })
      .catch(err => console.log(err))
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.playerData !== prevState.playerData) {
      this.setState({ players: this.state.playerData })
    }
  }

  filterPlayers = (input) => {
    let playersCopy = [...this.state.playerData];
    let filtered = playersCopy.filter(player => player.country.toLowerCase() === input.toLowerCase());
    this.setState({ players: filtered })
  }

  resetPlayers = () => {
    if (this.state.playerData !== this.state.players) {
      this.setState({ players: [...this.state.playerData]})
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Women's World Cup</h1>
        <Graph players={this.state.players} />
        <Search filterPlayers={this.filterPlayers} />
        <button onClick={() => this.resetPlayers()}>Clear Search</button>
        {this.state.players.map(player => {
          return <Player player={player} key={player.id} />
        })}
      </div>
    );
  }
}

export default App;
