import React from 'react';
import styled from 'styled-components';
import Text from './TextComponent'
import GroupRadio from './GroupRadioComponent';

const Container = () => {
  const StyledContainer = styled.div`
    font-family: Roboto,Arial,sans-serif;
    display: flex;
    flex-flow: row;
    height: 480px;
    width: 800px;
    margin: 60px 20%;
    padding: 0;
    text-align:left;
  `;

  const TextContainer = styled.div`
    width: 40%;
    height: auto;
    padding: 50px 0px 0px 0px;
  `;

  const GroupContainer = styled.div`
    border: solid 1px #8D7AFF;
    padding: 50px 0px 0px 60px;
    width: 60%;
    height: auto;
  `;

  return (
    <StyledContainer>
      <TextContainer>
        <Text color="#8D7AFF" size="18px" value='Identidad' />
        <Text color="#8D7AFF" size="18px" value='Propietario' />
        <Text color="#8D7AFF" size="22px" value='Características básicas' bold/>
        <Text color="#696969" size="18px" value='Espacios' />
        <Text color="#696969" size="18px" value='Fotos y anuncio' />
        <Text color="#696969" size="18px" value='Precio' />
        <Text color="#696969" size="18px" value='Disponibilidad' />
      </TextContainer>
      <GroupContainer>
        <Text color="#696969" size="20px" value='Tipo de propiedad' />
        <GroupRadio value='Departamento' />
        <GroupRadio value='Estudio' />
        <GroupRadio value='Loft' />
        <GroupRadio value='Casa' />
        <GroupRadio value='Duplex' />
      </GroupContainer>
    </StyledContainer>
  );
}

export default Container;