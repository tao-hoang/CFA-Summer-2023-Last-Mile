import * as react from react


import Avatar from '@mui/material/Avatar';

import LandingNav from "./LandingNav";

export default function ProfileView(){
    
    return(
        <div>
            <LandingNav/>
            <h3>profile view page</h3>

            <Avatar src={baseURL +'/image/'+user.pfp}/>
        </div>
    )
}