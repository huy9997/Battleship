import React from  'react'
import styled from 'styled-components'

const PlayerContainer= styled.div`
  flex:display;
  flex-direction:row;
`;

const PlayerControllerContainer = styled(PlayerContainer)`
  flex:5;
`;
 

let playerController  = ()=>{
  return( 
    <PlayerContainer>
      <PlayerControllerContainer></PlayerControllerContainer>
      <PlayerControllerContainer></PlayerControllerContainer>
    </PlayerContainer>
  );

}

export default playerController