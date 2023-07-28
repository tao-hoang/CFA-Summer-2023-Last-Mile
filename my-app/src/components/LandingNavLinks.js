import { Fragment } from "react"
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
let LandingNavLinks=(props)=>{
    //return links if showlinks ==true
    if (props.showLinks){
        return(
            <Fragment>
                <Button className='headerButton' sx={{width:90, borderRadius:100}}>Explore</Button>
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
        return(<div></div>)
    }
}
export default LandingNavLinks;