import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HomeComics, ComicDetails, Cart, Home } from '../containers/';
export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comics" element={<HomeComics />} />
        <Route exact path="/comics/:id" element={<ComicDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}
