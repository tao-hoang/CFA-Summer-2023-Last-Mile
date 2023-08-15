import  React,{ useEffect, useState } from 'react';
import { useNavigate, Link,Routes, Route, useParams} from 'react-router-dom';

import axios from "axios";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ManageAcountsIcon from '@mui/icons-material/ManageAccountsOutlined'
import LandingNav from "./LandingNav";

export default function SingleJob(){
    const[gig, setGig] = useState({})
    const baseURL = "http://localhost:3000";
    let { id } = useParams();
    console.log(id)
    const getGig = async () => {
        console.count("user load")
        let  c =  await axios.get(baseURL+'/gigbyid/'+id)
        console.log(c.data.gig)
        setGig(c.data.gig)
      }
        useEffect(()=>{
          getGig()
        },[id]
        )
    return(
        
        <div>
            <LandingNav/>
            <h3>Job Name: {gig.jobname}</h3>
            <h3>Pay: {"$"+gig.pay}</h3>
            <h3>Duration: {gig.duration}</h3>
            <h3>Remote: {gig.remote}</h3>
            <h3>Description: {gig.description}</h3>
            <h3>Employer: {gig.employer}</h3>
            <h3>Connect: <a href={"mailto: "+gig.email}>{gig.email}</a></h3>

        </div>
    )
}