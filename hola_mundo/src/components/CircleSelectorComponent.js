import React, { useState, useContext } from 'react';
import styled from 'styled-components';

const CircleText = styled.div`
  padding-top: 10px;
  text-align: center;
  width: 100%;
  height: 100%;
`;

const CircleSelector = (props) => {
  const [clicked, click] = useState(false);
  
  const CircleContainer = styled.div`
    display: flex;
    flex-flow: row;
    border-radius: 100px;
    width: 30px;
    height: 30px;
    background-color: ${ clicked ? '#3866c9' : '#e8e8e8' };
    color: ${ clicked ? 'white' : 'gray' };
    margin: 10px 4px;
    font-size: 10px;
    font-weight:bold;
  `;
  
  return (
    <CircleContainer onClick={changeState}>
      <CircleText>{props.value}</CircleText>
    </CircleContainer>
  );

  function changeState(){
    clicked ? click(false) : click(true);
  }
}  

export default CircleSelector;