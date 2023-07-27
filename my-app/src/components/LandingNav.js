//NavBar component based on homepage/landing page navbar
import { Link } from "react-router-dom";
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
let LandingNav=()=>{
    //colors for components
    const theme = createTheme({
    palette: {
      primary: {
        main: '#0a1128',
      },
      secondary:{
        main:"#001f54"
      }
    },
    typography: {
      fontFamily: "Montserrat",
    }});

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1  }}>
            <AppBar sx={{ bgcolor: '#FEFCFB' }} position="static">
                <Toolbar>
                <Typography className='websiteName' variant="h6" component="div" sx={{  color: '#0a1128',flexGrow: 1, fontWeight:"bold" }}>
                    connectIT
                </Typography>
                <Button className='headerButton' sx={{width:90, borderRadius:100}}>Explore</Button>
                <Link to="/login">
                    <Button className='headerButton' sx={{width:90, borderRadius:100}}>Sign In</Button>
                </Link>
                <Link to="/register">
                    <Button className='headerButton' variant="contained" color="primary" sx={{width:90, borderRadius:100}}>Join</Button>
                </Link>
                </Toolbar>
            </AppBar>
            </Box>
        </ThemeProvider>
    )
}
export default LandingNav;