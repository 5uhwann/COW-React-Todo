import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons'

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

function GridViewButton(props) {
  const { onClick } = props;

  return <StyledViewButton onClick={onClick}>
    <FontAwesomeIcon icon={faSquare} />
  </StyledViewButton>
}

export default GridViewButton;