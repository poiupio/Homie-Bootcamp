import React, { useState, useContext } from 'react';
import styled from 'styled-components';

const OptionSelector = styled.select`
  text-align:center;
  background-color: #e8e8e8;
  color: #666666;
  width: 100px;
  height: 40px;
  padding-left: 0px;
  border: none;
  border-radius: 3px;
`;

const DateField = () => {
  return (
    <OptionSelector>
      <option>semana</option>
      <option>día</option>
      <option>mes</option>
      <option>año</option>
    </OptionSelector>
  );
}  

export default DateField;