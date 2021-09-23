import React,{useState} from 'react'
import './SingleContent.css'

import { img_300,unavailable } from '../../config/config'
import { Badge } from '@material-ui/core'
import Heart from "react-animated-heart";
import ContentModal from '../ModalMovieDetails/MovieDetails'
import {useDispatch} from 'react-redux'
import { savefavorite, removefavorite } from '../../redux/favorite';
import {useTransition, animated} from 'react-spring'
import FavoriteBadge from './FavoriteBadge/FavoriteBadge';


const SingleContent = ({movie, isFavorite,movieid}) => {

    //for the add-to favorite heart animation
    const [clicked, setClicked] = useState(isFavorite);
    //for removing/adding movie id to state
    const dispatch = useDispatch()
    //formatting the date from the api
    const options = {year: 'numeric', month: 'long', day: 'numeric'}    

    const transition = useTransition(clicked, {
        from: {opacity: 1},
        enter: {opacity: 1},
        leave: {opacity: 0}
    })

    //post clicked handler
    const handleClicked = (event) => {
        // changing the state of the heart component
        setClicked(!clicked)       

        if (clicked === true){
            dispatch(removefavorite({
                movieid: movieid,            
            })) 
        }else{
            dispatch(savefavorite({
                movieid: movieid,            
            }))
        }
    }


    return (          
            <div className="singlecontentmovie">                           
              
            <div className="singlecontent__moviedetails">
            {transition((style,item) => 
                item ? <animated.div style={style}><FavoriteBadge/></animated.div>: ''
            )} 
            <div className="singlecontent__heart">
                    <Heart className="" isClick={clicked} onClick={handleClicked} />    
            </div> 
            <ContentModal media_type={movie.media_type} id={movie.id}>
                <div className="singlecontent">          
                    
                    <Badge className="singlecontent__badge" badgeContent={movie.vote_average} color={movie.vote_average > 6 ? "primary" : "secondary"}/>
                    
                    <img className="singlecontent__poster" alt="" src={movie.poster_path? `${img_300}/${movie.poster_path}`: unavailable}/>
                    {/* <LazyLoadImage
                    className="singlecontent__poster"
                    alt=""            
                    src={movie.poster_path? `${img_300}/${movie.poster_path}`: unavailable} // use normal <img> attributes as props
                    /> */}
                    <div className="singlecontent__details">
                    <b className="singlecontent__title">
                        {movie.title || movie.name}                
                    </b>

                    <span className="singlecontent__subtitle">              
                        <span className="singlecontent__subtitle">
                            {new Date(movie.release_date).toLocaleDateString([],options)}
                        </span>           
                    </span>
                    </div>
                </div>
                </ContentModal>
                </div>   
                         
            </div>                                                         
    )
}

export default SingleContent
