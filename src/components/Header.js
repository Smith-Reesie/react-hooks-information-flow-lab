import React from 'react'

function Header(prop) {
    return (
        <header>
        <h2>Shopster</h2>
        <button onClick={prop.onDarkModeClick}>
        {prop.isDarkMode ? "Dark" : "Light"} Mode
        </button>
    </header>
    )
}

export default Header
