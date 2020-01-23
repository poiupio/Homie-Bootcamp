import React from 'react';
import styled from 'styled-components';
import ImportantText from './ImportantText';
import Title from './Title';

const StyledContainer = styled.div`
  height: 639px;
  width: 440px;
  display: flex;
  flex-flow: column;
  font-family:  Arial, Helvetica, sans-serif;
  margin: 60px 20%;
  padding: 0;
  border: solid 3px black;
`;

const Separator = styled.div`
  display: flex;
  flex-flow: row;
  padding: 0px;
  margin: 0px;
  width: 100%;
`;

const LeftTrapeze = styled.div`
  height: 400px;
  width: 500px;
  display: flex;
  flex-flow: column;
  clip-path: polygon(0px 0px, 90% -1px, 90% 75%, 0% 100%);
  background-color: #c64a3e;
`;

const RightTrapeze = styled.div`
  height: 400px;
  width: 500px;
  display: flex;
  flex-flow: column;
  align-self: right;
  clip-path: polygon(20px 0px, 100% 0px, 100% 100%, 9.5% 75%);
  background-color: #81be57;
`;

const BottonTrapeze = styled.div`
  height: 700px;
  width: 500px;
  display: flex;
  flex-flow: column;
  margin-top: -60px;
  align-self: bottom;
  padding-bottom: 15px;
  clip-path: polygon(0px 95px, 44.20% -10px, 440px 32%, 88% 100%, 0% 100%);
  background-color: #e3a252;
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: rgb(0, 0, 0, .40);
  position: absolute;
  margin-top: 230px;
  margin-left: 120px;
`;

const BookImg = styled.img`
  width: 150px;
  height: 250px;
  position: absolute;
  margin-top: 198px;
  margin-left: 145px;
`;

const LogoImg = styled.img`
  width: 160px;
  height: 50px;
  position: absolute;
  margin-top: 240px;
  margin-left: 275px;
`;

const WhaterMark = styled.div`
  width: 160px;
  height: 50px;
  position: absolute;
  margin-top: 422px;
  margin-left: 140px;
  color: white;
`;

const Text = styled.p`
  width: 90%;
  height: 100px;
  display: flex;
  flex-wrap: wrap;
  text-align: justify;
  line-height: 15px;
  font-size: 12px;
  margin: 20px auto;
  padding: auto 10px;
`;

const LeftTextContainer = styled.div`
  height: 180px;
  width: 170px;
  margin: 10px 10px;
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
  clip-path: polygon(0px 0px, 102.22% -3px, 101.67% 114.17%, 2.22% 142.92%);
`;

const RightTextContainer = styled.div`
  height: 170px;
  width: 170px;
  align-items: flex-end;
  margin: 10px 10px;
  margin-left: 37px;
  display: flex;
  flex-flow: column;
  flex-wrap: nowrap;
  clip-path: polygon(0px 0px, 102.22% -3px, 101.67% 114.17%, 2.22% 142.92%);
`;

const BottomTextContainer = styled.div`
  height: 100px;
  width: 400px;
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
  position: absolute;
  font-size: 14px;
  text-align: justify;
  margin-top: 110px;
  margin-left: 25px;
`;

const BottomImportantTextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row;
`;

const Container = () => {
  return (
    <StyledContainer>
      <Separator>
        <LeftTrapeze >
          <LeftTextContainer>
            <Title text="Creacionales" />
            <Text>
              Restringen o controlan la
              forma en que creamos los
              objetos, evitando que el
              usuario utilize la instrucción
              new para crear nuevas
              instancias
            </Text>
          </LeftTextContainer>
          <ImportantText
            width="175px"
            height="240px"
            alignment="left"
            margins="-25px 20px 0px 0px"
            elements={[
              "Abstract Factory",
              "Factory Method",
              "Object pool",
              "Singelton",
              "Builder"
            ]}
          />
        </LeftTrapeze>
        <RightTrapeze>
          <RightTextContainer>
            <Title text="Estructurales" />
            <Text>
              Describen cómo los
              objetos y clases se pueden
              combinar para formar
              estructuras mas grandes y
              complejas
            </Text>
          </RightTextContainer> <ImportantText
            width="175px"
            height="240px"
            alignment="right"
            margins="-25px 10px 0px 0px"
            elements={[
              "Decomposite",
              "Decorator",
              "Flyweight",
              "Adapter",
              "Fecade",
              "Bridge",
              "Proxy"
            ]}
          />
        </RightTrapeze>
      </Separator>
      <BottonTrapeze>
        <BottomTextContainer>
          colaboración, relaciones y delegaciones de responsabilidades
          entre otras clases logrando con estro simplificar la forma en
          que los objetos se comunican e interactuan entre sí
       </BottomTextContainer>
        <BottomImportantTextContainer>
          <ImportantText
            width="20%px"
            height="50px"
            alignment="center"
            margins="150px 10px 0px 40px"
            elements={[
              "Identator",
              "Mediator",
              "Memento"
            ]}
          />
          <ImportantText
            width="20%px"
            height="50px"
            alignment="center"
            margins="150px 10px 0px 10px"
            elements={[
              "Template Method",
              "Strategy",
              "Chain of Resp"
            ]}
          />
          <ImportantText
            width="20%px"
            height="50px"
            alignment="center"
            margins="150px 10px 0px 10px"
            elements={[
              "Iterator",
              "Command",
              "Observer"
            ]}
          />
        </BottomImportantTextContainer>
        <Title 
          text="Comportamiento"
          margin="0px 0px 0px 20px"
        /> 
        <LogoImg src="logoOB.png" />
      </BottonTrapeze>
      <Circle />
      <BookImg src="book.png" />
      <WhaterMark>patronesdediseño.com</WhaterMark>
    </StyledContainer>
  );
}
export default Container;