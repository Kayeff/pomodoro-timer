"use client";
import { useContext } from "react";
import { PomodoroCtx } from "@/context/PomodoroContext";

export default function Timer() {
  const {
    remainingTime,
    startTimer,
    isStarted,
    pauseTimer,
    isPaused,
    resetTimer,
  } = useContext(PomodoroCtx);

  const mins = Math.floor(remainingTime / 60000)
    .toString()
    .padStart(2, "0");
  const secs = Math.floor((remainingTime % 60000) / 1000)
    .toString()
    .padStart(2, "0");

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
        {isStarted ? (
          <>
            <button
              onClick={pauseTimer}
              className="w-max bg-foreground text-background px-4 py-1.5 cursor-pointer"
            >
              {isPaused ? "Resume" : "Pause"}
            </button>
            <button
              onClick={resetTimer}
              className="w-max bg-foreground text-background px-4 py-1.5 cursor-pointer"
            >
              Reset
            </button>
          </>
        ) : (
          <button
            onClick={startTimer}
            className="w-max bg-foreground text-background px-4 py-1.5 cursor-pointer"
          >
            Start
          </button>
        )}
      </div>
    </div>
  );
}
