import React, { useState, useContext } from 'react';
import styled from 'styled-components';

const RadioCircle = styled.input`
  border-radius: 100px;
  text-align: center;
  width: 30px;
  height: 20px;
`;

const CircleContainer = styled.div`
  display: flex;
  width:130px;
  flex-flow:row;
  align-items: center;
  margin: 10px 4px;
  font-size: 16px;
`;

const RadioButton = (props) => {
  const [clicked, click] = useState(false);
  
  
  return (
    <CircleContainer onClick={changeState}>
      <RadioCircle type='radio' name='repeat'></RadioCircle>{props.value}
    </CircleContainer>
  );

  function changeState(){
    clicked ? click(false) : click(true);
  }
}  

export default RadioButton;