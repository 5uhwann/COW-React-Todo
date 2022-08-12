import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Menu from '../menu/Menu';
import DateFilter from '../ui/DateFilter';
import TodoListAll from '../todoList/TodoListAll';
import TodoListCompleted from '../todoList/TodoListCompleted';
import TodoListUnCompleted from '../todoList/TodoListUnCompleted';
import TodoGridAll from '../todoGrid/TodoGridAll';
import TodoGridCompleted from '../todoGrid/TodoGridCompleted';
import TodoGridUnComplted from '../todoGrid/TodoGridUnCompleted';
import AddButton from '../ui/AddButton';
import ListViewButton from '../ui/ListViewButton';
import GridViewButton from '../ui/GridViewButton';
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
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.5px solid gray;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const HeaderText = styled.p`
  width: fit-content;
  font-size: 50px;
  color: #7890E7;
  font-weight: bold;
  margin: auto 90px;
  margin-right: 20px;
`;

const HeaderViewButton = styled.div`
  width: 130px;
  height: 100%;
  display: flex;
  align-items: center;
  border: none;
`;

const Body = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;


function MainPage(props) {

  const [todoList, setTodoList] = useState();
  const [filter, setFilter] = useState("all");
  const [view, setView] = useState("list");
  const [date, setDate] = useState("---");

  useEffect(() => {
    axios.get("/todo")
      .then(function (response) {
        setTodoList(response.data);
        console.log(response.data);
      })
  })

  let todo;
  if (view === "list") {
    if (filter === "all") {
      todo = <TodoListAll todoLists={todoList} date={date} />;
    } else if (filter === "completed") {
      todo = <TodoListCompleted todoLists={todoList} date={date} />;
    } else if (filter === "unCompleted") {
      todo = <TodoListUnCompleted todoLists={todoList} date={date} />;
    }
  } else {
    if (filter === "all") {
      todo = <TodoGridAll todoLists={todoList} date={date} />;
    } else if (filter === "completed") {
      todo = <TodoGridCompleted todoLists={todoList} date={date} />;
    } else if (filter === "unCompleted") {
      todo = <TodoGridUnComplted todoLists={todoList} date={date} />;
    }
  }


  return (
    <Wrapper>
      <Menu setFilter={setFilter} />

      <Container>
        <Header>
          <HeaderContainer>
            <HeaderText>Todo</HeaderText>
            <DateFilter
              todoList={todoList}
              onChange={(event) => {
                setDate(event.target.value);
              }}
            />
          </HeaderContainer>

          <HeaderViewButton>
            <ListViewButton
              onClick={() => {
                setView("list")
              }}
            />
            <GridViewButton
              onClick={() => {
                setView("grid")
              }}
            />
          </HeaderViewButton>
        </Header>

        <Body>
          {todo}
          <AddButton
            onClick={() => {
              axios.post("/todo",
                {
                  content: " "
                })
            }}
          />
        </Body>
      </Container>

    </Wrapper >
  )
}

export default MainPage;