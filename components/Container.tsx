// import Pomodoro from "./usingContext/Pomodoro";
import Pomodoro from "./usingRedux/Pomodoro";

// Pomodoro Container
export default function Container() {
  return (
    <div className="border border-foreground/20 w-full p-4 flex items-center justify-center">
      <Pomodoro />
    </div>
  );
}
