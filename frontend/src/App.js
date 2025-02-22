import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  // Fetch data from the backend on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://zen-portfolio-git-main-rizeenroes-projects.vercel.app/');  // Fetching the / endpoint
        setMessage(response.data.message);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run only once

  return (
    <div className="App">
      <h1>React and Express on Vercel</h1>
      <p>{message}</p> {/* Displaying the message */}
    </div>
  );
}

export default App;
