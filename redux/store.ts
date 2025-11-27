import { configureStore } from "@reduxjs/toolkit";
import { pomodoroReducers } from "./pomodoro/slice";
import { listenerMiddleware } from "./pomodoro/listener";

export const store = configureStore({
  reducer: {
    pomodoro: pomodoroReducers,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().prepend(listenerMiddleware.middleware);
  },
});

// Exporting types for usage of redux store and slice
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
