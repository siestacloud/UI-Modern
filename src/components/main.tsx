import React from 'react';
import AboutPage from '../pages/aboutPage';
import { Route, Routes } from 'react-router-dom';


function Main() {
  return (
    <main className='main'>
      <Routes>
        <Route path='/' element={<AboutPage />} />
      </Routes>
    </main>
  );
}

export default Main;
