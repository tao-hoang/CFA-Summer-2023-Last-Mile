import React, { useState } from 'react';

const LandingPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

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
    <div>
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
      {/* Search bar */}
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search jobs and courses..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
      
      {/* How It Works section */}
      <ol>
        <li>Create an account to get started</li>
        <li>Set your preferences and indicate your desired skills and location</li>
        <li>Explore the available job listings and learning resources</li>
        <li>Apply for jobs that match your interests and qualifications</li>
        <li>Connect with other users and industry professionals to expand your network</li>
        <li>Track your job applications and interview progress</li>
        <li>Continuously learn and enhance your skills to improve your career prospects</li>
      </ol>
      {/* Join Our Community section */}
      <p>Sign up now to start your journey towards a fulfilling and successful career!</p>
    </div>
  );
};

export default LandingPage;
