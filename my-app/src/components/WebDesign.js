import React from 'react';
import JobsListing from './JobsListing';
import "../css/Jobs.css";

const WebDesign = () => {
  return (  
      <div className='container'>
        <h1 className='header'>Web Design</h1>
            <p className='job-listing'>
                Welcome to the Web Design page! Here, you can find the latest job and course opportunities related to
                Web Design where skills in HTML, CSS, and Javascript can be learned; or if you already have the skills apply!
            </p>
            <p className='job-listing'>
                Our platform regularly updates job listings from top companies and startups, providing you
                with a centralized place to discover your dream job. Whether you're looking for entry-level
                positions or senior roles, we've got you covered.
            </p>
            <p className='footer'>
                Make sure to check back frequently as new job postings are added regularly. Good luck with
                your job search!
            </p>
        </div>
  );
};

export default WebDesign;