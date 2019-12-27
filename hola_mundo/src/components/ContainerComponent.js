import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import ImageContext from './ImageContext';
import Image from './ImageComponent';

const Container = () => {
  const imageUrl = useContext(ImageContext);
  return (
    <div>
      <Image url={imageUrl.url} />
      <Image url={imageUrl.url} />
      <Image url={imageUrl.url} />
    </div>
  );
}

export default Container;