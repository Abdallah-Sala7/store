import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducers/cartSlice";
import filterSlice from "./reducers/filterSlice";

const store = configureStore({
    reducer :{
        cart:cartSlice,
        filter:filterSlice
    }
})

export default store