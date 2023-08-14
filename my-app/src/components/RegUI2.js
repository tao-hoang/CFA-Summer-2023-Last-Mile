import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "../css/RegUI.css";
import axios from "axios";
//from Module import
import {
  hasRepeatedCharacters,
  getColorMessage,
  checkPasswordLength,
  checkNumber,
  checkUppercase,
  checkLowercase,
  checkSymbols,
} from "../components/Module.js";

//icons
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import { green } from '@mui/material/colors';


import LandingNav from "./LandingNav"

const baseURL = "http://ec2-3-95-155-67.compute-1.amazonaws.com:3000/register";
const RegUI = () => {
    const [fname, setfname] = useState('')
    const [lname, setlname] =useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const getData = async () =>{
      console.count()
      await axios({
        method: 'post',
        baseURL: 'http://ec2-3-95-155-67.compute-1.amazonaws.com:3000',
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
    const handleRegistration = (e) => {
      e.preventDefault();

      // Validation logic (add your specific validation here)
      if (!email || !password || !confirmPassword) {
        setError('Please fill in all fields.');
        return;
      }
  
      if (!isValidEmail(email)) {
        setError('Please enter a valid email address.');
        return;
      }
  
     if (password !== confirmPassword) {
        setError('Passwords do not match.');
        return;
      }
  
      if (!isValidPassword(password)) {
        setError('Please enter a valid password.');
        return;
      }

      if(!checkPasswordValidity(password)) {
        setError('You cannot use the same letter three times in a row in your password.')
        return;
      }
  
  
        axios.post(baseURL, {
          "fname":fname,
          "lname":lname,
          "email": email,
          "password":password
        }
          )
          .then(async (response) => {
            if(response.data.token){
              localStorage.setItem('token', response.data.token)
              await getData();
              navigate('/profilecreation')
            }

          })
          .catch((error) => {
            console.log(error)
            setError("Failed to log in. Please check your credentials.");
          });
          

        // Redirect to restricted-access page
        // You can use React Router for navigation
        // history.push('/restricted');
    }
    const isValidEmail = (email) => {
        // Email validation logic (add your specific validation here)
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };
    
    const isValidPassword = (password) => {
        // Password validation logic (add your specific validation here)
        // Password criteria: at least 12 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character
        return (
            password.length >= 8 &&
            /[A-Z]/.test(password) &&
            /[a-z]/.test(password) &&
            /\d/.test(password) &&
            /[!@#$%^&*_=+?~]/.test(password)
        );
    };

    function checkPasswordValidity(password) {
      if (hasRepeatedCharacters(password)) {
        return false;
      }
      return true; // Password is valid
    }

  return (
    <div><LandingNav/>
    <div className='signUpPage'>
      <img alt="computer" src={require("../images/signUp.jpg")} className='signUpHeroImage'/>
      <div className='formDiv'>
        <div className='innerFormDiv'>
          <h2 className='siteName'>connectIT</h2>
          <h1 className='welcomeMessage'>Create an account</h1>
          <h3 className='signUpInstruction'>Join our network of cool people yippeeeeeeee</h3>
          <form onSubmit={handleRegistration}>
            <div className='inputGroup'>
              <label htmlFor='fname' className='formLabel'>First Name</label>
              <input id="fname" className='formInput' value={fname} onChange={(e) => setfname(e.target.value)} required></input>
              <label htmlFor='lnamess' className='formLabel'>Last Name</label>
              <input id='lname' className='formInput' value={lname} onChange={(e) => setlname(e.target.value)} required></input>
            </div>
            <div className='inputGroup'>
              <label className='formLabel' htmlFor='emailInput'>Email</label>
              <input className='formInput' id="emailInput" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className='inputGroup'>
              <label className='formLabel' htmlFor='passwordInput'>Password</label>
              <input className='formInput' id="passwordInput" type="password" value={password} onChange={(e) => setPassword(e.target.value)}  required />
            </div>
            <h2 className='signUpInstruction'>Password must:</h2>
            <ul className='signUpInstruction'>
              <li className= {checkPasswordLength(password) ? 'valid': 'invalid'}>Contain 8-20 characters</li>
              <li className= {checkNumber(password) ? 'valid': 'invalid'}>Contain at least 1 number</li>
              <li className={checkUppercase(password) ? 'valid': 'invalid'}>Contain at least 1 uppercase letter</li>
              <li className={checkLowercase(password) ? 'valid': 'invalid'}>Contain at least 1 lowercase letter</li>
              <li className={checkSymbols(password) ? 'valid': 'invalid'}> Contain at least 1 symbol: !@#$%^&*~?</li>
              <li style={{ color: getColorMessage(password) }}>Not repeat the same character more than 3 times in a row</li>
            </ul>
            <div>
                <label className='formLabel' htmlFor='confirmPasswordInput'>Confirm Password:</label>
                <input className='formInput' id="confirmPasswordInput" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            </div>
            <div className='captcha'>(captcha)</div>
            <button className='signUpButton clickable' type="submit">Join</button>
          </form>
          {error && <p>{error}</p>}
          <p className='smPrompt'><span className='smText'>or log in with</span></p>
          <div className='socialMediasignUp'>
            <GoogleIcon className="socialMediaButton" />
            <LinkedInIcon className="socialMediaButton" />
            <FacebookIcon className="socialMediaButton" />
            <AppleIcon className="socialMediaButton" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
  

}
export default RegUI;

