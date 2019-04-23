import React from  'react'
import styled from 'styled-components'
import GameBoard from '../gameBoard'

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

let BattleShipScreen = ()=>{
  return(
    <ScreenContainer>
      <GeneralScreen>
        <GameScreen>
          <GameBoard></GameBoard>

        </GameScreen>
        <GameControls>
        </GameControls>
      </GeneralScreen>
    </ScreenContainer>
  );
}
export default BattleShipScreen