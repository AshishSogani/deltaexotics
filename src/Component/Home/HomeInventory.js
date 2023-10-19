import largeImg1 from '../../Assets/img/img-large1.png'
import thumbImg1 from '../../Assets/img/thumb-1.png'
import thumbImg2 from '../../Assets/img/thumb-2.png'
import thumbImg3 from '../../Assets/img/thumb-3.png'

import largeImg11 from '../../Assets/img/img-large11.png'
import thumbImg11 from '../../Assets/img/thumb-11.png'
import thumbImg12 from '../../Assets/img/thumb-12.png'
import thumbImg13 from '../../Assets/img/thumb-13.png'

import largeImg21 from '../../Assets/img/img-large21.png'
import thumbImg21 from '../../Assets/img/thumb-21.png'
import thumbImg22 from '../../Assets/img/thumb-22.png'
import thumbImg23 from '../../Assets/img/thumb-23.png'

const HomeInventory = () => {
    return (
        <>
            <section className='inventory-wrap'>
                <div className='container'>
                    <div className='inventory-title text-center text-uppercase mb-5'>Inventory</div>
                    <div className='row mlr-55 pt-3'>
                        <div className='col-md-4 plr-55'>
                            <div className='inventory-box'>
                                <div className='inventory-imgs'>
                                    <div className='inventory-large'>
                                        <img src={largeImg1} />
                                    </div>
                                    <div className='row gx-0'>
                                        <div className='col'>
                                            <div className='inventory-thumb'>
                                                <img src={thumbImg1} />
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <div className='inventory-thumb'>
                                                <img src={thumbImg2} />
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <div className='inventory-thumb'>
                                                <img src={thumbImg3} />
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
                                        <img src={largeImg11} />
                                    </div>
                                    <div className='row gx-0'>
                                        <div className='col'>
                                            <div className='inventory-thumb'>
                                                <img src={thumbImg11} />
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <div className='inventory-thumb'>
                                                <img src={thumbImg12} />
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <div className='inventory-thumb'>
                                                <img src={thumbImg13} />
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
                                        <img src={largeImg21} />
                                    </div>
                                    <div className='row gx-0'>
                                        <div className='col'>
                                            <div className='inventory-thumb'>
                                                <img src={thumbImg21} />
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <div className='inventory-thumb'>
                                                <img src={thumbImg22} />
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <div className='inventory-thumb'>
                                                <img src={thumbImg23} />
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
        </>
    )
}

export default HomeInventory