import React from 'react';
import styled from "styled-components"

const StyledAddButton = styled.button`
  width: 100px;
  height: 100px;
  border: none;
  border-radius: 50%;
  background: #7890E7;
  font-size: xx-large;
  font-weight: 600;
  color: white;
  cursor: pointer;
  margin: auto;
  font-size: 50px;
`;

function AddButton(props) {
  const { onClick } = props;

  return (
    <StyledAddButton onClick={onClick}>
      +
    </StyledAddButton>
  )
}

export default AddButton;