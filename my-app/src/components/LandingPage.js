import React, { useState } from 'react';
import { Link, Route, Routes } from "react-router-dom";
import "../css/LandingPage.css";
import LandingNav from "./LandingNav";
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
//icons
import DrawIcon from '@mui/icons-material/Draw';
import HtmlIcon from '@mui/icons-material/Html';
import TerminalIcon from '@mui/icons-material/Terminal';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SecurityIcon from '@mui/icons-material/Security';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
//fonts
import Montserrat from "../css/fonts/Montserrat-VariableFont_wght.ttf";
const LandingPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  //colors for components
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
    // Handle search query submission
    // You can perform any search-related logic here
    console.log('Search submitted:', searchQuery);
  };

  return (
    <div className='landingBodyContainer'>
    <LandingNav showLinks="true"/>
    <ThemeProvider theme={theme}>
      <div className='landingBody'>
        <div id="heroImage">
          <div className="welcomeText">
            <h1 className="welcomeHeader" style={{marginBottom:20}}>Work to empower yourself.</h1>
            <p className="welcomeMessage" style={{marginBottom:50, fontSize:19, fontFamily:"lora"}}>Start honing your skills and get real-world experience with connectIT. We have projects that will suit your needs and help you grow as a professional.</p>
            <p className='searchPrompt'>What kind of work are you looking for?</p>
            <Paper onSubmit={handleSearchSubmit}
              component="form"
              sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 375, opacity:0.5, borderRadius:2, color:"black", opacity:"90%", backgroundColor:"lightgrey"}}
            >
              <IconButton sx={{ p: '10px' }} aria-label="menu">
                <MenuIcon />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1}}
                inputProps={{ 'aria-label': 'search' }}
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </div>
        </div>
        <div className="categoriesSection">
          <h1 className='catergoryHeader'>Browse categories</h1>
          <div className='categoriesDiv'>
            <div className="categoryLink">
              <DrawIcon className='categoryIcon'/>
              <Link to= '/uidesign'>
                <p>UX/UI Design</p>
              </Link>
            </div>

            <div className="categoryLink">
              <div className='webDevIcons'>
                <HtmlIcon className='categoryIcon'/>
              </div>
              <Link to= '/webdesign'>
                <p>Web Development</p>
              </Link>
            </div>

            <div className="categoryLink">
              <TerminalIcon className='categoryIcon'/>
              <Link to= '/softwaredev'>
                <p>Software Development</p>
              </Link>
            </div>

            <div className="categoryLink">
              <PhoneAndroidIcon className='categoryIcon'/>
              <Link to= '/mobiledev'>
                <p>Mobile App Development</p>
              </Link>
            </div>

            <div className="categoryLink">
              <SportsEsportsIcon  className='categoryIcon'/>
              <Link to= '/gamedesign'>
                <p>Game Development</p>
              </Link>
            </div>

            <div className="categoryLink">
              <QueryStatsIcon  className='categoryIcon'/>
              <Link to= '/dataanalytics'>
                <p>Data Analytics</p>
              </Link>
            </div>

            <div className="categoryLink">
              <ManageAccountsIcon  className='categoryIcon'/>
              <Link to= '/itsupport'>
                <p>IT Support</p>
              </Link>
            </div>

            <div className="categoryLink">
              <SecurityIcon  className='categoryIcon'/>
              <Link to= '/cybersecurity'>
                <p>Cybersecurity</p>
              </Link>
            </div>

            <div className="categoryLink">
              <WebAssetIcon  className='categoryIcon'/>
              <Link to= '/assetcreation'>
                <p>Asset Creation</p>
              </Link>
            </div>

            <div className="categoryLink">
              <ContactSupportIcon  className='categoryIcon'/>
              <Link to= '/customersupport'>
                <p>Customer Support</p>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </ThemeProvider>
    </div>
  );
};

export default LandingPage;