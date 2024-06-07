/* eslint-disable no-unused-vars */

import React, { useState, useEffect, useContext } from 'react';
import { FaBars, FaTimes, FaRegUser, FaSun, FaMoon } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ThemeContext } from '../../ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/allusers');
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const token = localStorage.getItem('token');
    // const userRole = localStorage.getItem('role');
    const userEmail = localStorage.getItem('userEmail');
    if (token) {
      setIsLoggedIn(true);
      setEmail(userEmail);
    }
    fetchData();
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('userId');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userCity');
    localStorage.removeItem('userPhone');
    localStorage.removeItem('course_id');
    localStorage.removeItem('course_title');

    navigate('/login');
  };

  return (
    <nav className='navbar'>
      <div className="container">
        <div className="navbar-logo">
          <Link to="/"><img src="images/logo.jpeg" alt="Logo" /></Link>
        </div>

        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link to="/categories" className={location.pathname === '/categories' ? 'active' : ''}>categories</Link></li>
          <li><Link to="/instructors" className={location.pathname === '/instructors' ? 'active' : ''}>Instructors</Link></li>
          <li><Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''}>gallery</Link></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact Us</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link></li>
          {email && <li><Link to="/enroll" className={location.pathname === '/enroll' ? 'active' : ''}>my courses</Link></li>}
          {isLoggedIn ? (
            <div className="user-options">
              <div className="dropdown">
                <FaRegUser size={28} className="fauser" type="button" data-toggle="dropdown" aria-expanded="false" />
                <div className="dropdown-menu">
                  <Link to='/profile' className="dropdown-item">My Profile</Link>
                  <hr className='m-0' />
                  <Link onClick={handleLogout} className="dropdown-item">Logout</Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="user-options">
              <Link to='/signup' className="signup px-2 py-1 mr-1 mb-2 mt-2">Sign Up</Link>
              <Link to='/login' className="signup px-2 py-1 mb-2 mt-2">Log In</Link>
            </div>
          )}
          <div className="theme-toggle theme-show-sm d-none" onClick={toggleTheme}>
            {theme === 'light' ? <FaMoon size={28} /> : <FaSun size={28} />}
          </div>
        </div>
        {isOpen && <div className="overlay" onClick={toggleNavbar} />}
        <div className="navbar-toggle" onClick={toggleNavbar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div className="theme-toggle theme-hide-sm" onClick={toggleTheme}>
          {theme === 'light' ? <FaMoon size={28} /> : <FaSun size={28} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
