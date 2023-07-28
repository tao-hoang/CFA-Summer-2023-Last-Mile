import React from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import UiDesign from './UiDesign';
import JobsListing from './JobsListing';

const App = () => {
  return (
    <Routes>
      {/* Define the route for the separate page */}
      <Route path="/ui-ux-design-page" component={UiDesign} />
      <Route path="/" component={JobsListing} />

      <div>
        <h1>UI/UX Design</h1>
            <p>
                Welcome to the UI/UX Design page! Here, you can find the latest job opportunities related to
                UI/UX design, web development, and other tech-related positions.
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
    </Routes>
  );
};

export default App;