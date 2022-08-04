import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../ui/ListItemInput';
import DeleteButton from '../ui/DeleteButton';

const Wrapper = styled.div`
  width: 60vw;
  height: 50px;
  display: flex;
  flex-direction: column;
  border: none;
  border-radius: 10px;
  ${(props) =>
    props.isCompleted ?
      `backgoround: #D6DCFF;` : `background: #ECEFFF;`
  }
  cursor: pointer;
  :hover{
    background: #D6DCFF;
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

  const { todoList, onClick } = props;
  const [content, setContent] = useState(todoList.content);

  return (
    <Wrapper>
      <ButtonWrapper>
        <DeleteButton />
      </ButtonWrapper>

      <InputWrapper onClick={onClick}>
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

