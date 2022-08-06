import React from 'react';
import styled from 'styled-components';

const StyledMenuButton = styled.button`
  width: 100%;
  height: 10%;
  margin: 0;
  text-align: center;
  border: none;
  border-bottom: 0.5px solid gray;
  ${(props) =>
    props.isClicked ?
      `background: #9dabf9;` : `background: #ECEFFF;`
  };
  font-weight: bold;
  :hover{
    transform: scale(1.1);
    transition: all 0.3s;
    border: none;
  }
`;

function MenuButton(props) {
  const { title, onClick, isClicked } = props;

  return <StyledMenuButton onClick={onClick} isClicked={isClicked}>{title}</StyledMenuButton>
}

export default MenuButton;