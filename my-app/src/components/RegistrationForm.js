import React, { useState } from 'react';

const baseURL = "http://localhost:3000/register";


const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const handleRegistration = (e) => {
    e.preventDefault();

    // Validation logic (add your specific validation here)
    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

   if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (!isValidPassword(password)) {
      setError('Please enter a valid password.');
      return;
    }


      axios.post(baseURL, {
        "fname":"Daen",
        "lname":"Crz",
        "email": email,
        "password":password
      }
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          setError("Failed to log in. Please check your credentials.");
        });


    // Registration API call (replace with your own implementation)
    // Assuming it returns a JSON web token (JWT)
    const token = 'sample-jwt-token';
    localStorage.setItem('token', token);

    // Redirect to restricted-access page
    // You can use React Router for navigation
    // history.push('/restricted');
  };

  const isValidEmail = (email) => {
    // Email validation logic (add your specific validation here)
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPassword = (password) => {
    // Password validation logic (add your specific validation here)
    // Password criteria: at least 12 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character
    return (
      password.length >= 12 &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /\d/.test(password) &&
      /[!@#$%^&*_=+?~]/.test(password)
    );
  };

  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={handleRegistration}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        <button type="submit">Register</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default RegistrationForm;