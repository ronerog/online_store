import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import ListProducts from './pages/ListProducts';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ ListProducts } />
    </BrowserRouter>
  );
}

export default App;
