import React, { useState } from 'react';

const JobsListing = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentFilters, setFilters] = useState([]);

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
      <h1>Jobs</h1>
      <h1>Current Jobs: {selectedCategory}</h1>
      <div className="categoryContainer">
        <div
          id="ui-ux-design"
          className={`categoryCard ${selectedCategory === 'UI/UX Design' ? 'selected' : ''}`}
          onClick={() => handleButtonClick('UI/UX Design')}
        >
          <h2>UI/UX Design</h2>
        </div>
        <div
          id="web-design"
          className={`categoryCard ${selectedCategory === 'Web Design' ? 'selected' : ''}`}
          onClick={() => handleButtonClick('Web Design')}
        >
          <h2>Web Design</h2>
        </div>
        <div
          id="game-development"
          className={`categoryCard ${selectedCategory === 'Game Design' ? 'selected' : ''}`}
          onClick={() => handleButtonClick('Game Design')}
        >
          <h2>Game Design</h2>
        </div>
        <div
          id="mobile-development"
          className={`categoryCard ${selectedCategory === 'Mobile App Development' ? 'selected' : ''}`}
          onClick={() => handleButtonClick('Mobile App Development')}
        >
          <h2>Mobile App Development</h2>
        </div>
        <div
          id="cyber-security"
          className={`categoryCard ${selectedCategory === 'Cyber Security' ? 'selected' : ''}`}
          onClick={() => handleButtonClick('Cyber Security')}
        >
          <h2>Cyber Security</h2>
        </div>
        <div
          id="asset-creation"
          className={`categoryCard ${selectedCategory === 'Asset Creation' ? 'selected' : ''}`}
          onClick={() => handleButtonClick('Asset Creation')}
        >
          <h2>Asset Creation</h2>
        </div>
        {/* Add more category cards as needed */}
      </div>
      <div className="filters">
        <label>
          <input
            type="checkbox"
            value="filter1"
            onChange={handleFilterChange}
          />
          Filter 1
        </label>
        <label>
          <input
            type="checkbox"
            value="filter2"
            onChange={handleFilterChange}
          />
          Filter 2
        </label>
        {/* Add other filters */}
      </div>
    </div>
  );
};

export default JobsListing;
