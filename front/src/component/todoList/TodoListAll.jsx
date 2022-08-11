import React from 'react';
import styled from 'styled-components';
import TodoListItem from './TodoListItem';


const ListWrapper = styled.div`
  width: 55%;
  height: 90%;
  margin-left: 90px;
  overflow: scroll;
  ::-webkit-scrollbar{
    display: none;
  }
`;


function TodoListAll(props) {
  const { todoLists, date } = props;

  return (
    <ListWrapper>
      {todoLists && todoLists.map((todoList) => {
        if (date == todoList.createdAt.substr(0, 10)) {
          return (
            <TodoListItem
              key={todoList.id}
              todoList={todoList}
            />
          );
        }
      })
      }
    </ListWrapper>
  )
}

export default TodoListAll;