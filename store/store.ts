import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import storageSession from "reduxjs-toolkit-persist/lib/storage/session";
import { persistReducer, persistStore } from "redux-persist";
import { ipAdressesApi } from "../services/ipAdresses";
import locationSlice from "../features/location/locationSlice";

const persistConfig = {
  key: "location",
  storage: storageSession,
};

const persistedReducer = persistReducer(persistConfig, locationSlice);

export const store = configureStore({
  reducer: {
    location: persistedReducer,
    [ipAdressesApi.reducerPath]: ipAdressesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ipAdressesApi.middleware),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
