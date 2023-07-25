import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../css/RegUI.css";

//icons
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
const RegUI = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

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

        // Registration API call (replace with your own implementation)
        // Assuming it returns a JSON web token (JWT)
        const token = 'sample-jwt-token';
        localStorage.setItem('token', token);

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
            password.length >= 12 &&
            /[A-Z]/.test(password) &&
            /[a-z]/.test(password) &&
            /\d/.test(password) &&
            /[!@#$%^&*_=+?~]/.test(password)
        );
    };
  return (
    <div className='signUpPage'>
      <img alt="computer" src={require("../images/signUp.jpg")} className='signUpHeroImage'/>
      <div className='formDiv'>
        <div className='innerFormDiv'>
          <h2 className='siteName'>website name</h2>
          <h1 className='welcomeMessage'>Create an account</h1>
          <h3 className='signUpInstruction'>Join our network of cool people yippeeeeeeee</h3>
          <form onSubmit={handleRegistration}>
            <div className='inputGroup'>
              <label className='formLabel' htmlFor='emailInput'>Email</label>
              <input className='formInput' id="emailInput" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className='inputGroup'>
              <label className='formLabel' htmlFor='passwordInput'>Password</label>
              <input className='formInput' id="passwordInput" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <h2 className='signUpInstruction'>Password must:</h2>
            <ul className='signUpInstruction'>
              <li>Contain 8-20 characters</li>
              <li>Contain at least 1 number</li>
              <li>Contain at least 1 uppercase letter</li>
              <li>Contain at least 1 lowercase letter</li>
              <li>Contain at least 1 symbol: !@#$%^&*~?</li>
              <li className='red'>Not repeat the same character more than 3 times in a row</li>
            </ul>
            <div>
                <label className='formLabel' htmlFor='confirmPasswordInput'>Confirm Password:</label>
                <input className='formInput' id="confirmPasswordInput" type="password" value={setConfirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            </div>
            <div className='captcha'>(captcha)</div>
            <button className='signUpButton' type="submit">Join</button>
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
  );
};

export default RegUI;

