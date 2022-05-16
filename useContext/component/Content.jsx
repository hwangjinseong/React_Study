import React, { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext';
import { UserContext } from './context/UserContext';

function Content() {
    const {isDark} = useContext(ThemeContext);
    const user = useContext(UserContext);
  return (
    <div className='content' style={{
        backgroundColor: isDark ? 'black' : 'white',
        color: isDark ? 'white' : 'black',
    }}>
        <h2>{user}님 good</h2>
    </div>
  )
}
export default Content;