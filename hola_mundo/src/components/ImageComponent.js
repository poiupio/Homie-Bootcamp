import React, { useState, useContext } from 'react';

const Image = (props) => {
  const url = props.url;
  console.log(url);
  return (
    <img src = {url}/>
  );
}

export default Image;