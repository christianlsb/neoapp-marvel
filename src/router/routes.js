import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home, Comic } from '../containers/';
export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/:id" element={<Comic />} />
      </Routes>
    </BrowserRouter>
  );
}
