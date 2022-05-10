import React from "react";
import styled from "styled-components";

export default function TodoHeader() {
  const Header = styled.div`
    height: 110px;
    color: #81f7f3;
    display: flex;
    justify-content: center;
    .title {
      color: white;
      font-size: 40px;
      font-weight: 400;
      margin-top: 30px;
    }
  `;

  return (
      <Header>
        <div className="title">ToDoList</div>
      </Header>
  );
}
