import React, { useState } from 'react';
import axios from "axios";
const ProfileForm = () => {
  // State variables to store form data
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [otherNames, setOtherNames] = useState('');
  const [pronouns, setPronouns] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [education, setEducation] = useState('');
  const [certifications, setCertifications] = useState('');

  const baseURL = "http://localhost:3000/";

  const editUserProfile = async (userInfo, authToken) => {
    try {
      // Make the POST request to the modifyprofile route
      const response = await axios.post(`${apiUrl}/modifyprofile`, userInfo, {
        headers: {
          Authorization: `Bearer ${authToken}`, // If you require authentication
        },
      });
      // If the request is successful, return the response data
      return response.data;
    }
    catch (error) {
      // If there's an error, handle it here (e.g., show an error message)
      throw new Error(error.message);
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log({
      firstName,
      lastName,
      otherNames,
      pronouns,
      country,
      city,
      education,
      certifications,
    })
    axios.post(`${baseURL}/modifyprofiile`, {
      "fname":"first_name",
      "lname":"last_name",
      },
      {headers:{
        
      }})

    // Reset the form after submission
    setFirstName('');
    setLastName('');
    setOtherNames('');
    setPronouns('');
    setCountry('');
    setCity('');
    setEducation('');
    setCertifications('');
  };

  return (
    <form onSubmit={handleFormSubmit} className='profileForm'>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="otherNames">Other Names:</label>
        <input
          type="text"
          id="otherNames"
          value={otherNames}
          onChange={(e) => setOtherNames(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="pronouns">Pronouns:</label>
        <input
          type="text"
          id="pronouns"
          value={pronouns}
          onChange={(e) => setPronouns(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="country">Country:</label>
        <input
          type="text"
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="education">Education:</label>
        <input
          type="text"
          id="education"
          value={education}
          onChange={(e) => setEducation(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="certifications">Certifications:</label>
        <input
          type="text"
          id="certifications"
          value={certifications}
          onChange={(e) => setCertifications(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProfileForm;
