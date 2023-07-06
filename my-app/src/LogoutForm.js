import React from 'react';

const LogoutForm = () => {
  const handleLogout = () => {
    // Clear the JSON web token (JWT) from LocalStorage
    localStorage.removeItem('token');

    // Redirect to the landing page or any other desired location
    // You can use React Router for navigation
    // history.push('/');
  };

  return (
    <div>
      <h1>Logout</h1>
      <p>Click the button below to logout:</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
