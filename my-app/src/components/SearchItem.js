import React, { useEffect, useState } from "react";
import SpecificJob from './SpecificJob';
import { useJobContext } from './JobContext';
import LandingNav from "./LandingNav";

function SearchItem() {
    const { selectedJob } = useJobContext();
  return (
    <div className="searchItemBody">
    <LandingNav showLinks="true"/>
    <div className="container">
    <h1 className="header">Job Search Result</h1>
    <p className="job-listing">
        Search Results!
    </p>

    {selectedJob && (
        <SpecificJob
            key={selectedJob._id}
            jobTitle={selectedJob.jobname}
            category={selectedJob.category}
            duration={selectedJob.duration}
            jobDesc={selectedJob.description}
            remote={selectedJob.remote}
            payment={selectedJob.pay}
            employer={selectedJob.employer}

        />
    )}
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
        </div>  
  );
};

export default SearchItem