import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LoginForm from './components/LoginForm';

import reportWebVitals from './reportWebVitals';
import RegUI from './components/RegUI1';
import RegUI2 from './components/RegUI2';
import ErrorPage404 from './components/ErrorPage404';
import ErrorPage500 from './components/ErrorPage500';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/", // This is the relative URL path which users can bookmark and navigate to
    element: <App />, // This is the React Component to load when navigating to the associated path URL
    // errorElement: <ErrorPage />, // This is a React Component to load when a URL is invalid or something goes wrong
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/register",
    element: <RegUI />
  },
  {
    path: "/register2",
    element: <RegUI2 />
  },
  {
    path: "/error404",
    element: <ErrorPage404 />
  },
  {
    path: "/error500",
    element: <ErrorPage500 />
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();