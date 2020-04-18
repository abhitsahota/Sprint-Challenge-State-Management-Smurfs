- [x] What problem does the context API help solve?

It simplifies the state management for apps where there are common state elements required by many components or state needs to be passed along deep into the state treee.

- [x] In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions - describe the event change that the user has instructed.
Reducers - Take the information from the action and make the required changes to the state tree.
Store - holds the state. It is considered the single source of truth because any application level state is only sent and changed directly in the store, thus we must ask the store for state only and directly.

- [x] What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is state that can affect multiple components and multiple levels in the state tree. Component level state is state that constrained to a specific component and user interaction, often used as an intermediate to update component level state. It would be a good to use component level state when you need to update state just within the component or you need information to update application state but do not want to send an excessive amount of requests to the store (e.g. onChange input field).

- [x] Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk allows us to return a function from our action creator rather than just a single action object. It receives the dispatch methods and we can use promises to control logic and send the appropriate action object.
What is your favorite state management system you've learned and this sprint? Please explain why!x

- [x] What is your favorite state management system you've learned and this sprint? Please explain why!

Redux has been simple and robust to use so far. I can understand the drawbacks and complications of the redux structure in comparison to Context API but the reusability of components is a highlight of the state management system.