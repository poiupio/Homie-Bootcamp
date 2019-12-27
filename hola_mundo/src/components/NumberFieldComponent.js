import React, { useState, useContext } from 'react';
import styled from 'styled-components';

const Container = styled.input`
  text-align:center;
  background-color: #e8e8e8;
  color: #666666;
  width: 55px;
  height: 20px;
  padding: 10px;
  border: none;
  border-radius: 3px;
  margin-right: 20px;
`;

const NumberField = () => {
  return (
    <Container type='number'/>    
  );
}  

export default NumberField;