import React from 'react';
import styled from 'styled-components';

const Text = (props) => {
  const Text = styled.p`
    color: ${props.color};
    font-size: ${props.size};
    font-weight: ${props.bold ? 'bold' : 'none'};
    margin: 33px 0px;
  `;

  return <Text>{props.value}</Text>;
}

export default Text;



