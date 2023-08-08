import LandingNav from "./LandingNav"
import ProfileForm from "./ProfileForm"
import React from "react"
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
let ProfileCreation=()=>{
    return(
        <div className="profileCreationHolder">
            <LandingNav/>
            
            <div className="profileCreationContent">
                <div className="profileCreationHero">   
                    <div className="welcomeTextProfile">
                        <h1 className="welcomeHeader" style={{marginBottom:20}}>Welcome to connect IT.</h1>
                        <p className="welcomeMessage" style={{marginBottom:50, fontSize:19, fontFamily:"lora"}}>Create a profile that highlights the things that make you unique and be found by employers who are looking for someone just like you.</p>
                    </div>
                </div>
                <div className="profileBanner">
                        <AddAPhotoIcon className="cameraIcon bannerCamera"/>
                        <div className="profilePic"><AddAPhotoIcon className="cameraIcon"/></div>
                </div>
                <ProfileForm />
            </div>
        </div>
    )
}
export default ProfileCreation