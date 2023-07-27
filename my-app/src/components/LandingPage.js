import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import "../css/LandingPage.css";
//header
import { ButtonGroup } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
//search bar
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
//icons
import DrawIcon from '@mui/icons-material/Draw';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
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
    <ThemeProvider theme={theme}>
      <div>
        <Box sx={{ flexGrow: 1  }}>
          <AppBar sx={{ bgcolor: '#FEFCFB' }} position="static">
            <Toolbar>
              <Typography className='websiteName' variant="h6" component="div" sx={{  color: '#0a1128',flexGrow: 1, fontWeight:"bold" }}>
                connectIT
              </Typography>
              <Button className='headerButton' sx={{width:90, borderRadius:100}}>Explore</Button>
              <Link to="/login">
                <Button className='headerButton' sx={{width:90, borderRadius:100}}>Sign In</Button>
              </Link>
              <Link to="/register">
                <Button className='headerButton' variant="contained" color="primary" sx={{width:90, borderRadius:100}}>Join</Button>
              </Link>
            </Toolbar>
          </AppBar>
        </Box>
        <div id="heroImage">
          <div className="welcomeText">
            <h1 className="welcomeHeader" style={{marginBottom:20}}>Work to empower yourself.</h1>
            <p className="welcomeMessage" style={{marginBottom:50, fontSize:19, fontFamily:"lora"}}>Start honing your skills and get real-world experience with connectIT. We have projects that will suit your needs and help you grow as a professional.</p>
            <p className='searchPrompt'>What kind of work are you looking for?</p>
            <Paper onSubmit={handleSearchSubmit}
              component="form"
              sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 375, opacity:0.5, borderRadius:2}}
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
        <div className="categoriesSection">
          <h1 className='catergoryHeader'>Browse categories</h1>
          <div className='categoriesDiv'>
            <div className="categoryLink">
              <DrawIcon className='categoryIcon'/>
              <Link to="UiDesign.js">
                <p>UX/UI Design</p>
              </Link>
            </div>

            <div className="categoryLink">
              <div className='webDevIcons'>
                <HtmlIcon className='categoryIcon'/>
                {/* <CssIcon className='categoryIcon'/> */}
              </div>
              <Link to="WebDesign.js">
                <p>Web Development</p>
              </Link>
            </div>

            <div className="categoryLink">
              <TerminalIcon className='categoryIcon'/>
              <Link to="SoftwareDev.js">
                <p>Software Development</p>
              </Link>
            </div>

            <div className="categoryLink">
              <PhoneAndroidIcon className='categoryIcon'/>
              <Link to="MobileDev.js">
                <p>Mobile App Development</p>
              </Link>
            </div>

            <div className="categoryLink">
              <SportsEsportsIcon  className='categoryIcon'/>
              <Link to="GameDesign.js">
                <p>Game Development</p>
              </Link>
            </div>

            <div className="categoryLink">
              <QueryStatsIcon  className='categoryIcon'/>
              <Link to="DataAnalytics.js">
                <p>Data Analytics</p>
              </Link>
            </div>

            <div className="categoryLink">
              <ManageAccountsIcon  className='categoryIcon'/>
              <Link to="ITSupport.js">
                <p>IT Support</p>
              </Link>
            </div>

            <div className="categoryLink">
              <SecurityIcon  className='categoryIcon'/>
              <Link to="CyberSecurity.js">
                <p>Cybersecurity</p>
              </Link>   
            </div>

            <div className="categoryLink">
              <WebAssetIcon  className='categoryIcon'/>
              <Link to="AssetCreation.js">
                <p>Asset Creation</p>
              </Link>
            </div>

            <div className="categoryLink">
              <ContactSupportIcon  className='categoryIcon'/>
              <Link to="CustomerSupport.js">
                <p>Customer Support</p>
              </Link>
            </div>

          </div>
        </div>
        <h1>Welcome to Our App!</h1>
        <p>We made this app to help people learn skills and find jobs in places that they love!</p>
        <h2>Features:</h2>
        {/* Existing features list */}
        <ul>
          <li>Search for jobs based on location, skills, and preferences</li>
          <li>Explore a wide range of industries and career paths</li>
          <li>Access comprehensive resources and learning materials</li>
          <li>Connect with industry professionals and mentors</li>
          <li>Get personalized job recommendations</li>
          <li>Track your learning progress and achievements</li>
        </ul>
        <h2>How it Works:</h2>
        {/* How It Works section */}
        <ul>
          <li>Create an account to get started</li>
          <li>Set your preferences and indicate your desired skills and location</li>
          <li>Explore the available job listings and learning resources</li>
          <li>Apply for jobs that match your interests and qualifications</li>
          <li>Connect with other users and industry professionals to expand your network</li>
          <li>Track your job applications and interview progress</li>
          <li>Continuously learn and enhance your skills to improve your career prospects</li>
        </ul>
        {/* Join Our Community section */}
        <p>Sign up now to start your journey towards a fulfilling and successful career!</p>
      </div>
    </ThemeProvider>
  );
};

export default LandingPage;