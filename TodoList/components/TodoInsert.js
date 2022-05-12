import React, { useState, useEffect } from "react";
import { MdAddCircle } from "react-icons/md";
import { TiTrash, TiPencil } from "react-icons/ti";
import styled from "styled-components";

const Background = styled.div`
  position: fixed;
  z-index: 980;
  top: 0;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #6c567b;
  opacity: 0.8;
`;

const From = styled.div`
  margin-left: 10%;
  position: fixed;
  top: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 990;
  width: 300px;
  height: 150px;
  border-radius: 5px;
  box-shadow: 1px 2px 5px 1px #8c82FF;
  background: white;
`;

const Input = styled.input`
  background: none;
  outline: none;
  border: none;
  border-bottom: 1px solid #8c82FF;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
`;

const PlusBtn = styled.button`
  padding-top: 20px;
  background: none;
  outline: none;
  border: none;
  color: #8c82FF;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.1s background ease-in;
`;

const Rewrites = styled.div`
  padding-top: 20px;
  color: #8c82FF;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.5rem;
`;

const TodoInsert = ({
  onInsertToggle,
  onInsertTodo,
  selectedTodo,
  onRemove,
  onUpdate,
}) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onInsertTodo(value);
    setValue("");
    onInsertToggle();
  };

  useEffect(() => {
    if (selectedTodo) {
      setValue(selectedTodo.text);
    }
  }, [selectedTodo]);
  return (
    <div>
      <Background onClick={onInsertToggle}></Background>
      <From
        onSubmit={
          selectedTodo
            ? () => {
                onUpdate(selectedTodo.id, value);
              }
            : onSubmit
        }
      >
        <Input
          placeholder="할 일을 적어주세요"
          value={value}
          onChange={onChange}
        ></Input>
        {selectedTodo ? (
          <Rewrites>
            <TiPencil
              onClick={() => {
                onUpdate(selectedTodo.id, value);
              }}
            />
            <TiTrash
              onClick={() => {
                onRemove(selectedTodo.id);
              }}
            />
          </Rewrites>
        ) : (
          <PlusBtn type="submit">
            <MdAddCircle />
          </PlusBtn>
        )}
      </From>
    </div>
  );
};

export default TodoInsert;
