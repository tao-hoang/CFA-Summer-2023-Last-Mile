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
      <div>
        <button
          id="ui-ux-design"
          className="categoryButton"
          onClick={() => handleButtonClick('UI/UX Design')}
        >
          UI/UX Design
        </button>
        <button
          id="web-design"
          className="categoryButton"
          onClick={() => handleButtonClick('Web Design')}
        >
          Web Design
        </button>
        {/* Add other buttons for different categories */}

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
