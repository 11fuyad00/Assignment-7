# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.






# React Basic Q&A

1. What is JSX, and why is it used?
 

JSX hocche JS er moddhe HTML lekhar moto syntax, React-e UI easily bananor jonno. (JSX = JS + HTML, UI banate shohoj)


2. What is the difference between State and Props?  


State hocche component-er nijer data, Props hocche parent theke child component-e pathano data. (State = nijer data, Props = parent theke data)


3. What is the useState hook, and how does it work? 

useState hocche React hook ja component-er state create & update korte use hoy. (useState = state + update function)


4. How can you share state between components in React?

State share korte parent component e state rakhe, tarpor props diye child component-e pathano hoy. (Parent state → child props)

5. How is event handling done in React?

React-e event handling JS function diye hoy, event attribute camelCase use kore. (onClick, onChange etc.)