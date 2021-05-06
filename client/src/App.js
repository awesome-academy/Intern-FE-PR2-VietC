import React from 'react';
import './sass/main.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Routes from './Routes';

const App = () => {
  return (
    <Router forceRefresh>
      <Header />
      <div className='main-content'>
        <Routes />
      </div>
    </Router>
  );
};

export default App;
