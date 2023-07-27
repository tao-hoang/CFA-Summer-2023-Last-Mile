import React from 'react';
import '../App.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
  );
};

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        {/* Your page content goes here */}
        <h1>Welcome to website name here</h1>
        <p>This is the content of the page.</p>
        <p></p>
      </div>
    </div>
  );
}

export default App
