import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Location = { value: string; key: string };

export interface LocationState {
  locations: Location[];
}

const initialState: LocationState = {
  locations: [],
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Location>) => {
      state.locations.push(action.payload);
    },
  },
});

export const { add } = locationSlice.actions;

export default locationSlice.reducer;
