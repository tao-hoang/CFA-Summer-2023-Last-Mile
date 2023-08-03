import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import UiDesign from './UiDesign';
import SpecificJob from './SpecificJob';
import LandingNav from './LandingNav';

const JobsListing = () => {
  const getData = () =>{
    axios({
      method: 'get',
      baseURL: 'http://localhost:3000',
      responseType: 'json',
      url:'/gigsLookUp/design',
    })
      .then(function (response) {
        console.log(response.data)
        setgigs(response.data.gigsResults)
        console.log(gigs)
    });
  }
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentFilters, setFilters] = useState(getData);
  
  const [gigs, setgigs] = useState([]);
  
  const handleButtonClick = (category) => {
    setSelectedCategory(category);
  };

  const handleFilterChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setFilters((prevFilters) => [...prevFilters, value]);
    } else {
      setFilters((prevFilters) =>
        prevFilters.filter((filter) => filter !== value)
      );
    }
  };


  return (
    <div>
      <LandingNav showLinks={false}/>
      <button onClick={getData}>press me</button>
      {gigs ? gigs.map(item => 
      <SpecificJob key={item._id} 
                jobTitle={item.jobname}
                payment={item.pay}
                 />) : null}
      {/* <h1>Jobs</h1>
      <h1>Current Jobs: {selectedCategory}</h1>
      <div className="categoryContainer">
        <div
          id="ui-ux-design"
          className={`categoryCard ${selectedCategory === 'UI/UX Design' ? 'selected' : ''}`}
          onClick={() => handleButtonClick('UI/UX Design')}
        >
            <Link to="/ui-ux-design-page">
          <h2>UI/UX Design</h2>
          </Link>
        </div>
        <div
          id="web-design"
          className={`categoryCard ${selectedCategory === 'Web Design' ? 'selected' : ''}`}
          onClick={() => handleButtonClick('Web Design')}
        >
          <Link to="/web-design-page">
            <h2>Web Design</h2>
          </Link>
        </div>
        <div
          id="game-development"
          className={`categoryCard ${selectedCategory === 'Game Design' ? 'selected' : ''}`}
          onClick={() => handleButtonClick('Game Design')}
        >
          <Link to="/game-design-page">
            <h2>Game Design</h2>
          </Link>
        </div>
        <div
          id="mobile-development"
          className={`categoryCard ${selectedCategory === 'Mobile App Development' ? 'selected' : ''}`}
          onClick={() => handleButtonClick('Mobile App Development')}
        >
          <Link to="/mobile-design-page">
            <h2>Mobile App Development</h2>
          </Link>
        </div>
        <div
          id="cyber-security"
          className={`categoryCard ${selectedCategory === 'Cyber Security' ? 'selected' : ''}`}
          onClick={() => handleButtonClick('Cyber Security')}
        >
        <Link to="/cyber-security-page">
          <h2>Cyber Security</h2>
        </Link>
        </div>
        <div
          id="asset-creation"
          className={`categoryCard ${selectedCategory === 'Asset Creation' ? 'selected' : ''}`}
          onClick={() => handleButtonClick('Asset Creation')}
        >
          <Link to="/asset-design-page">
            <h2>Asset Creation</h2>
          </Link>
        </div>
         Add more category cards as needed 
      </div>
      <div className="filters">
        <label>
          <input
            type="checkbox"
            value="filter1"
            onChange={handleFilterChange}
          />
          Filter 1
        </label>
        <label>
          <input
            type="checkbox"
            value="filter2"
            onChange={handleFilterChange}
          />
          Filter 2
        </label>
      </div> */}
    </div>
  );
};

export default JobsListing;