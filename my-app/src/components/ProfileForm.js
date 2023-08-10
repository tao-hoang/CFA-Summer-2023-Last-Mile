import React, { useState, useEffect } from 'react';
import axios from "axios";
import "../css/ProfileCreation.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import axiosRateLimit from 'axios-rate-limit';
import { useNavigate } from 'react-router-dom';
const http = axiosRateLimit(axios.create(), { maxRequests: 2, perMilliseconds: 1000 });
const ProfileForm = () => {
  // State variables to store form data
  const [user, setUser] = useState(localStorage.user? JSON.parse(localStorage.user):{})
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [otherNames, setOtherNames] = useState('');
  const [pronouns, setPronouns] = useState('');
  const [aboutMe, setAboutMe] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [education, setEducation] = useState('');
  const [certifications, setCertifications] = useState('');
  const navigate = useNavigate()

  //set to current baseURL (of backend?)
  const baseURL = "http://localhost:3000";
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
    setAboutMe(user.about)
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
      "about":aboutMe
    }
    let myToken=localStorage.token;
    await editUserProfile(myNewData,myToken);
    getData()
    // Reset the form after submission
    // setFirstName('');
    // setLastName('');
    setOtherNames('');
    setPronouns('');
    //setAboutMe('');
    setCountry('');
    setCity('');
    setEducation('');
    setCertifications('');
    navigate("/myprofile")

  };
  let handleResumeChange=()=>{
    //set resume
  }
  return (
    <div>
    <form onSubmit={handleFormSubmit} id="profileForm" className='profileForm'>
      <div>
        <label htmlFor="firstName">First Name*</label>
        <input className='profileInput'
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name*</label>
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
      <div className='bottomFields'>
        <label htmlFor="resumeUpload" className='profileResumeUpload'>
          <p className='profileBottomText'><UploadFileIcon  className='formIcon'/> Upload your resume</p>
        </label>
        <div className='gitHubLink'><p className='profileBottomText'><GitHubIcon className='formIcon'/> https://github.com/</p> <input className='profileInput' /></div>
      </div>
      <button className='profileButton clickable' type="submit" form='profileForm'>Save</button>
      <input type='file' id="resumeUpload" onChange={handleResumeChange}/>
    </div>
  );
};

export default ProfileForm;
