import Exam from 'pages/exames';
import Home from 'pages/home';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/exames" Component={Exam} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
