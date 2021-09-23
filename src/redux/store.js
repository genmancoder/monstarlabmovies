import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import {combineReducers} from "redux"; 
import { persistReducer } from 'redux-persist'

import favoriteReducer from './favorite'


const reducers = combineReducers({
    favoriteReducer       
   });
   
   const persistConfig = {
       key: 'root',
       storage
   };
   
   const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
    reducer: persistedReducer,    
});