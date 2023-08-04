import React from 'react';
import JobsListing from './JobsListing';
import "../css/Jobs.css";

const SoftwareDev = () => {
  return (  
      <div className='container'>
        <h1 className='header'>Software Development</h1>
            <p className='job-listing'>
                Welcome to the Software Development page! Here, you can find the latest job opportunities related to
                making software applications , how they work, and more.
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

export default SoftwareDev;