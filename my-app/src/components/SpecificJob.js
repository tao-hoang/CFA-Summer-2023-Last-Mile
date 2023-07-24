import React, { useState } from 'react';

//description and info for a clicked job post
let SpecificJob=(props)=>{
    let jobTitle=props.jobTitle;
    let jobDesc=props.jobDesc;
    let payment=props.payment;
    let duration=props.duration;
    let remote=props.remote;
    let category=props.category;
    let employer=props.employer;
    return(
        <div>
            <h1 id="jobTitle">{jobTitle}</h1>
            <p id="jobDesc">{jobDesc}</p>
            <div id="details">
                <p id="payment">{payment}</p>
                <p id="duration">{duration}</p>
                <p id="remote">{remote}</p>
                <p id="category">{category}</p>
            </div>
            <p id="employer">{employer}</p>
        </div>
    )
}
export default SpecificJob;