import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "store";
import User from "declares/models/user.model";

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
  },
});

const { setUser } = authSlice.actions;
export const userActions = { setUser };

const selectUser = (state: RootState) => state.user.user;
export const userSelector = { selectUser };

export default authSlice.reducer;
