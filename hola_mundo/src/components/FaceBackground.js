import React from 'react';
import Styled from 'styled-components';
import YellowStripes from './YellowStripes';
import NoiseImg from './noise.png';

const Container = Styled.div`
  width: 216px;
  height: 347px;
  position: absolute;
  left: 150px;
  top: 25px;
  overflow: hidden;
  background: rgb(252,176,69);
  background: linear-gradient(0deg, rgba(252,176,69,1) 15%, rgba(253,29,29,1) 57%, rgba(253,29,29,1) 67%, rgba(252,176,69,1) 99%); 
  filter: saturate(500%);
`;

const GreenBox = Styled.div`
  width: 50%;
  height: 50%;
  position: absolute;
  background: rgb(14,73,20);
  background: radial-gradient(circle, rgba(14,73,20,1) 0%, rgba(37,66,42,1) 100%); 
`;

const BlueBox = Styled.div`
  width: 50%;
  height: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  background: rgb(201,232,232);
  background: linear-gradient(0deg, rgba(201,232,232,1) 0%, rgba(87,139,157,1) 46%, rgba(23,124,181,1) 100%);  
  filter: saturate(20%);
`;

const YellowDot = Styled.div`
  height: ${props => props.size};
  width: ${props => props.size};
  border-radius: 50%;
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  background-color: #ffc219;
`;

const BlueCircle = Styled.div`
  height: 90px;
  width: 80%;
  border-radius: 50%;
  position: absolute;
  top: -65px;
  left: 10%;
  background: rgb(14,78,115);
  background: linear-gradient(0deg, rgba(14,78,115,1) 4%, rgba(62,124,144,1) 35%, rgba(53,86,97,1) 80%);  
  filter: saturate(50%);
`;

const BlackCircle = Styled.div`
  width: 240px;
  height: 220px;
  position: absolute;
  left:  -10px;
  top: 25px;
  background-color: black;
  border-radius: 50%;
`;

const LeftSemicircle = Styled.div`
  width: 51%;
  height: 25%;
  position: absolute;
  right:  50%;
  bottom: 0px;
  background: rgb(151,177,191);
  background: linear-gradient(0deg, rgba(151,177,191,1) 0%, rgba(62,124,144,1) 15%, rgba(53,86,97,1) 80%);   filter: saturate(50%);
  border-radius: 100% 0px 0px 0px;
`;

const RightSemicircle = Styled.div`
  width: 51%;
  height: 25%;
  position: absolute;
  left:  50%;
  bottom: 0px;
  background: rgb(26,66,22);
  background: linear-gradient(25deg, rgba(26,66,22,1) 15%, rgba(27,50,28,1) 92%); 
  border-radius: 0px 100% 0px 0px;
`;

const RightNeck = Styled.div`
  width: 25%;
  height: 35%;
  position: absolute;
  left:  50%;
  bottom: 0px;
  background: rgb(26,66,22);
  background: linear-gradient(25deg, rgba(26,66,22,1) 25%, rgba(27,50,28,1) 92%); 
`;

const LeftNeck = Styled.div`
  width: 25%;
  height: 40%;
  position: absolute;
  right:  50%;
  bottom: 0px;
  background: rgb(234,215,174);
  background: linear-gradient(13deg, 
                              rgba(234,215,174,1) 21%, 
                              rgba(148,136,110,1) 66%, 
                              rgba(131,120,97,1) 80%, 
                              rgba(84,77,62,1) 92%, 
                              rgba(0,0,0,1) 100%); 
`;

const RightFace = Styled.div`
  width: 70%;
  height: 68.5%;
  position: absolute;
  top:  38px;
  left: 16%;
  background: rgb(253,29,29);
  background: linear-gradient(90deg, rgba(253,29,29,1) 31%, rgba(252,176,69,1) 85%); 
  clip-path: polygon(0px 89px, 105.21% 127px, 107.2% 102.93%, 47.62% 107.42%);
  border-radius: 50%;
`;

const NoiseFilter = Styled.img`
  width: 100%;
  height:100%;
  position: absolute;
  top: 0px;
  left: 0px;
  border: none;
  opacity: 0.035;
  clip-path: ${props => props.poligon};
`;

const FaceBackground = () => {
  return (
    <Container>
      <GreenBox />
      <BlueBox />
      <YellowStripes />
      <BlueCircle />
      <YellowDot top='20px' left='87%' size='12px' />
      <YellowDot top='73%' left='25px' size='8px' />
      <LeftSemicircle />
      <RightSemicircle />
      <RightNeck />
      <LeftNeck />
      <YellowDot top='92%' left='86%' size='5px' />
      <NoiseFilter src={NoiseImg} />
      <BlackCircle />
      <RightFace />    
      <NoiseFilter src={NoiseImg} />
    </Container>
  );
}

export default FaceBackground;