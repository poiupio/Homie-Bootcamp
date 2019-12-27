import React, { useState, useContext } from 'react';
import styled from 'styled-components';

const TextContainer = styled.p`
  display: flex;
  width: 150px;
  height: 20px;
  padding: 10px 0px 10px 10px;
  color: #c4c4c4;
  border-radius: 3px;
  font-size:16px;
  text-align:center;
  background-color: #e8e8e8;
  margin: 5px;
`;

const InputText = (props) => {
  return (
    <TextContainer>{props.value}</TextContainer>
  );
}

export default InputText;