import {configureStore} from '@reduxjs/toolkit';
import productsReducer from './producstsSlice';
import categoriesReducer from './categoriesSlice';
import favoritesReducer from './favoritesSlice';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        categories: categoriesReducer,
        favorites: favoritesReducer
    },
});