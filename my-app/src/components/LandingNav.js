//NavBar component based on homepage/landing page navbar, pass showLinks if login buttons should be displayed
import { Link } from "react-router-dom";
import "../css/LandingNav.css";
//link component(s)
import LandingNavLinks from "./LandingNavLinks";
//header
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
//fonts
import Montserrat from "../css/fonts/Montserrat-VariableFont_wght.ttf";
let LandingNav=(props)=>{
    //colors for components
    const theme = createTheme({
    palette: {
      primary: {
        main: '#0a1128',
      },
      secondary:{
        main:"#001f54"
      },
    },
    typography: {
      fontFamily: "Montserrat",
    }});

    return (
      <div className="landingNavBody"><div className="landingNavContent">
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1, boxShadow:"none"  }}>
            <AppBar sx={{ bgcolor: '#FEFCFB',boxShadow:"none"  }} position="static">
                <Toolbar sx={{boxShadow:"none"  }}>
                <Typography className='websiteName' variant="h6" component="div" sx={{  color: '#0a1128',flexGrow: 1, fontWeight:"bold" }}>
                <Link to="/" className="linkUnstyled">connectIT</Link>
                </Typography>
                <LandingNavLinks showLinks={props.showLinks}/>
                </Toolbar>
            </AppBar>
            </Box>
        </ThemeProvider>
      </div></div>
    )
}
export default LandingNav;