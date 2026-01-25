import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Register from './pages/Register';
import Settings from './pages/Settings';
import Contact from './pages/Contact';
import Quote from './pages/quote';
import About from './pages/About'; // Ensure you have this component
import Navbar from './pages/navbar';
import './App.css';
const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Routes className="app-routes">
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;