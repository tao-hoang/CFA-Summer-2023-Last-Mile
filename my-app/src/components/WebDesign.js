import React, { useEffect, useState } from "react";
import JobsListing from './JobsListing';
import "../css/Jobs.css";
import axios from "axios";
import SpecificJob from './SpecificJob';
import LandingNav from "./LandingNav";

const WebDesign = () => {
    const [webJobs, setWebJobs] = useState([]);

    useEffect(() =>{
        getData()
     },[])

    const getData = () =>{
        axios({
            method: 'get',
            baseURL: 'http://ec2-52-91-204-97.compute-1.amazonaws.com:3000',
            responseType: 'json',
            url: '/jobslisting/design',
         })
         .then(function(response){
            console.log(response.data)
            setWebJobs(response.data.gigsResults);
            console.log(webJobs)
         })

    }


  return (  
    <div className='landingBodyContainer'>
    <LandingNav showLinks="true" />
    <div className='landingBody'>
      <div className='container'>
        <h1 className='header'>Web Design</h1>
            <p className='job-listing'>
                Welcome to the Web Design page! Here, you can find the latest job and course opportunities related to
                Web Design where skills in HTML, CSS, and Javascript can be learned; or if you already have the skills apply!
            </p>

            {webJobs ? webJobs.map(item =>
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
        </div>
        </div>
  );
};

export default WebDesign;