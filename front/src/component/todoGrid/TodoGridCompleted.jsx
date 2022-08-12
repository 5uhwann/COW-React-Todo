import React from 'react';
import styled from 'styled-components';
import TodoGridItem from './TodoGridItem';

const GridWrapper = styled.div`
  width: 55%;
  height: 90%;
  display: flex;
  flex-wrap: wrap;
  margin-left: 90px;
  overflow: scroll;
  ::-webkit-scrollbar{
    display: none;
  }
`;

function TodoGridCompleted(props) {
  const { todoLists, date } = props;

  return (
    <GridWrapper>
      {todoLists && todoLists.map((todoList) => {
        if (todoList.isCompleted === true) {
          if (date == todoList.createdAt.substr(0, 10) || date == "---") {
            return (
              <TodoGridItem
                key={todoList.id}
                todoList={todoList}
              />
            );
          }
        }
      })
      }
    </GridWrapper>
  )
}

export default TodoGridCompleted;