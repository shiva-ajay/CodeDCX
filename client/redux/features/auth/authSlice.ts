import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  user: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userRegistration: (state, action: PayloadAction<{ token: string }>) => {
      state.token = action.payload.token;
      // Optionally store registration token in localStorage if needed
      localStorage.setItem("authToken", action.payload.token);
    },
    userLoggedIn: (
      state,
      action: PayloadAction<{ accessToken: string; user: string }>
    ) => {
      state.token = action.payload.accessToken;
      state.user = action.payload.user;
      // Store the token in localStorage
      localStorage.setItem("authToken", action.payload.accessToken);
      localStorage.setItem("authUser", action.payload.user);
    },
    userLoggedOut: (state) => {
      state.token = "";
      state.user = "";
      // Remove token from localStorage
      localStorage.removeItem("authToken");
      localStorage.removeItem("authUser");
    },
  },
});

export const { userRegistration, userLoggedIn, userLoggedOut } =
  authSlice.actions;

  export default authSlice.reducer;