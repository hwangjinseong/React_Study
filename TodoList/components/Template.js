import React from 'react'
import styled from 'styled-components';

const Temple = styled.div`
padding-top: 20px;
max-height: 100vh;
`;

const Title = styled.div`
width: 400px;
margin-top: 30px;
padding-bottom: 20px;
font-size: 1.5rem;
font-weight: bold;
color: #6c567b;
`;

function Template({children, todoLength}) {
  return (
    <Temple>
      <Title>오늘의 할 일 ({todoLength})</Title>
      <div>{children}</div>
    </Temple>
  )
}
export default Template;