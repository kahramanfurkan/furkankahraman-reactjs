import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: true,
  hasErrors: false,
  hasMessage: null,
  productList: [],
  categorizedProductList: []
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProductList: (state, action) => {
      state.productList = action.payload;
      state.loading = false;
      state.hasErrors = false;
      state.hasMessage = null;
    },
    setCategorizedProductList: (state, action) => {
      state.categorizedProductList = action.payload;
    },
    failed: (state, action) => {
      state.loading = false;
      state.hasErrors = true;
      state.hasMessage =
        action.payload +
        " The token may have expired. Check the request from the dev console!";
    },
  },
});

export const productsData = (state) => state.products;
export const {setProductList,setCategorizedProductList, failed} = productsSlice.actions;
export default productsSlice.reducer;