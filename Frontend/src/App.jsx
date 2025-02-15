// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import Cases from './pages/Cases';
import CreateCase from './pages/CreateCase';
import Lawyer from './pages/Lawyer';

function App() {
  return (
    <Routes>
      {/* Public Routes (No Navbar) */}
      <Route path="/cases" element={<Cases />} />
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/create-case" element={<CreateCase />} />
      <Route path="/lawyers" element={<Lawyer />} />
      
      {/* Protected Routes (With Navbar) */}
      <Route 
        path="/home" 
        element={
          <ProtectedRoute>
            <>
              <Navbar />
              <Home />
              
            </>
          </ProtectedRoute>
        } 
      />
    </Routes>
  );
}

export default App;
