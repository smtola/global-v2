import React, { useState } from 'react';
import {jwtDecode} from 'jwt-decode';

const TokenManager = () => {
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');

  const handleTokenChange = (e) => {
    setToken(e.target.value);
  };

  const checkToken = () => {
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000; // Current time in seconds

        if (decodedToken.exp < currentTime) {
          setMessage('Token has expired');
        } else {
          setMessage('Token is valid');
        }
      } catch (error) {
        setMessage('Invalid token');
      }
    } else {
      setMessage('No token provided');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={token}
        onChange={handleTokenChange}
        placeholder="Enter JWT"
      />
      <button onClick={checkToken}>Check Token</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default TokenManager;
