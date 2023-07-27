import React from 'react';
import { Link } from "react-router-dom";
import { Route, Switch } from 'react-router-dom';
import AssetCreation from './AssetCreation';
import JobsListing from './JobsListing';
import LandingPage from './LandingPage';

const App = () => {
  return (
    <Switch>
      {/* Define the route for the separate page */}
      <Route path="/asset-design-page" component={AssetCreation} />
      <Route path="/" component={JobsListing} />
      <Route path="/" component={LandingPage} />

      <div>
        <h1>Asset Creation</h1>
            <p>
                Welcome to Web Design! Here, you can find the latest job opportunities related to
                web design, web development, and other tech-related positions.
            </p>
            <p>
                Our platform regularly updates job listings from top companies and startups, providing you
                with a centralized place to discover your dream job. Whether you're looking for entry-level
                positions or senior roles, we've got you covered.
            </p>
            <p>
                Make sure to check back frequently as new job postings are added regularly. Good luck with
                your job search!
            </p>
        </div>
    </Switch>
  );
};

export default App;