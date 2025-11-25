"use client";

import {
  selectedIsPaused,
  selectedIsRunning,
  selectedRemainingTime,
} from "@/redux/pomodoro/selector";
import {
  pausePomodoro,
  resetPomodoro,
  startPomodoro,
} from "@/redux/pomodoro/slice";
import { AppDispatch } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

export default function Timer() {
  const dispatch = useDispatch<AppDispatch>();

  const timer = useSelector(selectedRemainingTime);
  const isRunning = useSelector(selectedIsRunning);
  const isPaused = useSelector(selectedIsPaused);

  const mins = Math.floor(timer / 60000)
    .toString()
    .padStart(2, "0");
  const secs = Math.floor((timer % 60000) / 1000)
    .toString()
    .padStart(2, "0");

  function start() {
    dispatch(startPomodoro());
  }

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <div className="border border-foreground/50 w-full flex items-center justify-center gap-2 py-4">
        <h1 className="font-mono font-medium tracking-tight text-7xl">
          {mins}
        </h1>
        <p className="font-mono font-medium tracking-tight text-7xl">:</p>
        <h1 className="font-mono font-medium tracking-tight text-7xl">
          {secs}
        </h1>
      </div>

      <div className="w-full flex items-center justify-center gap-2">
        {isRunning ? (
          <>
            <button
              onClick={() => dispatch(pausePomodoro())}
              className="w-max bg-foreground text-background px-4 py-1.5 cursor-pointer"
            >
              {isPaused ? "Resume" : "Pause"}
            </button>
            <button
              onClick={() => dispatch(resetPomodoro())}
              className="w-max bg-foreground text-background px-4 py-1.5 cursor-pointer"
            >
              Reset
            </button>
          </>
        ) : (
          <button
            onClick={start}
            className="w-max bg-foreground text-background px-4 py-1.5 cursor-pointer"
          >
            Start
          </button>
        )}
      </div>
    </div>
  );
}
