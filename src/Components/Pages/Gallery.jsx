/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import Navbar from '../Navigation/NavBar'
import { useLocation } from 'react-router';
import Footer from '../Navigation/Footer';
import ScrollToTop from 'react-scroll-to-top';

function Gallery() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div>
            <Navbar />
            <div className="container events">
                <div className="row">
                    {/* start title banner  */}
                    <div className='m-auto position-relative col-md-6'>
                        <img className='img-fluid tag' src="images/tag-2.png" alt="" />
                        <h2 className='main-title text-primary mb-2 wow fadeInLeft' data-wow-delay=".3s">our gallery</h2>
                        <p className='text-muted fw-bold mb-5 wow fadeInUp' data-wow-delay=".4s" data-wow-duration="3s">
                            Our role here has increased more and this is so that we can benefit the students who are with us in our courses.
                        </p>
                    </div>

                    <div className='col-md-6 text-center'>
                        <img className='img-fluid wow fadeInDown hat mb-5' data-wow-delay=".3s" src="images/banner.png" alt="title-all" />
                    </div>

                    {/* start special-students section  */}
                    <div className='col-md-12 special-students mb-5'>
                        <h3 className='main-title mb-5'>our special students</h3>
                        <div className="showing">
                            <div className="clipped-border">
                                <img className='img-fluid' src="images/gallery/students/students-4.jpg" id="clipped" alt="Instructor" />
                            </div>
                            <div className="clipped-border">
                                <img className='img-fluid' src="images/gallery/students/students-5.jpg" id="clipped" alt="Instructor" />
                            </div>
                            <div className="clipped-border">
                                <img className='img-fluid' src="images/gallery/students/students-3.jpg" id="clipped" alt="Instructor" />
                            </div>
                            <div className="clipped-border">
                                <img className='img-fluid' src="images/gallery/students/students-1.jpg" id="clipped" alt="Instructor" />
                            </div>
                            <div className="clipped-border">
                                <img className='img-fluid' src="images/gallery/students/students-2.jpg" id="clipped" alt="Instructor" />
                            </div>
                            <div className="shadow"></div>
                        </div>
                    </div>

                    {/* start special-events section  */}

                    <div className='col-md-12 special-events'>
                        <h3 className='main-title mb-5'>our social posts</h3>
                        <div classnameName='facebook'>
                            <div id="carouselMaterialStyle" className="carousel slide carousel-fade" data-mdb-ride="carousel" data-mdb-carousel-init>
                                <div className="carousel-indicators">
                                    <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="0" className="active" aria-current="true"
                                        aria-label="Slide 1"></button>
                                    <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="2" aria-label="Slide 3"></button>
                                </div>

                                <div className="carousel-inner rounded-5 shadow-4-strong">
                                    <div className="carousel-item active">
                                        <iframe className="d-block w-100" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02fruv6tMsiczjYohe24wRqJtUuDLff6WAMt3xhjiXCMDTTvRsGPTVt1HTeC5nJmYml%26id%3D100086496031937&show_text=true&width=500&is_preview=true" width="870" height="608" style={{ border: "none", overflow: "hidden" }} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                                    </div>

                                    <div className="carousel-item">
                                        < iframe className="d-block w-100" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0t3WAKNPshjemrPmcyvz5vK82SwPrsRiBZSf1vLFuTcCqjsHkydxzPCpBnG45Y6ekl%26id%3D100086496031937&show_text=true&width=500&is_preview=true" width="470" height="609" style={{ border: "none", overflow: "hidden" }} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>


                                    </div>

                                    <div className="carousel-item">
                                        < iframe className="d-block w-100" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02eUyLm1B3qKXNKtN4TxEPfwEWC7EBoWcJoBg6MRKD4qqaQeucfk7bkmPbeomziD1Nl%26id%3D100086496031937&show_text=true&width=500&is_preview=true" width="470" height="615" style={{ border: "none", overflow: "hidden" }} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                                    </div>
                                </div>

                                <button className="carousel-control-prev" type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* End special-events section  */}

                    {/* start popular section  */}
                    <section className="popular">
                        <div className="container">
                            <h3 className="main-title">Popular Programming</h3>
                            <p className="text-muted fw-bold">Uncover Programming</p>
                            <p className="w-50 text-primary mb-5">
                                In our academy, we aim to empower students by providing them with the necessary skills and knowledge in the field of programming. The pictures of our exhibition reflect the great efforts made by our students and professors in this evolving field
                            </p>

                            <ul className="popular-list">

                                <li>
                                    <div className="popular-card">
                                        <figure className="card-img">
                                            <img className='img-fluid' src="images/gallery/popular/popular-1.jpg" id="clipped" alt='clipped' />
                                        </figure>
                                        <div className="card-content">
                                            <div className="card-rating">
                                                <i className='fas fa-star'></i>
                                                <i className='fas fa-star'></i>
                                                <i className='fas fa-star'></i>
                                                <i className='fas fa-star'></i>
                                            </div>
                                            <p className="card-text">
                                                Fun times at events.
                                            </p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="popular-card">
                                        <figure className="card-img">
                                            <img className='img-fluid' src="images/gallery/popular/popular-2.jpg" id="clipped" alt='clipped' />
                                        </figure>
                                        <div className="card-content">
                                            <div className="card-rating">
                                                <i className='fas fa-star'></i>
                                                <i className='fas fa-star'></i>
                                                <i className='fas fa-star'></i>
                                                <i className='fas fa-star'></i>
                                            </div>
                                            <p className="card-text">
                                                Focus and seriousness
                                            </p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="popular-card">
                                        <figure className="card-img">
                                            <img className='img-fluid' src="images/gallery/popular/popular-3.jpg" id="clipped" alt='clipped' />
                                        </figure>
                                        <div className="card-content">
                                            <div className="card-rating">
                                                <i className='fas fa-star'></i>
                                                <i className='fas fa-star'></i>
                                                <i className='fas fa-star'></i>
                                                <i className='fas fa-star'></i>
                                            </div>
                                            <p className="card-text">
                                                Distinctive projects in workshops
                                            </p>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </section>
                    {/* End popular section  */}

                    {/* start Work Space  */}
                    <section className="package">
                        <div className="container">

                            <h3 className="main-title">Kian Work Space</h3>
                            <p className="text-muted mb-5">
                                There is no longer an exam nook with Kian Workspace!!!
                            </p>
                            <ul className="package-list">

                                <li>
                                    <div className="package-card">
                                        <figure className="card-banner">
                                            <img className='img-fluid' src="images/gallery/workspace/work-space-3.jpg" id="clipped" alt='galery' />
                                        </figure>
                                        <div className="card-content">
                                            <h3 className="h3 card-title">Experience The Great Holiday On Beach</h3>
                                            <p className="card-text">
                                                The Wi-Fi is very fast and you can use it easily
                                            </p>
                                        </div>

                                        <div className="card-price">
                                            <p className="price">
                                                10 LE
                                                / per first hour
                                            </p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="package-card">

                                        <figure className="card-banner">
                                            <img className='img-fluid' src="images/gallery/workspace/work-space-2.jpg" id="clipped" alt='galery' />
                                        </figure>

                                        <div className="card-content">

                                            <h3 className="h3 card-title">Summer Holiday To The Oxolotan River</h3>

                                            <p className="card-text">
                                                It is very quiet and there are no annoying or distracting sounds
                                            </p>

                                        </div>

                                        <div className="card-price">
                                            <p className="price">
                                                5 LE
                                                / per remaining hours
                                            </p>
                                        </div>

                                    </div>
                                </li>

                                <li>
                                    <div className="package-card">

                                        <figure className="card-banner">
                                            <img className='img-fluid' src="images/gallery/workspace/work-space-1.jpg" id="clipped" alt='galery' />
                                        </figure>

                                        <div className="card-content">

                                            <h3 className="h3 card-title">Santorini Island's Weekend Vacation</h3>

                                            <p className="card-text">
                                                There are all the drinks you might need while studying
                                            </p>

                                        </div>

                                        <div className="card-price">

                                            <p className="price">
                                                special
                                                Discount
                                            </p>
                                        </div>

                                    </div>
                                </li>

                            </ul>
                        </div>
                    </section>
                    {/* End Work Space  */}

                    {/* start gallery */}
                    <section className="gallery">
                        <h3 className="main-title">Photo's From Our Galleries</h3>
                        <p className="text-muted">Photo Gallery</p>

                        <p className="w-50 text-primary">
                            Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium.
                            Sit ornare
                            mollitia tenetur, aptent.
                        </p>

                        <ul className="gallery-list">

                            <li className="gallery-item">
                                <figure className="gallery-image">
                                    <img className='img-fluid' src="images/gallery/gallery/gallery-1.jpg" id="clipped" alt='galery' />
                                </figure>
                            </li>

                            <li className="gallery-item">
                                <figure className="gallery-image">
                                    <img className='img-fluid' src="images/gallery/gallery/gallery-2.jpg" id="clipped" alt='galery' />
                                </figure>
                            </li>

                            <li className="gallery-item">
                                <figure className="gallery-image">
                                    <img className='img-fluid' src="images/gallery/gallery/gallery-3.jpg" id="clipped" alt='galery' />
                                </figure>
                            </li>

                            <li className="gallery-item">
                                <figure className="gallery-image">
                                    <img className='img-fluid' src="images/gallery/gallery/gallery-4.jpg" id="clipped" alt='galery' />
                                </figure>
                            </li>

                            <li className="gallery-item">
                                <figure className="gallery-image">
                                    <img className='img-fluid' src="images/gallery/gallery/gallery-5.jpg" id="clipped" alt='galery' />
                                </figure>
                            </li>

                            <li className="gallery-item">
                                <figure className="gallery-image">
                                    <img className='img-fluid' src="images/gallery/gallery/gallery-6.jpg" id="clipped" alt='galery' />
                                </figure>
                            </li>

                            <li className="gallery-item">
                                <figure className="gallery-image">
                                    <img className='img-fluid' src="images/gallery/gallery/gallery-7.jpg" id="clipped" alt='galery' />
                                </figure>
                            </li>

                            <li className="gallery-item">
                                <figure className="gallery-image">
                                    <img className='img-fluid' src="images/gallery/gallery/gallery-8.jpg" id="clipped" alt='galery' />
                                </figure>
                            </li>

                            <li className="gallery-item">
                                <figure className="gallery-image">
                                    <img className='img-fluid' src="images/gallery/gallery/gallery-9.jpg" id="clipped" alt='galery' />
                                </figure>
                            </li>

                            <li className="gallery-item">
                                <figure className="gallery-image">
                                    <img className='img-fluid' src="images/gallery/gallery/gallery-10.jpg" id="clipped" alt='galery' />
                                </figure>
                            </li>

                        </ul>
                    </section>
                    {/* End gallery */}

                </div>
            </div>
            <ScrollToTop smooth
                color='var(--background-color)'
                style={{ backgroundColor: 'var(--text-color)' }}
                className='animate__animated animate__flash animate__infinite	infinite animate__slower'
            />
            <Footer />
        </div>
    )
}

export default Gallery