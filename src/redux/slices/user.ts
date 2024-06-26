import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUserResponse } from "../../shared/interfaces/user";

enum StatusAction {
  ERROR = "error",
  SUCCESS = "success",
}
const initialState = {
  user: {} as IUserResponse,
  notification: { text: "", type: StatusAction.SUCCESS },
};

const userSlice = createSlice({
  name: "properties",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUserResponse>) => {
      state.user = action.payload;
      return state;
    },
    addSuccessNotification: (state, actions: PayloadAction<string>) => {
      state.notification = { text: actions.payload, type: StatusAction.SUCCESS };
      return state;
    },
    addErrorNotification: (state, actions: PayloadAction<string>) => {
      state.notification = { text: actions.payload, type: StatusAction.ERROR };
      return state;
    },
    clearNotification: (state) => {
      state.notification = initialState.notification;
      return state;
    },
  },
});

export const actions = userSlice.actions;
export default userSlice.reducer;
