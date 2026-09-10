Dev Stack Builder

Dev Stack Builder is a responsive React website that allows developers to explore different technologies and build their own development stack based on their project needs.

Technologies Used
React.js
TypeScript
Tailwind CSS
DaisyUI
React Toastify
JSON
Vite
Features
Explore different development technologies.
Add and remove technologies from a personal development stack.
Responsive design with loading state and toast notifications.
React Questions & Answers

1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript. It is used in React to create and describe the user interface easily.

2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is data managed inside a component that can change over time and update the UI.

3. What does the useState hook do, and where did you use it in this project?

The useState hook is used to create and manage state in a React component. In this project, I used it to store the technology data and the technologies selected in the user's stack.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

The useEffect hook is used to run side effects after a component renders. I used it to fetch and load the technology data from the technologies.json file when the application loads.

5. Why does every item in a .map() list need a unique key prop?

React needs a unique key to identify each item in a list. It helps React efficiently track and update the correct items when the list changes.

6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition. In this project, I used it to show the empty stack message when no technology has been selected.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component can pass data to a child component through props. A child can send information back by calling a function that the parent passes to it as a prop.

Author

Md. Sumon
