import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import GameDesign from './GameDesign';
import JobsListing from './JobsListing';

const App = () => {
  return (
    <Switch>
      {/* Define the route for the separate page */}
      <Route path="/game-design-page" component={GameDesign} />
      <Route path="/" component={JobsListing} />

      <div>
        <h1>Game Design</h1>
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