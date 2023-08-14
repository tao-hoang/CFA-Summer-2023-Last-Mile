import  React,{ useEffect, useState } from 'react';
import { useNavigate, Link} from 'react-router-dom';


import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ManageAcountsIcon from '@mui/icons-material/ManageAccountsOutlined'
import LandingNav from "./LandingNav";
import "../css/ProfileCreation.css"
import "../css/ProfileView.css"
export default function ProfileView(){
    const[user, setUser] = useState({})
    const navigate = useNavigate();
    const baseURL = "http://ec2-52-91-204-97.compute-1.amazonaws.com:3000"
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
            <LandingNav/>
            <div className="profileBanner" style={{backgroundImage:'url("https://64.media.tumblr.com/2842f06caddbfda985e150abc1e2b8e1/cc9cd637b26d5a89-47/s1280x1920/f55e3939a54c172d4672af907f883b36ed28126a.jpg")'}}>
                        <Avatar id="profilePic" src={baseURL +'/image/'+user.pfp}/>
                        </div>
                <div className='acount-info'>
                <h3>First Name: {user.fname}</h3>
                <h3>Last Name: {user.lname}</h3>
                {user.hasOwnProperty('about')?<h3>About: {user.about}</h3>:<h3>de nada</h3>}
                <h3>Email: <a href={"mailto: "+user.email}>{user.email}</a></h3>
                <Button id='edit-button' endIcon={<ManageAcountsIcon/>} onClick={()=>{navigate('/profilecreation')}}>
                    update information   
                </Button>
                </div>



            

            
        </div>
    )
}