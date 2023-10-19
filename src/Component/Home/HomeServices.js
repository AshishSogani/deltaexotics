import { Link } from 'react-router-dom'
import arrowRight from '../../Assets/img/arrow_forward.svg'
const HomeServices = () => {
    return (
        <>
            <section className='service-wrap'>
                <div className='container'>
                    <div className='row gx-5'>
                        <div className='col-md-4'>
                            <div className='service-box'>
                                <div className='md-title d-flex align-items-center'>
                                    <div className='me-2'><img src={arrowRight} alt='arrow' /></div>
                                    <div>Our Story</div>
                                </div>
                                <div className='border-cs mt-3 mb-3'></div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                <div className='text-center mt-4'>
                                    <Link to='#' className='read-more-btn d-inline-block'>READ NOW</Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='service-box'>
                                <div className='md-title d-flex align-items-center'>
                                    <div className='me-2'><img src={arrowRight} alt='arrow' /></div>
                                    <div>Core Values</div>
                                </div>
                                <div className='border-cs mt-3 mb-3'></div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                <div className='text-center mt-4'>
                                    <Link to='#' className='read-more-btn d-inline-block'>READ NOW</Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='service-box'>
                                <div className='md-title d-flex align-items-center'>
                                    <div className='me-2'><img src={arrowRight} alt='arrow' /></div>
                                    <div>Chartered Trips</div>
                                </div>
                                <div className='border-cs mt-3 mb-3'></div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                <div className='text-center mt-4'>
                                    <Link to='#' className='read-more-btn d-inline-block'>READ NOW</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeServices