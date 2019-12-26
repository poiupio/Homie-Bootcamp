import React from 'react';
import Styled from 'styled-components';
import FaceBackground from './FaceBackground';
import FaceImg from './face.png';
import LeftNeckImg from './neck.png';
import Title from './Title';

const GeneralContainer = Styled.div`
  height: 384px;
  width: 512px;
  display: flex;
  overflow: hidden;
  border: solid 3px white;
  font-family: 'Jura', sans-serif;
`;

const BackGround = Styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  background-image: url(${props => props.bgImg});
  filter: blur(5px);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Image = Styled.img`
  position: absolute;
  clip-path: polygon(180px 148px, 49.77% 165px, 
                     50.15% 77.86%, 48.31% 77.55%, 
                     46.51% 76.9%, 44.29% 74.77%, 
                     42.77% 73%, 41.66% 71.59%, 
                     40.6% 69.91%, 39.69% 67.8%, 
                     38.37% 64.87%, 36.92% 60.15%, 
                     35.93% 55.73%, 34.96% 47.01%);
`;

const LeftNeck = Styled.img`
  width: 55px;
  position: absolute;
  top: 252px;
  left: 204px;
`;

const Author = Styled.p`
  width: 90px;
  position: absolute;
  left: 202px;
  top:  290px;
  color: black;
  font-size: 20px;
  font-weight: bolder;
`;

const Container = () => {
  return (
    <GeneralContainer>
      <BackGround bgImg={process.env.PUBLIC_URL + '/face.png'}/>
      <FaceBackground />
      <LeftNeck src={LeftNeckImg} />
      <Image src={FaceImg} />
      <Title />
      <Author>CHARLOTTE HOBSON</Author>
    </GeneralContainer>
  );
}

export default Container;