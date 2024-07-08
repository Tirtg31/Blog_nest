import { createSlice } from "@reduxjs/toolkit";
/*
authSlice is for tracking authentication. Whether the user is authenticated or not,
im gonna ask the store.
*/
const initialState = {
  status: false, //user isnt authenticated initially
  userData: null, // i dont have any user data initially
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData; //In React Redux, an action's payload is the data that's needed to update an application's state
    },
    logout: (state, action) => {
      state.status = false;
      state.userData = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
