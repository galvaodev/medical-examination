import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from 'pages/home';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
