import React from 'react'
import Layout from '../Component/Common/Layout'
import Footer from '../Component/Common/Footer'
import Header from '../Component/Common/Header'
import CollectionsThumbSlider from 'react-image-gallery';
// 1st Slide
import mainSlide1 from '../Assets/img/cb-img-large1.png'
import mainSlide2 from '../Assets/img/cb-img-large2.png'
import mainSlide3 from '../Assets/img/cb-img-large3.png'
import mainSlide4 from '../Assets/img/cb-img-large4.png'
import mainSlide5 from '../Assets/img/cb-img-large5.png'
import thumb1 from '../Assets/img/cb-thumb-1.png'
import thumb2 from '../Assets/img/cb-thumb-2.png'
import thumb3 from '../Assets/img/cb-thumb-3.png'
import thumb4 from '../Assets/img/cb-thumb-4.png'
import thumb5 from '../Assets/img/cb-thumb-5.png'
import { Link } from 'react-router-dom';


const ViewCollection = () => {
    const images = [
        {
            original: mainSlide1,
            thumbnail: thumb1,
        },
        {
            original: mainSlide2,
            thumbnail: thumb2,
        },
        {
            original: mainSlide3,
            thumbnail: thumb3,
        },
        {
            original: mainSlide4,
            thumbnail: thumb4,
        },
        {
            original: mainSlide5,
            thumbnail: thumb5,
        },
    ];
    const options = {
        loop:false,
        margin: 0,
        nav: true,
        dots: false,
        autoplay: false,
        smartSpeed: 1000,
        items: 1,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 1,
            },
            700: {
                items: 1,
            },
            1000: {
                items: 1,
    
            }
        },
    };
    return (
        <>
            <section className='main-wrap background-auto'>
                <Header />
                <section className='inner-wrap'>
                    <div className='container'>
                        <nav aria-label="breadcrumb" className='custom-breadcrumb'>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item"><a href="#">Collections</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Ferrari</li>
                            </ol>
                        </nav>
                        <div className='d-flex align-items-end justify-content-between vc-main-header'>
                            <div className='inventory-title text-start text-uppercase mb-0'>Ferrari</div>
                            <div className='d-inline-flex align-items-center pb-4'>
                                <div className='view-label'>View by </div>
                                <div>
                                    <ul className='view-list'>
                                        <li>
                                            <button className='view-btn active' type='button'>Collections</button>
                                        </li>
                                        <li>
                                            <button className='view-btn' type='button'>All Makes</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='inside-bg-wrap pt-0 pb-325'>
                    <div className='container'>
                        <div className='view-collection-block row'>
                            <div className='col-md-6 mt-90'>
                                <div className='view-collection-box'>
                                    <CollectionsThumbSlider
                                        items={images}
                                        showFullscreenButton={false}
                                        showNav={false}
                                    />
                                    <div className='cb-right'>
                                        <div className='cb-title mb-2'>2018 Ferrari</div>
                                        <div className='cb-sub-title mb-0'>488 SPIDER BASE</div>
                                        <div className='d-flex align-items-end justify-content-between'>
                                            <div>
                                                <div className='gray-title'>Mileage: 7,200</div>
                                                <div className='collection-value mt-2'>$289,999</div>
                                            </div>
                                            <div>
                                                <Link to='/view-details' className='read-more-btn text-uppercase cb-view-dtl d-inline-block'>View Details</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 mt-90'>
                                <div className='view-collection-box'>
                                    <CollectionsThumbSlider
                                        items={images}
                                        showFullscreenButton={false}
                                        showNav={false}
                                    />
                                    <div className='cb-right'>
                                        <div className='cb-title mb-2'>2018 Ferrari</div>
                                        <div className='cb-sub-title mb-0'>488 SPIDER BASE</div>
                                        <div className='d-flex align-items-end justify-content-between'>
                                            <div>
                                                <div className='gray-title'>Mileage: 7,200</div>
                                                <div className='collection-value mt-2'>$289,999</div>
                                            </div>
                                            <div>
                                                <Link to='/view-details' className='read-more-btn text-uppercase cb-view-dtl d-inline-block'>View Details</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 mt-90'>
                                <div className='view-collection-box'>
                                    <CollectionsThumbSlider
                                        items={images}
                                        showFullscreenButton={false}
                                        showNav={false}
                                    />
                                    <div className='cb-right'>
                                        <div className='cb-title mb-2'>2018 Ferrari</div>
                                        <div className='cb-sub-title mb-0'>488 SPIDER BASE</div>
                                        <div className='d-flex align-items-end justify-content-between'>
                                            <div>
                                                <div className='gray-title'>Mileage: 7,200</div>
                                                <div className='collection-value mt-2'>$289,999</div>
                                            </div>
                                            <div>
                                                <Link to='/view-details' className='read-more-btn text-uppercase cb-view-dtl d-inline-block'>View Details</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 mt-90'>
                                <div className='view-collection-box'>
                                    <CollectionsThumbSlider
                                        items={images}
                                        showFullscreenButton={false}
                                        showNav={false}
                                    />
                                    <div className='cb-right'>
                                        <div className='cb-title mb-2'>2018 Ferrari</div>
                                        <div className='cb-sub-title mb-0'>488 SPIDER BASE</div>
                                        <div className='d-flex align-items-end justify-content-between'>
                                            <div>
                                                <div className='gray-title'>Mileage: 7,200</div>
                                                <div className='collection-value mt-2'>$289,999</div>
                                            </div>
                                            <div>
                                                <Link to='/view-details' className='read-more-btn text-uppercase cb-view-dtl d-inline-block'>View Details</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <Footer />
        </>
    )
}

export default ViewCollection