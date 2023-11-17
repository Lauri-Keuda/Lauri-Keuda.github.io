//import './App.css';

import React from 'react';
import './Style.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Something from './pages/Something';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/kotisivu" Component={Home} />
            <Route path="/contact" Component={Contact} />
            <Route path='/something' Component={Something} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
