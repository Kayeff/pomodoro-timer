import Container from "./Container";
import Heading from "./Heading";

// Container for Pomodoro Timer.
export default function Section() {
  return (
    <div className="w-full flex flex-col font-mono">
      <Heading />
      <Container />
    </div>
  );
}
