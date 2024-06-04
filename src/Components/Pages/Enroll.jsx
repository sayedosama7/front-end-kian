import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from '../Navigation/NavBar';
import Footer from '../Navigation/Footer';
import { useNavigate } from 'react-router-dom';

const Enroll = () => {
    const [data, setData] = useState([]);
    const [userId, setUserId] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUserId = localStorage.getItem('userId');
        if (storedUserId) {
            setUserId(storedUserId);
        }
    }, []);

    useEffect(() => {
        if (userId) {
            async function fetchData() {
                try {
                    const response = await axios.get(`http://127.0.0.1:8000/api/enrollments/${userId}`);
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
    }, [userId]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const courseTitle = localStorage.getItem('course_title');
                if (courseTitle) {
                    const response = await axios.get(`http://127.0.0.1:8000/api/show_assignment/${courseTitle}`);
                    setData(response.data.data);
                    console.log(courseTitle);
                } else {
                    throw new Error('Course ID not found in local storage.');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleGoToAssignments = (courseTitle) => {
        navigate('/assignments', { state: { courseTitle } });
    };

    return (
        <div>
            <Navbar />
            <div className="container assignments">
                <div className="row">
                    <div className='m-auto position-relative col-md-6'>
                        <img className='img-fluid tag' src="images/instructors/tag-2.png" alt="" />
                        <h2 className='main-title text-primary mb-2 wow fadeInLeft' data-wow-delay=".3s">my courses</h2>
                        <p className='text-muted fw-bold mb-5 wow fadeInUp' data-wow-delay=".4s" data-wow-duration="3s">
                            Our role here has increased more and this is so that we can benefit the students who are with us in our courses.
                        </p>
                    </div>

                    <div className='col-md-6 text-center'>
                        <img className='img-fluid wow fadeInDown hat mb-5' data-wow-delay=".3s" src="images/instructors/instructors-banner.png" alt="title-all" />

                    </div>
                    {Array.isArray(data) && data.map((item, id) => (
                        <div key={id} className='col-md-6 col-lg-3 mb-3'>

                            <div class="border enroll-courses" >
                                <img
                                    src={`http://127.0.0.1:8000/courses/img/${item.course_img}`}
                                    className="img-fluid"
                                    alt={`Course: ${item.course_title}`}
                                />
                                <div class="p-3">
                                    <p class="text-primary mb-0">course title :</p>
                                    <h5 class="text-primary">{item.course_title}</h5>

                                    <button className='btn btn-submit mb-2' onClick={() => handleGoToAssignments(item.course_title)}>
                                        go to assignments
                                    </button>
                                </div>
                            </div>



                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Enroll;
