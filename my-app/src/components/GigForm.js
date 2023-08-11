import React, { useState } from 'react';
import axios from "axios";
import "../css/GigCreation.css"
const GigForm = () => {
  // State variables to store form data
  const [jobName, setjobName] = useState('');
  const [categories, setCategories] = useState('');
  const [remote, setRemote] = useState('');
  const [city, setCity] = useState('');
  const [duration, setDuration] = useState('');
  const [description, setDescription] = useState('');
  const [pay, setPay] = useState('');
  //WIP
  const [employer, setEmployer] = useState('');
  //set to current baseURL (of backend?)
  const baseURL = "http://localhost:3000";
  //api call
  const editGig = async (data, authToken) => {
    try {
      // Make the POST request to the creategig route
      const response = await axios.post(`${baseURL}/creategig`, data, {
        headers: {
          'Content-Type': 'application/json',
          'x-access-token':authToken, 
        },
      });
      // If the request is successful, return the response data
      console.log(response);
      alert("Gig posted successfully!");
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

    let myNewData={
      jobname: jobName,
      categories: categories,
      city: city,
      remote: remote,
      duration: duration,
      pay: Number(pay),
      description:description ,
      employer: employer,
    }
    //FOR TESTING
    let myTestData={
      jobname: "jobName",
      categories: "categories",
      city: "city",
      remote: "remote",
      duration: "duration",
      pay: 6,
      description:"description" ,
      employer: "Employer placeholder",
    }
    console.log(myNewData);
    let myToken=localStorage.token;
    //call api function
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

  return (
    <div>
    <form onSubmit={handleFormSubmit} id="gigForm" className='gigForm'>
      <div>
        <label htmlFor="jobName">Job Title<span className='blueText'>*</span></label>
        <input className='gigInput'
          type="text"
          id="jobName"
          value={jobName}
          onChange={(e) => setjobName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="categories">Categories<span className='blueText'>*</span></label>
        <input className='gigInput'
          type="text"
          id="categories"
          value={categories}
          onChange={(e) => setCategories(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="pay">Pay<span className='blueText'>*</span></label>
        <input className='gigInput'
          required
          type="text"
          id="pay"
          value={pay}
          onChange={(e) => setPay(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="employer">Employer<span className='blueText'>*</span></label>
        <input className='gigInput'
          required
          type="text"
          id="employer"
          value={pay}
          onChange={(e) => setEmployer(e.target.value)}
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
      <div id='descriptionDiv'>
        <label htmlFor="gigDescription">Description<span className='blueText'>*</span></label>
        <textarea
          required 
          id="gigDescription"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          />
      </div>
    </form>
      <button className='profileButton clickable' type="submit" form='gigForm'>Save</button>
    </div>
  );
};

export default GigForm;
