import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUserResponse } from "../../shared/interfaces/user";

const userSlice = createSlice({
  name: "properties",
  initialState: {} as IUserResponse,
  reducers: {
    setUser: (state, action: PayloadAction<IUserResponse>) => {
      state = action.payload;
      return state;
    },
  },
});

export const actions = userSlice.actions;
export default userSlice.reducer;
