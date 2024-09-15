import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../context/authSlice";
const store = configureStore({
  reducer: authReducer,
});

export default store;
