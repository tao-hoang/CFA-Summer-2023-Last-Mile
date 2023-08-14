import React, { useEffect, useState } from "react";
import JobsListing from './JobsListing';
import "../css/Jobs.css";
import axios from "axios";
import SpecificJob from './SpecificJob';
import LandingNav from "./LandingNav";

const CyberSecurity = () => {
    const [cyberJobs, setCyberJobs] = useState([]);

    useEffect(() =>{
        getData()
     },[])

    const getData = () =>{
        axios({
            method: 'get',
            baseURL: 'http://ec2-3-95-155-67.compute-1.amazonaws.com:3000',
            responseType: 'json',
            url: '/jobslisting/Security',
         })
         .then(function(response){
            console.log(response.data)
            setCyberJobs(response.data.gigsResults);
            console.log(cyberJobs)
         })

    }

  return (  
    <div className='landingBodyContainer'>
    <LandingNav showLinks="true" />
    <div className='landingBody'>
      <div className='container'>
        <h1 className='header'>Cyber Security</h1>
            <p className='job-listing'>
                Welcome to the Cyber Security page! Here, you can find the latest job opportunities related to
                Cyber Security , ways to combat cyber attacks, and more.
            </p>

            {cyberJobs ? cyberJobs.map(item =>
            <SpecificJob key = {item._id} jobTitle = {item.jobname} jobDesc = {item.description} payment = {item.pay} remote ={item.remote} duration = {item.duration} employer = {item.employer} />) : null
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

export default CyberSecurity;