import React, { useEffect, useState } from "react";
import JobsListing from './JobsListing';
import "../css/Jobs.css";
import axios from "axios";
import SpecificJob from './SpecificJob';

const MobileDev = () => {

    const [mobileJobs, setMobileJobs] = useState([]);

    useEffect(() =>{ getData() },[])

    const getData = () =>{
        axios({
            method: 'get',
            baseURL: 'http://localhost:3000',
            responseType: 'json',
            url: '/jobslisting/mobile',
         })
         .then(function(response){
            console.log(response.data)
            setMobileJobs(response.data.gigsResults);
            console.log(mobileJobs)
         })

    }

  return (  
      <div className='container'>
        <h1 className='header'>Mobile App Development</h1>
            <p className='job-listing'>
                Welcome to the Mobile App Development page! Here, you can find the latest job opportunities related to
                creating mobile apps , games, and more.
            </p>

            {mobileJobs ? mobileJobs.map(item =>
            <SpecificJob key = {item._id} jobTitle = {item.jobname} jobDesc = {item.description} payment = {item.pay} />) : null
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
  );
};

export default MobileDev;