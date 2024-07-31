import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./authSlice";
import KaamSlice from "./kaamSlice";

const store = configureStore({
  reducer: { auth: AuthSlice, kaams: KaamSlice },
});

export default store;
