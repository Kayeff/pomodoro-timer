"use client";
import { createContext, ReactNode, useEffect, useState } from "react";

export const tabs = {
  focus: {
    name: "Focus",
    timer: 1500000,
  },
  shortBreak: {
    name: "Short break",
    timer: 300000,
  },
  longBreak: {
    name: "Long break",
    timer: 600000,
  },
} as const;

export type TabKey = keyof typeof tabs;
export type Tab = (typeof tabs)[TabKey];
export type PomodoroContextType = {
  currentTab: Tab;
  isStarted: boolean;
  isPaused: boolean;
  remainingTime: number;
  startTimer: () => void;
  pauseTimer: () => void;
  resetTimer: () => void;
  changeTab: (value: TabKey) => void;
};

export const PomodoroCtx = createContext<PomodoroContextType>({
  isStarted: false,
  isPaused: false,
  currentTab: tabs.focus,
  remainingTime: tabs.focus.timer,
  changeTab: () => {},
  startTimer: () => {},
  resetTimer: () => {},
  pauseTimer: () => {},
});

export default function PomodoroContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [currentTab, setCurrentTab] = useState<Tab>(tabs.focus);
  const [remainingTime, setRemainingTime] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    setRemainingTime(currentTab.timer);
  }, [currentTab]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (isStarted && !isPaused) {
          return prevTime > 0 ? prevTime - 1000 : prevTime;
        } else return prevTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isStarted, isPaused]);

  function changeTab(value: TabKey) {
    setCurrentTab(tabs[value]);
    setIsStarted(false);
    setIsPaused(false);
  }

  function startTimer() {
    setIsStarted(true);
  }

  function pauseTimer() {
    setIsPaused((prev) => !prev);
  }

  function resetTimer() {
    setIsStarted(false);
    setRemainingTime(currentTab.timer);
  }

  const ctx = {
    currentTab,
    changeTab,
    remainingTime,
    startTimer,
    isStarted,
    resetTimer,
    pauseTimer,
    isPaused,
  };

  return <PomodoroCtx.Provider value={ctx}>{children}</PomodoroCtx.Provider>;
}
