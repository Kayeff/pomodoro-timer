import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "./store";

const storeTab = (state: RootState) => state.pomodoro.activeTab;
const storeMs = (state: RootState) => state.pomodoro.ms;
const storeIsRunning = (state: RootState) => state.pomodoro.isRunning;

export const selectedTab = createSelector(storeTab, (activeTab) => activeTab);
export const selectedMs = createSelector(storeMs, (activeTab) => activeTab);
export const selectedIsRunning = createSelector(
  storeIsRunning,
  (activeTab) => activeTab
);
