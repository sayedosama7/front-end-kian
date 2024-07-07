import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import Navbar from '../Navigation/NavBar';
import Footer from '../Navigation/Footer';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';

const Enroll = () => {
    const { auth } = useContext(UserContext);
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (auth.id) {
            async function fetchData() {
                try {
                    const response = await axios.get(`http://127.0.0.1:8000/api/enrollments/${auth.id}`);
                    setData(response.data.data);

                    if (response.data.data.length > 0) {
                        const courseId = response.data.data[0].course_id;
                        const courseTitle = response.data.data[0].course_title;
                        localStorage.setItem('course_id', courseId);
                        localStorage.setItem('course_title', courseTitle);
                    }
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            }
            fetchData();
        }
    }, [auth.id]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const courseTitle = localStorage.getItem('course_title');
                if (courseTitle) {
                    const response = await axios.get(`http://127.0.0.1:8000/api/show_assignment/${courseTitle}`);
                    setData(response.data.data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleGoToAssignments = (courseTitle, courseId) => {
        navigate('/assignments', { state: { courseTitle, courseId } });
    };

    return (
        <div>
            <Navbar />
            <div className="container assignments">
                <div className="row">
                    <div className='m-auto position-relative col-md-6'>
                        <img className='img-fluid tag' src="images/tag-2.png" alt="" />
                        <h2 className='main-title text-primary mb-2 wow fadeInLeft' data-wow-delay=".3s">my courses</h2>
                        <p className='text-muted fw-bold mb-5 wow fadeInUp' data-wow-delay=".4s" data-wow-duration="3s">
                            Our role here has increased more and this is so that we can benefit the students who are with us in our courses.
                        </p>
                    </div>

                    <div className='col-md-6 text-center'>
                        <img className='img-fluid wow fadeInDown hat mb-5' data-wow-delay=".3s" src="images/banner.png" alt="title-all" />
                    </div>

                    {Array.isArray(data) && data.length > 0 ? (
                        data.map((item, id) => (
                            <div key={id} className='col-md-6 col-lg-4 mb-3'>
                                <div className="border enroll-courses fixed-height">
                                    <img
                                        src={`http://127.0.0.1:8000/courses/img/${item.course_img}`}
                                        className="img-fluid enroll-course-img"
                                        alt={`Course: ${item.course_title}`}
                                    />
                                    <div className="p-3">
                                        <p className="text-primary mb-0">course title :</p>
                                        <h5 className="text-primary" title={item.course_title}>{item.course_title}</h5>

                                        <button className='btn btn-submit mb-2' onClick={() => handleGoToAssignments(item.course_title, item.course_id)}>
                                            go to assignments
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className='col-12'>
                            <p className='text-muted fw-bold'>no courses yet!</p>
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Enroll;
