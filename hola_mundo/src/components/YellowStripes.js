import React from 'react';
import Styled from 'styled-components';

const YellowStripesContainer = Styled.div`
  width: 50%;
  height: 20%;
  position: relative;
  left: 0px;
  top: 80%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5%;
  margin: 0px;
  padding: 0px;
`;

const Stripe = Styled.div`
  width: 100%;
  height: fill;
  background-color: #ffc219;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: ${props => props.rowS};
  grid-row-end: ${props => props.rowE};
  filter: saturate(20%);
`;

const YellowStripes = () => {
  return (
    <YellowStripesContainer>
      <Stripe rowS='1' rowE='2' />
      <Stripe rowS='3' rowE='4' />
      <Stripe rowS='5' rowE='6' />
      <Stripe rowS='7' rowE='8' />
      <Stripe rowS='9' rowE='10' />
      <Stripe rowS='11' rowE='12' />
      <Stripe rowS='13' rowE='14' />
      <Stripe rowS='15' rowE='16' />
      <Stripe rowS='17' rowE='18' />
      <Stripe rowS='19' rowE='20' />
    </YellowStripesContainer>
  );
}

export default YellowStripes;
