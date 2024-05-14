import { combineReducers, configureStore } from "@reduxjs/toolkit";
import propertiesReducer from "./slices/properties";
import { propertiesApi } from "./services/properties";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: { ...combineReducers(propertiesReducer), [propertiesApi.reducerPath]: propertiesApi.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(propertiesApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
