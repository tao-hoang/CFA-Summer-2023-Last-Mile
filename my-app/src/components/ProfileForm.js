import React, { useState } from 'react';
import axios from "axios";
import "../css/ProfileCreation.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import UploadFileIcon from '@mui/icons-material/UploadFile';
const ProfileForm = () => {
  // State variables to store form data
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [otherNames, setOtherNames] = useState('');
  const [pronouns, setPronouns] = useState('');
  const [aboutMe, setAboutMe] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [education, setEducation] = useState('');
  const [certifications, setCertifications] = useState('');
  //set to current baseURL (of backend?)
  const baseURL = "http://localhost:3000";

  const editUserProfile = async (userInfo, authToken) => {
    try {
      // Make the POST request to the modifyprofile route

      const response = await axios.post(`${baseURL}/modifyprofile`, userInfo, {
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
  const handleFormSubmit = (e) => {
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
    editUserProfile(myNewData,myToken);
    // Reset the form after submission
    setFirstName('');
    setLastName('');
    setOtherNames('');
    setPronouns('');
    setAboutMe('');
    setCountry('');
    setCity('');
    setEducation('');
    setCertifications('');
  };

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
        <div className='profileResumeUpload'>
          <p className='profileBottomText'><UploadFileIcon  className='formIcon'/> Upload your resume</p>
        </div>
        <div className='gitHubLink'><p className='profileBottomText'><GitHubIcon className='formIcon'/> https://github.com/</p> <input className='profileInput' /></div>
      </div>
      <button className='profileButton' type="submit" form='profileForm'>Save</button>
    </div>
  );
};

export default ProfileForm;
