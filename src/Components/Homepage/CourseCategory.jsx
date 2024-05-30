import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CourseCategory = () => {
    const [data, setData] = useState([]);

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
        <Container fluid className='course-category'>
            <Row>
                <Col md={12}>
                    <div className='course-title d-flex justify-content-between align-items-center mb-5 wow fadeInUp'>
                        <h6 className='main-title mb-3'>See what you can learn with kian academy</h6>
                        <div className="btn-glow">
                            <div className="btn"><Link to="/courses">view all</Link></div>
                        </div>
                    </div>

                    <Swiper
                        slidesPerView={1}
                        spaceBetween={5}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 50,
                            },
                        }}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay, Pagination]}
                        className="course-items"
                    >
                        {data.map((course, id) => (
                            <SwiperSlide key={id} className='course-box wow fadeInUp' animation-duration="1.2s" data-wow-delay="0.2s">
                                <img src={`http://127.0.0.1:8000/categories/img/${course.cate_image}`} alt={course.title} />
                                <p className='text-primary fw-bold py-2 px-1'>{course.title}</p>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </Col>
            </Row>
        </Container>
    );
}

export default CourseCategory;
