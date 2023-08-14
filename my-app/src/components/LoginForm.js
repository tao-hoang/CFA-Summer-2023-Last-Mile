import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "../css/LoginForm.css"
import axios from "axios";

import LandingNav from "./LandingNav"
//icons
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
const baseURL = "https://bewildered-lime-jumpsuit.cyclic.app";
const route = "/login"
const awsapi = "http://ec2-52-91-204-97.compute-1.amazonaws.com:3000/"
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function createPost(event) {
    event.preventDefault(); 
    axios.post(baseURL+route, {
        "email":email,
        "password":password,
        }
      )
      .then(async (response) => {

        console.log(response.data);
        if(response.data.user.token){
          localStorage.setItem("token", response.data.user.token)
          await getData()
          navigate('/jobslisting')
        }
      })
      .catch((error) => {
        setError("Failed to log in. Please check your credentials.");
      });
    }
    const getData = async () =>{
      console.count()
      await axios({
        method: 'post',
        baseURL: 'http://ec2-52-91-204-97.compute-1.amazonaws.com:3000',
        responseType: 'json',
        url:'/currentuser',
        headers: {"x-access-token": localStorage.token},
        body:{"token": localStorage.token}
      })
        .then(function (response) {
          //console.log(response.data)
          localStorage.setItem("user", JSON.stringify(response.data))
          
      }).catch((Error) => {
        console.log(Error)
        console.log(JSON.parse(localStorage.user))
        if(localStorage.token){
          localStorage.removeItem("token")
        }
      });}
  

  return (
    <div>
    <LandingNav/>
    <div className='loginPage'>
      
        <img alt="computer"src={require("../images/login.jpg")} className='loginHeroImage'/>

      <div className='formDivLogin'>
        <div className='innerFormDivLogin'>
          <h2 className='siteNameLogin'>connectIT</h2>
          <h1 className='welcomeMessageLogin'>Welcome back</h1>
          <h3 className='loginInstruction'>Log in to to your account</h3>
          <form onSubmit={createPost}>
            <div className='inputGroup'>
              <label className='formLabel' htmlFor='emailInput'>Email</label>
              <input className='formInput' id="emailInput" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className='inputGroup'>
              <label className='formLabel' htmlFor='passwordInput'>Password</label>
              <input className='formInput' id="passwordInput" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button className='loginButton clickable' type="submit">Login</button>
          </form>
          {error && <p>{error}</p>}
          <p className='smPrompt'><span className='smText'>or log in with</span></p>
          <div className='socialMediaLogin'>
            <GoogleIcon className="socialMediaButton" />
            <LinkedInIcon className="socialMediaButton" />
            <FacebookIcon className="socialMediaButton" />
            <AppleIcon className="socialMediaButton" />
          </div>

          {error && <p>{error}</p>}
      {/* ... (rest of the component) ... */}
          <Link to="../register">
            <button className='newUserSignup clickable'>New user? Create an account</button>
          </Link>

        </div>
      </div>
    </div>
    </div>
  );
};

export default LoginForm;
