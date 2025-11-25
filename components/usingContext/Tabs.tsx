"use client";
import { PomodoroCtx, tabs } from "@/context/PomodoroContext";
import { useContext } from "react";
import { twMerge } from "tailwind-merge";

export default function Tabs({ title }: { title: string }) {
  const { currentTab, changeTab } = useContext(PomodoroCtx);

  function handleClick(title: string) {
    if (tabs.focus.name === title) {
      changeTab("focus");
    } else if (tabs.shortBreak.name === title) {
      changeTab("shortBreak");
    } else if (tabs.longBreak.name === title) {
      changeTab("longBreak");
    }
  }

  return (
    <li
      className={twMerge(
        "w-max border border-foreground/50 flex items-center justify-center",
        currentTab.name === title && "bg-foreground text-background font-medium"
      )}
    >
      <button
        onClick={() => handleClick(title)}
        className="w-full text-center cursor-pointer px-3 py-1"
      >
        {title}
      </button>
    </li>
  );
}
