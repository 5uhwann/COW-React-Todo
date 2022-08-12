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

function TodoListUnComplted(props) {
  const { todoLists, date } = props;

  return (
    <Wrapper>
      {todoLists && todoLists.map((todoList) => {
        if (todoList.isCompleted === false) {
          if (date == todoList.createdAt.substr(0, 10) || date == "---") {
            return (
              <TodoListItem
                key={todoList.id}
                todoList={todoList}
              />
            );
          }
        }
      })
      }
    </Wrapper>
  )
}

export default TodoListUnComplted;