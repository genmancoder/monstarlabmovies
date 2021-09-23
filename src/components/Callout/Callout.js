import React, {useState} from 'react'
import './Callout.css'

const Callout = () =>{

    const [supported, setSupported] = useState('Unlimited search. Cancel anytime.')

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setSupported('Uh oh! Not supported yet.')
    }

    return (
        <>
        <div className="callout">
            {/* <h1>Callout</h1> */}            
        </div>
        <div className="callout__details">
                <h1>Search for movies, add as favorite, and more.</h1>
                <p>{supported}</p>
                <form action="/" method="get" onSubmit={handleOnSubmit}>
                    <label htmlFor="header-search">
                        <span className="visually-hidden">Email Address</span>
                    </label>
                    <input
                        className="callout__detailsSearchInput"
                        type="text"
                        autoComplete="off"
                        id="header-search"
                        placeholder="Email Address"
                        name="s" 
                    />
                    <button className="callout__detailsSearchInputButton" type="submit">Get Started</button>
                </form>
            </div>
        </>
    )
}

export default Callout
