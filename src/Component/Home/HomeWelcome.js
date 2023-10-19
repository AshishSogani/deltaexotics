import iconCheck from '../../Assets/img/icon-check.svg'
const HomeWelcome = () => {
    return (
        <>
            <section className='welcome-delta-wrap'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 pe-5'>
                            <div className='welcome-title'>Welcome to Delta <br />Exotic Cars</div>
                            <div className='content mt-4'>
                                <p>It all started with a Lamborghini.</p>
                                <p>A rented one, in fact, that one of our founding owners and his son procured for a fun weekend in Florida. That rental….turned into 3 more exotic rentals.</p>
                                <p>Then, the purchase of a Lamborghini. <br />
                                    Followed by a Porsche.<br />
                                    Then a few Ferraris.<br />
                                    And several Hellcats.</p>
                                <p>All the while, his love for exotic cars was strengthening. New cars, used cars, classic cars…they all became part of his collection…  <br /><a href='#'>Read more</a></p>
                            </div>
                        </div>
                        <div className='col-md-6 text-end'>
                            <ul className='welcome-list d-inline-block text-start'>
                                <li>
                                    <div className='wl-box d-flex'>
                                        <div className='wl-icon'>
                                            <img src={iconCheck} alt='check' />
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
                                            <img src={iconCheck} alt='check' />
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
                                            <img src={iconCheck} alt='check' />
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
                                            <img src={iconCheck} alt='check' />
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
        </>
    )
}

export default HomeWelcome