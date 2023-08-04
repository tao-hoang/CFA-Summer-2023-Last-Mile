import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import "../css/JobListing.css"
import UiDesign from './UiDesign';
import SpecificJob from './SpecificJob';
import LandingNav from './LandingNav';
import { Button} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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
      url:'/gigsLookUp/design',
    })
      .then(function (response) {
        console.log(response.data)
        setgigs(response.data.gigsResults)
        console.log(gigs)
    });
  }
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentFilters, setFilters] = useState(getData);
  
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


  return (
    <div>
      
      
      <LandingNav showLinks={localStorage.token == undefined}/>
      <div id='header'>
        <h1>Find the perfect job for yourself.</h1>
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









      {gigs ? gigs.map(item => 
      <SpecificJob key={item._id} 
                jobTitle={item.jobname}
                payment={item.pay}
                 />) : null}
    </div>
  );
};

export default JobsListing;