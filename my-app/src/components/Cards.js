import React, { useState } from 'react';
import axios from "axios";
import SpecificJob from './SpecificJob';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import JobCard from './JobCard';




const theme = createTheme({
  palette: {
    primary: { main: '#0a1128' },
    secondary: { main: "#001f54" },
    light: { main: "#ffff" }
  }
});

const Cards = ({ gigs }) => {
  const [activeCardIndex1, setActiveCardIndex1] = useState(0);
  const [activeCardIndex2, setActiveCardIndex2] = useState(0);

  const cardsData = [
    { id: 1, title: 'Course 1', description: 'This is the description for Course 1' },
    { id: 2, title: 'Course 2', description: 'This is the description for Course 2' },
    { id: 3, title: 'Course 3', description: 'This is the description for Course 3' },
  ];

  const handleArrowClick = (direction, section) => {
    if (section === 1) {
      setActiveCardIndex1((prevIndex) => {
        if (direction === 'left') {
          return prevIndex - 1 < 0 ? (gigs.length - 1) : prevIndex - 1;
        } else if (direction === 'right') {
          return (prevIndex + 1) % gigs.length;
        }
      });
    } else if (section === 2) {
      setActiveCardIndex2((prevIndex) => {
        if (direction === 'left') {
          return prevIndex - 1 < 0 ? cardsData.length - 1 : prevIndex - 1;
        } else if (direction === 'right') {
          return (prevIndex + 1) % cardsData.length;
        }
      });
    }
  };

  return (
    <div>
      <div className="card-section">
        <h2>Available Jobs</h2>
        <div className="cards-container">
          <span className="arrow left-arrow" onClick={() => handleArrowClick('left', 1)}>&#x2190;</span>
          {gigs ? gigs.map((item, index) => (
            <div className={`card ${index === activeCardIndex1 ? 'active' : ''}`} key={item._id}>
              <JobCard
                key={item._id}
                id = {item._id}
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
          <span className="arrow left-arrow" onClick={() => handleArrowClick('left', 2)}>
            &#x2190;
          </span>
          {cardsData.map((card, index) => (
            <div className={`card ${index === activeCardIndex2 ? 'active' : ''}`} key={card.id}>
              <JobCard
                jobTitle={card.title}
                jobDesc={card.description}
              />
            </div>
          ))}
          <span className="arrow right-arrow" onClick={() => handleArrowClick('right', 2)}>
            &#x2192;
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cards;

