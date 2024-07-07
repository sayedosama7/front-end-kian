import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import { UserContext } from '../../UserContext';

function Discount() {
    const [data, setData] = useState([]);
    const { isLoggedIn } = useContext(UserContext);

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
                                    <h2 className='text-primary'>{data.discount_title_1} {data.discount_percent}</h2>
                                    <h2 className='text-primary'>{data.discount_title_2}</h2>
                                    <h6>{data.discount_caption}</h6>
                                </div>
                            </div>))}
                        {!isLoggedIn && (
                            <div className="btn-glow my-4">
                                <div className="btn"><Link to="/signup">join now</Link></div>
                            </div>
                        )}
                    </Col>
                    <Col xl="6" md="12">
                        {data.map((data, id) => (
                            <div key={id}>
                                <img
                                    className='wow fadeInUp img-fluid'
                                    src={`http://127.0.0.1:8000/setting/img/${data.discount_img}`}
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
    );
}

export default Discount;
