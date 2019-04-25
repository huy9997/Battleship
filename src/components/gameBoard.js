import React from  'react'
import styled from 'styled-components'

const GameScreen = styled.div`

`;
const GridContainer =styled.div` 
  display: grid;
  grid-template-columns: repeat(9, 1fr);
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

let gameBoard = ()=>{
  return(
    <GameScreen>
      <GridContainer>
        {
          heightBlocks.map((itemHeight)=> 
            widthBlocks.map((itemWidth)=> 
            <SquareBlock> {itemHeight}{itemWidth}</SquareBlock>))
        }
      </GridContainer>
      
    </GameScreen>
  );
}
export default gameBoard