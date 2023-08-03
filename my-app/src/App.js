import './App.css';
import { Link } from "react-router-dom";
import LandingPage from "./components/LandingPage.js"
import HomePage from './components/Homepage.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <LandingPage/>
      <HomePage />
    </div>
  );
}

export default App;
