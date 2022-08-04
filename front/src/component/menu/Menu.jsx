import React from 'react';
import styled from 'styled-components';
import MenuButton from '../ui/MenuButton';

const Wrapper = styled.div`
  width: 250px;
  height: 70vh;
  display: flex;
  flex-direction: column;
  border: none;
  background: #ECEFFF;
`;

function Menu(props) {

  return (
    <Wrapper>
      <MenuButton
        title={"All"}
        onClick={() => {

        }}
      />

      <MenuButton
        title={"Completed"}
        onClick={() => {

        }}
      />

      <MenuButton
        title={"Uncompleted"}
        onClick={() => {

        }}
      />
    </Wrapper>
  )
}

export default Menu;