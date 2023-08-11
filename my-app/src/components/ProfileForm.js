import React, { useState, useEffect } from 'react';
import axios from "axios";
import "../css/ProfileCreation.css"
import resumeImage from  "../images/resume.png"

import GitHubIcon from '@mui/icons-material/GitHub';
import { Button, Input, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import SaveIcon from '@mui/icons-material/Save';

import UploadFileIcon from '@mui/icons-material/UploadFile';
import axiosRateLimit from 'axios-rate-limit';
const http = axiosRateLimit(axios.create(), { maxRequests: 2, perMilliseconds: 1000 });
const ProfileForm = () => {
  // State variables to store form data
  const [user, setUser] = useState(JSON.parse(localStorage.user))
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [otherNames, setOtherNames] = useState('');
  const [pronouns, setPronouns] = useState('');
  const [aboutMe, setAboutMe] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [education, setEducation] = useState('');
  const [certifications, setCertifications] = useState('');
  const [selectedResume, setSelectedResume] = useState(null);

 
  //set to current baseURL (of backend?)
  const baseURL = "http://localhost:3000";
  let myToken=localStorage.token;

  const getData = async () =>{
    console.count()
    await axios({
      method: 'post',
      baseURL: 'http://localhost:3000',
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
  const getUser = () => {
    console.count("user load")
  if(localStorage.user){
    setUser(JSON.parse(localStorage.user))
    setFirstName(user.fname)//give the default values 
    setLastName(user.lname)
    }
  }
    useEffect(
      getUser,[]
    )
  
  const editUserProfile = async (userInfo, authToken) => {
    try {
      // Make the POST request to the modifyprofile route

      const response = await http.post(`${baseURL}/modifyprofile`, userInfo, {
        headers: {
          'Content-Type': 'application/json',
          'x-access-token':authToken, 
        },
      });
      // If the request is successful, return the response data
      console.log(response)
      return response.data;
    }
    catch (error) {
      // If there's an error, handle it here (e.g., show an error message)
      throw new Error(error.message);
    }
  };
  //when submitted, try to edit profile
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log({
      firstName,
      lastName,
      otherNames,
      pronouns,
      aboutMe,
      country,
      city,
      education,
      certifications,
    })
    //FOR TESTING
    let myNewData={
      "fname":firstName,
      "lname":lastName,
    }
    let myToken=localStorage.token;
    await editUserProfile(myNewData,myToken);
    getData()
    // Reset the form after submission
    // setFirstName('');
    // setLastName('');
    setOtherNames('');
    setPronouns('');
    setAboutMe('');
    setCountry('');
    setCity('');
    setEducation('');
    setCertifications('');
  };

  const editProfileResume = async (formData, authToken)=>{
    console.log(formData);
    try {
      const response = await axios.post(`${baseURL}/changeResume`, formData,
      {
        headers: {
            'Content-Type': 'multipart/form-data',
            'x-access-token':authToken, 
        },
      });
      console.log('Upload success', response)
      return response.data;
    } catch (error) {
      throw new Error(error.message)
    }
    
  };
  
  const handleResumeChange=(event)=>{
    //set resume
    const file = event.target.files[0];
    if(file){
      const resumeURL = URL.createObjectURL(file);
      setSelectedResume(resumeURL);

      const formData = new FormData();
      formData.append('resume', file);
      //axios post 
      console.log(formData);
      editProfileResume(formData, myToken);
    } else {
      setSelectedResume(null);
    }

  };

  
 

  return (
    <div>
    <form onSubmit={handleFormSubmit} id="profileForm" className='profileForm'>
      <div>
        <label htmlFor="firstName">First Name<span className='blueText'>*</span></label>
        <input className='profileInput'
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name<span className='blueText'>*</span></label>
        <input className='profileInput'
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="otherNames">Other Names</label>
        <input className='profileInput'
          type="text"
          id="otherNames"
          value={otherNames}
          onChange={(e) => setOtherNames(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="pronouns">Pronouns</label>
        <input className='profileInput'
          type="text"
          id="pronouns"
          value={pronouns}
          onChange={(e) => setPronouns(e.target.value)}
        />
      </div>
      <div id='aboutMeDiv'>
        <label htmlFor="aboutMe">About me</label>
        <textarea 
          id="aboutMe"
          value={aboutMe}
          onChange={(e) => setAboutMe(e.target.value)}
          />
      </div>
      <div>
        <label htmlFor="country">Country</label>
        <input className='profileInput'
          type="text"
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="city">City</label>
        <input className='profileInput'
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="education">Education</label>
        <input className='profileInput'
          type="text"
          id="education"
          value={education}
          onChange={(e) => setEducation(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="certifications">Certifications</label>
        <input className='profileInput'
          type="text"
          id="certifications"
          value={certifications}
          onChange={(e) => setCertifications(e.target.value)}
        />
      </div>
    </form>
    <div className="bottomFields" style={{marginBottom:20}}>
      <label htmlFor="resumeUpload" className="profileResumeUpload">
        <input
          type="file"
          id="resumeUpload"
          className="profileResumeUpload"
          onChange={handleResumeChange}
        />
        <Typography className="profileBottomText">
          <CloudUploadIcon className="formIcon" />
          Upload your resume
        </Typography>
      </label>
      <div>
  {selectedResume ? (
    <>
      <span>Resume Uploaded</span>
      <img src={resumeImage} alt="Resume Icon" style={{ width: '50px', height: 'auto', marginLeft:20}} />
    </>
  ) : (
    <span>No Resume Uploaded</span>
  )}
</div>
          
      <div className="gitHubLink">
        <Typography className="profileBottomText">
          <GitHubIcon className="formIcon" />
          GitHub Repository Link
        </Typography>
        <Input className="profileInput" placeholder="https://github.com/" />
      </div>
      <Button
        className="profileButton clickable"
        type="submit"
        form="profileForm"
        variant="contained"
        color="primary"
        style={{marginTop:20, marginLeft:20}}
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
      </div>
  </div>
  );
};

export default ProfileForm;
