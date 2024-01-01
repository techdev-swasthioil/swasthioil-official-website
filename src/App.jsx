import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import './App.scss';
import AppRoutes from './AppRoutes'

function App() {
  return (
    <Router>
      <AppRoutes/>
    </Router>
  );
}

export default App;
