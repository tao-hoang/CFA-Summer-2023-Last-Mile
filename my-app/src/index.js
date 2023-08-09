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
import AssetCreation from './components/AssetCreation';
import CustomerSupport from './components/CustomerSupport';
import DataAnalytics from './components/DataAnalytics';
import GameDesign from './components/GameDesign';
import ITSupport from './components/ITSupport';
import MobileDev from './components/MobileDev';
import SoftwareDev from './components/SoftwareDev';
import UiDesign from './components/UiDesign';
import WebDesign from './components/WebDesign';
import CyberSecurity from "./components/CyberSecurity";
import Homepage from './components/Homepage';
import ProfileCreation from './components/ProfileCreation';
import SearchItem from './components/SearchItem';
import { JobProvider } from './components/JobContext';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import JobsListing from './components/JobsListing';
import MyJobs from './components/MyJobs';

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
    path: "/jobslisting",
    element: <JobsListing />,
  },
  {
    path: "/homepage",
    element: <Homepage />,
  },
  {
    path: "/*",
    element: <ErrorPage404 />
  },
  {
    path: "/error500",
    element: <ErrorPage500 />
  },
  {
  path: "/uidesign",
  element: <UiDesign />
},
{
  path: "/assetcreation",
  element: <AssetCreation />
},
{
  path: "/customersupport",
  element: <CustomerSupport />
},
{
  path: "/cybersecurity",
  element: <CyberSecurity />
},
{
  path: "/dataanalytics",
  element: <DataAnalytics />
},
{
  path: "/gamedesign",
  element: <GameDesign />
},
{
  path: "/itsupport",
  element: <ITSupport />
},
{
  path: "/mobiledev",
  element: <MobileDev />
},
{
  path: "/softwaredev",
  element: <SoftwareDev />
},
{
  path: "/webdesign",
  element: <WebDesign />
},
{
  path:"/profilecreation",
  element:<ProfileCreation/>
},
{
  path:"/SearchItem",
  element: <SearchItem/>
},
{
  path:"/myjobs",
  element:<MyJobs/>
}
  

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <JobProvider>
    <RouterProvider router={router} />
    </JobProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();