import React, { useEffect, useState } from 'react';
import Navbar from '../Navigation/NavBar';
import Footer from '../Navigation/Footer';
import { Link, useLocation } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import axios from 'axios';

function CourseDetails() {
  const location = useLocation();
  const { courses_id, courses_title } = location.state || {};

  const [course, setCourse] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // حالة تسجيل الدخول

  useEffect(() => {
    if (courses_id && courses_title) {
      const fetchCourseData = async () => {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/api/course/${courses_id}/${courses_title}`);
          setCourse(response.data.data || {});
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchCourseData();
    }

    // التحقق من وجود الـ token هنا وتعيين حالة تسجيل الدخول
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, [courses_id, courses_title]);

  return (
    <div>
      <Navbar />
      <div className="container course-details mb-5">
        <div className="row">
          <div className="m-auto position-relative col-md-6">
            <img className="img-fluid tag" src="images/tag-2.png" alt="" />
            <h2 className="main-title text-primary mb-2 wow fadeInLeft" data-wow-delay=".3s">Course Details</h2>
            <p className="text-muted fw-bold mb-5 wow fadeInUp" data-wow-delay=".4s" data-wow-duration="3s">
              Our role here has increased more and this is so that we can benefit the students who are with us in our courses.
            </p>
          </div>

          <div className="col-md-6 text-center">
            <img className="img-fluid wow fadeInDown hat mb-5" data-wow-delay=".3s" src="images/banner.png" alt="title-all" />
          </div>

          {course ? (
            <>
              <div className="col-md-12 col-lg-6 mb-5 course-details-title">
                <div className="card" style={{ borderRadius: "60px 0px 0px 60px" }}>
                  <div className="text-center p-2 d-flex">
                    <Link to="#">
                      <img src={`http://127.0.0.1:8000/instructors/img/${course.instructor_img}`} alt="Trainer-img" className="m-2" style={{ borderRadius: "50%", width: "75px", height: "75px" }} />
                    </Link>
                    <div className="m-2">
                      <h5 className="text-">{course.instructor_name}</h5>
                      <h6 className="text-">{course.job}</h6>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-muted mt-3">Published Date</h3>
                  <p>{course.start_date}</p>
                </div>

                <h2 className="text-primary">{course.courses_title}</h2>
                <p>{course.course_description}</p>
              </div>

              <div className="col-md-12 col-lg-6 mb-3">
                <img src={`http://127.0.0.1:8000/courses/img/${course.course_img}`} className="img-fluid rounded-2" alt="course_img" />
              </div>

              <div>
                <table className="table table-responsive bg-light table-borderless text-center">
                  <thead>
                    <tr>
                      <th scope="col">Category</th>
                      <th scope="col">Difficulty</th>
                      <th scope="col">lecture</th>
                      <th scope="col">Time</th>
                      <th scope="col">Assignments</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{course.category_name}</td>
                      <td>{course.level}</td>
                      <td>{course.lecture_no}</td>
                      <td>
                        <div className="d-flex">
                          <p className="ml-1">{course.duration} hours</p>
                        </div>
                      </td>
                      <td>Weekly Assignments</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {!isLoggedIn ? ( // فقط عرض الزر إذا كان المستخدم مسجل الدخول
                <div className="btn-glow mt-2">
                  <div className="btn"><Link to="/signup">Enroll Now</Link></div>
                </div>
              ) : (
                // إذا لم يكن المستخدم مسجل الدخول، لا تظهر الزر
                null
              )}
            </>
          ) : (
            <p>Loading...</p>
          )}

        </div>
      </div>
      <ScrollToTop
        smooth
        color='var(--background-color)'
        style={{ backgroundColor: 'var(--text-color)' }}
        className='animate__animated animate__flash animate__infinite infinite animate__slower'
      />
      <Footer />
    </div>
  );
}

export default CourseDetails;
