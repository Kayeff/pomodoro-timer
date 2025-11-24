import { createSlice } from "@reduxjs/toolkit";

const timers = {
  focus: 1500000,
  shortBreak: 300000,
  longBreak: 600000,
};

const initialState = {
  activeTab: "Focus",
  ms: timers.focus,
  isRunning: false,
};

const pomodoroSlice = createSlice({
  initialState,
  name: "pomodoro-slice",
  reducers: {},
});

export const pomodoroAction = pomodoroSlice.actions;
export const pomodoroReducers = pomodoroSlice.reducer;
