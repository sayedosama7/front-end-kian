/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/home-setting');
        setData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);
  return (
    <div >
      <footer className="footer text-center text-lg-start text-muted">
        <section>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="logo-section col-md-12 col-lg-12 col-xl-12 mb-4">
                <h6 className="text-uppercase text-primary fw-bold mb-4">
                  <img className='footer-logo' src="/images/logo.jpeg" alt="logo" />
                  kian academy
                </h6>

              </div>

              <div className="col-md-12 col-lg-4 col-xl-4 mx-auto mb-3">
                <h6 className="text-uppercase text-primary fw-bold">
                  Quick Links
                </h6>
                <p className='mb-0'>
                  <Link to="/courses" className="text-primary">Courses</Link>
                </p>
                <p className='mb-0'>
                  <Link to="/register" className="text-primary">join a Career</Link>
                </p>
                <p className='mb-0'>
                  <Link to="/events" className="text-primary">Upcoming Events</Link>
                </p>
                <p className='mb-0'>
                  <Link to="/gallry" className="text-primary">Gallery</Link>
                </p>
                <p className='mb-0'>
                  <Link to="/instructors" className="text-primary">instrutors Detail</Link>
                </p>
              </div>



              <div className="col-md-12 col-lg-4 col-xl-4 mx-auto mb-3">
                <h6 className="text-uppercase text-primary fw-bold">
                  Information
                </h6>
                <p className='mb-0'>
                  <Link to="/login" className="text-primary">Login</Link>
                </p>
                <p className='mb-0'>
                  <Link to="/register" className="text-primary">Register</Link>
                </p>
                <p className='mb-0'>
                  <Link to="/contact" className="text-primary">Contact Us</Link>
                </p>
                <p className='mb-0'>
                  <Link to="/about" className="text-primary">About Us</Link>
                </p>
              </div>

              <div className="col-md-12 col-lg-4 col-xl-4 mx-auto mb-md-0 mb-4">
                {data.map((data, id) => (
                  <div key={id}>
                    <h6 className="text-uppercase fw-bold text-primary">Contact us</h6>
                    <p className='mb-2 text-primary'><i className="fas fa-location-dot me-2"></i>{data.footer_address}Zagazig - Agriculture Square - Abu Ahmed Supermarket Street - Choumna Building, ground floor.</p>
                    <p className='mb-2 text-primary'>
                      <i className="fas fa-envelope me-2"></i>
                      <a className='text-primary' href="mailto:ke4577216@gmail.com">{data.footer_mail}ke4577216@gmail.com</a>
                    </p>
                    <a className='phone text-primary' href="tel:01062160382"><p className='mb-0'><i className="fas fa-phone me-2"></i>{data.footer_phone_1} 01062160382</p></a>
                    <a className='phone text-primary' href="tel:01062160382"><p className='mb-0'><i className="fas fa-phone me-2"></i>{data.footer_phone_2} 01062160382</p></a>
                  </div>))}
              </div>
            </div>
          </div>
        </section>

        {/* start Social media  */}
        <section className="text-center social-icons mb-3">
          {data.map((data, id) => (
            <div key={id}>
              {/* Facebook  */}
              <a href={data.footer_facebook} target='_blank' rel="noreferrer"><i className="fab mr-3 fa-facebook text-primary"></i></a>
              {/* Twitter  */}
              <a href={data.footer_twitter} target='_blank' rel="noreferrer"><i className="fab mr-3 fa-twitter text-primary"></i></a>
              {/* Instagram  */}
              <a href={data.footer_instagram} target='_blank' rel="noreferrer"><i className="fab mr-3 fa-instagram text-primary"></i></a>
              {/* Linkedin  */}
              <a href={data.footer_linkedin} target='_blank' rel="noreferrer"><i className="fab mr-3 fa-linkedin text-primary"></i></a>
            </div>))}
        </section>
        {/* End Social media  */}

        <div className="text-center px-4 pb-4 text-primary">
          ©2024
          ( kian academy )
          All Rights Reserved.
        </div>
      </footer>
    </div>
  )
}

export default Footer