import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import Homepage from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoggedIn = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await axios.get('/api/current_user/', {
            headers: {
              Authorization: `Token ${token}`,
            },
          });
          setLoggedIn(true);
        } catch (error) {
          console.log(error);
        }
      }
    };
    checkLoggedIn();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={loggedIn ? <Homepage /> : <Navigate to="/login" />} />
        <Route path="/login" element={loggedIn ? <Navigate to="/" /> : <Login setLoggedIn={setLoggedIn} />} />
        <Route path="/signup" element={loggedIn ? <Navigate to="/" /> : <Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
