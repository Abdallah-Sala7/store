import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  wishListItems:[]
}

const wishSlice = createSlice({
  name:'wish',
  initialState,
  reducers:{
    addToWish:(state, action) =>{
      const itemIndex = state.wishListItems.findIndex(
        item => item.id === action.payload.id
      )

      if(itemIndex < 0){
        state.wishListItems.push(action.payload)
      }
    },
    removeFromWish:(state, action) =>{
      state.wishListItems = state.wishListItems.filter(item => item.id != action.payload)
    }
  }
})

export const {addToWish, removeFromWish} = wishSlice.actions
export default wishSlice.reducer 