import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  user: {},
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.status = false;
      state.user = null;
    },
  },
});

export const { login, logout } = AuthSlice.actions;
export default AuthSlice;
