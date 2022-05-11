import React, {useState} from "react";
import Template from "./components/Template";
import TodoList from "./components/TodoList";
import styled from 'styled-components';
import {MdAddCircle} from 'react-icons/md'
import TodoInsert from './components/TodoInsert';

const Main = styled.div `
display: flex;
justify-content: center;
`;

const TodoBtn = styled.div`
margin-bottom: 20px;
bottom: 0;
position: fixed;
cursor: pointer;
font-size: 70px;
color: #8c82FF;
`;

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리액트 마스터하기",
      checked: true
    },
    {
      id: 2,
      text: "공부하기 1시간",
      checked: false
    },
    {
      id: 3,
      text: "밥먹기",
      checked: true
    },
  ]);
  return (
    <Main>
      <Template todoLength = {todos.length}>
        <TodoList todos={todos}/>
        <TodoBtn>
          <MdAddCircle/>
        </TodoBtn>
        <TodoInsert/>
      </Template>
    </Main>
  );
}

export default App;