import React from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";

const List = styled.div`
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 20px;
`;

const TodoList = ({
  todos,
  onCheckToggle,
  onInsertToggle,
  onChangeSelectedTodo
}) => {
  return (
    <List>
      {todos.map(todo => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onCheckToggle={onCheckToggle}
          onInsertToggle={onInsertToggle}
          onChangeSelectedTodo={onChangeSelectedTodo}
        />
      ))}
    </List>
  );
};

export default TodoList;