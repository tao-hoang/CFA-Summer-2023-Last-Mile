import  React,{ useEffect, useState } from 'react';
import { useNavigate, Link} from 'react-router-dom';

import Avatar from '@mui/material/Avatar';

import LandingNav from "./LandingNav";
import "../css/ProfileCreation.css"
import "../css/ProfileView.css"
export default function ProfileView(){
    const[user, setUser] = useState({})
    const navigate = useNavigate();
    const baseURL = "http://localhost:3000"
    const getUser = () => {
        console.count("user load")
      if(localStorage.user){
        setUser(JSON.parse(localStorage.user))
        }
      }
        useEffect(
          getUser,[localStorage.user]
        )
    return(
        <div>
            <LandingNav/><h3>profile view page</h3>
            <div className="profileBanner" style={{backgroundImage:'url("https://64.media.tumblr.com/2842f06caddbfda985e150abc1e2b8e1/cc9cd637b26d5a89-47/s1280x1920/f55e3939a54c172d4672af907f883b36ed28126a.jpg")'}}>
                        <Avatar id="profilePic" src={baseURL +'/image/'+user.pfp}/>
                </div>



            

            
        </div>
    )
}