import axios from 'axios'
import React, { useEffect, useState } from 'react'


import AliceCarousel from "react-alice-carousel";
import { img_300, unavailable } from "../../config/config";
import './TopRated.css'

const handleDragStart = (e) => e.preventDefault();

const TopRated = () => {

    // const [page, setPage] = useState(1);    
    const [contents, setContents] = useState([]);
    // Adding a loading screen
    // const [loading, setLoading] = useState(true);


    const items = contents.map((movie) => (
        <div className="carouselItem">
         <img             
            alt="" 
            className="carouselItem__img"
            onDragStart={handleDragStart}
            src={movie.poster_path? `${img_300}/${movie.poster_path}`: unavailable}/>          
          <b className="carouselItem__txt">{movie?.name}</b>
        </div>
      ));

    const responsive = {
    0: {
        items: 3,
    },
    512: {
        items: 5,
    },
    1024: {
        items: 7,
    },
    };

    const fetchTopRated = async () => {
        const {data} = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`);

        console.log(data);
        setContents(data.results)
        // setLoading(false)
    }
    

    useEffect(() => {
        fetchTopRated();
    },[])
   
    return (
        <>
        <span className="trending__pageTitle">Top Rated</span> 
        <AliceCarousel
        mouseTracking
        infinite
        animationDuration={4000}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
        />       
        </>
    )
}

export default TopRated
