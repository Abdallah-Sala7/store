import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducers/cartSlice";
import filterSlice from "./reducers/filterSlice";
import wishSlice from "./reducers/wishSlice";

const store = configureStore({
    reducer :{
        cart:cartSlice,
        filter:filterSlice,
        wish:wishSlice
    }
})

export default store