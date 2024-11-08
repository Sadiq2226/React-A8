import React from 'react';
import Chatbot from './Chatbot';  // Adjust the import path based on your project structure

const Home = () => (
  <div style={{ 
    padding: '20px', 
    textAlign: 'center', 
    backgroundColor: '#1a1a2e', 
    minHeight: '100vh', 
    color: '#c9c9ff',
    position: 'relative', // This ensures the chatbot is positioned relative to this container
  }}>
    <h1 style={{ color: '#00ffae', fontSize: '2.5rem' }}>Welcome to the Rick and Morty Explorer</h1>
    <p style={{ fontSize: '1.2rem' }}>
      Explore characters from the Rick and Morty universe and also different people in the world.
    </p>
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <img
        src="./Rick-And-Morty.webp"
        alt="Rick and Morty"
        style={{
          width: '80%',
          maxWidth: '500px',
          borderRadius: '15px',
          boxShadow: '0px 4px 12px rgba(0, 255, 174, 0.6)',
        }}
      />
      <img
        src="./dip.png"
        alt="Charlie"
        style={{
          width: '80%',
          maxWidth: '500px',
          borderRadius: '15px',
          boxShadow: '0px 4px 12px rgba(0, 255, 174, 0.6)',
        }}
      />
    </div>
    <h1 style={{ color: '#00ffae', padding: '20px' }}>
      Click on <span style={{ color: '#ff618b' }}>Characters</span> to view the wonders of the Rick and Morty Universe and also people in the world!
    </h1>

    {/* Insert the Chatbot component */}
    <div style={{
      position: 'absolute',  // Positioning the chatbot to the right of the page
      bottom: '20px',
      right: '20px',
    }}>
      <Chatbot />
    </div>
  </div>
);

export default Home;
