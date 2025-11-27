import { createListenerMiddleware } from "@reduxjs/toolkit";
import {
  pausePomodoro,
  resetPomodoro,
  resumePomodoro,
  startPomodoro,
  tick,
} from "./slice";
import { RootState } from "../store";

export const listenerMiddleware = createListenerMiddleware();
let intervalID: NodeJS.Timeout | null = null;

function clearPreviousInterval() {
  if (intervalID) clearInterval(intervalID);
  intervalID = null;
}

// Listener middleware for starting pomodoro
listenerMiddleware.startListening({
  actionCreator: startPomodoro,
  effect: async (action, listenerApi) => {
    const { getState, dispatch } = listenerApi;
    clearPreviousInterval();

    intervalID = setInterval(() => {
      const state = getState() as RootState;
      const { remainingTime, isPaused, isRunning } = state.pomodoro;

      if (!isRunning || isPaused) return;

      if (remainingTime <= 0) {
        clearPreviousInterval();
        dispatch(resetPomodoro());
        return;
      }

      dispatch(tick());
    }, 1000);
  },
});

// Listener middleware for pausing pomodoro
listenerMiddleware.startListening({
  actionCreator: pausePomodoro,
  effect: async (action, listenerApi) => {
    clearPreviousInterval();
  },
});

// Listener middleware for pausing pomodoro
listenerMiddleware.startListening({
  actionCreator: resumePomodoro,
  effect: async (action, listenerApi) => {
    if (!intervalID) {
      intervalID = setInterval(() => {
        listenerApi.dispatch(tick());
      }, 1000);
    }
  },
});

// Listener middleware for resetting pomodoro
listenerMiddleware.startListening({
  actionCreator: resetPomodoro,
  effect: async (action, listenerApi) => {
    clearPreviousInterval();
  },
});
