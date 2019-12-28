import React, { useState, useContext } from 'react';
import styled from 'styled-components';

const OptionSelector = styled.div`
  text-align: center;
  display: flex;
  background-color: #e8e8e8;
  color: #3b3b3b;
  width: 100px;
  height: 40px;
  padding-left: 0px;
  border: none;
  border-radius: 3px;
`;

const OptionButton = styled.div`
  text-align: center;
  width: 100%;
  margin-top: 10px;
`;

const DateField = () => {
  const [clicked, click] = useState(false);
  const [optionSelected, setOptionSelected] = useState('semana');

  const OptionsContainer = styled.div`
    display: ${clicked ? 'inline-block' : 'none'};
    position: absolute;
    background-color: #f1f1f1;
    min-width: 90px;
    top: 60px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.5);
    width: 100px;
  `;

  const OptionElement = styled.div`
    padding-top: 10px;
    height: 40px;
    &:hover {
      background-color: #ddd;
    }
  `;

  const showOptions = () => {
    clicked ? click(false) : click(true);
  }

  const chooseOption = (event) => {
    setOptionSelected(event.target.innerText);
  }

  return (
    <OptionSelector onClick={showOptions}>
      <OptionButton>{optionSelected} ▼</OptionButton>
      <OptionsContainer>
        <OptionElement onClick={chooseOption}>día</OptionElement>
        <OptionElement onClick={chooseOption}>semana</OptionElement>
        <OptionElement onClick={chooseOption}>mes</OptionElement>
        <OptionElement onClick={chooseOption}>año</OptionElement>
      </OptionsContainer>
    </OptionSelector>
  );
}  

export default DateField;