import React, { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext';

function Footer() {
    const {isDark, setIsDark} = useContext(ThemeContext)

    const toggleTheme = () => {
        setIsDark(!isDark);
    }
  return (
    <footer className='footer' style={{
        backgroundColor: isDark ? 'black' : 'lightgray',
    }}>
      <button className='button' onClick={toggleTheme}>
          어둠
      </button>
    </footer>
  )
}
export default Footer;