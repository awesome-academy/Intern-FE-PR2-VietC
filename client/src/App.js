import React from 'react';
import './sass/main.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Routes from './Routes';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const App = () => {
  return (
    <Router>
      <Header />
      <div className='main-content'>
        <ScrollToTop />
        <Routes />
      </div>
      <Footer />
    </Router>
  );
};

export default App;
