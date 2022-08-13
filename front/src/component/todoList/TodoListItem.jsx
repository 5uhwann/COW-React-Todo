import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../ui/ListItemInput';
import DeleteButton from '../ui/DeleteButton';
import axios from 'axios';

const Wrapper = styled.div`
  width: 95%;
  height: 70px;
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  margin-left: 15px;
  border: none;
  border-radius: 10px;
  ${(props) =>
    props.isCompleted ?
      `background: #9dabf9;` : `background: #ECEFFF;`
  };
  cursor: pointer;
  :hover{
    transform: scale(1.05);
    transition: all 0.3s;
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
  const [disable, setDisable] = useState(true);

  return (
    <Wrapper
      isCompleted={todoList.isCompleted}
      onClick={() => {
        disable &&
          axios.patch(`todo/status/${todoList.id}`)
      }}
      onDoubleClick={() => {
        setDisable(false);
      }}
    >
      <ButtonWrapper>
        <DeleteButton
          onClick={() => {
            axios.delete(`todo/${todoList.id}`)
          }}
        />
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
            axios.patch(`todo/${todoList.id}`,
              {
                content: `${content}`
              })
          }}
        />
      </InputWrapper>
    </Wrapper>
  )
}

export default TodoListItem;

