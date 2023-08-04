import React from 'react';
import JobsListing from './JobsListing';
import "../css/Jobs.css";

const GameDesign = () => {
  return (  
      <div className="container">
        <h1 className="header">Game Design</h1>
            <p className="job-listing">
                Welcome to the Game Design page! Here, you can find the latest job opportunities related to
                Game Design and how to make your own game.
            </p>
            <p className="job-listing">
                Our platform regularly updates job listings from top companies and startups, providing you
                with a centralized place to discover your dream job. Whether you're looking for entry-level
                positions or senior roles, we've got you covered.
            </p>
            <p className="footer"> 
                Make sure to check back frequently as new job postings are added regularly. Good luck with
                your job search!
            </p>
        </div>
  );
};

export default GameDesign;