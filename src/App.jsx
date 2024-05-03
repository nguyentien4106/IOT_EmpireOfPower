import React from 'react';
import Status from './components/status/Status';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './shared/AppLayout';
import Energy from './components/Energy';
import Menu from './components/Menu';
import Array from './components/Array';
import Login from './components/Login';
import ProtectedRoute from './hooks/ProtectedRoute';

const App = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AppLayout />}>
              <Route path='/status' element={<ProtectedRoute><Status/></ProtectedRoute>} />
              <Route path='/energy' element={<Energy />} />
              <Route path='/array' element={<Array />} />
              <Route path='/menu' element={<Menu />} />
          </Route>
          <Route path='/login' element={<Login />}>

          </Route>
        </Routes>
      </BrowserRouter>
    );
};
export default App;