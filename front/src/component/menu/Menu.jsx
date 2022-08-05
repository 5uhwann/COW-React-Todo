import React from 'react';
import styled from 'styled-components';
import MenuButton from '../ui/MenuButton';

const Wrapper = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: none;
  background: #ECEFFF;
`;

const Block = styled.div`
  width: 100%;
  height: 15%;
  border-bottom: 0.5px solid gray;
  background: transparent;
`

function Menu(props) {

  return (
    <Wrapper>
      <Block />
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