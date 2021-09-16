import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Trending.css'

const Trending = () => {

    const [content, setContent] = useState([]);

    console.log(content);
    
    const fetchTrending = async () => {
        const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`);

        console.log(data);
        setContent(data.results)
    }

    useEffect(() => {
        fetchTrending();
    },[])

    return (
        <div className="trending">
            <span className="trending__pageTitle">Trending</span>
        </div>
    )
}

export default Trending
