import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await fetch('https://my-worker.rizeenroe00.workers.dev/api');
        const data = await response.json();
        setMessage(data.message);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMessage();
  }, []);

  return (
    <div className="App">
      <p>{message ? message : 'Loading message from server...'}</p>
    </div>
  );
}

export default App;
