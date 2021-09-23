import React,{ useEffect, useState } from 'react'
import './Favorite.css'
import axios from 'axios'

import {useSelector} from 'react-redux'
import { CommonLoading } from 'react-loadingg';
import SingleContent from '../../SingleContent/SingleContent';

import Typewriter from 'typewriter-effect';
import favorite from '../../../redux/favorite';


const Favorite = () => {


    const [contents, setContents] = useState([]);
    const favorites = useSelector((state) => state.favoriteReducer)
    const [loading, setLoading] = useState(true);
    

    console.log(favorites)

    const fetchFavoriteDetails = async () => {

        const favoriteDetails = []
        // favorites.forEach((favorite) => {            
        //     const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${favorite.id}?api_key=${process.env.REACT_APP_API_KEY}`);
        //     favoriteDetails.push(data.results)
        // });
        
        await favorites.reduce(async (promise, favorite) => {
            let id = favorite.id
            if(id !== undefined){
                await promise;
                const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`);            
                favoriteDetails.push(data)
            }
            
        }, Promise.resolve())

        

        // const {data} = await axios.get(`https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US`)
        console.log(favoriteDetails);
        setContents(favoriteDetails)
        setLoading(false)
    }

    useEffect(() => {
        fetchFavoriteDetails();
    },[favorites])

    let findId = (id) => {
        
        const index = favorites.findIndex((favorite) => favorite.id === id);
       
        if (index < 0)
            return false
        else    
            return true
    }
    
    return (
        <div className="favorite">
            <span className="favorite__pageTitle">Favorite</span>
            {
            loading ? <CommonLoading /> : <div>
            <div>                       
            <div className="favorite__contents">
                {
                    favorites.length === 0 ? '' :
                    contents && contents.map((content) => (
                        <SingleContent isFavorite={findId(content.id)} movie={content} movieid={content.id} key={content.id} />
                    ))
                }
            </div>
                {
                    favorites.length === 0 ?  
                    (<div className="search__contentsImagePlaceholder">
                        
                        <img src={`${process.env.PUBLIC_URL}/assets/favorite.svg`} alt="" />
                        <p className="favorite__contentsTextPlaceholder">
                        <Typewriter
                        options={{
                            strings: ['Seems lonely around here.', 'Please add your favorite movies...'],
                            autoStart: true,
                            loop: true,
                        }}
                        />
                        </p>
                    </div>) : ''
                }
            </div>
            </div>
            }
        </div>
    )
}

export default Favorite
 