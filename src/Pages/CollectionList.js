import React from 'react'
import Footer from '../Component/Common/Footer'
import Header from '../Component/Common/Header'
import { Link } from 'react-router-dom'

import cblCarImg1 from '../Assets/img/cl-car-1.jpg'
import cblCarImg2 from '../Assets/img/cl-car-2.jpg'
import cblCarImg3 from '../Assets/img/cl-car-3.jpg'
import cblCarImg4 from '../Assets/img/cl-car-4.jpg'
import FerrariLogo from '../Assets/img/Ferrari-Logo.png'
import FerrariText from '../Assets/img/ferrari-text.svg'
import DodgeLogo from '../Assets/img/Dodge.png'
import srtHellcat from '../Assets/img/srt-hellcat.svg'
import porscheLogo from '../Assets/img/porsche-logo.png'
import porscheText from '../Assets/img/Porsche-Text.svg'
import lamboLogo from '../Assets/img/logo-lambo.png'
import lamboText from '../Assets/img/lambo-text.svg'

const CollectionList = () => {

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
                            <div className='d-flex collection-box clist-box p-0 mb-5'>
                                <div className='cbl-left'>
                                    <img src={cblCarImg1}/>
                                </div>
                                <div className='cbl-right'>
                                    <div className='cb-title mb-2 font-38 text-uppercase'>View Collection</div>
                                    <div className='d-flex mt-5 mb-4 justify-content-between'>
                                        <div className='mxw-70'>
                                            <img src={FerrariLogo} alt='logo'/>
                                        </div>
                                        <div className='mxh-90'>
                                            <img src={FerrariText} alt='logo'/>
                                        </div>
                                    </div>
                                    <div className='cl-btn-pos'>
                                        <Link to='/view-details' className='read-more-btn text-uppercase cb-view-dtl d-inline-block w-240 text-center'>Enter</Link>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex collection-box clist-box p-0 mb-5'>
                                <div className='cbl-left'>
                                    <img src={cblCarImg2}/>
                                </div>
                                <div className='cbl-right'>
                                    <div className='cb-title mb-2 font-38 text-uppercase'>View Collection</div>
                                    <div className='mt-5 mb-4'>
                                        <div className='mxh-50'>
                                            <img src={DodgeLogo} alt='logo'/>
                                        </div>
                                        <div className='mxh-90 text-end mt-1'>
                                            <img src={srtHellcat} alt='logo'/>
                                        </div>
                                    </div>
                                    <div className='cl-btn-pos'>
                                        <Link to='/view-details' className='read-more-btn text-uppercase cb-view-dtl d-inline-block w-240 text-center'>Enter</Link>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex collection-box clist-box p-0 mb-5'>
                                <div className='cbl-left'>
                                    <img src={cblCarImg3}/>
                                </div>
                                <div className='cbl-right'>
                                    <div className='cb-title mb-2 font-38 text-uppercase'>View Collection</div>
                                    <div className='d-flex mt-5 mb-4 align-items-center justify-content-between'>
                                        <div className='mxw-100'>
                                            <img src={porscheLogo} alt='logo'/>
                                        </div>
                                        <div className='mxh-32 text-end mt-1'>
                                            <img src={porscheText} alt='logo'/>
                                        </div>
                                    </div>
                                    <div className='cl-btn-pos'>
                                        <Link to='/view-details' className='read-more-btn text-uppercase cb-view-dtl d-inline-block w-240 text-center'>Enter</Link>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex collection-box clist-box p-0 mb-5'>
                                <div className='cbl-left'>
                                    <img src={cblCarImg4}/>
                                </div>
                                <div className='cbl-right'>
                                    <div className='cb-title mb-2 font-38 text-uppercase'>View Collection</div>
                                    <div className='d-flex mt-5 mb-4 align-items-center justify-content-between'>
                                        <div className='mxw-90'>
                                            <img src={lamboLogo} alt='logo'/>
                                        </div>
                                        <div className='mxh-100 text-end mt-1'>
                                            <img src={lamboText} alt='logo'/>
                                        </div>
                                    </div>
                                    <div className='cl-btn-pos'>
                                        <Link to='/view-details' className='read-more-btn text-uppercase cb-view-dtl d-inline-block w-240 text-center'>Enter</Link>
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

export default CollectionList