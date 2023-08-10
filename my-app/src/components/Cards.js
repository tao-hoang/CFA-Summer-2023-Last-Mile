import React, { useState } from 'react';
import SpecificJob from './SpecificJob';

const Card = ({ jobTitle, jobDesc, category, employer, payment, isActive }) => {
  const [activeCardIndex1, setActiveCardIndex1] = useState(0);
  const [activeCardIndex2, setActiveCardIndex2] = useState(0);

  const cardsData1 = [
    { id: 1, title: 'Card 1', description: 'This is the descriptin for Card 1' },
    { id: 2, title: 'Card 2', description: 'This is the description for Card 2' },
    { id: 3, title: 'Card 3', description: 'This is the description for Card 3' },
  ];

  const cardsData2 = [
    { id: 1, title: 'Course 1', description: 'This is the description for Course 1' },
    { id: 2, title: 'Course 2', description: 'This is the description for Course 2' },
    { id: 3, title: 'Course 3', description: 'This is the description for Course 3' },
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
      <div className="card-section">
        <h2>Recommended Courses</h2>
        <div className="cards-container">
          <span className="arrow left-arrow" onClick={() => handleArrowClick('left', 2)}>
            &#x2190;
          </span>
          {cardsData2.map((card, index) => (
            <div className={`card ${index === activeCardIndex2 ? 'active' : ''}`} key={card.id}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
          <span className="arrow right-arrow" onClick={() => handleArrowClick('right', 2)}>
            &#x2192;
          </span>
        </div>
      </div>
    
  );
};

export default Card;
