import React from 'react'
import Layout from '../Component/Common/Layout'
import Footer from '../Component/Common/Footer'
import Header from '../Component/Common/Header'
import CollectionsThumbSlider from 'react-image-gallery';
import { Link } from 'react-router-dom';
// 1st Slide
import galleryImg1 from '../Assets/img/vdp-thumb1.jpg'
import galleryImg2 from '../Assets/img/vdp-thumb2.jpg'
import galleryImg3 from '../Assets/img/vdp-thumb3.jpg'
import galleryImg4 from '../Assets/img/vdp-thumb4.jpg'
import galleryImg5 from '../Assets/img/vdp-thumb5.jpg'
import galleryImg6 from '../Assets/img/vdp-thumb6.jpg'
import carImg from '../Assets/img/image-removebg-preview.png'
import brandLogo from '../Assets/img/Ferrari-Logo.png'
import brandText from '../Assets/img/ferrari-text.svg'
import phoneIcon from '../Assets/img/phone-icon.svg'
import carfaxImg from '../Assets/img/carfax-icon.png'
import videoImg from '../Assets/img/video-thumb.png'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const ViewDetails = () => {
    const options = {
        loop:false,
        margin: 30,
        nav: true,
        dots: false,
        autoplay: false,
        smartSpeed: 1000,
        items: 3,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2,
            },
            1000: {
                items: 3,
    
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
                <div className='row mt-5 view-dtl-block'>
                    <div className='col-md-6'>
                        <img src={carImg} alt='image'/>
                    </div>
                    <div className='col-md-6'>
                        <div className='d-flex align-items-center vdtl-heading'>
                            <div className='me-4'>
                                <img src={brandLogo} alt='brand'/>
                            </div>
                            <div>
                                <img src={brandText}/>
                            </div>
                        </div>
                        <div className='d-flex align-items-center justify-content-between mt-5'>
                            <div className='vdtl-title'>2021 FERRARI</div>
                            <div className='vdtl-title me-4'><span>Price</span> $619,999</div>
                        </div>
                        <div className='d-flex align-items-center justify-content-between mt-4'>
                            <div>
                                <div className='vdtl-md-title'>812 GTS</div>
                                <div className='vdtl-sm-title mt-3'>Miles: 3,000</div>
                            </div>
                            <div>
                                <button type='button' className="read-more-btn text-uppercase vdtl-inquire-btn">
                                    Inquire
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='inside-bg-wrap pt-0 pb-325'>
            <div className='container'>
                <div className='text-center cs-tabs'>
                    <ul className='d-inline-flex align-items-center'>
                        <li>
                            <Link to='#' className='active'>Exterior</Link>
                        </li>
                        <li>
                            <Link to='#'>Interior</Link>
                        </li>
                        <li>
                            <Link to='#'>Wheels</Link>
                        </li>
                        <li>
                            <Link to='#'>Engine</Link>
                        </li>
                    </ul>
                </div>
                <div className='gallery-block'>
                    <OwlCarousel className='owl-theme gallery-slider' {...options}>
                        <div className='item'>
                            <div className='gallery-img'>
                                <img src={galleryImg1} alt='gallery'/>
                            </div>
                            <div className='gallery-img mt-30'>
                                <img src={galleryImg2} alt='gallery'/>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='gallery-img'>
                                <img src={galleryImg3} alt='gallery'/>
                            </div>
                            <div className='gallery-img mt-30'>
                                <img src={galleryImg4} alt='gallery'/>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='gallery-img'>
                                <img src={galleryImg5} alt='gallery'/>
                            </div>
                            <div className='gallery-img mt-30'>
                                <img src={galleryImg6} alt='gallery'/>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='gallery-img'>
                                <img src={galleryImg1} alt='gallery'/>
                            </div>
                            <div className='gallery-img mt-30'>
                                <img src={galleryImg2} alt='gallery'/>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='gallery-img'>
                                <img src={galleryImg3} alt='gallery'/>
                            </div>
                            <div className='gallery-img mt-30'>
                                <img src={galleryImg4} alt='gallery'/>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='gallery-img'>
                                <img src={galleryImg5} alt='gallery'/>
                            </div>
                            <div className='gallery-img mt-30'>
                                <img src={galleryImg6} alt='gallery'/>
                            </div>
                        </div>
                    </OwlCarousel>
                    <div className='video-thumb mt-30'>
                        <img className='w-100' src={videoImg}/>
                    </div>
                </div>
                <div className='d-flex view-dtl-block'>
                    <div className='view-dtl-left'>
                        <div className='view-dtl-box'>
                            <div className='cb-title mb-3 text-uppercase'>About this Vehicle</div>
                            <p>This one of a kind machine  clocks 0 - 60 in 4.5 seconds only one previous owner and only 600 have ever been made.  Its the perfect perfect piece for any collector lorem ipsum dolor sit amet, adipiscing elit, duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. sed dompor aliqua…  <Link to='#'>Read more</Link></p>
                            <div className='vdb-title font-26 mt-100 fw-500'>Got a question? <span>Call</span> or <span>Chat</span> live with a sales representative</div>
                            <form className='custom-form mt-80'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className='form-group'>
                                            <div className='d-flex align-items-center justify-content-between mb-2'>
                                                <label>Full Name</label>
                                                <div className='required-text'><span>*</span> Required</div>
                                            </div>
                                            <input type='text' className='form-control'/>
                                        </div>
                                        <div className='form-group'>
                                            <div className='d-flex align-items-center justify-content-between mb-2'>
                                                <label>Email</label>
                                                <div className='required-text'><span>*</span> Required</div>
                                            </div>
                                            <input type='text' className='form-control'/>
                                        </div>
                                        <div className='form-group'>
                                            <div className='d-flex align-items-center justify-content-between mb-2'>
                                                <label>Phone Number</label>
                                            </div>
                                            <input type='text' className='form-control'/>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='form-group'>
                                            <div className='d-flex align-items-center justify-content-between mb-2'>
                                                <label>Comments</label>
                                            </div>
                                            <textarea className='form-control h-232'></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className='row mt-5 align-items-center'>
                                    <div className='col-md-6'>
                                    <div class="d-flex align-items-center address-text ms-auto">
                                        <div class="cont-icon me-2">
                                            <img src={phoneIcon} alt="call"/>                               
                                        </div>
                                        <div class="contact-text">305-627-3626</div>
                                    </div>
                                    </div>
                                    <div className='col-md-6 text-end'>
                                        <button class="read-more-btn text-uppercase send-btn" type="button">Send</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='view-dtl-right'>
                        <div className='view-dtl-box'>
                            <div className='vdtl-title mb-2'>Vehicle Info</div>
                            <div className='custom-table mt-2'>
                                <table className='w-100'>
                                    <tr>
                                        <th>Stock</th>
                                        <td>1017</td>
                                    </tr>
                                    <tr>
                                        <th>VIN</th>
                                        <td><button className='copy-icon'></button> ZFF97CMA4M0261467</td>
                                    </tr>
                                    <tr>
                                        <th>Year</th>
                                        <td>2021</td>
                                    </tr>
                                    <tr>
                                        <th>Make</th>
                                        <td>Ferrari</td>
                                    </tr>
                                    <tr>
                                        <th>Model</th>
                                        <td>812 GTS</td>
                                    </tr>
                                    <tr>
                                        <th>Mileage</th>
                                        <td>3,000</td>
                                    </tr>
                                    <tr>
                                        <th>Trim</th>
                                        <td>Base</td>
                                    </tr>
                                    <tr>
                                        <th>Model Number</th>
                                        <td>-01</td>
                                    </tr>
                                    <tr>
                                        <th>Body Style</th>
                                        <td>2D Convertible</td>
                                    </tr>
                                    <tr>
                                        <th>Transmission</th>
                                        <td>7-Speed Manual</td>
                                    </tr>
                                    <tr>
                                        <th>Cylinders</th>
                                        <td>12</td>
                                    </tr>
                                    <tr>
                                        <th>Fuel Type</th>
                                        <td>Gasoline</td>
                                    </tr>
                                    <tr>
                                        <th>Exterior Color</th>
                                        <td>Gray</td>
                                    </tr>
                                    <tr>
                                        <th>Interior Color</th>
                                        <td>Rosso Ferrari</td>
                                    </tr>
                                </table>
                            </div>
                            <div className='mt-5 d-flex align-items-center justify-content-between'>
                                <div className='craft-logo'>
                                    <img src={carfaxImg}/>
                                </div>
                                <div>
                                    <Link to="#" className='blue-link'>View Report</Link>
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

export default ViewDetails