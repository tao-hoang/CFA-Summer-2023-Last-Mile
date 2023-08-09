import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import "../css/JobListing.css"
import SpecificJob from './SpecificJob';
import LandingNav from './LandingNav';
import { Button} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Cards from './Cards'
const theme = createTheme({
  palette: {
    primary: {main: '#0a1128'},
    secondary:{main:"#001f54"},
    light:{main:"#ffff"}
  }
});
const JobsListing = () => {

  const getData = () =>{
    axios({
      method: 'get',
      baseURL: 'http://localhost:3000',
      responseType: 'json',
      url:'/jobslisting/design',
    })
      .then(function (response) {
        console.log(response.data)
        setgigs(response.data.gigsResults)
        console.log(gigs)
    });
  }
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentFilters, setFilters] = useState(getData);
  const [activeCardIndex1, setActiveCardIndex1] = useState(0);
  const [activeCardIndex2, setActiveCardIndex2] = useState(0);
  
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

//Available Jobs
const cardsData1 = [
  { id: 1, title: 'Card 1', description: 'This is the description for Card 1' },
  { id: 2, title: 'Card 2', description: 'This is the description for Card 2' },
  { id: 3, title: 'Card 3', description: 'This is the description for Card 3' },
];

//Recommended Courses
const cardsData2 = [
  { id: 1, title: 'Card 1', description: 'This is the description for Card 1' },
  { id: 2, title: 'Card 2', description: 'This is the description for Card 2' },
  { id: 3, title: 'Card 3', description: 'This is the description for Card 3' },
];

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
    
    <div>
      
    
      <LandingNav showLinks={localStorage.token == undefined}/>
      <div id='header'>
        <h1>Find the perfect job for yourself.</h1>
        <p></p>
      </div>

      
      
      <div className='cat-holder'>
        <h3>Sort By:</h3>
       <Button variant="extended" className='Fab' >
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

      {/* Add Cards for Each Job */}
      <div className="card-section">
        <h2>Available Jobs</h2>
        <div className="cards-container">
          <span className="arrow left-arrow" onClick={() => handleArrowClick('left', 1)}>&#x2190;</span>
          {gigs ? gigs.map((item, index) => (
            <div className={`card ${index === activeCardIndex1 ? 'active' : ''}`} key={item._id}>
              <SpecificJob
                jobTitle={item.jobname}
                jobDesc={item.description}
                category={item.categories}
                employer={item.employer}
                payment={item.pay}
              />
            </div>
          )) : null}
          <span className="arrow right-arrow" onClick={() => handleArrowClick('right', 1)}>&#x2192;</span>
        </div>
      </div>

      <div className="card-section">
        <h2>Recommended Courses</h2>
        <div className="cards-container">
          <span className="arrow left-arrow" onClick={() => handleArrowClick('left', 2)}>&#x2190;</span>
          {cardsData2.map((card, index) => (
            <div className={`card ${index === activeCardIndex2 ? 'active' : ''}`} key={card.id}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
          <span className="arrow right-arrow" onClick={() => handleArrowClick('right', 2)}>&#x2192;</span>
        </div>
      </div>
    </div>
  );
};

export default JobsListing;