import React from  'react'
import styled from 'styled-components'

const GameScreen = styled.div`
  width: 100vw;
  height: 100vh;
`;
const GridContainer =styled.div` 
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  background-color: #2196F3;
`;

const SquareBlock = styled(GridContainer)`
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
`;


let widthBlocks = ['a','b','c','d','e','f','g','e','f','g']; 
let heightBlocks = [1,2,3,4,5,6,7,8,9,10];   

let board = ()=>{
  return(
    <GameScreen>
      <GridContainer>
        {heightBlocks.map((items)=> <SquareBlock> {items}</SquareBlock>)}
      </GridContainer>
      
    </GameScreen>
  );
}
export default board