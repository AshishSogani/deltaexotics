import fbIcon from '../../Assets/img/icon-fb.svg'
import twIcon from '../../Assets/img/icon-twitter.svg'
import instaIcon from '../../Assets/img/icon-insta.svg'
import pinIcon from '../../Assets/img/icon-pinterest.svg'
import ytIcon from '../../Assets/img/icon-youtube.svg'
import lnkIcon from '../../Assets/img/icon-linked-in.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>

            <footer className='footer-wrap'>
                <div className='container'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='copyright order-2'>Copyright &copy; Delta Exotics</div>
                        <div className='social-list order-2'>
                            <Link to='#'>
                                <img src={fbIcon} alt='facebook' />
                            </Link>
                            <Link to='#'>
                                <img src={twIcon} alt='twitter' />
                            </Link>
                            <Link to='#'>
                                <img src={instaIcon} alt='instagram' />
                            </Link>
                            <Link to='#'>
                                <img src={pinIcon} alt='pintrest' />
                            </Link>
                            <Link to='#'>
                                <img src={ytIcon} alt='youtube' />
                            </Link>
                            <Link to='#'>
                                <img src={lnkIcon} alt='linkedIn' />
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer