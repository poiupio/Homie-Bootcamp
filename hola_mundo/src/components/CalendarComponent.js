import React, { useState } from 'react';
import styled from 'styled-components';
import Hour from './Hour'
import CalendarHeader from './HeaderComponent';

const Container = styled.div`
  width: 100%;
  height: auto;
  font-family: Roboto,Arial,sans-serif;
`;

const HoursContainer = styled.div`
  margin-top: 100px;
`;

const Calendar = () => {
  let hours = [];
  let hour = "";

  for (let i = 1; i < 25; ++i) {
    (i < 13) ? hour = `${i} am` : hour = `${i -12} pm` 
    hours.push(<Hour value={hour} />)
  }

  return (
    <Container> 
      <CalendarHeader />
      <HoursContainer>
        {hours}
      </HoursContainer>
    </Container>
  );
}  

export default Calendar;