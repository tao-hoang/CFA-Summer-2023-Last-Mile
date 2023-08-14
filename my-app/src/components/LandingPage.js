import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "../css/LandingPage.css";
import LandingNav from "./LandingNav";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useJobContext } from './JobContext';
//header

import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
//search bar
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
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
  const [searchResult, setSearchResult] = useState([]);
  const [open, setOpen] = useState(false);

  const debouncedGetData = debounce(async (query) => {
    const response = await getData(query);
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

  const navigate = useNavigate();
  const { setSelectedJob } = useJobContext();

  const handleSearchItemClick = (event, newValue) => {
    if (newValue) {
      setSelectedJob(newValue);
      navigate('/SearchItem');
  }

  }

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
            <React.Fragment key="unique-key">
              <Autocomplete
                id="asynchronous-demo"
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
        <div className="categoriesSection">
          <h1 className='catergoryHeader'>Browse categories</h1>
          <div className='categoriesDiv'>
            <div className="categoryLink">
              <DrawIcon className='categoryIcon'/>
              <Link to= '/uidesign' className="linkUnstyled">
                <p>UX/UI Design</p>
              </Link>
            </div>

            <div className="categoryLink">
              <div className='webDevIcons'>
                <HtmlIcon className='categoryIcon'/>
              </div>
              <Link to= '/webdesign' className="linkUnstyled">
                <p>Web Development</p>
              </Link>
            </div>

            <div className="categoryLink">
              <TerminalIcon className='categoryIcon'/>
              <Link to= '/softwaredev' className="linkUnstyled">
                <p>Software Development</p>
              </Link>
            </div>

            <div className="categoryLink">
              <PhoneAndroidIcon className='categoryIcon'/>
              <Link to= '/mobiledev' className="linkUnstyled">
                <p>Mobile App Development</p>
              </Link>
            </div>

            <div className="categoryLink">
              <SportsEsportsIcon  className='categoryIcon'/>
              <Link to= '/gamedesign' className="linkUnstyled">
                <p>Game Development</p>
              </Link>
            </div>

            <div className="categoryLink">
              <QueryStatsIcon  className='categoryIcon'/>
              <Link to= '/dataanalytics' className="linkUnstyled">
                <p>Data Analytics</p>
              </Link>
            </div>

            <div className="categoryLink">
              <ManageAccountsIcon  className='categoryIcon'/>
              <Link to= '/itsupport' className="linkUnstyled">
                <p>IT Support</p>
              </Link>
            </div>

            <div className="categoryLink">
              <SecurityIcon  className='categoryIcon'/>
              <Link to= '/cybersecurity' className="linkUnstyled">
                <p>Cybersecurity</p>
              </Link>
            </div>

            <div className="categoryLink">
              <WebAssetIcon  className='categoryIcon'/>
              <Link to= '/assetcreation' className="linkUnstyled">
                <p>Asset Creation</p>
              </Link>
            </div>

            <div className="categoryLink">
              <ContactSupportIcon  className='categoryIcon'/>
              <Link to= '/customersupport' className="linkUnstyled">
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

const debounce = (func, delay) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
};

const getData = async (query) => {
  if (!query) {
    return [];
  }

  try {
    const response = await axios.get(`http://localhost:3000/jobsListing/${query}`);
    console.log(response);
    return response.data.gigsResults;
    
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};


export default LandingPage;