import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user";
import { propertiesApi } from "./services/properties";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userApi } from "./services/user";
import { filesApi } from "./services/files";

const store = configureStore({
  reducer: {
    user: userReducer,
    [propertiesApi.reducerPath]: propertiesApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [filesApi.reducerPath]: filesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(propertiesApi.middleware, userApi.middleware, filesApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
