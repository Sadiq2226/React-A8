import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Characters from './pages/Characters';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Users from './pages/Users';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;
