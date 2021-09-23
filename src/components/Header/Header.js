import React from 'react'
import './Header.css'
 
const Header = () => {
    return (
        <div onClick={() => window.scroll(0,0)} className="header">
            <img alt="logo" src="https://www.monstarlab.ph/images/star-logo.svg" />
            <span>Monstarlab</span>

            {/* <div className="header__favoriteCount"><span>Favorite (2)</span></div> */}
        </div>
    )
}

export default Header
