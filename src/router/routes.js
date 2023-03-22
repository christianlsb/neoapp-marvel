import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home, ComicDetails, Cart } from '../containers/';
export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/:id" element={<ComicDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}
