import React, { useState, useContext } from 'react';
import styled from 'styled-components';

const CustomButton = (props) => {
  const Button = styled.button`
    border: none;
    background-color: white;
    display: flex;
    color: ${props.color};
    border-radius: 3px;
    font-size: 16px;
    text-align: center;
    background-color: none;
    margin: 5px 0px;
    padding: 0px;
    width: 90px;
    cursor: pointer;
    height: 30px;
  `;

  return (
    <Button>{ props.value }</Button>
  );
}

export default CustomButton;
