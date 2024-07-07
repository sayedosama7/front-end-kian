/* eslint-disable no-unused-vars */

import React, { useState, useEffect, useContext } from 'react';
import { FaBars, FaTimes, FaRegUser, FaSun, FaMoon } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ThemeContext } from '../../ThemeContext';
import { UserContext } from '../../UserContext'; // تأكد من مسار الاستيراد

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { auth, setAuth } = useContext(UserContext); // استخدام الـ context بشكل صحيح

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setAuth((prevAuth) => ({
        ...prevAuth,
        email: storedEmail,
      }));
    }
  }, [setAuth]);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Remove all stored data related to authentication and user info
    localStorage.removeItem('auth');
    localStorage.removeItem('email');
    localStorage.removeItem('courses_id');
    localStorage.removeItem('courses_title');
    localStorage.removeItem('category_id');
    localStorage.removeItem('course_id');
    localStorage.removeItem('course_title');

    // Reset the auth state to its initial values
    setAuth({
        token: null,
        username: null,
        email: null,
        city: null,
        phone: null,
        id: null,
        course_id: null,
        course_title: null,
    });

    // Navigate to the login page
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
          {auth.email && <li><Link to="/enroll" className={location.pathname === '/enroll' ? 'active' : ''}>my courses</Link></li>}
          {auth.email ? (
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
