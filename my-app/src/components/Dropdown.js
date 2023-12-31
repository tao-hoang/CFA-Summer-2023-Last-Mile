import  React,{ useEffect, useState } from 'react';
import { useNavigate, Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import axios from "axios";
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
export default function Dropdown(props) {
 
    
  const [anchorEl, setAnchorEl] = React.useState(null);
  const[user, setUser] = useState({})
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const baseURL = "https://cfa-last-mile-backend.onrender.com"
  const getUser = () => {
    console.count("user load")
  if(localStorage.user){
    setUser(JSON.parse(localStorage.user))
    }
  }
    useEffect(
      getUser,[localStorage.user]
    )
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
       // getData()
        
  };
  const gotoProfle= ()=>{
    handleClose();
    navigate("/profilecreation")
  }
  const gotoMyProfle = () =>{
    handleClose();
    navigate("/userprofile/"+user._id)
  }

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }} src={baseURL +'/image/'+user.pfp}/>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={gotoMyProfle}>
          <ListItemAvatar><Avatar src={baseURL +'/image/'+user.pfp}/></ListItemAvatar>
           {user.fname + ' '+ user.lname} 
        </MenuItem>
        <Divider />
        <MenuItem onClick={gotoProfle}>
          <ListItemIcon><ManageAccountsIcon/></ListItemIcon>
           Edit My Profile
        </MenuItem>
        <MenuItem onClick={ ()=>{
                    handleClose();
                    navigate("/myjobs")
                    }}>
        
           <ListItemIcon><WorkOutlineIcon/></ListItemIcon>

           My Jobs
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon><BookmarkBorderIcon/></ListItemIcon>
           Saved Jobs
        </MenuItem>
        <MenuItem onClick={()=>{
          handleClose();
          navigate("/gigcreation");
        }}>
          <ListItemIcon><PostAddOutlinedIcon/></ListItemIcon>
          Post a Job
        </MenuItem>
        
        
        

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={props.tokeFunc}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}