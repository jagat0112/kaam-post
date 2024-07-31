import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  kaam: {},
  kaams: [],
};

const KaamSlice = createSlice({
  name: "kaams",
  initialState,
  reducers: {
    getKaams: (state, action) => {
      state.kaams = action.payload;
    },
    logout: (state) => {
      state.status = false;
      state.user = null;
    },
  },
});

export const { login, logout } = KaamSlice.actions;
export default KaamSlice;
