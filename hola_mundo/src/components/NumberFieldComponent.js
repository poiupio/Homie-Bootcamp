import React, { useState, useContext } from 'react';
import styled from 'styled-components';

const NumberField = () => {
  const [clicked, click] = useState(false);

  const Container = styled.input`
    text-align: center;
    background-color: #e8e8e8;
    border: #e8e8e8;
    color: #666666;
    width: 55px;
    height: 20px;
    padding: 10px;
    border-radius: 3px;
    margin-right: 20px;
    border-bottom: solid 2px ${ clicked ? '#1a6bd6' : '#e8e8e8' };
  `;

  const changeStyle = () => {
    clicked ? click(false) : click(true);
  }

  return (
    <Container onFocus={ changeStyle } type='number'/>    
  );
}  

export default NumberField;