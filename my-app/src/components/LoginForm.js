import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../css/LoginForm.css"

//icons
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Validation logic (add your specific validation here)
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    // Login API call (replace with your own implementation)
    // Assuming it returns a JSON web token (JWT)
    const token = 'sample-jwt-token';
    localStorage.setItem('token', token);

    // Redirect to restricted-access page
    // You can use React Router for navigation
    // history.push('/restricted');
  };

  return (
    <div className='loginPage'>
      <img alt="computer"src={require("./images/login.jpg")} className='loginHeroImage'/>
      <div className='formDiv'>
        <div className='innerFormDiv'>
          <h2 className='siteName'>website name</h2>
          <h1 className='welcomeMessage'>Welcome back</h1>
          <h3 className='loginInstruction'>Log in to to your account</h3>
          <form onSubmit={handleLogin}>
            <div className='inputGroup'>
              <label className='formLabel' htmlFor='emailInput'>Email</label>
              <input className='formInput' id="emailInput" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className='inputGroup'>
              <label className='formLabel' htmlFor='passwordInput'>Password</label>
              <input className='formInput' id="passwordInput" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button className='loginButton' type="submit">Login</button>
          </form>
          {error && <p>{error}</p>}
          <p className='smPrompt'><span className='smText'>or log in with</span></p>
          <div className='socialMediaLogin'>
            <GoogleIcon className="socialMediaButton" />
            <LinkedInIcon className="socialMediaButton" />
            <FacebookIcon className="socialMediaButton" />
            <AppleIcon className="socialMediaButton" />
          </div>
          <button className='newUserSignup'>New user? Create an account</button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
