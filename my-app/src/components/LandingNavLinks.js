import { Fragment, useState } from "react"
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Profile from "../images/defaultProfilePic.png"
import Bell from "../images/notificationBell.png"
import AccountMenu from "./Dropdown";
let LandingNavLinks=(props)=>{
    //return links if showlinks ==true
    const [token, settoken] = useState('')
    const handleToken = ()=>{
      //dumb solution but it works for now
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      console.log("logoout")
      settoken(localStorage.token)
  }
    if (!localStorage.token){
        return(
            <Fragment>
                <Link to="/jobslisting">
                <Button className='headerButton' sx={{width:90, borderRadius:100}}>Jobs Listings</Button>
                </Link>
                <Link to="/homepage">
                <Button className='headerButton' sx={{width:90, borderRadius:100}}>Explore</Button>
                </Link>
                <Link to="/login">
                    <Button className='headerButton' sx={{width:90, borderRadius:100}}>Sign In</Button>
                </Link>
                <Link to="/register">
                    <Button className='headerButton' variant="contained" color="primary" sx={{width:90, borderRadius:100}}>Join</Button>
                </Link>
            </Fragment>
        )
    }
    //else do not return links
    else{
        return(<Fragment>
            <Link to="/homepage">
                <Button className='headerButton' sx={{width:90, borderRadius:100}}>Explore</Button>
                </Link>
                <img src={Bell} id="bell"/>
            {/* <img src={Profile}/> */}
            <AccountMenu tokeFunc={handleToken}/>

                </Fragment>)
    }
}
export default LandingNavLinks;