import React from 'react';
import Home from './components/Home';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import Assessment from './components/Assessment';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route
        path='/assesment'
        element={
          <>
            <Assessment />
          </>
        }
      />
    </Routes>
  );
};

export default App;
