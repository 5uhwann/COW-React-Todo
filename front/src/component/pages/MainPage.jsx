import React from 'react';
import styled from 'styled-components';
import Menu from '../menu/Menu';
import TodoList from '../todoList/TodoList';
import AddButton from '../ui/AddButton';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

const Container = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 0.5px solid gray;
`;

const HeaderText = styled.p`
  width: fit-content;
  font-size: 50px;
  color: #7890E7;
  font-weight: bold;
  margin: auto 90px;
`;

const Body = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const data = [
  {
    "id": 1,
    "content": "test1",
    "isCompleted": false,
    "createdAt": "2022-07-26T00:14:52.449Z",
    "updatedAt": "2022-07-26T00:15:20.000Z"
  },
  {
    "id": 2,
    "content": "test2",
    "isCompleted": true,
    "createdAt": "2022-07-26T00:14:52.449Z",
    "updatedAt": "2022-07-26T00:15:20.000Z"
  },
  {
    "id": 3,
    "content": "test3",
    "isCompleted": false,
    "createdAt": "2022-07-26T00:14:52.449Z",
    "updatedAt": "2022-07-26T00:15:20.000Z"
  },
  {
    "id": 3,
    "content": "test3",
    "isCompleted": false,
    "createdAt": "2022-07-26T00:14:52.449Z",
    "updatedAt": "2022-07-26T00:15:20.000Z"
  },
  {
    "id": 3,
    "content": "test3",
    "isCompleted": false,
    "createdAt": "2022-07-26T00:14:52.449Z",
    "updatedAt": "2022-07-26T00:15:20.000Z"
  },
  {
    "id": 3,
    "content": "test3",
    "isCompleted": false,
    "createdAt": "2022-07-26T00:14:52.449Z",
    "updatedAt": "2022-07-26T00:15:20.000Z"
  },
  {
    "id": 3,
    "content": "test3",
    "isCompleted": false,
    "createdAt": "2022-07-26T00:14:52.449Z",
    "updatedAt": "2022-07-26T00:15:20.000Z"
  }
]

function MainPage(prosp) {

  return (
    <Wrapper>
      <Menu />

      <Container>
        <Header>
          <HeaderText>Todo</HeaderText>
        </Header>

        <Body>
          <TodoList
            todoLists={data}
            onClick={() => {

            }}
          />
          <AddButton />
        </Body>
      </Container>

    </Wrapper>
  )
}

export default MainPage;