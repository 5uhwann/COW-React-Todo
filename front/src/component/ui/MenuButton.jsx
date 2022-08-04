import React from 'react';
import styled from 'styled-components';

const StyledMenuButton = styled.button`
  width: 100%;
  height: 50px;
  margin: 0;
  text-align: center;
  border: none;
  border-bottom: 0.5px solid gray;
  background: transparent;
  font-weight: bold;
  :hover{
    background: #9dabf9;
  }
`;

function MenuButton(props) {
  const { title, onClick } = props;

  return <StyledMenuButton onClick={onClick}>{title}</StyledMenuButton>
}

export default MenuButton;