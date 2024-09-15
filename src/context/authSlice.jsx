import { createSlice } from "@reduxjs/toolkit";

const loaderUserStorage = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};
const initialState = {
  user: loaderUserStorage(),
};
const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },

    setLogOut: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});
export const { setUser, setLogOut } = authSlice.actions;
export default authSlice.reducer;
