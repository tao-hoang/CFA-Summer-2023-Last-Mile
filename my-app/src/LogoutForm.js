import React from 'react';

const LogoutForm = () => {
  const handleLogout = () => {
    // Clear the JSON web token (JWT) from LocalStorage
    localStorage.removeItem('token');

    // Redirect to the landing page or any other desired location
    // You can use React Router for

