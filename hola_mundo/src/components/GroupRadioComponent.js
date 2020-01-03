import React, { useState, useContext } from 'react';
import styled from 'styled-components';

const GroupRadio = (props) => {
  const StyledText = styled.div`
    cursor: pointer;
    color: #363636;
    border: solid 1px #c9c9c9;
    width: 350px;
    height: 30px;
    margin: 10px 0px;
    padding: 12px 0 0 20px;
  `;

  const GroupElement = styled.input`
    visibility:hidden;
    position: absolute;
    &:checked + ${ StyledText } {
      background-color: #8D7AFF;
      color: white;
      font-weight:bold;
    }
  `;

  return (
    <label>
      <GroupElement type='radio' name='group-element' />
      <StyledText>{props.value}</StyledText>
    </label>
  );
}

export default GroupRadio;