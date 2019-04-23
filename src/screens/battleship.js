import React, { Component } from 'react';
import BattleShipScreen from '../components/BattleShipScreen/';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      player1_Ships:3,
      player1_ShipPositions:[[]],
      player1_Attack:[],

      player2_Ships:3,
      player2_ShipPositions:[[]],
      player2_Attack:[],

      gameStart:false
    }
  }
  render() {
    return (
        <BattleShipScreen>
        </BattleShipScreen>
    );
  }
}

export default App;
