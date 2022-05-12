import React from 'react'
import styled from 'styled-components';

const Temple = styled.div`
padding-top: 20px;
  max-height: 100vh;
`;

const Title = styled.div`
display: flex;
justify-content: center;
font-size: 60px;
color: #8c82FF;
`;

const Title2 = styled.div`
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  padding-bottom: 20px;
  font-size: 1.3rem;
  font-weight: bold;
  color: #6c567b;
`;

function Template({children, todoLength}) {
  return (
    <Temple>
      <Title>TodoList</Title>
      <Title2>할 일 ({todoLength})</Title2>
      <div>{children}</div>
    </Temple>
  )
}
export default Template;