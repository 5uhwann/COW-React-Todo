import React, { useState } from 'react';
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

  const [isAllClicked, setIsAllClicked] = useState(true);
  const [isCompletedClicked, setIsCompletedClicked] = useState(false);
  const [isUnCompletedClicked, setIsUnCompletedClicked] = useState(false);

  return (
    <Wrapper>
      <Block />
      <MenuButton
        title={"All"}
        isClicked={isAllClicked}
        onClick={() => {
          setIsAllClicked(!isAllClicked);
          setIsCompletedClicked(false);
          setIsUnCompletedClicked(false);
        }}
      />

      <MenuButton
        title={"Completed"}
        isClicked={isCompletedClicked}
        onClick={() => {
          setIsCompletedClicked(!isCompletedClicked);
          setIsAllClicked(false);
          setIsUnCompletedClicked(false);
        }}
      />

      <MenuButton
        title={"Uncompleted"}
        isClicked={isUnCompletedClicked}
        onClick={() => {
          setIsUnCompletedClicked(!isUnCompletedClicked);
          setIsAllClicked(false);
          setIsCompletedClicked(false);
        }}
      />
    </Wrapper>
  )
}

export default Menu;