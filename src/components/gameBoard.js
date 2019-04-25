import React from  'react'
import styled from 'styled-components'

const GameScreen = styled.div`
 width:100vw;
 height:100vh;
`;
const GridContainer =styled.div` 
  display: grid;
  grid-template-columns: repeat(10, 1fr);
`;

const CircleBlock =styled(GridContainer)`
  height: 40px;
  width: 40px;
  background-color: #bbb;
  border-radius: 50%;
`;


let widthBlocks = [1,2,3,4,5,6,7,8,9,10]; 
let heightBlocks = [1,2,3,4,5,6,7,8,9,10];   

let gameBoard = ()=>{
  return(
    <GameScreen>
      <GridContainer>
        {
          heightBlocks.map((itemHeight)=> 
            widthBlocks.map((itemWidth)=> 
            <CircleBlock> {itemHeight}{itemWidth}</CircleBlock>))
        }
      </GridContainer>
      
    </GameScreen>
  );
}
export default gameBoard