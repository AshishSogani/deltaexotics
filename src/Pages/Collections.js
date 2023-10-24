import React from 'react'
import Layout from '../Component/Common/Layout'
import Footer from '../Component/Common/Footer'
import Header from '../Component/Common/Header'
import FerrariLogo from '../Assets/img/Ferrari-Logo.png'
import dogleLogo from '../Assets/img/dodge.jpg'
import porscheLogo from '../Assets/img/porsche-logo.png'
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
// 2nd Slide
import mainSlide11 from '../Assets/img/cb-img-large1.png'
import mainSlide12 from '../Assets/img/cb-img-large2.png'
import mainSlide13 from '../Assets/img/cb-img-large3.png'
import mainSlide14 from '../Assets/img/cb-img-large4.png'
import mainSlide15 from '../Assets/img/cb-img-large5.png'
import thumb11 from '../Assets/img/cb-thumb-1.png'
import thumb12 from '../Assets/img/cb-thumb-2.png'
import thumb13 from '../Assets/img/cb-thumb-3.png'
import thumb14 from '../Assets/img/cb-thumb-4.png'
import thumb15 from '../Assets/img/cb-thumb-5.png'
// 3rd Slide
import mainSlide21 from '../Assets/img/cb-img-large1.png'
import mainSlide22 from '../Assets/img/cb-img-large2.png'
import mainSlide23 from '../Assets/img/cb-img-large3.png'
import mainSlide24 from '../Assets/img/cb-img-large4.png'
import mainSlide25 from '../Assets/img/cb-img-large5.png'
import thumb21 from '../Assets/img/cb-thumb-1.png'
import thumb22 from '../Assets/img/cb-thumb-2.png'
import thumb23 from '../Assets/img/cb-thumb-3.png'
import thumb24 from '../Assets/img/cb-thumb-4.png'
import thumb25 from '../Assets/img/cb-thumb-5.png'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Collections = () => {
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
    const images1 = [
        {
            original: mainSlide11,
            thumbnail: thumb11,
        },
        {
            original: mainSlide12,
            thumbnail: thumb12,
        },
        {
            original: mainSlide13,
            thumbnail: thumb13,
        },
        {
            original: mainSlide14,
            thumbnail: thumb14,
        },
        {
            original: mainSlide15,
            thumbnail: thumb15,
        },
    ];
    const images2 = [
        {
            original: mainSlide21,
            thumbnail: thumb21,
        },
        {
            original: mainSlide22,
            thumbnail: thumb22,
        },
        {
            original: mainSlide23,
            thumbnail: thumb23,
        },
        {
            original: mainSlide24,
            thumbnail: thumb24,
        },
        {
            original: mainSlide25,
            thumbnail: thumb25,
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
                                <li className="breadcrumb-item active" aria-current="page">Collections</li>
                            </ol>
                        </nav>
                        <div className='inventory-title text-start text-uppercase mb-0'>Collections</div>
                    </div>
                </section>
                <section className='inside-bg-wrap'>
                    <div className='container'>
                        <div className='collection-block'>
                            <div className='header-block d-flex align-items-center justify-content-between'>
                                <div className='brand-logo'>
                                    <img src={FerrariLogo} alt='logo' />
                                </div>
                                <div className='text-end'>
                                    <div className='hb-title text-uppercase'>Ferrari Collection</div>
                                    <div className='d-inline-flex align-items-center mt-3'>
                                        <div className='gray-title'>Vehicles Included</div>
                                        <div className='hb-value ms-4'>4</div>
                                    </div>
                                </div>
                            </div>
                            <OwlCarousel className='owl-theme collection-slider' {...options}>
                                <div className='item'>
                                    <div className='d-flex collection-box'>
                                        <div className='w-50'>
                                            <CollectionsThumbSlider
                                                items={images}
                                                showFullscreenButton={false}
                                                showNav={false}
                                            />
                                        </div>
                                        <div className='w-50 cb-right'>
                                            <div className='cb-title mb-2'>2018 Ferrari</div>
                                            <div className='cb-sub-title mb-0'>488 SPIDER BASE</div>
                                            <div className='gray-title'>Mileage: 7,200</div>
                                            <div className='collection-value mt-2'>$289,999</div>
                                            <div className='mt-5'>
                                                <button type='button' className='read-more-btn text-uppercase cb-view-dtl'>View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className='d-flex collection-box'>
                                        <div className='w-50'>
                                            <CollectionsThumbSlider
                                                items={images}
                                                showFullscreenButton={false}
                                                showNav={false}
                                            />
                                        </div>
                                        <div className='w-50 cb-right'>
                                            <div className='cb-title mb-2'>2018 Ferrari</div>
                                            <div className='cb-sub-title mb-0'>488 SPIDER BASE</div>
                                            <div className='gray-title'>Mileage: 7,200</div>
                                            <div className='collection-value mt-2'>$289,999</div>
                                            <div className='mt-5'>
                                                <button type='button' className='read-more-btn text-uppercase cb-view-dtl'>View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className='d-flex collection-box'>
                                        <div className='w-50'>
                                            <CollectionsThumbSlider
                                                items={images}
                                                showFullscreenButton={false}
                                                showNav={false}
                                            />
                                        </div>
                                        <div className='w-50 cb-right'>
                                            <div className='cb-title mb-2'>2018 Ferrari</div>
                                            <div className='cb-sub-title mb-0'>488 SPIDER BASE</div>
                                            <div className='gray-title'>Mileage: 7,200</div>
                                            <div className='collection-value mt-2'>$289,999</div>
                                            <div className='mt-5'>
                                                <button type='button' className='read-more-btn text-uppercase cb-view-dtl'>View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className='d-flex collection-box'>
                                        <div className='w-50'>
                                            <CollectionsThumbSlider
                                                items={images}
                                                showFullscreenButton={false}
                                                showNav={false}
                                            />
                                        </div>
                                        <div className='w-50 cb-right'>
                                            <div className='cb-title mb-2'>2018 Ferrari</div>
                                            <div className='cb-sub-title mb-0'>488 SPIDER BASE</div>
                                            <div className='gray-title'>Mileage: 7,200</div>
                                            <div className='collection-value mt-2'>$289,999</div>
                                            <div className='mt-5'>
                                                <button type='button' className='read-more-btn text-uppercase cb-view-dtl'>View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                        <div className='collection-block mt-4'>
                            <div className='header-block d-flex align-items-center justify-content-between'>
                                <div className='brand-logo'>
                                    <img src={dogleLogo} alt='logo' />
                                </div>
                                <div className='text-end'>
                                    <div className='hb-title text-uppercase'>Dogde Collection</div>
                                    <div className='d-inline-flex align-items-center mt-3'>
                                        <div className='gray-title'>Vehicles Included</div>
                                        <div className='hb-value ms-4'>5</div>
                                    </div>
                                </div>
                            </div>
                            <OwlCarousel className='owl-theme collection-slider' {...options}>
                                <div className='item'>
                                    <div className='d-flex collection-box'>
                                        <div className='w-50'>
                                            <CollectionsThumbSlider
                                                items={images1}
                                                showFullscreenButton={false}
                                                showNav={false}
                                            />
                                        </div>
                                        <div className='w-50 cb-right'>
                                            <div className='cb-title mb-2'>2023 Dodge</div>
                                            <div className='cb-sub-title mb-0'>Challenger SRT Hellcat Redeye Widebody</div>
                                            <div className='gray-title'>Mileage: 15</div>
                                            <div className='collection-value mt-2'>$220,000</div>
                                            <div className='mt-5'>
                                                <button type='button' className='read-more-btn text-uppercase cb-view-dtl'>View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className='d-flex collection-box'>
                                        <div className='w-50'>
                                            <CollectionsThumbSlider
                                                items={images1}
                                                showFullscreenButton={false}
                                                showNav={false}
                                            />
                                        </div>
                                        <div className='w-50 cb-right'>
                                            <div className='cb-title mb-2'>2023 Dodge</div>
                                            <div className='cb-sub-title mb-0'>Challenger SRT Hellcat Redeye Widebody</div>
                                            <div className='gray-title'>Mileage: 15</div>
                                            <div className='collection-value mt-2'>$220,000</div>
                                            <div className='mt-5'>
                                                <button type='button' className='read-more-btn text-uppercase cb-view-dtl'>View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className='d-flex collection-box'>
                                        <div className='w-50'>
                                            <CollectionsThumbSlider
                                                items={images1}
                                                showFullscreenButton={false}
                                                showNav={false}
                                            />
                                        </div>
                                        <div className='w-50 cb-right'>
                                            <div className='cb-title mb-2'>2023 Dodge</div>
                                            <div className='cb-sub-title mb-0'>Challenger SRT Hellcat Redeye Widebody</div>
                                            <div className='gray-title'>Mileage: 15</div>
                                            <div className='collection-value mt-2'>$220,000</div>
                                            <div className='mt-5'>
                                                <button type='button' className='read-more-btn text-uppercase cb-view-dtl'>View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className='d-flex collection-box'>
                                        <div className='w-50'>
                                            <CollectionsThumbSlider
                                                items={images1}
                                                showFullscreenButton={false}
                                                showNav={false}
                                            />
                                        </div>
                                        <div className='w-50 cb-right'>
                                            <div className='cb-title mb-2'>2023 Dodge</div>
                                            <div className='cb-sub-title mb-0'>Challenger SRT Hellcat Redeye Widebody</div>
                                            <div className='gray-title'>Mileage: 15</div>
                                            <div className='collection-value mt-2'>$220,000</div>
                                            <div className='mt-5'>
                                                <button type='button' className='read-more-btn text-uppercase cb-view-dtl'>View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className='d-flex collection-box'>
                                        <div className='w-50'>
                                            <CollectionsThumbSlider
                                                items={images1}
                                                showFullscreenButton={false}
                                                showNav={false}
                                            />
                                        </div>
                                        <div className='w-50 cb-right'>
                                            <div className='cb-title mb-2'>2023 Dodge</div>
                                            <div className='cb-sub-title mb-0'>Challenger SRT Hellcat Redeye Widebody</div>
                                            <div className='gray-title'>Mileage: 15</div>
                                            <div className='collection-value mt-2'>$220,000</div>
                                            <div className='mt-5'>
                                                <button type='button' className='read-more-btn text-uppercase cb-view-dtl'>View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                        <div className='collection-block mt-4'>
                            <div className='header-block d-flex align-items-center justify-content-between'>
                                <div className='brand-logo'>
                                    <img src={porscheLogo} alt='logo' />
                                </div>
                                <div className='text-end'>
                                    <div className='hb-title text-uppercase'>Porsche Collection</div>
                                    <div className='d-inline-flex align-items-center mt-3'>
                                        <div className='gray-title'>Vehicles Included</div>
                                        <div className='hb-value ms-4'>4</div>
                                    </div>
                                </div>
                            </div>
                            <OwlCarousel className='owl-theme collection-slider' {...options}>
                                <div className='item'>
                                    <div className='d-flex collection-box'>
                                        <div className='w-50'>
                                            <CollectionsThumbSlider
                                                items={images2}
                                                showFullscreenButton={false}
                                                showNav={false}
                                            />
                                        </div>
                                        <div className='w-50 cb-right'>
                                            <div className='cb-title mb-2'>2024 Porsche</div>
                                            <div className='cb-sub-title mb-0'>911 CARRERA S</div>
                                            <div className='gray-title'>Mileage: 20</div>
                                            <div className='collection-value mt-2'>$209,999</div>
                                            <div className='mt-5'>
                                                <button type='button' className='read-more-btn text-uppercase cb-view-dtl'>View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className='d-flex collection-box'>
                                        <div className='w-50'>
                                            <CollectionsThumbSlider
                                                items={images2}
                                                showFullscreenButton={false}
                                                showNav={false}
                                            />
                                        </div>
                                        <div className='w-50 cb-right'>
                                            <div className='cb-title mb-2'>2024 Porsche</div>
                                            <div className='cb-sub-title mb-0'>911 CARRERA S</div>
                                            <div className='gray-title'>Mileage: 20</div>
                                            <div className='collection-value mt-2'>$209,999</div>
                                            <div className='mt-5'>
                                                <button type='button' className='read-more-btn text-uppercase cb-view-dtl'>View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className='d-flex collection-box'>
                                        <div className='w-50'>
                                            <CollectionsThumbSlider
                                                items={images2}
                                                showFullscreenButton={false}
                                                showNav={false}
                                            />
                                        </div>
                                        <div className='w-50 cb-right'>
                                            <div className='cb-title mb-2'>2024 Porsche</div>
                                            <div className='cb-sub-title mb-0'>911 CARRERA S</div>
                                            <div className='gray-title'>Mileage: 20</div>
                                            <div className='collection-value mt-2'>$209,999</div>
                                            <div className='mt-5'>
                                                <button type='button' className='read-more-btn text-uppercase cb-view-dtl'>View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className='d-flex collection-box'>
                                        <div className='w-50'>
                                            <CollectionsThumbSlider
                                                items={images2}
                                                showFullscreenButton={false}
                                                showNav={false}
                                            />
                                        </div>
                                        <div className='w-50 cb-right'>
                                            <div className='cb-title mb-2'>2024 Porsche</div>
                                            <div className='cb-sub-title mb-0'>911 CARRERA S</div>
                                            <div className='gray-title'>Mileage: 20</div>
                                            <div className='collection-value mt-2'>$209,999</div>
                                            <div className='mt-5'>
                                                <button type='button' className='read-more-btn text-uppercase cb-view-dtl'>View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </section>
            </section>
            <Footer />
        </>
    )
}

export default Collections