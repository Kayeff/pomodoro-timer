import { configureStore } from "@reduxjs/toolkit";
import { pomodoroReducers } from "./pomodoro/slice";

export const store = configureStore({
  reducer: {
    pomodoro: pomodoroReducers,
  },
});

// Exporting types for usage of redux store and slice
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
