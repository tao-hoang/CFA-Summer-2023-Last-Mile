import React, { useState } from 'react';
import { Link, Route, Routes } from "react-router-dom";
import "../css/Homepage.css";
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
  };
}

<h1>Available Jobs</h1>
const cardsData1 = [
  { id: 1, title: 'Card 1', description: 'This is the description for Card 1' },
  { id: 2, title: 'Card 2', description: 'This is the description for Card 2' },
  { id: 3, title: 'Card 3', description: 'This is the description for Card 3' },
];

<h1>Recommended Courses</h1>
const cardsData2 = [
  { id: 1, title: 'Card 1', description: 'This is the description for Card 1' },
  { id: 2, title: 'Card 2', description: 'This is the description for Card 2' },
  { id: 3, title: 'Card 3', description: 'This is the description for Card 3' },
];



const Homepage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCardIndex1, setActiveCardIndex1] = useState(0);
  const [activeCardIndex2, setActiveCardIndex2] = useState(0);

  const handleArrowClick = (direction, section) => {
    if (section === 1) {
      setActiveCardIndex1((prevIndex) => {
        if (direction === 'left') {
          return prevIndex - 1 < 0 ? cardsData1.length - 1 : prevIndex - 1;
        } else if (direction === 'right') {
          return (prevIndex + 1) % cardsData1.length;
        }
      });
    } else if (section === 2) {
      setActiveCardIndex2((prevIndex) => {
        if (direction === 'left') {
          return prevIndex - 1 < 0 ? cardsData2.length - 1 : prevIndex - 1;
        } else if (direction === 'right') {
          return (prevIndex + 1) % cardsData2.length;
        }
      });
    }
  };

  return (
    <div className='landingBodyContainer'>
      <LandingNav showLinks="true" />
      <ThemeProvider theme={theme}>
        <div className='landingBody'>
          <div id="heroImage">
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
            <div className="card-section">
              <h2>Section 1</h2>
              <div className="card-container">
                {cardsData1.map((card, index) => (
                  <div
                    className={`card ${index === activeCardIndex1 ? 'active' : ''}`}
                    key={card.id}
                  >
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    <div className="arrows">
                      <span onClick={() => handleArrowClick('left', 1)}>&#x2190;</span>
                      <span onClick={() => handleArrowClick('right', 1)}>&#x2192;</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-section">
              <h2>Section 2</h2>
              <div className="card-container">
                {cardsData2.map((card, index) => (
                  <div
                    className={`card ${index === activeCardIndex2 ? 'active' : ''}`}
                    key={card.id}
                  >
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    <div className="arrows">
                      <span onClick={() => handleArrowClick('left', 2)}>&#x2190;</span>
                      <span onClick={() => handleArrowClick('right', 2)}>&#x2192;</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default Homepage;