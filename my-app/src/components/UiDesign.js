
import React, { useEffect, useState } from "react";
import JobsListing from './JobsListing';
import "../css/Jobs.css";
import axios from "axios";
import SpecificJob from './SpecificJob';

const UiDesign = () => {
    const [uiJobs, setUiJobs] = useState([]);

    useEffect(() =>{
        getData()
     },[])

    const getData = () =>{
        axios({
            method: 'get',
            baseURL: 'http://localhost:3000',
            responseType: 'json',
            url: '/gigsLookUp/design',
         })
         .then(function(response){
            console.log(response.data)
            setUiJobs(response.data.gigsResults);
            console.log(uiJobs)
         })

    }

    
 
  return (  
      <div className='container'>
                    
        <h1 className='header'>UI/UX Design</h1>
            <p className='job-listing'>
                Welcome to the UI/UX Design page! Here, you can find the latest job opportunities related to
                UI/UX design, web development, and other tech-related positions.
            </p>
            {uiJobs ? uiJobs.map(item =>
            <SpecificJob key = {item._id} jobTitle = {item.jobname} jobDesc = {item.description} payment = {item.pay} />) : null
            }
            <p className='job-listing'>
                Our platform regularly updates job listings from top companies and startups, providing you
                with a centralized place to discover your dream job. Whether you're looking for entry-level
                positions or senior roles, we've got you covered.
            </p>
        
            <div>
            <p className='footer'>
                Make sure to check back frequently as new job postings are added regularly. Good luck with
                your job search!
            </p>
        </div>
         </div>
    );

};


export default UiDesign;