// Home.js

import React from 'react';
import NavigationBar from '../components/NavigationBar';

function Home() {
  return (
    <div style={{ paddingTop: '70px' }}>
      <NavigationBar />
      <h1>Welcome to Livebig</h1>
      <p>
        This is the homepage of Livebig. Here, you will find all the information
        you need to live a healthy and fulfilling life.
      </p>
    </div>
  );
}

export default Home;

