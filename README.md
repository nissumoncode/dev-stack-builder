Dev Stack Builder

Dev Stack Builder is a responsive React website that helps developers explore modern development technologies and build a personalized technology stack based on their project needs.

Technologies Used
React.js
TypeScript
Tailwind CSS
DaisyUI
React Toastify
JSON
Vite
Features
Explore frontend, backend, database, language, styling, DevOps, and development tools.
Add and remove technologies from a personal development stack without duplicates.
Responsive design with loading state and toast notifications for user actions.
React Questions & Answers

1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript. It is used in React to create and describe the user interface in a simple and readable way.

2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is data managed inside a component that can change over time and update the UI.

3. What does the useState hook do, and where did you use it in this project?

The useState hook is used to create and manage state in a React component. In this project, I used it to store the technology data, loading state, and the technologies selected in the user's stack.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

The useEffect hook is used to perform side effects after a component renders. I used it to fetch and load the technology data from technologies.json when the application loads.

5. Why does every item in a .map() list need a unique key prop?

React needs a unique key to identify each item in a list. It helps React efficiently track and update the correct items when the list changes.

6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition. In this project, I used it to show the empty stack message when no technology has been selected and to display the loading state while the JSON data is being fetched.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component can pass data to a child component through props. A child can send information back by calling a function that the parent passes to it as a prop.

Common FAQ

1. Where can we deploy the site?

The site can be deployed on any hosting platform, such as Netlify, Vercel, Cloudflare Pages, or any other suitable host. There is no fixed platform requirement.

2. Do we have to use TypeScript?

No. TypeScript or JavaScript can be used. Both are allowed for this project.

3. Can we change the title, logo, and colors?

Yes. The project title, logo, and color scheme can be customized as long as they are relevant to the project. Random or unrelated colors, titles, or logos should not be used.

4. Where do we get the technology logos/icons?

Technology logos can be taken from image URLs available online. Sources such as TechIcons can be used to find clean technology icons and their URLs.

Project Links
GitHub Repository: https://github.com/nissumoncode/dev-stack-builder
Live Site: https://lively-begonia-15dc73.netlify.app/
Author

Md. Sumon
