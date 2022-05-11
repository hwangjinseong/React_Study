import React from 'react'
import {ImCheckboxChecked, ImCheckboxUnchecked} from 'react-icons/im'
import styled from 'styled-components';

const Item = styled.div`
margin-left: auto;
margin-right: auto;
border-radius: 5px;
box-shadow: 1px 2px 5px 1px #8c82FF;
padding: 1rem;
display: flex;
align-items: center;
margin-top: 15px;

.content {
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;
}
.content svg {
  color: #8c82FF;
  font-size: 1.3rem;
}
.content .text {
  margin-left: 0.5rem;
  flex: 1;
}
.check {
  margin-right: 10px;
}
.uncheck {
  margin-right: 10px;
}
`;

function TodoItem({todo}) {
  const {id, text, checked} = todo;
  return (
    <Item>
      <div className={`content ${checked ? 'checked' : ''}`}>
        {checked ? <ImCheckboxChecked className='check'/> : <ImCheckboxUnchecked className='uncheck'/>}
        <div className='text'>{text}</div>
      </div>
    </Item>
  )
};
export default TodoItem;