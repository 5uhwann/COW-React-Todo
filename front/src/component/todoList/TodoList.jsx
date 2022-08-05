import React from 'react';
import styled from 'styled-components';
import TodoListItem from './TodoListItem';

const Wrapper = styled.div`
  width: 55%;
  height: 90%;
  display: flex;
  flex-direction: column;
  margin-left: 90px;
`;

function TodoList(props) {
  const { todoLists, onClickItem } = props;

  return (
    <Wrapper>
      {todoLists.map((todoList, index) => {
        return (
          <TodoListItem
            key={todoList.id}
            todoList={todoList}
            onClick={() => {
              onClickItem(todoList);
            }}
          />
        );
      })}
    </Wrapper>
  )
}

export default TodoList;