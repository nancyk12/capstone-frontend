import {configureStore} from '@reduxjs/toolkit'

//import reducers/slice here
import usersReducer from './usersSlice'
import authReducer from './authSlice'
import shopItemReducer from './shopItemSlice';
import petsReducer from './petsSlice';
import favoritesReducer from './favoritesSlice';
import courseReducer from './courseSlice'
import blogReducer from './blogSlice'
import productReducer from './productSlice'




export default configureStore({
    reducer: {
        users: usersReducer,
        auth: authReducer,
        cart: shopItemReducer, 
        pets: petsReducer,
        favorites: favoritesReducer,
        enroll: courseReducer,
        blogs: blogReducer,
        products: productReducer
      
    },
   
})

