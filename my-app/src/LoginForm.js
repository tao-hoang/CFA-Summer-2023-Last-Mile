import React, { useState } from 'react';
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Validation logic (add your specific validation here)
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    // Login API call (replace with your own implementation)
    // Assuming it returns a JSON web token (JWT)
    const token = 'sample-jwt-token';
    localStorage.setItem('token', token);

    // Redirect to restricted-access page
    // You can use React Router for navigation
    // history.push('/restricted');
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginForm;
