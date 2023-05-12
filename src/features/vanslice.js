import { createSlice } from "@reduxjs/toolkit";

const initVan = [];

const vanSlice = createSlice({
  name:'vans',
  initialState:{value:{van:initVan}},
  reducers:{
    fetching:(state,actions)=>{
      state.value.van = actions.payload
    }
  }
})

export const {fetching} = vanSlice.actions;
export default vanSlice.reducer;
