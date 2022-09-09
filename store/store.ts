import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { ipAdressesApi } from "../services/ipAdresses";

export const store = configureStore({
  reducer: {
    [ipAdressesApi.reducerPath]: ipAdressesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ipAdressesApi.middleware),
});

setupListeners(store.dispatch);
