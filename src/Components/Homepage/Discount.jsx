import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

function Discount() {
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
        <div className='discount py-5'>
            <Container>
                <Row>
                    <Col xl="6" md="12">
                        {data.map((data, id) => (
                            <div key={id}>
                                <div className='text wow fadeInUp'>
                                    <h2 className='text-primary'>{data.discount_title_1}Get a {data.discount_percent}30% Discount!</h2>
                                    <h2 className='text-primary'>{data.discount_title_2}Create Your Free Account Today!</h2>
                                    <h6>{data.discount_caption}Lorem ipsum dolor sit amet consectetur. Non convallis sed id aliquam tempus. Volutpat tortor tincidunt egestas sit risus donec.</h6>
                                </div>
                            </div>))}
                        <div className="btn-glow my-4">
                            <div className="btn"><Link to="/signup">join now</Link></div>
                        </div>

                    </Col>
                    <Col xl="6" md="12">
                        {data.map((data, id) => (
                            <div key={id}>
                                <img
                                    className='wow fadeInUp img-fluid'
                                    src={`http://127.0.0.1:8000/setting/img/${data.discount_img}`}
                                    // src="/images/Home/discount-stamp-2.png"
                                    alt="discount"
                                    data-wow-duration="1s"
                                    data-wow-offset="100"
                                    style={{
                                        visibility: 'visible',
                                        animationDuration: '2s',
                                        animationName: 'zoomIn'
                                    }}
                                />
                            </div>))}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Discount;