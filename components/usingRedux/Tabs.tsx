"use client";
import { selectedTab } from "@/redux/pomodoro/selector";
import { changeTab } from "@/redux/pomodoro/slice";
import { useDispatch, useSelector } from "react-redux";
import { twMerge } from "tailwind-merge";

export default function Tabs({ title }: { title: string }) {
  const dispatch = useDispatch();
  const currentTab = useSelector(selectedTab);
  const isActive = currentTab.toLowerCase() === title.toLowerCase();

  function handleClick(title: string) {
    dispatch(changeTab(title));
  }

  return (
    <li
      className={twMerge(
        "w-max border border-foreground/50 flex items-center justify-center",
        isActive && "bg-foreground text-background font-medium"
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
