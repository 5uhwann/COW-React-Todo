import React from 'react';
import styled from 'styled-components';

const StyledDeleteButton = styled.button`
  border: none;
  font-size: 5px;
  font-weight: 300;
  cursor: pointer;
  background: transparent;
  color: gray;
  :hover{
    color:black;
    font-weight: 600;
  }
`;

function DeleteButton(props) {
  const { onClick } = props;

  return (
    <StyledDeleteButton onClick={onClick}>
      x
    </StyledDeleteButton>
  )
}

export default DeleteButton;