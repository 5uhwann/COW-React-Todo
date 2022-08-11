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

function TodoListCompleted(props) {
  const { todoLists, date } = props;

  return (
    <Wrapper>
      {todoLists && todoLists.map((todoList) => {
        if (todoList.isCompleted === true && date == todoList.createdAt.substr(0, 10)) {
          return (
            <TodoListItem
              key={todoList.id}
              todoList={todoList}
            />
          );
        }
      })
      }
    </Wrapper>
  )
}

export default TodoListCompleted;