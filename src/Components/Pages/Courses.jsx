import React, { useEffect, useState } from 'react';
import Navbar from '../Navigation/NavBar';
import Footer from '../Navigation/Footer';
import { useLocation, useNavigate } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import axios from 'axios';

const Courses = () => {
    const { pathname, state } = useLocation();
    const [data, setData] = useState([]);
    const categoryId = state?.categoryId;
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        async function fetchData() {
            if (categoryId) {
                try {
                    const response = await axios.get(`http://127.0.0.1:8000/api/courses/${categoryId}`);
                    setData(response.data.data);
                    if (response.data.data.length > 0) {
                        const courses_id = response.data.data[0].c_id;
                        const courses_title = response.data.data[0].c_title;
                        localStorage.setItem('courses_id', courses_id);
                        localStorage.setItem('courses_title', courses_title);
                    }
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            }
        }

        fetchData();
    }, [categoryId]);


    const handleGoToCourseDetails = (c_id, c_title) => {
        navigate('/courseDetails', { state: { courses_id: c_id, courses_title: c_title } });
    };






    return (
        <div>
            <Navbar />
            <div className="container all-courses">
                <div className="row">

                    {/* head Banner */}
                    <div className='m-auto position-relative col-md-6'>
                        <img className='img-fluid tag' src="images/tag-2.png" alt="" />
                        <h2 className='main-title text-primary mb-2 wow fadeInLeft' data-wow-delay=".3s">Our Courses</h2>
                        <p className='text-muted fw-bold mb-5 wow fadeInUp' data-wow-delay=".4s" data-wow-duration="3s">
                            Our role here has increased more and this is so that we can benefit the students who are with us in our courses.
                        </p>
                    </div>

                    <div className='col-md-6 text-center'>
                        <img className='img-fluid wow fadeInDown hat mb-5' data-wow-delay=".3s" src="images/banner.png" alt="title-all" />
                    </div>

                    {data.map((course, id) => {
                        return (
                            <div key={id} className="rounded-2 wow fadeInUp">
                                <div className="box d-flex">
                                    <div className='position-relative'>
                                        <img
                                            src={`http://127.0.0.1:8000/courses/img/${course.course_img}`}
                                            style={{ height: "200px", width: '450px' }}
                                            className="img-fluid rounded-2" alt="courses" />
                                        <img className="logo position-absolute rounded-circle p-3" src="images/logo.jpeg" alt="logo" />
                                    </div>
                                    <div>
                                        <div className="card-body">
                                            <h5 className="card-title text-primary">{course.c_title}</h5>
                                            <p className="text-muted w-75">{course.course_description}</p>

                                            <div className="d-flex justify-content-start align-items-center">
                                                <button className='fw-bold mr-2 btn btn-primary' onClick={() => handleGoToCourseDetails(course.c_id, course.c_title)}>more Details</button>
                                                <i className="fas fa-arrow-left text-primary fw-bold animate__animated animate__headShake animate__infinite"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className='' />
                            </div>
                        );
                    })}



                </div>
            </div>
            <ScrollToTop smooth
                color='var(--background-color)'
                style={{ backgroundColor: 'var(--text-color)' }}
                className='animate__animated animate__flash animate__infinite infinite animate__slower'
            />
            <Footer />
        </div>
    );
}

export default Courses;
