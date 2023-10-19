import { useState } from 'react';
import mainLogo from '../../Assets/img/deltaexotic.svg'
import menuIcon from '../../Assets/img/icon-menu.svg'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
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
            <header className='header-wrap'>
                <div className='container'>
                    <div className='d-flex align-items-center'>
                        <div className='main-logo'>
                            <Link to='/'>
                                <img src={mainLogo} alt='Delta Exotics' />
                            </Link>
                        </div>
                        <div className={`main-menu ${menuActive ? "show" : ""}`}>
                            <ul>
                                <li>
                                    <NavLink to='#' className='active'>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to='#'>Inventory</NavLink>
                                </li>
                                <li>
                                    <NavLink to='#'>Finance</NavLink>
                                </li>
                                <li>
                                    <NavLink to='#'>About Us</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className={`search-box ms-auto ${mobileSearchActive ? "show" : ""}`}>
                            <input type='text' className='search-field' placeholder='Search' />
                            <button className='search-icon' type='button'></button>
                        </div>
                        <button className='search-icon ms-auto d-block d-md-none' type='button' onClick={mobileSearchIcon}></button>
                        <button className='mobile-menu-icon d-md-none' type='button' onClick={mobileMenuIcon}>
                            <img src={menuIcon} alt='icon' />
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header