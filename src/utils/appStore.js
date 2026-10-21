import { configureStore } from '@reduxjs/toolkit';
import allProductsReducer from './productSlice';
import configReducer from './configSlice';
import wishlistReducer from './wishlistSlice';

const appStore = configureStore({
    reducer: {
        products: allProductsReducer,
        config: configReducer,
        wishlist: wishlistReducer
   } 
})

export default appStore;