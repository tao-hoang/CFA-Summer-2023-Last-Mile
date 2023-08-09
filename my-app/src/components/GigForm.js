import React, { useState } from 'react';
import axios from "axios";
// import "../css/ProfileCreation.css"
import "../css/GigCreation.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import UploadFileIcon from '@mui/icons-material/UploadFile';
const GigForm = () => {
  // State variables to store form data
  const [jobName, setjobName] = useState('');
  const [categories, setCategories] = useState('');
  const [remote, setRemote] = useState('');
  const [city, setCity] = useState('');
  const [duration, setDuration] = useState('');
  const [description, setDescription] = useState('');
  const [pay, setPay] = useState('');
  //set to current baseURL (of backend?)
  const baseURL = "http://localhost:3000";

  const editGig = async (userInfo, authToken) => {
    try {
      // Make the POST request to the creategig route

      const response = await axios.post(`${baseURL}/creategig`, userInfo, {
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
  //when submitted, try to create gig
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log({
      jobName,
      categories,
      remote,
      city,
      duration,
      description,
      pay,
    })
    //FOR TESTING
    let myNewData={
      jobname: "Cyber security",
      categories: "Security",
      city: "Seattle",
      remote: "Remote",
      duration: "12 months",
      pay: 20000,
      description: "This job require 2 years of experience in cyber security with strong skills to details etc",
    }
    let myToken=localStorage.token;
    editGig(myNewData,myToken);
    // Reset the form after submission
    setjobName('');
    setCategories('');
    setRemote('');
    setCity("");
    setDuration('');
    setDescription('');
    setPay('');
  };
  let handleResumeChange=()=>{
    //set resume
  }
  return (
    <div>
    <form onSubmit={handleFormSubmit} id="gigForm" className='gigForm'>
      <div>
        <label htmlFor="jobName">Job Title*</label>
        <input className='gigInput'
          type="text"
          id="jobName"
          value={jobName}
          onChange={(e) => setjobName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="categories">Category*</label>
        <input className='gigInput'
          type="text"
          id="categories"
          value={categories}
          onChange={(e) => setCategories(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="remote">Remote</label>
        <input className='gigInput'
          type="text"
          id="remote"
          value={remote}
          onChange={(e) => setRemote(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="city">City</label>
        <input className='gigInput'
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="duration">Duration</label>
        <input className='gigInput'
          type="text"
          id="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="pay">Pay</label>
        <input className='gigInput'
          type="text"
          id="pay"
          value={pay}
          onChange={(e) => setPay(e.target.value)}
        />
      </div>
      <div id='descriptionDiv'>
        <label htmlFor="description">Description</label>
        <textarea 
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          />
      </div>
    </form>
      <div className='bottomFields'>
        <label htmlFor="resumeUpload" className='profileResumeUpload'>
          <p className='profileBottomText'><UploadFileIcon  className='formIcon'/> Upload your resume</p>
        </label>
        <div className='gitHubLink'><p className='profileBottomText'><GitHubIcon className='formIcon'/> https://github.com/</p> <input className='gigInput' /></div>
      </div>
      <button className='profileButton clickable' type="submit" form='profileForm'>Save</button>
      <input type='file' id="resumeUpload" onChange={handleResumeChange}/>
    </div>
  );
};

export default GigForm;
