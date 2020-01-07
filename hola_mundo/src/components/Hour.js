import React, { useState } from 'react';
import styled from 'styled-components';

const HourContainer = styled.div`   
  display: grid;
  color: #5c5c5c;
  font-size: 14px;
  height: 60px;
  grid-template-columns: 6% 1% 93%;
  grid-template-rows: 50% 50%;
`;

const HourElement = styled.div`   
  text-align: center;
  padding: 20px 0px 0px 25px;
  grid-row-start: 1;
  grid-row-end: 3;
`;

const HourNotes = styled.div`   
  border-bottom: solid 1px #c8c8c8;
`;

const HourLineTop = styled.div`
  border-bottom: solid 1px #c8c8c8;
  border-right: solid 1px #c8c8c8;
`;

const HourLineBottom = styled.div`
  border-right: solid 1px #c8c8c8;
  grid-row-start: 2;
`;

const Hour = (props) => {
  const [clicked, click] = useState(false);

  const Note = styled.div`
    display: ${ clicked ? 'flex' : 'none' };
    border-radius: 5px;
    border-bottom: solid 1px #c8c8c8;
    background-color: #24a0ed;
    color: white;
    padding: 4px 0px 0px 20px;
    width: 97%;
    height: 20px;
  `;

  const setNote = () => {
    clicked ? click(false) : click(true);
  }

  return (
    <HourContainer onClick={setNote}>
      <HourElement>{props.value}</HourElement>
      <HourLineTop />
      <HourLineBottom />
      <HourNotes>
        <Note><strong>Meeting.</strong> 10:30 pm</Note>
      </HourNotes>
    </HourContainer>
  );
}

export default Hour;