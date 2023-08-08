import React, { useEffect, useState } from "react";
import JobsListing from './JobsListing';
import "../css/Jobs.css";
import axios from "axios";
import SpecificJob from './SpecificJob';
import LandingNav from "./LandingNav";
import axiosRateLimit from 'axios-rate-limit';
const http = axiosRateLimit(axios.create(), { maxRequests: 2, perMilliseconds: 1000 });
const MyJobs = (gigIds) => {

    const[user,setUser] = useState({})
    const[gigs,setGigs] =useState([])
    const getData = async (gigIds) =>{
      try{
      const gigPromises = gigIds.map(async (x) => {
        const response = await await http.get(`http://localhost:3000/gigbyid/${x}`);
        
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
      <div className='container'>
        <LandingNav/>
       <h1>My Jobs</h1>
       {gigs.map((item) => (
        <SpecificJob
        key = {item._id}
        jobTitle = {item.jobname}
        jobDesc = {item.description}
        payment = {item.pay}





        />
      ))}
         </div>
    );

};


export default MyJobs;