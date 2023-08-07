import LandingNav from "./LandingNav"
import ProfileForm from "./ProfileForm"
import React from "react"
let ProfileCreation=()=>{
    return(
        <div className="pcholder">
            <LandingNav/>
            <div className="profileCreationContent">
                <div className="profileCreationHero"></div>
                <div className="profileBanner"></div>
                <div className="profilePic"></div>
                <ProfileForm />
            </div>
        </div>
    )
}
export default ProfileCreation