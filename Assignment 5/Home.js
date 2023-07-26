import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import About from './About';
import '../css/Home.css';

const Home = () => {
  return (
    <div className='homepage'>
    <Router>
      <div>
        <nav>
          <ul>
          <button>
            <li>
              <Link to="/">Home</Link>
            </li>
            </button>
            <button>
            <li>
              <Link to="/about">About</Link>
            </li>
            </button>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
};

const HomeContent = () => {
  return (
    <div className="home-content">
      <h2>Welcome to the Home page!</h2>
      <p>This is the home content.</p>
      <Outlet />
    </div>
  );
};

export default Home;
