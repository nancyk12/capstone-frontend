import {configureStore} from '@reduxjs/toolkit'

//import reducers/slice here
import usersReducer from './usersSlice'
import authReducer from './authSlice'
import productReducer from './productSlice';
import petsSlice from './petsSlice';
import favoritesSlice from './favoritesSlice';



export default configureStore({
    reducer: {
        users: usersReducer,
        auth: authReducer,
        cart: productReducer, 
        pets: petsSlice,
        favorites: favoritesSlice
    }
})

