import React from "react";
import styled from "styled-components";

const TodoList = styled.div`
  width: 510px;
  height: 650px;
  background-color: #8c82FF;
  border-radius: 20px;
  margin: 0 auto;
`;

function TodoTemplate({children}) {
  return <TodoList>{children}</TodoList>;
}
export default TodoTemplate;
