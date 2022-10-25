import {createSlice} from '@reduxjs/toolkit';

const memorizedFavorites = JSON.parse(localStorage.getItem("favoritesList"));

const initialState = {
    favoritesList: memorizedFavorites?.length > 0 ? memorizedFavorites : []
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    setFavoritesList: (state, action) => {
        state.favoritesList = action.payload;
        localStorage.setItem("favoritesList",JSON.stringify(action.payload));
    }
  },
});

export const favoritesData = (state) => state.favorites;
export const {setFavoritesList} = favoritesSlice.actions;
export default favoritesSlice.reducer;