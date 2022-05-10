import React from "react";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";

const TextInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    width: 23px;
    height: 23px;
    margin-top: 3px;
  }
`;

const InputBackground = styled.div`
  width: 350px;
  height: 44px;
  margin-right: 15px;
  border-radius: 30px;
  display: flex;
  background-color: white;
  justify-content: center;
`;

const Input = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 30px;
  margin-right: 15px; 
  outline: 0;
  border: 0;
  font-size: 16px;
`;

const Button = styled.button`
  width: 46px;
  height: 46px;
  border-radius: 30px;
  outline: 0;
  border: 0;
  background-color: white;
  cursor: pointer;
`;

function TodoInput() { 
  return (
    <TextInput>
      <InputBackground>
        <Input placeholder="할 일을 입력하세요" />
      </InputBackground>
      <Button>
        <FaPlus className="icon" />
      </Button>
    </TextInput>
  );
}
export default TodoInput;