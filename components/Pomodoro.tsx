import TopTabs from "./TopTabs";
import Timer from "./Timer";
import PomodoroContextProvider from "@/context/PomodoroContext";

export default function Pomodoro() {
  return (
    <div className="flex flex-col gap-4">
      <PomodoroContextProvider>
        <TopTabs />
        <Timer />
      </PomodoroContextProvider>
    </div>
  );
}
