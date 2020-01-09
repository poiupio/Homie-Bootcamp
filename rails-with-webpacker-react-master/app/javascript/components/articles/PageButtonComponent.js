import React  from 'react';
import styled from "styled-components"

const PageButton = (props) => {
  const PageButton = styled.button`
    background-color: ${props.selected ? "blue" : "white" };
    margin: auto 10px;
    width: 80px;
    height: 35px;
    border-radius: 5px;
    border: solid 1px blue;
  `;

  return (
    <PageButton onClick={props.changePage(props.value)}>
      {props.value}
    </PageButton>
  );
}

export default PageButton;