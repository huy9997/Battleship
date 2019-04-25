import React from  'react'
import styled from 'styled-components'

const PlayerContainer= styled.div`
  flex:display;
  flex-direction:row;
`;

const Controls = styled(PlayerContainer)`
  background-color: black;
  width:100%;
  height:100%;
`;
 

let playerController  = ()=>{
  return( 
    <PlayerContainer>
      <Controls></Controls>
    </PlayerContainer>
  );

}

export default playerController