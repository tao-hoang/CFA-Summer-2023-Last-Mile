import React, { useState } from 'react';

const JobsListing=()=>{
    const [selectedCategory, setSelectedCategory] = useState('');
    const [currentFilters, setFilters] = useState('');
    //set filters to results
    const 
    //set category to clicked buttons'
    const handleButtonClick = (category) => {
        setSelectedCategory(category);
    };
    //fix categories/sub categories
    return(
    <div>
        <h1>Jobs</h1>
        <h1>Current Jobs {selectedCategory}</h1>
        <div>
            <button
                id="ui-ux-design"
                className="categoryButton"
                onClick={() => handleButtonClick('UI/UX Design')}
            >
                UI/UX Design
            </button>
            <button
                id="web-design"
                className="categoryButton"
                onClick={() => handleButtonClick('Web Design')}
            >
                Web Design
            </button>
            <button
                id="data-analyst"
                className="categoryButton"
                onClick={() => handleButtonClick('Data analyst')}
            >
                Data analyst
            </button>
            <button
                id="it-support"
                className="categoryButton"
                onClick={() => handleButtonClick('IT support')}
            >
                IT support
            </button>
            <button
                id="mobile-app-dev"
                className="categoryButton"
                onClick={() => handleButtonClick('Mobile App dev')}
            >
                Mobile App dev
            </button>
            <button
                id="front-back-end"
                className="categoryButton"
                onClick={() => handleButtonClick('Front End/Back-end')}
            >
                Front End/Back-end
            </button>
            <button
                id="game-dev"
                className="categoryButton"
                onClick={() => handleButtonClick('Game dev')}
            >
                Game dev
            </button>
            <button
                id="asset-creation"
                className="categoryButton"
                onClick={() => handleButtonClick('Asset Creation')}
            >
                Asset Creation
            </button>
            <button
                id="cyber-security"
                className="categoryButton"
                onClick={() => handleButtonClick('Cyber Security')}
            >
                Cyber Security
            </button>
            <button
                id="full-stack-dev"
                className="categoryButton"
                onClick={() => handleButtonClick('Full-Stack dev')}
            >
                Full-Stack dev
            </button>
            <button
                id="product-management"
                className="categoryButton"
                onClick={() => handleButtonClick('Product Management')}
            >
                Product Management
            </button>
            <button
                id="cloud-dev"
                className="categoryButton"
                onClick={() => handleButtonClick('Cloud dev')}
            >
                Cloud dev
            </button>
            <button
                id="customer-support"
                className="categoryButton"
                onClick={() => handleButtonClick('Customer Support')}
            >
                Customer Support
            </button>
        </div>
        <div className='filters'>
            <input type='checkbox'></input>
        </div>
    </div>
    )
}

export default JobsListing;