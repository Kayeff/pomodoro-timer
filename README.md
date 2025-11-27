This is a Next.js project aimed to create a Pomodoro timer with state management tools like Redux & Context API.
Its only client state implementation, the server will be made in the future.

# Getting Started
User should be able to start stop and resume a pomodoro timer.
User should be able to configure the default interval configuration; default work session should be 25 minutes, short break should be 5 minutes and longer break after 4 work sessions should be 15 minutes.
Application should display the current session type (e.g., Work, Short Break, Long Break).
It should also track the number of tracked work sessions
Play a sound when a session ends to notify the user.
Ensure the app is accessible and visually appealing on both desktop and mobile devices.


## First there is an implementation of timer using React Context API.

There is a file inside the root folder - context which contains all the context api state management files particularly PomodoroContext.tsx. 
In that file there contains a context which is created by createContext function provided by react. The function takes an object as the argument which is the initial state that the context uses.
Then there is a Context Provider component that provides the context to its children taken as a prop. This component contains the overall timer logic which will be used as a value named prop inside the provider - particularly ctx. The component is wrapped where the logic is needed, i.e Pomodoro Component.

## Same implementation but with Redux Toolkit.
The context version was pretty straightforward. Yes it does include building logic with react but with time it seems simple as React is a declarative and modular way for programming. We determine which state to manage and without any extra logic for rerendering, react does it swiftly. With managing state with Redux, it requires a significant knowledge of JavaScript / Node JS. Yes I know javascript but having worked with React for much time has changed the way I program with javascript. 
The state I managed was by creating a slice and providing an initialstate object with keys like isRunning, isPaused, activeTab, remainingTime, ms etc. The slice also takes an unique name which redux then articulates and prefixes action types which prevents name collisions in large scale apps. Then it takes a reducer object which contains the action function which is the main logic of the redux slice, i.e pomodoro. The action functions determines the way of updating the redux state when users perform some tasks where the action is provided.

### Issue arised when implementing with Redux Toolkit
As the redux slice contains the reducer logic, the catch is it should be pure. It should not contain any side effects like fetching data from backend, setting timers, performing authentication, etc. Thankfully there is a solution, when working with redux, there are middleware which performs the side effect code. Namely Redux Thunk, Redux Saga and newly listerMiddlewareApi which works best with timers. I have never implemented side effects with listenermiddleware api. So better late then never. 
It is imported from @reduxjs/toolkit with a function called createListernerMiddleware that creates an instance or an object. In this implementation, I basically worked with a method called startListening which is in the instance of the object created with createListenerMiddleware. The method takes an object which determines when the middleware runs eg in my case when an action gets dispatched by the user. Mostly two keys actionCreator and effect. The first one describes the action that should trigger the logic written in effect. 
