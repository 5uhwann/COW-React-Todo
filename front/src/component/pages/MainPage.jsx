import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Menu from '../menu/Menu';
import TodoList from '../todoList/TodoList';
import AddButton from '../ui/AddButton';
import axios from 'axios';

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


function MainPage(prosp) {

  const [todoList, setTodoList] = useState();

  useEffect(() => {
    axios.get("http://localhost:5001/todo")
      .then(function (response) {
        console.log(response.data);
        setTodoList(response.data);
      })
  }, [])

  return (
    <Wrapper>
      <Menu />

      <Container>
        <Header>
          <HeaderText>Todo</HeaderText>
        </Header>

        <Body>
          <TodoList
            todoLists={todoList}
            onClick={() => {

            }}
          />
          <AddButton
            onClick={() => {

            }}
          />
        </Body>
      </Container>

    </Wrapper>
  )
}

export default MainPage;