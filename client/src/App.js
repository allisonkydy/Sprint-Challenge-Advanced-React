import React from 'react';
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
      </div>
    );
  }
}

export default App;
