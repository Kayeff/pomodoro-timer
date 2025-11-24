import Tabs from "./Tabs";

export default function TopTabs() {
  return (
    <ul className="w-full flex items-center justify-center gap-3">
      <Tabs title="Focus" />
      <Tabs title="Short break" />
      <Tabs title="Long break" />
    </ul>
  );
}
