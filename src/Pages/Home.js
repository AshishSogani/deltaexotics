import mainLogo from '../Assets/img/deltaexotic.svg'
import feelForce from '../Assets/img/feel-the-force.png'
import carImg from '../Assets/img/car.png'
import arrowRight from '../Assets/img/arrow_forward.svg'
import iconCheck from '../Assets/img/icon-check.svg'
import largeImg1 from '../Assets/img/img-large1.png'
import thumbImg1 from '../Assets/img/thumb-1.png'
import thumbImg2 from '../Assets/img/thumb-2.png'
import thumbImg3 from '../Assets/img/thumb-3.png'

import largeImg11 from '../Assets/img/img-large11.png'
import thumbImg11 from '../Assets/img/thumb-11.png'
import thumbImg12 from '../Assets/img/thumb-12.png'
import thumbImg13 from '../Assets/img/thumb-13.png'

import largeImg21 from '../Assets/img/img-large21.png'
import thumbImg21 from '../Assets/img/thumb-21.png'
import thumbImg22 from '../Assets/img/thumb-22.png'
import thumbImg23 from '../Assets/img/thumb-23.png'

import fbIcon from '../Assets/img/icon-fb.svg'
import twIcon from '../Assets/img/icon-twitter.svg'
import instaIcon from '../Assets/img/icon-insta.svg'
import pinIcon from '../Assets/img/icon-pinterest.svg'
import ytIcon from '../Assets/img/icon-youtube.svg'
import lnkIcon from '../Assets/img/icon-linked-in.svg'

import mapPinIcon from '../Assets/img/map-pin.svg'
import callIcon from '../Assets/img/phone-icon.svg'
import menuIcon from '../Assets/img/icon-menu.svg'
import { useState } from 'react'

