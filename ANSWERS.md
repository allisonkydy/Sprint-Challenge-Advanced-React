- [ ] Why would you use class component over function components (removing hooks from the question)?

Class components allow you to set state and pass that state around to other components via props. They also can contian logic that responds to user interaction and can change how components are rendered based on state updates. Purely functional components (before hooks were introduced) cannot be used to store state or manage stateful logic. 

Even with the introduction of hooks in functional components, it's still useful to learn about class components because a lot of legacy code is written using class components and companies may be slow to transition due to the cost of refactoring (for example).

- [ ] Name three lifecycle methods and their purposes.

1. componentDidMount() -- called once after the render method during the mounting phase. Useful for performing actions like fetching data from an API to set some initial state with data that needs to be displayed when the page first loads.

2. componentDidUpdate() -- called every time the props or state changes and after a re-render of the component. Useful for changing data being displayed based on user interaction.

3. componentWillUnmount() -- called right before the component is unmounted from the DOM. Useful for cleanup, such as canceling network requests, timers, or subscriptions created in componentDidMount().

- [ ] What is the purpose of a custom hook?

A custom hook allows you to resue common stateful logic and non-viusual behavior in and across components. They keep code D.R.Y. so you don't have to rewrite the same stateful logic over and over again. Example applications include handling controlled inputs and managing event listeners.

- [ ] Why is it important to test our apps?

Testing is essential for software quality. It minimizes the appearane of bugs in our code and forces us to think about edge cases while writing code which results in better, more testable code. Writing tests also improves maintainability because tests can act as a safety net while refactoring and can act as documentation. There are also risks to not testing; bugs and edge cases take longer to discover, codebases become more expensive to maintain and are less documented, refactoring become more error-prone, and teams can get bogged down by bugs and regressions later in the product's life.
