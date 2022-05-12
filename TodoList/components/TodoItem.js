import React from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import styled from "styled-components";

const Item = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  border-radius: 5px;
  box-shadow: 1px 2px 5px 1px #8c82FF;
  padding: 1rem;
  display: flex;
  align-items: center;

  .content {
    cursor: pointer;
    flex: 1;
    display: flex;
    align-items: center;
  }

  .content svg {
    font-size: 1.5rem;
    color: #8c82FF;
  }
  .content .text {
    margin-left: 0.5rem;
    flex: 1;
  }

  .content.checked .text {
    color: #6c567b;
    text-decoration: line-through;
    cursor: pointer;
    opacity: 0.6;
  }
`;

const TodoItem = ({
  todo,
  onCheckToggle,
  onInsertToggle,
  onChangeSelectedTodo,
}) => {
  const { id, text, checked } = todo;
  return (
    <Item>
      <div className={`content ${checked ? "checked" : ""}`}>
        {checked ? (
          <MdCheckBox onClick={() => {
              onCheckToggle(id);
            }}
          />
        ) : (
          <MdCheckBoxOutlineBlank onClick={() => {
              onCheckToggle(id);
            }}
          />
        )}
        <div className="text" onClick={() => { 
            onChangeSelectedTodo(todo);
            onInsertToggle();
          }}
        >
          {text}
        </div>
      </div>
    </Item>
  );
};

export default TodoItem;