const Home = () => {
    const [menuActive, setMobileMenu] = useState(false);
    const mobileMenuIcon = () => {
        setMobileMenu(!menuActive);
    }
    const [mobileSearchActive, setmobileSearchActive] = useState(false);
    const mobileSearchIcon = () => {
        setmobileSearchActive(!mobileSearchActive);
    }
    return (
        <>
            <section className='main-wrap'>
                <header className='header-wrap'>
                    <div className='container'>
                        <div className='d-flex align-items-center'>
                            <div className='main-logo'>
                                <a href='/'>
                                    <img src={mainLogo} alt='Delta Exotics'/>
                                </a>
                            </div>
                            <div className={`main-menu ${menuActive? "show" : ""}`}>
                                <ul>
                                    <li>
                                        <a href='#' className='active'>Home</a>
                                    </li>
                                    <li>
                                        <a href='#'>Inventory</a>
                                    </li>
                                    <li>
                                        <a href='#'>Finance</a>
                                    </li>
                                    <li>
                                        <a href='#'>About Us</a>
                                    </li>
                                </ul>
                            </div>
                            <div className={`search-box ms-auto ${mobileSearchActive ? "show" : ""}`}>
                                <input type='text' className='search-field' placeholder='Search'/>
                                <button className='search-icon' type='button'></button>
                            </div>
                            <button className='search-icon ms-auto d-block d-md-none' type='button' onClick={mobileSearchIcon}></button>
                            <button className='mobile-menu-icon d-md-none' type='button' onClick={mobileMenuIcon}>
                                <img src={menuIcon} alt='icon'/>
                            </button>
                        </div>
                    </div>
                </header>
                <section className='home-bannner-wrap'>
                    <div className='container'>
                        <div className='d-flex align-items-center hb-block'>
                            <div className='feel-collection-img mb-4 d-md-none'>
                                <img src={feelForce} alt='feel the force'/>
                            </div>
                            <div className='order-2 banner-car-img'>
                                <img src={carImg} alt='car'/>
                            </div>
                            <div>
                                <div className='feel-collection-img mb-4 d-none d-md-block'>
                                    <img src={feelForce} alt='feel the force'/>
                                </div>
                                <div className='lg-title'>Browse Private Collection</div>
                                <div className='mt-4'>
                                    <a href='#' className='trans-theme-btn d-inline-block'>View Collection</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='service-wrap'>
                    <div className='container'>
                        <div className='row gx-5'>
                            <div className='col-md-4'>
                                <div className='service-box'>
                                    <div className='md-title d-flex align-items-center'>
                                        <div className='me-2'><img src={arrowRight} alt='arrow'/></div> 
                                        <div>Our Story</div>
                                    </div>
                                    <div className='border-cs mt-3 mb-3'></div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                    <div className='text-center mt-4'>
                                        <a href='#' className='read-more-btn d-inline-block'>READ NOW</a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='service-box'>
                                    <div className='md-title d-flex align-items-center'>
                                        <div className='me-2'><img src={arrowRight} alt='arrow'/></div> 
                                        <div>Core Values</div>
                                    </div>
                                    <div className='border-cs mt-3 mb-3'></div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                    <div className='text-center mt-4'>
                                        <a href='#' className='read-more-btn d-inline-block'>READ NOW</a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='service-box'>
                                    <div className='md-title d-flex align-items-center'>
                                        <div className='me-2'><img src={arrowRight} alt='arrow'/></div> 
                                        <div>Chartered Trips</div>
                                    </div>
                                    <div className='border-cs mt-3 mb-3'></div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                    <div className='text-center mt-4'>
                                        <a href='#' className='read-more-btn d-inline-block'>READ NOW</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <section className='welcome-delta-wrap'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 pe-5'>
                            <div className='welcome-title'>Welcome to Delta <br/>Exotic Cars</div>
                            <div className='content mt-4'>
                                <p>It all started with a Lamborghini.</p>
                                <p>A rented one, in fact, that one of our founding owners and his son procured for a fun weekend in Florida. That rental….turned into 3 more exotic rentals.</p>
                                <p>Then, the purchase of a Lamborghini. <br/>
                                Followed by a Porsche.<br/>
                                Then a few Ferraris.<br/>
                                And several Hellcats.</p>
                                <p>All the while, his love for exotic cars was strengthening. New cars, used cars, classic cars…they all became part of his collection…  <br/><a href='#'>Read more</a></p>
                            </div>
                        </div>
                        <div className='col-md-6 text-end'>
                            <ul className='welcome-list d-inline-block text-start'>
                                <li>
                                    <div className='wl-box d-flex'>
                                        <div className='wl-icon'>
                                            <img src={iconCheck} alt='check'/>
                                        </div>
                                        <div className='wl-content'>
                                            <div className='wl-title'>The Golden Rule</div>
                                            <p>We treat other as we want to be treated</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='wl-box d-flex'>
                                        <div className='wl-icon'>
                                            <img src={iconCheck} alt='check'/>
                                        </div>
                                        <div className='wl-content'>
                                            <div className='wl-title'>Car Advisors, Not Salesman</div>
                                            <p>We don’t push sales, we provide expertise</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='wl-box d-flex'>
                                        <div className='wl-icon'>
                                            <img src={iconCheck} alt='check'/>
                                        </div>
                                        <div className='wl-content'>
                                            <div className='wl-title'>Fun and Fair</div>
                                            <p>We make car buying enjoyable</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='wl-box d-flex'>
                                        <div className='wl-icon'>
                                            <img src={iconCheck} alt='check'/>
                                        </div>
                                        <div className='wl-content'>
                                            <div className='wl-title'>Relentless Passion</div>
                                            <p>Our love for cars is unwavering</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className='unique-collections-wrap'>
                <div className='unique-collections-pos'>
                    <div className='container'>
                        <div className='main-title text-center text-uppercase'>Our Unique Collections</div>
                        <div className='mt-5 pt-2 text-center'>
                            <button className='read-more-btn text-uppercase unique-btn me-5' type='button'>Shop Now</button>
                            <button className='read-more-btn text-uppercase unique-btn' type='button'>Reach Out</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='inventory-wrap'>
                <div className='container'>
                    <div className='inventory-title text-center text-uppercase mb-5'>Inventory</div>
                    <div className='row mlr-55 pt-3'>
                        <div className='col-md-4 plr-55'>
                            <div className='inventory-box'>
                                <div className='inventory-imgs'>
                                    <div className='inventory-large'>
                                        <img src={largeImg1}/>
                                    </div>
                                    <div className='row gx-0'>
                                        <div className='col'>
                                            <div className='inventory-thumb'>
                                                <img src={thumbImg1}/>
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <div className='inventory-thumb'>
                                                <img src={thumbImg2}/>
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <div className='inventory-thumb'>
                                                <img src={thumbImg3}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='inventory-content pt-4'>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <div className='inventory-title1'>2023 Dodge</div>
                                    <div className='inventory-mileage text-end'>Mileage: 15</div>
                                </div>
                                <div className='d-flex justify-content-between mt-3'>
                                    <div className='inventory-title2 pe-4'>Challenger SRT Hellcat Redeye Widebody</div>
                                    <div className='inventory-price text-end'>$220,000</div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 plr-55'>
                            <div className='inventory-box'>
                                <div className='inventory-imgs'>
                                    <div className='inventory-large'>
                                        <img src={largeImg11}/>
                                    </div>
                                    <div className='row gx-0'>
                                        <div className='col'>
                                            <div className='inventory-thumb'>
                                                <img src={thumbImg11}/>
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <div className='inventory-thumb'>
                                                <img src={thumbImg12}/>
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <div className='inventory-thumb'>
                                                <img src={thumbImg13}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='inventory-content pt-4'>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <div className='inventory-title1'>2018 FERRARI</div>
                                    <div className='inventory-mileage text-end'>Mileage: 7,200</div>
                                </div>
                                <div className='d-flex justify-content-between mt-3'>
                                    <div className='inventory-title2 pe-4'>488 SPIDER BASE</div>
                                    <div className='inventory-price text-end'>$289,999</div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 plr-55'>
                            <div className='inventory-box'>
                                <div className='inventory-imgs'>
                                    <div className='inventory-large'>
                                        <img src={largeImg21}/>
                                    </div>
                                    <div className='row gx-0'>
                                        <div className='col'>
                                            <div className='inventory-thumb'>
                                                <img src={thumbImg21}/>
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <div className='inventory-thumb'>
                                                <img src={thumbImg22}/>
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <div className='inventory-thumb'>
                                                <img src={thumbImg23}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='inventory-content pt-4'>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <div className='inventory-title1'>2024 Porsche</div>
                                    <div className='inventory-mileage text-end'>Mileage: 16</div>
                                </div>
                                <div className='d-flex justify-content-between mt-3'>
                                    <div className='inventory-title2 pe-4'>911 CARRERA S</div>
                                    <div className='inventory-price text-end'>$209,999</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-3 text-center'>
                        <button className='read-more-btn text-uppercase view-all-btn fw-600' type='button'>VIew All</button>
                    </div>
                </div>
            </section>
            <section className='contact-wrap'>
                <div className='conatct-gradient'>
                    <div className='container'>
                        <div className='main-title text-start'>Contact Us</div>
                        <div className='d-flex align-items-center mt-4 contact-info-flex'>
                            <div className='d-flex align-items-center address-text'>
                                <div className='cont-icon me-2'>
                                    <img src={mapPinIcon} alt='address'/>
                                </div>
                                <div className='contact-text mt-1'>15401 West Dixie Hwy, North Miami Beach, FL</div>
                            </div>
                            <div className='d-flex align-items-center address-text ms-auto'>
                                <div className='cont-icon me-2'>
                                    <img src={callIcon} alt='call'/>
                                </div>
                                <div className='contact-text mt-1'>Call Now</div>
                            </div>
                            <div className='contact-phone ms-4 mt-1'>305-627-3626</div>
                        </div>
                        <form className='custom-form mt-4'>
                            <div className='row mlr-55'>
                                <div className='col-md-6 col-12 plr-55'>
                                    <div className='form-group'>
                                        <div className='d-flex align-items-center justify-content-between mb-2'>
                                            <label>First Name</label>
                                            <div className='required'><span>*</span> Required</div>
                                        </div>
                                        <input type='text' className='form-control'/>
                                    </div>
                                    <div className='form-group'>
                                        <div className='d-flex align-items-center justify-content-between mb-2'>
                                            <label>Last Name</label>
                                            <div className='required'><span>*</span> Required</div>
                                        </div>
                                        <input type='text' className='form-control'/>
                                    </div>
                                    <div className='form-group'>
                                        <div className='d-flex align-items-center justify-content-between mb-2'>
                                            <label>Email</label>
                                            <div className='required'><span>*</span> Required</div>
                                        </div>
                                        <input type='text' className='form-control'/>
                                    </div>
                                    <div className='form-group'>
                                        <div className='d-flex align-items-center justify-content-between mb-2'>
                                            <label>Phone Number</label>
                                            <div className='required'><span>*</span> Required</div>
                                        </div>
                                        <input type='text' className='form-control'/>
                                    </div>
                                </div>
                                <div className='col-md-6 col-12 plr-55'>
                                    <div className='form-group'>
                                        <div className='d-flex align-items-center justify-content-between mb-2'>
                                            <label>Comments</label>
                                            <div className='required'><span>*</span> Required</div>
                                        </div>
                                        <textarea className='form-control h-330'></textarea>
                                    </div>
                                </div>
                                <div class="col-12 plr-55 mt-3 text-end"><button class="read-more-btn text-uppercase view-all-btn fw-600 w-25" type="button">Send</button></div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <footer className='footer-wrap'>
                <div className='container'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='copyright order-2'>Copyright &copy; Delta Exotics</div>
                        <div className='social-list order-2'>
                            <a href='#'>
                                <img src={fbIcon} alt='facebook'/>
                            </a>
                            <a href='#'>
                                <img src={twIcon} alt='twitter'/>
                            </a>
                            <a href='#'>
                                <img src={instaIcon} alt='instagram'/>
                            </a>
                            <a href='#'>
                                <img src={pinIcon} alt='pintrest'/>
                            </a>
                            <a href='#'>
                                <img src={ytIcon} alt='youtube'/>
                            </a>
                            <a href='#'>
                                <img src={lnkIcon} alt='linkedIn'/>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Home