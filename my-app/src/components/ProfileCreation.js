import LandingNav from "./LandingNav"
import ProfileForm from "./ProfileForm"
import React from "react"
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import axios from "axios";
import { useState } from "react";
let ProfileCreation=()=>{
    const baseURL = "http://localhost:3000";
    let myToken=localStorage.token;
    //pfp image setting
    const [selectedImage, setSelectedImage] = useState(null);
  

    const handleImageChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const imageURL = URL.createObjectURL(file);
        setSelectedImage(imageURL);

        // Create a FormData object to send the image file
        const formData = new FormData();
        formData.append('avatar', file);
        //axios post
        editProfilePic(formData,myToken);
      } else {
        setSelectedImage(null);
      }
    };
    const editProfilePic = async ( formData, authToken ) => {
        try {
          // Make the POST request to the modifyprofile route
          const response = await axios.post(`${baseURL}/changepfp`, formData,
          {
            headers: {
                'Content-Type': 'multipart/form-data',
                'x-access-token':authToken, 
            },
          });
          // If the request is successful, return the response data
          console.log('Upload success: ',response);
          return response.data;
        }
        catch (error) {
          // If there's an error, handle it here (e.g., show an error message)
          throw new Error(error.message);
        }
      };
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
                        <AddAPhotoIcon className="cameraIcon bannerCamera clickable"/>
                        <label htmlFor="pfpInput" className="profilePic clickable" style={{
                            backgroundImage:`url(${selectedImage})`,
                        }}><AddAPhotoIcon className="cameraIcon"/></label>
                </div>
                <input type="file" accept="image/*" onChange={handleImageChange} id="pfpInput"/>
                <ProfileForm />
            </div>
        </div>
    )
}
export default ProfileCreation