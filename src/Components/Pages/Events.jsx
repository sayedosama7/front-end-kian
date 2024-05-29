/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import Navbar from '../Navigation/NavBar'
import { useLocation } from 'react-router';

function CourseDetails() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div>
            <Navbar />
            <div className="container events">
                <div className="row">
                    {/* start title banner  */}
                    <div className='m-auto position-relative col-md-6'>
                        <img className='img-fluid tag' src="/images/instructors/tag-2.png" alt="" />
                        <h2 className='main-title text-primary mb-2 wow fadeInLeft' data-wow-delay=".3s">events</h2>
                        <p className='text-muted fw-bold mb-5 wow fadeInUp' data-wow-delay=".4s" data-wow-duration="3s">
                            Our role here has increased more and this is so that we can benefit the students who are with us in our courses.
                        </p>
                    </div>

                    <div className='col-md-6 text-center'>
                        <img className='img-fluid wow fadeInDown hat mb-5' data-wow-delay=".3s" src="/images/instructors/instructors-banner.png" alt="title-all" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseDetails