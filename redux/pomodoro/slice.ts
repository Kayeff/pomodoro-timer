import { createSlice } from "@reduxjs/toolkit";
import { initialStateT } from "../types/types";

const timers = {
  ["Focus"]: 1500000,
  ["Short break"]: 300000,
  ["Long break"]: 600000,
};

const initialState: initialStateT = {
  activeTab: "Focus",
  ms: timers["Focus"],
  remainingTime: timers["Focus"],
  isRunning: false,
  isPaused: false,
};

const pomodoroSlice = createSlice({
  initialState,
  name: "pomodoro",
  reducers: {
    changeTab(state, action) {
      const selection = action.payload;
      state.activeTab = selection;
      state.ms = timers[selection as keyof typeof timers];
      state.remainingTime = timers[selection as keyof typeof timers];
      state.isRunning = false;
      state.isPaused = false;
    },
    startPomodoro(state) {
      state.isRunning = true;
    },
    tick(state) {
      state.remainingTime -= 1000;
    },
    pausePomodoro(state) {
      state.isPaused = true;
    },
    resumePomodoro(state) {
      state.isPaused = false;
    },
    resetPomodoro(state) {
      state.isPaused = false;
      state.isRunning = false;
      state.remainingTime = state.ms;
    },
  },
});

export const {
  changeTab,
  pausePomodoro,
  resetPomodoro,
  startPomodoro,
  tick,
  resumePomodoro,
} = pomodoroSlice.actions;
export const pomodoroReducers = pomodoroSlice.reducer;
