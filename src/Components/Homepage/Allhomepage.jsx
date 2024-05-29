import React from 'react'
import Banner from './Banner'
// import MiniDashboard from './MiniDashboard'
import InstructorHome from './InstructorHome'
import Features from './Features'
import ScrollToTop from 'react-scroll-to-top';
import BecomeInstructor from './BecomeInstructor'
import CourseCategory from './CourseCategory'
import Footer from '../Navigation/Footer'
import Discount from './Discount'
import SmokeLogo from './SmokeLogo'
import Blog from './Blog'

function Allhomepage() {

  return (
    <div>
      <Banner />
      <Blog/>
      <CourseCategory />
      <InstructorHome />
      {/* <MiniDashboard /> */}
      <BecomeInstructor />
      <Features />
      <Discount />
      <SmokeLogo/>
      <Footer />
      <ScrollToTop smooth
        color='#fff'
        style={{ backgroundColor: '#372B73' }}
        className='animate__animated animate__flash animate__infinite	infinite animate__slower'
      />

    </div>
  )
}
export default Allhomepage