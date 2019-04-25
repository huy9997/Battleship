import React, { Component } from 'react';
import styled from 'styled-components'

const ScreenContainer = styled.div`
  width:100vw;
  height:100vh; 
`;
const GeneralScreen = styled(ScreenContainer)`
  display:flex;
  flex-direction:column;
`;
const GameScreen = styled(GeneralScreen)`
  flex:8;
  background-color:purple;
`;
const GameControls = styled(GeneralScreen)`
  flex:2;
  background-color:blue;
`;


const GridContainer =styled.div` 
  display: grid;
  grid-template-columns: repeat(10, 50px);
`;

const CircularButton = styled.button`
  height: 50px;
  width: 50px;
  background-color: #bbb;
  border-radius: 50%;
`

let widthBlocks = [1,2,3,4,5,6,7,8,9,10]; 
let heightBlocks = [1,2,3,4,5,6,7,8,9,10];   
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      player1_Ships:3,
      player1_ShipPositions:[[]],
      player1_Attack:[[]],

      player2_Ships:3,
      player2_ShipPositions:[[]],
      player2_Attack:[],

      gameStart:false,
      player_SetupShips:'',

    }
  }
  buttonPress = e=>{
    this.setState({
      
      
    })
  }
  
  render() {
    

    return (
      <ScreenContainer>
        <GeneralScreen>
        <GameScreen>
          <GridContainer>
          {
            heightBlocks.map(()=> 
              widthBlocks.map(()=> 
              <CircularButton onClick={this.buttonPress}>

              </CircularButton>))
          }
        </GridContainer>
        </GameScreen>
        <GameControls>
        </GameControls>
      </GeneralScreen>
      </ScreenContainer>
      
    );
  }
}

export default App;
