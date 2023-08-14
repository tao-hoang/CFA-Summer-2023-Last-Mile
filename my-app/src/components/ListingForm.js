import React from "react"
import { useState } from "react";
import axios from "axios";
import axiosRateLimit from 'axios-rate-limit';
const http = axiosRateLimit(axios.create(), { maxRequests: 2, perMilliseconds: 1000 });

import "../css/ProfileCreation.css"
import LandingNav from "./LandingNav"

const ListingForm = () => {

    // State variables to store form data
    const [jobTitle, setJobTitle] = useState('');
    const [company, setCompany] = useState('');
    const [companyInfo, setCompanyInfo] = useState('');
    const [jobDescription, setjobDescription] = useState('');
    const [pay, setPay] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [contactInfo, setContactInfo] = useState('');

    // Set to current baseURL
    const baseURL = "http://ec2-3-95-155-67.compute-1.amazonaws.com:3000";
    
    const getData =async () => {
        console.count()
        await axios({
            method: 'post',
            baseURL: 'http://ec2-3-95-155-67.compute-1.amazonaws.com:3000',
            responseType: 'json',
            url:'/currentuser',
            headers: {"x-access-token": localStorage.token},
            body:{"token": localStorage.token}
        })
        .then(function (response) {
            //console.log(response.data)
            localStorage.setItem("user", JSON.stringify(response.data))
        })
        .catch((error) => {
            console.log(error)
            console.log(JSON.parse(localStorage.user))
            if(localStorage.token){
            localStorage.removeItem("token")
            }
        })}
    }
    
    return (
        <div>
            <form onSubmit={handleFormSubmit} id="listingForm" className='listingForm'>
                <div>
                    <label htmlFor="jobTitle">Job Title*</label>
                    <input className='listingInput'
                    type="text"
                    id="jobTitle"
                    value={jobTitle}
                    onChange={(e) => setjobTitle(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="company">Company</label>
                    <input className='listingInput'
                    type="text"
                    id="company"
                    value={company}
                    onChange={(e) => setcompany(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="companyInfo">Company Information</label>
                    <input className='listingInput'
                    type="text"
                    id="companyInfo"
                    value={companyInfo}
                    onChange={(e) => setcompanyInfo(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="jobDescription">Job Description*</label>
                    <input className='listingInput'
                    type="text"
                    id="jobDescription"
                    value={jobDescription}
                    onChange={(e) => setjobDescription(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="pay">Pay*</label>
                    <input className='listingInput'
                    type="text"
                    id="pay"
                    value={pay}
                    onChange={(e) => setPay(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="country">Country</label>
                    <input className='listingInput'
                    type="text"
                    id="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="city">City</label>
                    <input className='listingInput'
                    type="text"
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="contactInfo">Contact Information</label>
                    <input className='listingInput'
                    type="text"
                    id="contactInfo"
                    value={contactInfo}
                    onChange={(e) => setcontactInfo(e.target.value)} />
                </div>
            </form>
        </div>
    )


export default ListingForm;