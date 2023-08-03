import React from 'react';
import JobsListing from './JobsListing';
import "../css/Jobs.css";

const AssetCreation = () => {
  return (  
      <div className="container">
        <h1 className='header'>Asset Creation</h1>
            <p className='job-listing'>
                Welcome to the Asset Creation page! Here, you can find the latest job opportunities related to
                Asset Creation , digital art, and more.
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

export default AssetCreation;
