import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import ListProducts from './pages/ListProducts';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ ListProducts } />
    </BrowserRouter>
  );
}

export default App;
