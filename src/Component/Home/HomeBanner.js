import feelForce from '../../Assets/img/feel-the-force.png'
import carImg from '../../Assets/img/car.png'
import { Link } from 'react-router-dom'
const HomeBanner = () => {
    return (
        <>
            <section className='home-bannner-wrap'>
                <div className='container'>
                    <div className='d-flex align-items-center hb-block'>
                        <div className='feel-collection-img mb-4 d-md-none'>
                            <img src={feelForce} alt='feel the force' />
                        </div>
                        <div className='order-2 banner-car-img'>
                            <img src={carImg} alt='car' />
                        </div>
                        <div>
                            <div className='feel-collection-img mb-4 d-none d-md-block'>
                                <img src={feelForce} alt='feel the force' />
                            </div>
                            <div className='lg-title'>Browse Private Collection</div>
                            <div className='mt-4'>
                                <Link to='#' className='trans-theme-btn d-inline-block'>View Collection</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeBanner