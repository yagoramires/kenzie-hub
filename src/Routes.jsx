import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const RoutesProvider = ({ user, setUser }) => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/login' />} />
      <Route path='/login' element={<Login setUser={setUser} />} />
      <Route path='/register' element={<Register />} />
      <Route path='/home' element={<Home user={user} />} />
    </Routes>
  );
};

export default RoutesProvider;
