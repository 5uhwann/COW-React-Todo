import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../ui/ListItemInput';
import DeleteButton from '../ui/DeleteButton';

const Wrapper = styled.div`
  width: 95%;
  height: 70px;
  display: flex;
  flex-direction: column;
  margin: 20px 0;
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
  const [disable, setDisable] = useState(true);

  return (
    <Wrapper
      isCompleted={isCompleted}
      onClick={(isCompleted) => {
        setIsCompleted(isCompleted ? false : true);
      }}
      onDoubleClick={() => {
        setDisable(false);
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
          disable={disable}
          onBlur={() => {
            setDisable(true);
          }}
        />
      </InputWrapper>
    </Wrapper>
  )
}

export default TodoListItem;
