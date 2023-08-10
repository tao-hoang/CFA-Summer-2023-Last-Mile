import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import "../css/JobListing.css"
import SpecificJob from './SpecificJob';
import LandingNav from './LandingNav';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Cards from './Cards';

const theme = createTheme({
  palette: {
    primary: { main: '#0a1128' },
    secondary: { main: "#001f54" },
    light: { main: "#ffff" }
  }
});

const JobsListing = () => {

  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentFilters, setFilters] = useState([]);
  const [gigs, setGigs] = useState([]);

  const getData = () => {
    axios({
      method: 'get',
      baseURL: 'http://localhost:3000', // Update with your API endpoint
      responseType: 'json',
      url: '/jobslisting/design', // Update with your API route
    })
      .then(function (response) {
        console.log(response.data);
        setGigs(response.data.gigsResults);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  useEffect(() => {
    getData();
  }, []);

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
      <LandingNav showLinks={localStorage.token == undefined} />
      <div id='header'>
        <h1>Find the perfect job for yourself.</h1>
        <p></p>
      </div>
      <div className='cat-holder'>
        <h3>Sort By:</h3>
        <Button variant="extended" className='Fab'>
          Categories
        </Button>
        <Button variant="extended" className='Fab'>
          Onsite/Remote
        </Button>
        <Button variant="extended" className='Fab'>
          Location
        </Button>
        <Button variant="extended" className='Fab'>
          Date posted
        </Button>
        <Button variant="extended" className='Fab' onClick={getData}>
          Reload
        </Button>
      </div>
      <Cards gigs={gigs} /> {/* Rendering the Cards component */}
    </div>
  );
};

export default JobsListing;