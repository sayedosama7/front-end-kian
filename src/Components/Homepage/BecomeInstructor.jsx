import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

function BecomeInstructor() {
    const [data, setData] = useState([]);

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
    return (
        <div className='join-team py-5'>
            <Container>
                <Row>
                    <Col md="12" className='join-contain bg- p-5'>
                        <div className='box d-flex justify-content-between align-items-center'>
                            {data.map((data, id) => (
                                <div className='text wow fadeInUp'>
                                    <div key={id}>
                                        <h2 className='text-primary'>{data.instructor_become_title}Become an Instructor!</h2>
                                        <h6 className='w-75'>{data.instructor_become_caption}Lorem ipsum dolor sit amet consectetur. Non convallis sed id aliquam tempus. Volutpat tortor tincidunt egestas sit risus donec.</h6>
                                    </div>
                                </div>))}
                            <div className="btn-glow wow fadeInUp">
                                <div className="btn">
                                    <Link to="/instructor-form">enroll now</Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default BecomeInstructor;