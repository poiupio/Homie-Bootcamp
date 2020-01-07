import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  color: #5c5c5c;
  position: fixed;
  display: grid;
  flex-flow: column;
  width: 100%;
  height: 100px;
  top: 0;
  grid-template-columns: 6% 1% 93%;
  grid-template-rows: 100%;
  background-color: white;
`;

const Line = styled.div`
  border-bottom: solid 1px #c8c8c8;
  border-right: solid 1px #c8c8c8;
  height: 25px;
  align-self: end;
  grid-column-start: 2;
`;

const Day = styled.p`
  font-size: 14px;
  margin: 0px;
`;

const Date = styled.p`
  display: flex;
  flex-flow: column;
  grid-column-start: 3;
  padding-top: 0px;
  padding-left: 28px;
  padding-bottom: 20px;
  height: 63px;
  border-bottom: solid 1px #c8c8c8;
`;

const Number = styled.p`
  font-size: 36px;
  margin: 10px 0px;
  color: #474747;
`;

const GMT = styled.div`
  font-size: 14px;
  align-self: end;
  text-align: center;
  padding-bottom: 5px;
  padding-left: 20px;
`;

const CalendarHeader = () =>{
  return (
    <HeaderContainer>
      <GMT>GMT-06</GMT>
      <Line />
      <Date>
        <Day>
          MIÉ
        </Day>
        <Number>
          8
        </Number>
      </Date>
    </HeaderContainer>
  );
}

export default CalendarHeader;