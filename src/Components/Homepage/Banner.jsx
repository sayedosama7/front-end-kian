import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import { UserContext } from '../../UserContext';

function Banner() {
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
    <div className='banner'>
      <Container>
        <Row>
          <Col md="12" lg="6">
            <div className='banner-caption'>
              <img className='tag' src="images/tag-2.png" alt='tag' />
              <div className='banner-title'>
                <img className='rocket' src="images/banner/rocket.png" alt='rocket' />
                {data.map((item, id) => (
                  <div key={id}>
                    <h4 className='text-primary wow fadeInUp' animation-duration="1.2s" data-wow-delay="0.2s">{item.title_banner_1}</h4>
                    <h4 className='text-primary wow fadeInUp' animation-duration="1.2s" data-wow-delay="0.2s">{item.title_banner_2}</h4>
                    <h5 className=' wow fadeInUp' animation-duration="1.2s" data-wow-delay="0.2s">{item.title_banner_3}</h5>
                    <h5 className='text-muted mt-4 wow fadeInUp' animation-duration="1.2s" data-wow-delay="0.2s">{item.caption_banner}</h5>
                  </div>
                ))}
              </div>
              {!isLoggedIn && (
                <div className="btn-glow my-4 wow fadeInUp" animation-duration="1.2s" data-wow-delay="0.2s">
                  <div className="btn"><Link to="/signup">enroll now</Link></div>
                </div>
              )}
              <img className='spin-logo' src="images/banner/spin-logo.png" alt='home'></img>
            </div>
          </Col>
          <Col md="12" lg="6">
            <div className='head-banner'>
              <img className='img-fluid wow fadeInUp' animation-duration="1.2s" data-wow-delay="0.2s" src='images/banner/banner.png' alt='home'></img>
              <div className=''>
                <img className='small-img lamp animate__animated animate__jello animate__infinite animate__slower animate__delay-1s' src='images/banner/lamp.png' alt='lamp' />
                <img className='small-img camera animate__animated animate__jello animate__infinite animate__slower animate__delay-2s' src='images/banner/camera.png' alt='lamp' />
                <img className='small-img light animate__animated animate__jello animate__infinite animate__slower animate__delay-1s' src='images/banner/light.png' alt='lamp' />
                <img className='small-img mic animate__animated animate__jello animate__infinite animate__slower animate__delay-2s' src='images/banner/mic.png' alt='lamp' />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Banner;
