import React, { useEffect, useState } from "react";
import JobsListing from './JobsListing';
import "../css/Jobs.css"; // Import your CSS file here
import axios from "axios";
import SpecificJob from './SpecificJob';
import LandingNav from "./LandingNav";

const AssetCreation = () => {
    const [assetJobs, setAssetJobs] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axios({
            method: 'get',
            baseURL: 'http://localhost:3000',
            responseType: 'json',
            url: '/jobslisting/design',
        })
        .then(function(response) {
            console.log(response.data);
            setAssetJobs(response.data.gigsResults);
            console.log(assetJobs);
        });
    };

    return (  
        <div className='landingBodyContainer'>
            <LandingNav showLinks="true" />
            <div className='landingBody'>
                    <div className="container">
                        <h1 className='header'>Asset Creation</h1>
                        <p className='job-listing'>
                            Welcome to the Asset Creation page! Here, you can find the latest job opportunities related to
                            Asset Creation , digital art, and more.
                        </p>

                        {assetJobs ? assetJobs.map(item =>
                            <SpecificJob key={item._id} jobTitle={item.jobname} jobDesc={item.description} payment={item.pay} />) : null
                        }

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
                </div>
            </div>
    );
};

export default AssetCreation;

