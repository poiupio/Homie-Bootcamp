import React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.div`
  width: 150px;
  height: 25px;
  font-size: 12px;
  text-align: center;
  padding-top: 13px;
  margin: ${props => props.margin ? props.margin : "0px"};
  background-color: rgb(0, 0, 0, .40);
  color: white;
  font-weight: bold;
  border-radius: 7px;
`;

const Title = (props) => {
  return (
    <TitleContainer margin={props.margin}>
      {props.text}
    </TitleContainer>
  );
}

export default Title;