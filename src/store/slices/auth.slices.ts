import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "store";

interface AuthState {
  token: string;
}

const initialState: AuthState = {
  token: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    removeToken: (state) => {
      state.token = "";
    },
  },
});

const { setToken, removeToken } = authSlice.actions;

export { setToken, removeToken };

export const selectToken = (state: RootState) => state.auth.token;

export default authSlice.reducer;
