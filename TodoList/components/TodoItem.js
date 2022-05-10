import React from "react";
import styled, { css } from "styled-components";
import { MdDone } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
import { useTodoDispatch } from "../TodoContext";

const TodoItemBlock = styled.div`
  width: 380px;
  height: 60px;
  background-color: white;
  border-radius: 20px;
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-left: 30px;
`;
const CheckCircle = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  border-radius: 8px;
  border: 2px solid #8c82ff;
  font-size: 24px;
  color: #38d9a9;
  margin-right: 13px;
  margin-left: 25px;
`;

const Text = styled.div`
  display: flex;
  font-size: 18px;
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

const Remove = styled.div`
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;

function TodoItem({ id, done, text }) {
  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({ type: "TOGGLE", id });
  const onRemove = () => dispatch({ type: "REMOVE", id });
  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove onClick={onRemove}>
        <BsTrash />
      </Remove>
    </TodoItemBlock>
  );
}
export default TodoItem;