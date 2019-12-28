import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import NumberField from './NumberFieldComponent';
import DateField from './DateFieldComponent';
import CircleSelector from './CircleSelectorComponent';
import RadioButton from './RadioButtonComponent';
import InputText from './InputTextComponent';
import CustomButton from './ButtonComponent';

const Container = styled.section`
  display: flex;
  flex-flow: column;
  width: 376px;
  height: 370px; 
  margin: 50px 30%;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

const Title = styled.p`
  color: black;
  font-size: 18px;
  margin: 0;
  font-weight: bolder;
  padding: 10px 10px;
`;

const FieldText = styled(Title)`
  font-size: 14px;
  color: #212121;
  width: auto; 
`;

const RepeatEach = styled.section`
  display: flex;
  flex-flow: row;
  padding-top: 20px;
  margin-bottom: 30px;
`;

const DaysContainer = styled.section`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  margin: 0px 10px 10px;
`;

const StopWhenContainer = styled.section`
  display: flex;
  flex-flow: column;
`;

const StopWhenElement = styled.section`
  display: flex;
  flex-flow: row;
  margin: 0px;
  padding: 0px; 
`;

const ButtonContainer = styled.section `
  margin-top: 0px;
  margin-right: 460px;
  display: flex;
  flex-flow: row-reverse;
`;

const Periodicity = () => {
  return (
    <div>
      <Container> 
        <Title>
          Periodicidad personalizada
        </Title>
        <RepeatEach>
          <FieldText>Repetir cada</FieldText>
          <NumberField/>
          <DateField/>
        </RepeatEach>
        <FieldText>Serepite el</FieldText>
        <DaysContainer>
            <CircleSelector value="D"/>
            <CircleSelector value="L"/>
            <CircleSelector value="M"/>
            <CircleSelector value="X"/>
            <CircleSelector value="J"/>
            <CircleSelector value="V"/>
            <CircleSelector value="S"/>
        </DaysContainer>
        <FieldText>Termina</FieldText>
        <StopWhenContainer>
          <StopWhenElement>
            <RadioButton value='Nunca'/>
          </StopWhenElement>
          <StopWhenElement>
            <RadioButton value='El'/><InputText value='27 de mar de 2020'/>
          </StopWhenElement>
          <StopWhenElement>
            <RadioButton value='Después de '/><InputText value='13 repeticiones' customWidth='180px'/>
          </StopWhenElement>        
        </StopWhenContainer>
      </Container>
      <ButtonContainer>
        <CustomButton value='Listo' color='blue' />
        <CustomButton value='Cancelar' color='gray' />
      </ButtonContainer>
    </div>
  );
}

export default Periodicity;