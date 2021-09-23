import React from 'react'
import './Header.css'
 
const Header = () => {
    return (
        <div onClick={() => window.scroll(0,0)} className="header">
            <img alt="logo" src="https://www.monstarlab.ph/images/star-logo.svg" />
            <span>Monstarlab</span>
        </div>
    )
}

export default Header
