import { configureStore } from '@reduxjs/toolkit';
import allProductsReducer from './productSlice';
import configReducer from './configSlice';

const appStore = configureStore({
    reducer: {
        products: allProductsReducer,
        config: configReducer
   } 
})

export default appStore;