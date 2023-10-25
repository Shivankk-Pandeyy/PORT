import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import AnimatedRoutes from './AnimatedRoutes/AnimatedRoutes';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <AnimatedRoutes/>
  </BrowserRouter>
);
