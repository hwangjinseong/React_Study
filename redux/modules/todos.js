/* 액션 타입 선언 */
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

/* 액션 생성함수 선언 */
let nextId = 1; 
export const addTodo = text => ({
  type: ADD_TODO,
  todo: {
    id: nextId++, 
    text
  }
});
export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});


const initialState = [
  /* 
  {
    id: 1,
    text: '예시',
    done: false
  } 
  */
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    case TOGGLE_TODO:
      return state.map(
        todo =>
          todo.id === action.id 
            ? { ...todo, done: !todo.done } 
            : todo 
      );
    default:
      return state;
  }
}