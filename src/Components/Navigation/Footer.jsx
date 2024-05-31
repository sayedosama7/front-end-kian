/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const [data, setData] = useState([]);
  const currentYear = new Date().getFullYear();

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
          <div className="container-fluid text-center text-md-start mt-5 px-5">
            <div className="row mt-3">
              <div className="logo-section col-md-6 col-lg-2 col-xl-2 text-center">
                <h6 className="text-uppercase text-primary fw-bold mb-4">
                  <img className='footer-logo mb-3' src="/images/logo.jpeg" alt="logo" />
                  <br />
                  kian academy
                </h6>

              </div>
              {/* Quick Links */}
              <div className="col-md-6 col-lg-2 col-xl-2 mx-auto mb-3 text-center">
                <h6 className="text-uppercase text-primary fw-bold">
                  Quick Links
                </h6>
                <p className='mb-0'>
                  <Link to="/courses" className="text-primary">Courses</Link>
                </p>
                <p className='mb-0'>
                  <Link to="/instructor-form" className="text-primary">join our team</Link>
                </p>
                <p className='mb-0'>
                  <Link to="/gallery" className="text-primary">gallery</Link>
                </p>
                <p className='mb-0'>
                  <Link to="/instructors" className="text-primary">instrutors</Link>
                </p>
              </div>
              {/* Information */}
              <div className="col-md-6 col-lg-2 col-xl-2 mx-auto mb-3 text-center">
                <h6 className="text-uppercase text-primary fw-bold">
                  Information
                </h6>
                <p className='mb-0'>
                  <Link to="/login" className="text-primary">Login</Link>
                </p>
                <p className='mb-0'>
                  <Link to="/signup" className="text-primary">Register</Link>
                </p>
                <p className='mb-0'>
                  <Link to="/contact" className="text-primary">Contact Us</Link>
                </p>
                <p className='mb-0'>
                  <Link to="/about" className="text-primary">About Us</Link>
                </p>
              </div>
              {/* Contact us  */}
              <div className="col-md-6 col-lg-2 col-xl-2 mx-auto mb-md-0 mb-3 text-center">
                {data.map((item, id) => (
                  <div key={id}>
                    <h6 className="text-uppercase fw-bold text-primary mb-3">Contact us</h6>
                    <p className='mb-2 text-primary mt-1 mailto'>
                      <a className='text-primary fw-light' href={`mailto:${item.footer_mail}`}><i className="fas fa-envelope"></i> {item.footer_mail} sayed@gmail.com</a>
                    </p>
                    <a className='phone text-primary fw-light' href={`tel:${item.footer_phone_1}`}>
                      <p className='mb-0'><i className="fas fa-phone fw-light"></i> {item.footer_phone_1} 01210304516</p>
                    </a>
                    <a className='phone text-primary fw-light' href={`tel:${item.footer_phone_2}`}>
                      <p className='mb-0'><i className="fas fa-phone fw-light"></i> {item.footer_phone_2} 01210304516</p>
                    </a>
                  </div>
                ))}

              </div>
              {/* our location */}
              <div className="col-md-6 col-lg-2 col-xl-2 text-center">
                {data.map((data, id) => (
                  <div key={id}>
                    <h6 className="text-uppercase fw-bold text-primary mb-3">our location</h6>
                    <a href={data.footer_address_link}>
                      <iframe className='img-fluid' src={data.footer_address_iframe} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </a>
                  </div>))}
              </div>
              {/* social accounts  */}
              <div className="col-md-6 col-lg-2 col-xl-2 text-center">
                {/* start Social media  */}
                <section className="text-center social-icons">
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
                  ©{currentYear} All Rights Reserved.  (kian academy)
                </div>
              </div>

            </div>
          </div>
        </section>


      </footer>
    </div>
  )
}

export default Footer