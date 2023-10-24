import React from 'react'
import Layout from '../Component/Common/Layout'
import Footer from '../Component/Common/Footer'
import Header from '../Component/Common/Header'
import srtLogo from '../Assets/img/srt-hellcat.svg'
import dodgeLogo from '../Assets/img/Dodge.svg'
import carImg1 from '../Assets/img/hellcats-pair.png'
import ferrariLogo from '../Assets/img/Ferrari-Logo.png'
import ferrariText from '../Assets/img/ferrari-text.svg'
import carImg2 from '../Assets/img/Ferrari-pair.png'

import PorscheLogo from '../Assets/img/porsche-logo.png'
import PorscheText from '../Assets/img/Porsche-Text.svg'
import carImg3 from '../Assets/img/Porsche_Pair.png'

const Pairings = () => {

    return (
        <>
            <section className='main-wrap background-auto'>
                <Header />
                <section className='inner-wrap'>
                    <div className='container'>
                        <nav aria-label="breadcrumb" className='custom-breadcrumb'>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Pairings</li>
                            </ol>
                        </nav>
                        <div className='inventory-title text-start text-uppercase mb-0'>Pairings</div>
                    </div>
                </section>
                <section className='inside-bg-wrap pb-325'>
                    <div className='container'>
                        <div className='paring-block'>
                            <div className='paring-box mb-5'>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <div className='paring-logo'>
                                            <img src={dodgeLogo}/>
                                        </div>
                                        <div className='md-title opacity-0-2 text-uppercase mt-4'>Hellcat Set</div>
                                    </div>
                                    <div>
                                        <div className='paring-text'>
                                            <img src={srtLogo}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <div className='pt-5 w-40 pe-5'>
                                        <div className='paring-col'>
                                            <div className='hb-title text-uppercase'>2023 CHALLENGER</div>
                                            <div className='sm-title text-uppercase mt-2'>SRT HELLCAT REDEYE WIDEBODY</div>
                                            <div className='xs-title mt-3'>Miles: 11</div>
                                        </div>
                                        <div className='paring-col'>
                                            <div className='hb-title text-uppercase'>2023 CHALLENGER</div>
                                            <div className='sm-title text-uppercase mt-2'>SRT HELLCAT WIDEBODY</div>
                                            <div className='xs-title mt-3'>Miles: 14</div>
                                        </div>
                                        <div className='mt-5'>
                                            <div className='sm-title text-uppercase fw-700 text-white'>Pricing for Set:</div>
                                            <div className='md-title text-uppercase fw-700 text-white mt-3'>$399K</div>
                                        </div>
                                    </div>
                                    <div className='w-60'>
                                        <div className='paring-car-img'>
                                            <img src={carImg1}/>
                                        </div>
                                        <div className="text-end"><button type="button" className="read-more-btn text-uppercase cb-view-dtl">View Details</button></div>
                                    </div>
                                </div>
                            </div>
                            <div className='paring-box mb-5'>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <div className='paring-logo'>
                                            <img src={ferrariLogo}/>
                                        </div>
                                        <div className='md-title opacity-0-2 text-uppercase mt-4'>Ferrari Set</div>
                                    </div>
                                    <div>
                                        <div className='paring-text'>
                                            <img src={ferrariText}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <div className='pt-5 w-40 pe-5'>
                                        <div className='paring-col'>
                                            <div className='hb-title text-uppercase'>2018 FERRARI</div>
                                            <div className='sm-title text-uppercase mt-2'>488 SPIDER</div>
                                            <div className='xs-title mt-3'>Miles: 7,200</div>
                                        </div>
                                        <div className='paring-col'>
                                            <div className='hb-title text-uppercase'>2021 FERRARI</div>
                                            <div className='sm-title text-uppercase mt-2'>812 GTS</div>
                                            <div className='xs-title mt-3'>Miles: 3,000</div>
                                        </div>
                                        <div className='mt-5'>
                                            <div className='sm-title text-uppercase fw-700 text-white'>Pricing for Set:</div>
                                            <div className='md-title text-uppercase fw-700 text-white mt-3'>$899K</div>
                                        </div>
                                    </div>
                                    <div className='w-60'>
                                        <div className='paring-car-img'>
                                            <img src={carImg2}/>
                                        </div>
                                        <div className="text-end"><button type="button" className="read-more-btn text-uppercase cb-view-dtl">View Details</button></div>
                                    </div>
                                </div>
                            </div>
                            <div className='paring-box mb-5'>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <div className='paring-logo'>
                                            <img src={PorscheLogo}/>
                                        </div>
                                        <div className='md-title opacity-0-2 text-uppercase mt-4'>Carrera Set</div>
                                    </div>
                                    <div>
                                        <div className='paring-text'>
                                            <img src={PorscheText}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <div className='pt-5 w-40 pe-5'>
                                        <div className='paring-col'>
                                            <div className='hb-title text-uppercase'>2021 PORSCHE</div>
                                            <div className='sm-title text-uppercase mt-2'>911 CARRERA S</div>
                                            <div className='xs-title mt-3'>Miles: 3,337</div>
                                        </div>
                                        <div className='paring-col'>
                                            <div className='hb-title text-uppercase'>2024 PORSCHE</div>
                                            <div className='sm-title text-uppercase mt-2'>911 CARRERA S</div>
                                            <div className='xs-title mt-3'>Miles: 15</div>
                                        </div>
                                        <div className='mt-5'>
                                            <div className='sm-title text-uppercase fw-700 text-white'>Pricing for Set:</div>
                                            <div className='md-title text-uppercase fw-700 text-white mt-3'>$349K</div>
                                        </div>
                                    </div>
                                    <div className='w-60'>
                                        <div className='paring-car-img'>
                                            <img src={carImg3}/>
                                        </div>
                                        <div className="text-end"><button type="button" className="read-more-btn text-uppercase cb-view-dtl">View Details</button></div>
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

export default Pairings