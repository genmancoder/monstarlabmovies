import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
    name: 'favorites',
    initialState:[                    
                 
    ]        
,
    reducers: {
        savefavorite: (state,action) => {

            let index = state.findIndex((favorite) => favorite.id === action.payload.movieid)
            if (index < 0){
                const newArray = {                                                
                    id: action.payload.movieid
                }                                   
                state.push(newArray)
            }                    
        }, 
        removefavorite:(state,action)=>{
            const index = state.findIndex((favorite) => favorite.id === action.payload.movieid);
            // const filtered = index.filter((favorite) => favorite.id !== action.payload.movieid)
            // var newArray = state.filter(value => Object.keys(value).length !== 0);
            // const index = newArray.findIndex((favorite) => favorite.id == action.payload.movieid);
            if(index > -1){                
                state.splice(index,1)
            }
            // removing empty object in the favorite state. 
            const findEmptyindex = state.findIndex((favorite) => Object.keys(favorite).length === 0);
            if(findEmptyindex > -1){                              
                state.splice(findEmptyindex,1)
            }
        }
    }
})
export const {savefavorite, removefavorite} = favoriteSlice.actions
export default favoriteSlice.reducer