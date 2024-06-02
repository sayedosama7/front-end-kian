import React, { useEffect, useState } from 'react'
import Navbar from '../Navigation/NavBar'
import Footer from '../Navigation/Footer'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'

const Assignments = () => {
    const { pathname } = useLocation();
    const [data, setData] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/assignments');
                setData(response.data.data);
                console.log(response.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);


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
                    <div className="table-responsive table-center">
                        <table className="table text-primary text-center">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Assignment Title</th>
                                    <th>Assignment Description</th>
                                    <th>Deadline</th>
                                    <th>Notes</th>
                                    <th>Degree</th>
                                    <th>Assignment File</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.assignments_title}</td>
                                        <td className='assignments_description' title={item.assignments_description}>
                                            {item.assignments_description}
                                        </td>
                                        <td>{item.deadline}</td>
                                        <td>{item.notes}</td>
                                        <td>{item.degree}</td>
                                        <td>
                                            <a href={`http://127.0.0.1:8000/assignments/files/${item.assignments_file
                                                }`} className='btn btn-primary' download>
                                                Download File
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Assignments