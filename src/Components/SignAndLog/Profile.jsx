import React, { useEffect, useState } from 'react';
import Navbar from '../Navigation/NavBar';
import { useLocation } from 'react-router';
import Footer from '../Navigation/Footer';
import ScrollToTop from 'react-scroll-to-top';
import axios from 'axios';

const Profile = () => {
    const [userName, setUserName] = useState(null);
    // const [users, setUsers] = useState([]);
    const [userEmail, setUserEmail] = useState([]);
    const [userCity, setUserCity] = useState([]);
    const [userPhone, setUserPhone] = useState([]);


    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/allusers');
                console.log(response.data); 
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        const token = localStorage.getItem('token');
        const user = localStorage.getItem('username');
        const userEmail = localStorage.getItem('userEmail');
        const userCity = localStorage.getItem('userCity');
        const userPhone = localStorage.getItem('userPhone');
        if (token && user && userEmail && userCity && userPhone) {
            setUserName(user);
            setUserEmail(userEmail);
            setUserPhone(userPhone);
            setUserCity(userCity);
        }

        fetchData();
    }, []);

    return (
        <div>
            <Navbar />
            <div className="container contact-us ">
                <div className="row">

                    <div className='m-auto position-relative col-md-6'>
                        <img className='img-fluid tag' src="/images/instructors/tag-2.png" alt="" />
                        <h2 className='main-title text-primary mb-2 wow fadeInLeft' data-wow-delay=".3s">Profile</h2>
                        <p className='text-muted fw-bold mb-5 wow fadeInUp' data-wow-delay=".4s" data-wow-duration="3s">
                            Nice To See You! welcome to your profile
                        </p>
                    </div>

                    <div className='col-md-6 text-center'>
                        <img className='img-fluid wow fadeInDown hat mb-5' data-wow-delay=".3s" src="/images/instructors/instructors-banner.png" alt="title-all" />
                    </div>

                    {/* start form */}
                    <div className="col-md-12 col-lg-6 px-3 profile-info-section">
                        {userName && userEmail && userPhone && userCity ? (
                            <div>
                                <h6 className='text-primary'>username  :</h6>
                                <h5 className='profile-info'>{userName}</h5>
                                <h6 className='text-primary'>E-mail  :</h6>
                                <h5 className='profile-info'>{userEmail}</h5>
                                <h6 className='text-primary'>phone  :</h6>
                                <h5 className='profile-info'>{userPhone}</h5>
                                <h6 className='text-primary'>city  :</h6>
                                <h5 className='profile-info'>{userCity}</h5>
                            </div>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>

                    <div className="col-md-12 col-lg-6 contact-banner position-relative wow fadeInUp" data-wow-delay='1s'>
                        <img className='img-fluid' src="/images/pexels-cottonbro-studio-6803545.jpg" alt="contact" />
                        <img className='img-fluid position-absolute kian-logo' src="/images/logo.jpeg" alt="logo" />
                    </div>
                </div>
            </div>
            <ScrollToTop
                smooth
                color='#fff'
                style={{ backgroundColor: '#372B73' }}
                className='animate_animated animateflash animateinfinite infinite animate_slower'
            />
            <Footer />
        </div>
    );
};

export default Profile;
