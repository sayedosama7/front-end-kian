import React, { useEffect, useState } from 'react';
import Navbar from '../Navigation/NavBar';
import Footer from '../Navigation/Footer';
import { useNavigate, useLocation } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import axios from 'axios';

const Categories = () => {
    const { pathname } = useLocation();
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/allcategories');
                setData(response.data.data);
                if (response.data.data.length > 0) {
                    const categoryId = response.data.data[0].category_id;
                    localStorage.setItem('category_id', categoryId);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    const handleGoToAssignments = (categoryId) => {
        navigate('/courses', { state: { categoryId } });
    };

    return (
        <div>
            <Navbar />
            <div className="container all-courses">
                <div className="row">

                    {/* head Banner */}
                    <div className='m-auto position-relative col-md-6'>
                        <img className='img-fluid tag' src="images/tag-2.png" alt="" />
                        <h2 className='main-title text-primary mb-2 wow fadeInLeft' data-wow-delay=".3s">Our categories</h2>
                        <p className='text-muted fw-bold mb-5 wow fadeInUp' data-wow-delay=".4s" data-wow-duration="3s">
                            Our role here has increased more and this is so that we can benefit the students who are with us in our courses.
                        </p>
                    </div>

                    <div className='col-md-6 text-center'>
                        <img className='img-fluid wow fadeInDown hat mb-5' data-wow-delay=".3s" src="images/banner.png" alt="title-all" />
                    </div>

                    {/* start categories Card */}
                    {data.map((category) => (
                        <div key={category.category_id} className="rounded-2 wow fadeInUp">
                            <div className="box d-flex">
                                <div className='position-relative'>
                                    <img
                                        src={`http://127.0.0.1:8000/categories/img/${category.cate_image}`}
                                        // style={{ height: "230px" }}
                                        className="img-fluid rounded-2" alt="categories" />
                                    <img className="logo position-absolute rounded-circle p-3" src="images/logo.jpeg" alt="logo" />
                                </div>
                                {/* Start categories details */}
                                <div>
                                    <div className="card-body">
                                        <h5 className="card-title text-primary">{category.category_name}</h5>
                                        <p className="text-muted w-75">{category.category_description}</p>
                                        <div className="d-flex justify-content-start align-items-center">
                                            <button className='fw-bold mr-2 btn btn-primary' onClick={() => handleGoToAssignments(category.category_id)}>
                                                read more
                                            </button>
                                            <i className="fas fa-arrow-left text-primary fw-bold animate__animated animate__headShake animate__infinite"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </div>
                    ))}

                    {/* End categories Card */}

                </div>
            </div>
            <ScrollToTop smooth
                color='var(--background-color)'
                style={{ backgroundColor: 'var(--text-color)' }}
                className='animate__animated animate__flash animate__infinite infinite animate__slower'
            />
            <Footer />
        </div>
    )
}

export default Categories;
