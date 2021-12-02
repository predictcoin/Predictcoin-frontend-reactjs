import React, {useState} from 'react';
import {RiMenu3Line,  RiCloseLine} from 'react-icons/ri';

import './navbar.css';

import logo from '../../assets/logoblue.png'

const Menu = () => {
    const [activePage, setActivePage] = useState('market')
    return (
    <>
        <p className={activePage === 'market' ? 'ptc__navbar-active' : ''} onClick={() => setActivePage('market')}><a href="#market">Market</a></p>
        <p className={activePage === 'about' ? 'ptc__navbar-active' : ''} onClick={() => setActivePage('about')}><a href="#about">About</a></p>
        <p className={activePage === 'whitepaper' ? 'ptc__navbar-active' : ''} onClick={() => setActivePage('whitepaper')}><a href="#whitepaper">Whitepaper</a></p>
        <p className={activePage === 'audit' ? 'ptc__navbar-active' : ''} onClick={() => setActivePage('audit')}><a href="#audit">Audit</a></p>
        <p className={activePage === 'roadmap' ? 'ptc__navbar-active' : ''} onClick={() => setActivePage('roadmap')}><a href="#roadmap">Roadmap</a></p>
        <p className={activePage === 'partner' ? 'ptc__navbar-active' : ''} onClick={() => setActivePage('partner')}><a href="#partner">Partner</a></p>
        <p className={activePage === 'faq' ? 'ptc__navbar-active' : ''} onClick={() => setActivePage('faq')}><a href="#faq">FAQ</a></p>
    </>
    )
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleCloseMene = () => {
        setToggleMenu(false);
    }
    
    const handleOpenMene = () => {
        setToggleMenu(true);
    }
    
    return (
            <div className='ptc__navbar'>
                <div className='ptc__navbar-links'>
                    <div className='ptc__navbar-links_logo'>
                        <img src={logo} alt="logo" />
                    </div>

                    <div className='ptc__navbar-links_container'>
                        <Menu/>
                    </div>
                </div>

                <div className='ptc__navbar-launch'>
                    <button type='button'>Launch DApp</button>
                </div>

                {/* Mobile view */}
                <div className='ptc__navbar-menu'>
                    {toggleMenu
                        ? <RiCloseLine className="swirl-in-fwd" color="#2449e8" size={30} onClick={handleCloseMene}/> 
                        : <RiMenu3Line className="swirl-in-fwd" color="#2449e8" size={30} onClick={handleOpenMene}/>
                    }
                    {toggleMenu && (
                        <div className='ptc__navbar-menu_container slide-in-left'>
                            <div className='ptc__navbar-menu_container-links'>
                                <Menu/>

                                <div className='ptc__navbar-menu-container-launch'>
                                    <button type='button'>Launch DApp</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
    )
}

export default Navbar
