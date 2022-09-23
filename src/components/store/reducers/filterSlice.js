import { createSlice } from "@reduxjs/toolkit";

const initialState={
  catFilter:[]
}

const filterSlice = createSlice({
  name:'filter',
  initialState,
  reducers:{
    handleCat:(state, action)=>{
      let x = false;

      for (let i = 0; i < state.catFilter.length; i++) {
        if (state.catFilter[i] === action.payload) {
          state.catFilter.splice(i,1)
          x = true;
        }
      }

      if (!x) {
        state.catFilter.push(action.payload)
      }
    }
  }
})

export const {handleCat} = filterSlice.actions;
export default filterSlice.reducer