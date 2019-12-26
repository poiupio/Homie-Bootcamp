import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';

const TitleContainer = Styled.div`
  height: 100px; 
  width: 50%;
  position: absolute;
  top: 20%;
  left: 19%;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  transform: rotate(15deg);
  padding: 0px;
`;

const Row = Styled.div`
  width: 100%;
`;

const Character = Styled.p`
  color: yellow;
  font-size: 28px;
  font-weight: bolder;
  transform: rotate(-15deg);
  margin: 2px 1px;
`;

const Title = () => {
  useEffect(() => {
    loadTitle();
  }, []);

  const [title, setTitle] = useState([]);
  const titleElements = [];
  const characters = ['T','H','E', '-',
                      'V','A','N','I','S','H','I','N','G', '-',
                      'F','U','T','U','R','I','S','T'];

  const loadTitle = () => {
    characters.forEach(character => {
      if(character !== '-'){
        titleElements.push(<Character>{character}</Character>);
      }else{
        titleElements.push(<Row />);
      }
    });
    setTitle(titleElements);
  }  

  return (
    <TitleContainer>
      {title}
    </TitleContainer>
  );
}

export default Title;