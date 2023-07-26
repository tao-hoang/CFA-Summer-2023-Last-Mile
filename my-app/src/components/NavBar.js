import React, { useState } from 'react';
import './App.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#home">Website Name</a>
      </div>
      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="navbar-hamburger" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? 'animate' : ''}`} />
        <div className={`bar ${isMenuOpen ? 'animate' : ''}`} />
        <div className={`bar ${isMenuOpen ? 'animate' : ''}`} />
      </div>
    </nav>
  );
};

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        {/* Your page content goes here */}
        <h1>Welcome to Website Name</h1>
        <p>This is the content of the page.</p>
      </div>
    </div>
  );
}

export default App;

