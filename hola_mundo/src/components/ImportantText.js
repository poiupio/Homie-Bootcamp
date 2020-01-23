import React from 'react';
import styled from 'styled-components';

const TextContainer = styled.div`
  width: ${props => props.width ? props.width : "100px"};
  height: ${props => props.height ? props.height : "100px"};
  text-align: ${props => props.alignment ? props.alignment : "left"};
  font-family: 'Permanent Marker', cursive;
  font-weight: bold;
  align-self: center;
  margin: ${props => props.margins};
  line-height: 21px;
`;

const ImportantText = (props) => {
  const elements = props.elements;
  const procesedText = [];

  elements.forEach(element => {
    procesedText.push(element);
    procesedText.push(<br />);
  });

  return (
    <TextContainer 
    width={props.width} 
    height={props.height} 
    alignment={props.alignment}
    margins={props.margins}
    >
      {procesedText}
    </TextContainer>
  );
}

export default ImportantText;