This is a Next.js project aimed to create a Pomodoro timer with state management tools like Redux & Context API.
Its only a client side project, the server will be made in the future.

## Getting Started
# First there is an implementation of timer using React Context API.

There is a file inside the root folder - context which contains all the context api state management files particularly PomodoroContext.tsx. 
In that file there contains a context which is created by createContext function provided by react. The function takes an object as the argument which is the initial state that the context uses.
Then there is a Context Provider component that provides the context to its children taken as a prop. This component contains the overall timer logic which will be used as a value named prop inside the provider - particularly ctx. The component is wrapped where the logic is needed, i.e Pomodoro Component.

# Same implementation but with Redux Toolkit.
{
  isStarted: false,
  isPaused: false,
  currentTab: tabs.focus,
  remainingTime: tabs.focus.timer,
  changeTab: () => {},
  startTimer: () => {},
  resetTimer: () => {},
  pauseTimer: () => {},
}
