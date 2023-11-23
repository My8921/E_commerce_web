import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllProducts, fetchProductsByFilters } from './productApi';

const initialState = {   //initial state
  products: [],
  status: 'idle',
};


export const fetchAllProductsAsync = createAsyncThunk(
  'product/fetchAllProducts', //name of Action creater
  async () => {
    const response = await fetchAllProducts();  //Calling function in Api
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);






export const fetchProductsByFiltersAsync = createAsyncThunk(
  'product/fetchProductsByFilters', //name of Action creater
  async (filter) => {
  
    
    const response = await fetchProductsByFilters(filter);
    console.log(response.data);  //Calling function in Api
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);




export const productSlice = createSlice({
  name: 'product',  //name of Action creator
  initialState,
  reducers: {
    increment: (state) => {  //Action Creaters  //product/increment
      state.value += 1;
    },
  },
  extraReducers: (builder) => {  //extra reducer used to call the async function or call another reducer or slide inside another reducer
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {  //product/fetch all products/
        state.status = 'loading';
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      })
//filterting logic
      .addCase(fetchProductsByFiltersAsync.pending, (state) => {  //product/fetch all products/
        state.status = 'loading';
      })
      .addCase(fetchProductsByFiltersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      })
  
  },
});

export const { increment } = productSlice.actions;

export const selectAllProducts = (state) => state.product.products;

export default productSlice.reducer;