import React, { useEffect, useState } from "react";
import JobsListing from './JobsListing';
import "../css/Jobs.css";
import axios from "axios";
import SpecificJob from './SpecificJob';
import LandingNav from "./LandingNav";

const MyJobs = () => {
    const [uiJobs, setUiJobs] = useState([]);
    const[user,setUser] = useState({})
    const getUser = () => {
        console.count("user load")
      if(localStorage.user){
        setUser(JSON.parse(localStorage.user))
        }
      }
    useEffect(getUser,[])
    
    const getData = () =>{
        let data = JSON.stringify({
            "_id": "64d171dc95edbe6541e9cedb"
          });
          
          let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://localhost:3000/gigbyid',
            headers: { 
              'Content-Type': 'application/json'
            },
            body : data
          };
          
          axios.request(config)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
          

    }

    useEffect(getData,[])
 
  return (  
      <div className='container'>
        <LandingNav/>
       <h1>My Jobs</h1>
         </div>
    );

};


export default MyJobs;