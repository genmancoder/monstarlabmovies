import React from 'react'
import './Movies.css'

const Movies = () => {

    const fetchMovies = async() => {
        const {data} = await axios.get();
    }

    return (
        <div className="movies">
            <span className="movies__pageTitle">Movies</span>
        </div>
    )
}

export default Movies
