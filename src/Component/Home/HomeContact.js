import mapPinIcon from '../../Assets/img/map-pin.svg'
import callIcon from '../../Assets/img/phone-icon.svg'

const HomeContact = () => {
    return (
        <>
            <section className='contact-wrap'>
                <div className='conatct-gradient'>
                    <div className='container'>
                        <div className='main-title text-start'>Contact Us</div>
                        <div className='d-flex align-items-center mt-4 contact-info-flex'>
                            <div className='d-flex align-items-center address-text'>
                                <div className='cont-icon me-2'>
                                    <img src={mapPinIcon} alt='address' />
                                </div>
                                <div className='contact-text mt-1'>15401 West Dixie Hwy, North Miami Beach, FL</div>
                            </div>
                            <div className='d-flex align-items-center address-text ms-auto'>
                                <div className='cont-icon me-2'>
                                    <img src={callIcon} alt='call' />
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
                                        <input type='text' className='form-control' />
                                    </div>
                                    <div className='form-group'>
                                        <div className='d-flex align-items-center justify-content-between mb-2'>
                                            <label>Last Name</label>
                                            <div className='required'><span>*</span> Required</div>
                                        </div>
                                        <input type='text' className='form-control' />
                                    </div>
                                    <div className='form-group'>
                                        <div className='d-flex align-items-center justify-content-between mb-2'>
                                            <label>Email</label>
                                            <div className='required'><span>*</span> Required</div>
                                        </div>
                                        <input type='text' className='form-control' />
                                    </div>
                                    <div className='form-group'>
                                        <div className='d-flex align-items-center justify-content-between mb-2'>
                                            <label>Phone Number</label>
                                            <div className='required'><span>*</span> Required</div>
                                        </div>
                                        <input type='text' className='form-control' />
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
                                <div className="col-12 plr-55 mt-3 text-end"><button className="read-more-btn text-uppercase view-all-btn fw-600 w-25" type="button">Send</button></div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeContact