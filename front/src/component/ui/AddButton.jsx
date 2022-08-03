import React from 'react';
import styled from "styled-components"

const StyledAddButton = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background: #7890E7;
  font-size: xx-large;
  font-weight: 600;
  color: white;
  cursor: pointer;
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