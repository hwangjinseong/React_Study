import React from 'react'
import TodoItem from './TodoItem';
import styled from 'styled-components';

const List = styled.div`
margin-left: auto;
margin-right: auto;
padding-bottom: 20px;
margin-bottom: 20px;
`;

function TodoList({todos}) {
  return (
    <List>
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id}/>
      ))}
    </List>
  )
}
export default TodoList;