import React, { useState, useEffect } from 'react';
import { Link, Route, Routes } from "react-router-dom";
import "../css/Homepage.css";
import LandingNav from "./LandingNav";
import Cards from "./Cards";
import axios from "axios";
//header
import { ButtonGroup } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
//search bar
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Homepage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [gigs, setGigs] = useState([]);

  const getData = () => {
    axios({
      method: 'get',
      baseURL: 'http://localhost:3000', // Update with your API endpoint
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
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
  };


  return (
    <div className='landingBodyContainer'>
      <LandingNav showLinks="true" />
        <div className='landingBody'>
          <div id="homepageImage">
            <div className="welcomeText">
              <h1 className="welcomeHeader" style={{ marginBottom: 20 }}>Work to build yourself up.</h1>
              <p className="welcomeMessage" style={{ marginBottom: 50, fontSize: 19, fontFamily: "lora" }}>This is where you can find available jobs and recommended courses to learn new skills and build your portfolio.</p>
              <p className='searchPrompt'>What kind of work are you looking for?</p>
              <Paper onSubmit={handleSearchSubmit}
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 375, opacity: 0.5, borderRadius: 2 }}
              >
                <IconButton sx={{ p: '10px' }} aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  inputProps={{ 'aria-label': 'search' }}
                  type="text"
                  placeholder="Search jobs and courses..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                  <SearchIcon />
                </IconButton>
              </Paper>
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

export default Homepage;