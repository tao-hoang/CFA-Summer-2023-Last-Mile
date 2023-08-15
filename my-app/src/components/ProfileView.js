import  React,{ useEffect, useState } from 'react';
import { useNavigate, Link,Routes, Route, useParams} from 'react-router-dom';

import axios from "axios";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ManageAcountsIcon from '@mui/icons-material/ManageAccountsOutlined'
import LandingNav from "./LandingNav";
import "../css/ProfileCreation.css"
import "../css/ProfileView.css"
export default function ProfileView(){
    const baseURL = "http://localhost:3000";
    let { id } = useParams();
    console.log(id)
    const[user, setUser] = useState({})
    const[own,setOwn] = useState(false)
    const navigate = useNavigate();
    const getUser = async () => {
        console.count("user load")
        let  c =  await axios.get(baseURL+'/userbyid/'+id)
        console.log(c.data)
        setUser(c.data)
        if(localStorage.user){
            const currentUser = JSON.parse(localStorage.user);
            setOwn(currentUser._id == id);
        }
      }
        useEffect(()=>{
          getUser()
        },[id]
        )
    return(
        <div>
            <LandingNav/>
            <div className="profileBanner">
                        <Avatar id="profilePic" src={"https://cfa-last-mile-backend.onrender.com" +'/image/'+user.pfp}/>
                        </div>
                <div className='acount-info'>
                <h3>First Name: {user.fname}</h3>
                <h3>Last Name: {user.lname}</h3>
                {user.hasOwnProperty('about')?<h3>About: {user.about}</h3>:null}
                <h3>Email: <a href={"mailto: "+user.email}>{user.email}</a></h3>
                {user.resume!=undefined?<h3>Check Out My <a target='_blank' href={baseURL+'/resume/'+user.resume}>Resume</a></h3>:null}
                {user.hasOwnProperty('github')?<h3>Find Me on <a href={user.github}>GitHub</a></h3>:null}
                {own?<Button id='edit-button' endIcon={<ManageAcountsIcon/>} onClick={()=>{navigate('/profilecreation')}}>
                    update information   
                </Button>:null}
                </div>
        </div>
    )
}