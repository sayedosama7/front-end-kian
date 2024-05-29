import React from 'react';


const SmokeLogo = () => {

    return (
        <div>
            <section className='smoke'>
                <video src="images/smoke.mp4" autoPlay muted="muted" loop></video>

                <h1 className="wow animate__animated animate__fadeIn">
                    <span className="wow animate__animated animate__fadeIn" data-wow-delay="0.1s">K</span>
                    <span className="wow animate__animated animate__fadeIn" data-wow-delay="0.2s">I</span>
                    <span className="wow animate__animated animate__fadeIn" data-wow-delay="0.5s">A</span>
                    <span className="wow animate__animated animate__fadeIn" data-wow-delay="1.2s">N</span>
                    <span className="wow animate__animated animate__fadeIn mx-3" data-wow-delay="1.3s" ></span>
                    <span className="wow animate__animated animate__fadeIn" data-wow-delay="1.5s">A</span>
                    <span className="wow animate__animated animate__fadeIn" data-wow-delay="1.9s">c</span>
                    <span className="wow animate__animated animate__fadeIn" data-wow-delay="2.2s">A</span>
                    <span className="wow animate__animated animate__fadeIn" data-wow-delay="2.7s">D</span>
                    <span className="wow animate__animated animate__fadeIn" data-wow-delay="3.1s">E</span>
                    <span className="wow animate__animated animate__fadeIn" data-wow-delay="3.5s">M</span>
                    <span className="wow animate__animated animate__fadeIn" data-wow-delay="4.1s">Y</span>
                </h1>
            </section>
        </div>
    );
}

export default SmokeLogo;
