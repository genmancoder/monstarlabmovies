import './Trending.css'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Spring} from 'react-spring'

import { CommonLoading } from 'react-loadingg';
import CustomPagination from '../../Pagination/CustomPagination';
import SingleContent from '../../SingleContent/SingleContent';
import TopRated from '../../TopRated/TopRated';



import {useSelector} from 'react-redux'

const Trending = () => {
    //supposed to be state.[name-of-state] -- but not working.
    const favorites = useSelector((state) => state.favoriteReducer)
    const [page, setPage] = useState(1);    
    const [contents, setContents] = useState([]);
    // Adding a loading screen
    const [loading, setLoading] = useState(true);

    // Getting all the trending movies.
    const fetchTrending = async () => {
        const {data} = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);

        console.log(data);
        setContents(data.results)
        setLoading(false)
    }
    

    useEffect(() => {
        fetchTrending();
    },[page])

    //function to check if movie id exist in the `favorites` state
    let findId = (id) => {        
        const index = favorites.findIndex((favorite) => favorite.id === id);       
        if (index < 0)
            return false
        else    
            return true
    }
   
    return (              
        
        <div className="trending">
        {
            loading ? <CommonLoading /> : <div>
            <div>
            <TopRated/>
            <span className="trending__pageTitle">Trending Movies</span> 
            <Spring
                from={{opacity: 0, marginTop: -500}}
                to={{opacity: 1, marginTop: 0}}
            >
            {props => (
                <div style={props}>
                <div className="trending__contents">
                    {
                        contents && contents.map((content) => (
                            <SingleContent isFavorite={findId(content.id)} movie={content} movieid={content.id} key={content.id} />
                        ))
                    }
                </div>
                <CustomPagination setPage={setPage}/>
                </div>
            )}
            
            </Spring>
            </div>
            </div>
        }
            
        </div>
    )
}

export default Trending
