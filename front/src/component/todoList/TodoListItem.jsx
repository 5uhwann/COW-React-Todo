import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../ui/ListItemInput';
import DeleteButton from '../ui/DeleteButton';

const Wrapper = styled.div`
  width: 60vw;
  height: 50px;
  display: flex;
  flex-direction: column;
  margin: 15px;
  border: none;
  border-radius: 10px;
  ${(props) =>
    props.isCompleted ?
      `background: #9dabf9;` : `background: #ECEFFF;`
  };
  cursor: pointer;
  :hover{
    background: #9dabf9;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: left;
  border: none;
`;

const InputWrapper = styled.div`
  width: 100%;
  height: 70%;
  padding-left: 15px;
  display: flex;
  justify-content: left;
  border: none;
`;

function TodoListItem(props) {

  const { todoList } = props;
  const [content, setContent] = useState(todoList.content);
  const [isCompleted, setIsCompleted] = useState(todoList.isCompleted);

  return (
    <Wrapper
      isCompleted={isCompleted}
      onClick={(isCompleted) => {
        setIsCompleted(isCompleted ? false : true);
      }}
    >
      <ButtonWrapper>
        <DeleteButton />
      </ButtonWrapper>

      <InputWrapper >
        <Input
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />
      </InputWrapper>
    </Wrapper>
  )
}

export default TodoListItem;

