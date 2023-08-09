import React from 'react';
import SpecificJob from './SpecificJob';

const JobCard = ({ jobTitle, jobDesc, category, employer, payment, isActive }) => {
  return (
    <div className={`card ${isActive ? 'active' : ''}`}>
      <SpecificJob
        jobTitle={jobTitle}
        jobDesc={jobDesc}
        category={category}
        employer={employer}
        payment={payment}
      />
    </div>
  );
};

export default JobCard;
