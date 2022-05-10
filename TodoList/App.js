import React from "react";
import TodoHeader from "./components/TodoHeader";
import TodoTemplate from "./components/TodoTemplate";
import styled, { createGlobalStyle } from "styled-components";
import TodoInput from "./components/TodoInput";
import TodoItemList from './components/TodoItemList';
import { TodoProvider } from './TodoContext';

const TodoBackground = createGlobalStyle`
body {
  background: white;
  margin-top: 30px;
}
`;

function App() {
  return (
    <TodoProvider>
      <TodoBackground/>
      <TodoTemplate>
        <TodoHeader/>
        <TodoInput/>
        <TodoItemList></TodoItemList>
      </TodoTemplate>
    </TodoProvider>
  );
}
export default App;
