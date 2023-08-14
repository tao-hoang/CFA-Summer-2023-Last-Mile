import LandingNav from "./LandingNav"
import GigForm from "./GigForm"
import React from "react"
import axios from "axios";
import { useState } from "react";
let GigCreation=()=>{
    const baseURL = "http://ec2-52-91-204-97.compute-1.amazonaws.com:3000";
    let myToken=localStorage.token;
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
                </div>
                <GigForm />
            </div>
        </div>
    )
}
export default GigCreation