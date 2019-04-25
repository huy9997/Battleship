import React from  'react'
import styled from 'styled-components'
import GameBoard from '../gameBoard'
import PlayController from '../playerController'

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
`;
const GameControls = styled(GeneralScreen)`
  flex:2;
`;

let BattleShipScreen = (props)=>{
  return(
    <ScreenContainer>
      <GeneralScreen>
        <GameScreen>
          <GameBoard></GameBoard>
          
        </GameScreen>
        <GameControls>
          <PlayController></PlayController>
        </GameControls>
      </GeneralScreen>
    </ScreenContainer>
  );
}
export default BattleShipScreen