import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Menu from '../menu/Menu';
import TodoListAll from '../todoList/TodoListAll';
import TodoListCompleted from '../todoList/TodoListCompleted';
import TodoListUnCompleted from '../todoList/TodoListUnCompleted';
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
  const [filter, setFilter] = useState("all");

  let list;
  if (filter == "all") {
    list = <TodoListAll todoLists={todoList} />;
  } else if (filter == "completed") {
    list = <TodoListCompleted todoLists={todoList} />;
  } else if (filter == "unCompleted") {
    list = <TodoListUnCompleted todoLists={todoList} />;
  }

  useEffect(() => {
    axios.get("/todo")
      .then(function (response) {
        console.log(response);
        setTodoList(response.data);
      })
  })

  return (
    <Wrapper>
      <Menu setFilter={setFilter} />

      <Container>
        <Header>
          <HeaderText>Todo</HeaderText>
        </Header>

        <Body>
          {list}
          <AddButton
            onClick={() => {
              axios.post("/todo",
                {
                  content: " "
                })
                .then(function (response) {
                  console.log(response);
                })
            }}
          />
        </Body>
      </Container>

    </Wrapper>
  )
}

export default MainPage;