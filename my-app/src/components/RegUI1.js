import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../css/RegUI.css";
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
const RegUI = () => {
    
  return (
    <div className='signUpPage'>
      <img alt="computer" src={require("../images/signUp.jpg")} className='signUpHeroImage'/>
      <div className='formDiv'>
        <div className='innerFormDiv'>
          <h2 className='siteName'>connectIT</h2>
          <h1 className='welcomeMessage'>Create an account</h1>
          <h3 className='signUpInstruction'>Join our network of cool people yippeeeeeeee</h3>
          <h2 className='signUpInstruction'>Join as a</h2>
          <div className='iconDiv'>          
            <div className="client"><PersonSearchIcon className='clientIcon'/><p className='iconText'>Client</p></div>
            <Link to="../register2">
              <div className='jobSeeker'><WorkOutlineIcon className='jobSeekerIcon'/><p className='iconText'>Jobseeker</p></div>
            </Link>
          </div>

          <h2 className='signUpInstruction'>As a jobseeker you can:</h2>
          <ul className='signUpInstruction'>
            <li>Get access to exclusive courses for improving your job skills</li>
            <li>Search through our expansive job board for projects to build your portfolio</li>
            <li>Connect with potential employers</li>
          </ul>
          <div className='captcha'>(captcha)</div>
          <button className='signUpButton' type="submit">Join as a jobseeker</button>
          <Link to="/login">
            <button className='signInButton'>Already have an account? Sign in</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegUI;

