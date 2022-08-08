import React from 'react';
import styled from 'styled-components';
import TodoListItem from './TodoListItem';

const Wrapper = styled.div`
  width: 55%;
  height: 90%;
  margin-left: 90px;
  overflow: scroll;
  ::-webkit-scrollbar{
    display: none;
  }
`;

function TodoListAll(props) {
  const { todoLists } = props;

  return (
    <Wrapper>
      {todoLists && todoLists.map((todoList) => {
        return (
          <TodoListItem
            key={todoList.id}
            todoList={todoList}
          />
        );
      })
      }
    </Wrapper>
  )
}

export default TodoListAll;