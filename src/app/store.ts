import customerReducer from "../features/customerSlice.ts";
import reservationReducer from "../features/reservationSlice.ts";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    reservation: reservationReducer,
    customer: customerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
