import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../store";

const storeTab = (state: RootState) => state.pomodoro.activeTab;
const storeMs = (state: RootState) => state.pomodoro.ms;
const storeRemainingTime = (state: RootState) => state.pomodoro.remainingTime;
const storeIsRunning = (state: RootState) => state.pomodoro.isRunning;
const storeIsPaused = (state: RootState) => state.pomodoro.isPaused;

export const selectedTab = createSelector(storeTab, (activeTab) => activeTab);
export const selectedMs = createSelector(storeMs, (activeTab) => activeTab);
export const selectedIsRunning = createSelector(
  storeIsRunning,
  (activeTab) => activeTab
);
export const selectedIsPaused = createSelector(
  storeIsPaused,
  (activeTab) => activeTab
);
export const selectedRemainingTime = createSelector(
  storeRemainingTime,
  (activeTab) => activeTab
);
