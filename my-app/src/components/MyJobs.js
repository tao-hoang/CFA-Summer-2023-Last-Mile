import React, { useEffect, useState } from "react";
import JobsListing from './JobsListing';
import "../css/Jobs.css";
import axios from "axios";
import SpecificJob from './SpecificJob';
import LandingNav from "./LandingNav";
import CircularProgress from '@mui/material/CircularProgress';
import axiosRateLimit from 'axios-rate-limit';
import JobCard from "./JobCard";
const http = axiosRateLimit(axios.create(), { maxRequests: 2, perMilliseconds: 1000 });
const MyJobs = (gigIds) => {

    const[user,setUser] = useState({})
    const[gigs,setGigs] =useState([])
    const getData = async (gigIds) =>{
      try{
      const gigPromises = gigIds.map(async (x) => {
        const response = await await http.get(`http://ec2-52-91-204-97.compute-1.amazonaws.com:3000/gigbyid/${x}`);
        
        return response.data.gig;
        });

        const gigData = await Promise.all(gigPromises);
        setGigs(gigData);
      }catch(error){
        console.log(error)
      }
    }
 
    const getUser = () => {
        console.count("user load")
      if(localStorage.user){
        const parsedUser = JSON.parse(localStorage.user);
        setUser(parsedUser)
        console.log(parsedUser.gigs)
        if (parsedUser.gigs && parsedUser.gigs.length > 0) {
          getData(parsedUser.gigs);
      }
        }
      }
    useEffect(getUser,[])
    
  return (
    <div className="jobsContent">        
      <LandingNav/>
      <div className='container'>
       <h1>My Jobs</h1>
       
       {gigs.length==0?<div className="center"><CircularProgress size="60px"/></div> : 
       <div className="flexy">
        {gigs.map((item) => (
          <JobCard
          key = {item._id}
          jobTitle = {item.jobname}
          jobDesc = {item.description}
          payment = {item.pay}
          />
        ))}
        </div>
      }
         </div>
    </div>  
    );

};


export default MyJobs;