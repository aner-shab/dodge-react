import React, {Component} from 'react';
import Game from './containers/Game.jsx';

class App extends Component {
  render() {
    return (
      <Game boardSize={11} playerSize={25} />
    );
  }
}
export default App;
