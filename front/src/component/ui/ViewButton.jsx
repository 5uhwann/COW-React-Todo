import React from 'react';
import styled from 'styled-components';


const StyledViewButton = styled.button`
  width: 40%;
  height: 40%;
  padding: 0;
  border: none;
  cursor: pointer;
  :hover{
    transform: scale(1.1);
    transition: all 0.3s;
  }
  background: transparent;
`;

function ViewButton(props) {
  const { onClick, icon } = props;

  return <StyledViewButton onClick={onClick}>
    {icon}
  </StyledViewButton>
}

export default ViewButton;