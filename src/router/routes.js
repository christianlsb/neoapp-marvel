import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import { Home } from '../containers/';
export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
