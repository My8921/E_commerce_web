import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../Feature/product-list/productSlice'


export const store=configureStore(
    {

        reducer:{
            product:productReducer,
        }

    }
);

