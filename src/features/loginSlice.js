import { createSlice } from "@reduxjs/toolkit";

const initLog = false;

const loginSlice = createSlice({
  name:'login',
  initialState:{value:initLog},
  reducers:{
    login:(state,actions)=>{
      state.value = actions.payload
    }
  }
})

export const {login} = loginSlice.actions;
export default loginSlice.reducer;
