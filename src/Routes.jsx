import React, { useContext } from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { UserContext } from './context/UserContext';

const RoutesProvider = () => {
  const { user } = useContext(UserContext);

  return (
    <Routes>
      <Route path='/' element={<Navigate to='/login' />} />
      <Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />
      <Route
        path='/register'
        element={user ? <Navigate to='/' /> : <Register />}
      />
      <Route
        path='/home'
        element={user ? <Home /> : <Navigate to='/login' />}
      />
    </Routes>
  );
};

export default RoutesProvider;
