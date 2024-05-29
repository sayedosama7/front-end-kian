/* eslint-disable jsx-a11y/anchor-is-valid */
// import React from 'react'
import { Col, Container, Row } from 'reactstrap';
import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import axios from 'axios';


const InstructorHome = () => {
    // const instructors = [
    //     {
    //         id: "1",
    //         name: "ahmed hatem",
    //         img: "/images/Home/instructors/instructor-1.jpg",
    //         job: "full stack developer"
    //     },
    //     {
    //         id: "2",
    //         name: "ahmed hatem",
    //         img: "/images/Home/instructors/instructor-2.jpg",
    //         job: "full stack developer"
    //     },
    //     {
    //         id: "3",
    //         name: "ahmed hatem",
    //         img: "/images/Home/instructors/instructor-3.jpg",
    //         job: "full stack developer"
    //     },
    //     {
    //         id: "4",
    //         name: "ahmed hatem",
    //         img: "/images/Home/instructors/instructor-4.jpg",
    //         job: "full stack developer"
    //     },
    //     {
    //         id: "5",
    //         name: "ahmed hatem",
    //         img: "/images/Home/instructors/instructor-5.jpg",
    //         job: "full stack developer"
    //     },
    //     {
    //         id: "6",
    //         name: "ahmed hatem",
    //         img: "/images/Home/instructors/instructor-6.jpg",
    //         job: "full stack developer"
    //     },
    //     {
    //         id: "7",
    //         name: "ahmed hatem",
    //         img: "/images/Home/instructors/instructor-7.jpg",
    //         job: "full stack developer"
    //     },
    //     {
    //         id: "8",
    //         name: "ahmed hatem",
    //         img: "/images/Home/instructors/instructor-8.jpg",
    //         job: "full stack developer"
    //     },
    // ];
    const [data, setData] = useState([]);
    const [instructors, setInstructors] = useState([]);

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

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/view-instructors');
                setInstructors(response.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <div className='instructor-home mt-4'>
            <Container fluid>
                <Row>
                    <Col lg="5" md="12">
                        <div className='caption wow fadeInUp'>
                            <img className='tag' src="/images/instructors/tag-2.png" alt='home'></img>
                            <h5 className='text-primary main-title'>Our Instructors</h5>
                            {data.map((data, id) => (
                                <div key={id}>
                                    <h2>{data.instructor_title}Meet the Dedicated
                                        Educators Shaping
                                        Your Future.</h2>
                                    <h6>{data.instructor_caption}Lorem ipsum dolor sit amet consectetur. Non convallis sed id aliquam tempus. Volutpat tortor tincidunt egestas sit risus donec.</h6>
                                </div>))}
                            <div className="btn-glow my-4">
                                <div className="btn">
                                    <Link to="/instructors">view all</Link>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg="7" md="12" className='p-0'>
                        <div className='images wow fadeInUp'>
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={20}
                                pagination={{
                                    clickable: true,
                                }}
                                breakpoints={{
                                    576: {
                                        slidesPerView: 2.5,
                                    }
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                {instructors.map((instructor, id) => (
                                    <SwiperSlide key={id}>
                                        <img
                                            src={`http://127.0.0.1:8000/instructors/img/${instructor.img}`}
                                            alt='instructor'></img>
                                        <div className="title">
                                            <h4>{instructor.name}</h4>
                                            <div className='stars d-flex justify-content-between align-items-center px-3'>
                                                <div className='d-flex justify-content-between align-items-center mr-2'>
                                                    <i className="fa-solid fa-star"></i>
                                                    <span>5</span>
                                                </div>
                                                <p className='mb-0'>{instructor.job}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}


                            </Swiper>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default InstructorHome
