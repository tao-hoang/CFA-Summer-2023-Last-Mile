import React, { createContext, useContext, useState } from 'react';

const JobContext = createContext();

export function useJobContext() {
    return useContext(JobContext);
}

export function JobProvider({ children }) {
    const [selectedJob, setSelectedJob] = useState(null);

    return (
        <JobContext.Provider value={{ selectedJob, setSelectedJob }}>
            {children}
        </JobContext.Provider>
    );
}
