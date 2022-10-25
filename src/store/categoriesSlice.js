import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: true,
  hasErrors: false,
  hasMessage: null,
  categoriesList: [],
  selectedCategory: "all"
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategoriesList: (state, action) => {
        state.categoriesList = action.payload;
        state.hasErrors= false;
        state.hasMessage = null;
        state.loading = false;
    },
    setSelectedCategory: (state,action) => {
      state.selectedCategory = action.payload;
    },
    failed: (state, action) => {
        state.loading = false;
        state.hasErrors = true;
        state.hasMessage = action.payload;
    },
  },
});

export const categoriesData = (state) => state.categories;
export const {setCategoriesList, failed,setSelectedCategory} = categoriesSlice.actions;
export default categoriesSlice.reducer;