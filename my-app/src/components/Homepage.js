import React, { useState, useEffect } from 'react';
import { Link, Route, Routes } from "react-router-dom";
import "../css/Homepage.css";
import LandingNav from "./LandingNav";
import Cards from "./Cards";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useJobContext } from './JobContext';
//header
import { ButtonGroup } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

//search bar
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const Homepage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [gigs, setGigs] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [open, setOpen] = useState(false);

  const debouncedGetData = debounce(async (query) => {
    const response = await getResult(query);
    console.log(response); 
    setSearchResult(response);
  }, 300); // Adjust the debounce time as needed

  useEffect(() => {
    if (!open) {
      setSearchResult([]);
    }
  }, [open]);

  const handleInputChange = (event, value) => {
    setSearchQuery(value);
    debouncedGetData(value);
  };

  const navigate = useNavigate();
  const { setSelectedJob } = useJobContext();

  const handleSearchItemClick = (event, newValue) => {
    if (newValue) {
      setSelectedJob(newValue);
      navigate('/SearchItem');
    }

  }

  

  const getData = () => {
    axios({
      method: 'get',
      baseURL: 'http://ec2-3-95-155-67.compute-1.amazonaws.com:3000', // Update with your API endpoint
      responseType: 'json',
      url: '/jobslisting/dev', // Update with your API route
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


  const theme = createTheme({
    palette: {
      primary: {
        main: '#0a1128',
      },
      secondary:{
        main:"#001f54"
      }
    },
    typography: {
      fontFamily: "Montserrat",
    }
  });
  // const handleSearchChange = (event) => {
  //   setSearchQuery(event.target.value);
  // };

  // const handleSearchSubmit = (event) => {
  //   event.preventDefault();
  // };


  return (
    <div className='landingBodyContainer'>
      <LandingNav showLinks="true" />
        <div className='landingBody'>
          <div id="homepageImage">
            <div className="welcomeText">
              <h1 className="welcomeHeader" style={{ marginBottom: 20 }}>Work to build yourself up.</h1>
              <p className="welcomeMessage" style={{ marginBottom: 50, fontSize: 19, fontFamily: "lora" }}>This is where you can find available jobs and recommended courses to learn new skills and build your portfolio.</p>
              <p className='searchPrompt'>What kind of work are you looking for?</p>
              <React.Fragment key="unique-key">
              <Autocomplete
                id="asynchronous-demo"
                className='autocomplete-wrapper'
                sx={{ width: 400, borderRadius:1, backgroundColor: "rgba(255,255,255)", elevationColor: "rgba(255,255,255)"}}
                open={open}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
                options={searchResult}
                getOptionLabel={(searchResult) => searchResult.jobname}
                inputValue={searchQuery}
                onInputChange={handleInputChange}
                onChange={handleSearchItemClick}
                renderInput={(params) => (
                  <TextField {...params} label="Search jobs and courses..." />
                )}
              />
            </React.Fragment>
            </div>
          </div>
          <div className="homepage">
      <h1>Welcome to connectIT</h1>
      <Cards gigs={gigs} />
    </div>
  </div>
  </div>
  );
};


const debounce = (func, delay) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
};

const getResult = async (query) => {
  if (!query) {
    return [];
  }

  try {
    const response = await axios.get(`http://ec2-3-95-155-67.compute-1.amazonaws.com:3000/jobsListing/${query}`);
    console.log(response);
    return response.data.gigsResults;
    
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export default Homepage;