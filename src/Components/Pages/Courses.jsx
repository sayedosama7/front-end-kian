import React, { useEffect, useState } from 'react'
import Navbar from '../Navigation/NavBar'
import Footer from '../Navigation/Footer'
// import { MdOutlineSlowMotionVideo } from 'react-icons/md'
// import { CiClock2 } from 'react-icons/ci'
import { Link, useLocation } from 'react-router-dom'
import ScrollToTop from 'react-scroll-to-top'
import axios from 'axios'

const Courses = () => {

    const { pathname } = useLocation();
    const [data, setData] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/allcategories');
                setData(response.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            <Navbar />
            <div className="container all-courses">
                <div className="row">

                    {/* head Banar  */}
                    <div className='m-auto position-relative col-md-6'>
                        <img className='img-fluid tag' src="/images/instructors/tag-2.png" alt="" />
                        <h2 className='main-title text-primary mb-2 wow fadeInLeft' data-wow-delay=".3s">Our courses</h2>
                        <p className='text-muted fw-bold mb-5 wow fadeInUp' data-wow-delay=".4s" data-wow-duration="3s">
                            Our role here has increased more and this is so that we can benefit the students who are with us in our courses.
                        </p>
                    </div>

                    <div className='col-md-6 text-center'>
                        <img className='img-fluid wow fadeInDown hat mb-5' data-wow-delay=".3s" src="/images/instructors/instructors-banner.png" alt="title-all" />
                    </div>

                    {/* start Course Card */}
                    {data.map((data) => (
                        <div key={data.id} className="rounded-2  wow fadeInUp">
                            <div className="box d-flex">
                                <div className=' position-relative'>
                                    <img
                                        src={`http://127.0.0.1:8000/categories/img/${data.cate_image}`}
                                        style={{ height: "230px" }}
                                        className="img-fluid rounded-2 " alt="Courses" />
                                    <img className="logo position-absolute rounded-circle p-3" src="./images/logo.jpeg" alt="logo" />
                                </div>
                                {/* Start course details */}
                                <div >
                                    <div className="card-body">
                                        <h5 className="card-title text-primary">{data.name}</h5>
                                        <p className="text-muted w-75">{data.description}</p>
                                        {/* <h5 className='text-primary'>instructor name</h5>
                                        <p className="text-muted">{data.instructor_name}ahmed hatem</p> */}
                                        <div className="d-flex justify-content-start align-items-center">
                                            <Link to='/coursesDetails' className="text-primary fw-bold text-decoration-none mr-2">read more</Link>
                                            <i className="fas fa-arrow-left text-primary fw-bold animate__animated animate__headShake animate__infinite"></i>
                                        </div>
                                    </div>

                                    {/* <div className="d-flex justify-content-around">
                                    <div className="d-flex">
                                        <MdOutlineSlowMotionVideo className="text-danger" size={30} />
                                        <p className="ml-1 mt-1">{data.video} vidoes</p>
                                    </div>
                                    <div className="d-flex">
                                        <CiClock2 className="mt-1 text-danger" size={30} />
                                        <p className="ml-1 mt-1">{data.hours}+Hours</p>
                                    </div>
                                </div> */}

                                </div>
                            </div>
                            <hr className='' />
                        </div>
                    ))}
                    {/* End Course Card */}

                </div>
            </div>
            <ScrollToTop smooth
                color='#fff'
                style={{ backgroundColor: '#372B73' }}
                className='animate__animated animate__flash animate__infinite	infinite animate__slower'
            />
            <Footer />
        </div>
    )
}

export default Courses