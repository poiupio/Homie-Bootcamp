import React, { useState, useContext } from 'react';
import styled from 'styled-components';

const RadioCircle = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: white;
  height: 22px;
  width: 22px;
  appearance: none;
  position: relative;
  border: solid 2px #1a6bd6;
  border-radius: 100px;
  margin-right: 7px;
  margin-bottom: 5px;
  cursor: pointer;     
  &:checked::before {
    position: absolute;
    left: -2px;
    top: -10px;
    color: #1a73e8;
    border-radius: 100px;
    content: '•';
    font: 40px/1 'Open Sans', sans-serif;
  }
`;

const CircleContainer = styled.div`
  display: flex;
  width: 130px;
  flex-flow: row;
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