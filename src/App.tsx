import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/homepage/Homepage';
import ShowDetails from './components/show/ShowDetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path="shows/:showId" element={<ShowDetails />} />
        </Routes>
      </BrowserRouter>{' '}
    </>
  );
}

export default App;
