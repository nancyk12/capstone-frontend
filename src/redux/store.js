import {configureStore} from '@reduxjs/toolkit'

//import reducers/slice here
import usersReducer from './usersSlice'
import authReducer from './authSlice'
import productReducer from './productSlice';
import petsReducer from './petsSlice';
import favoritesReducer from './favoritesSlice';



export default configureStore({
    reducer: {
        users: usersReducer,
        auth: authReducer,
        cart: productReducer, 
        pets: petsReducer,
        favorites: favoritesReducer
    }
})

