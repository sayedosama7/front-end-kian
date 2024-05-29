import React from 'react'
import Navbar from '../Navigation/NavBar'
import Footer from '../Navigation/Footer'

const Assignments = () => {
    return (
        <div>
            <Navbar />
            <div className="container assignments">
                <div className="row">
                    {/* start title banner  */}
                    <div className='m-auto position-relative col-md-6'>
                        <img className='img-fluid tag' src="/images/instructors/tag-2.png" alt="" />
                        <h2 className='main-title text-primary mb-2 wow fadeInLeft' data-wow-delay=".3s">assignments</h2>
                        <p className='text-muted fw-bold mb-5 wow fadeInUp' data-wow-delay=".4s" data-wow-duration="3s">
                            Our role here has increased more and this is so that we can benefit the students who are with us in our courses.
                        </p>
                    </div>

                    <div className='col-md-6 text-center'>
                        <img className='img-fluid wow fadeInDown hat mb-5' data-wow-delay=".3s" src="/images/instructors/instructors-banner.png" alt="title-all" />
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Assignments