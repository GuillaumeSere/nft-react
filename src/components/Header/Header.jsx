import React, { useEffect, useState } from 'react'
import './header.css'
import { Container } from 'reactstrap'
import { NavLink, Link } from 'react-router-dom'

const NAV__LINKS = [
    {
        display: 'Accueil',
        url: '/home'
    },
    {
        display: 'Marketplace',
        url: '/market'
    },
    {
        display: 'Créer',
        url: '/create'
    },
    {
        display: 'Contact',
        url: '/contact'
    },
]

const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 48)
        handleScroll()
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const closeMenu = () => setIsMenuOpen(false)
    const toggleMenu = () => setIsMenuOpen((current) => !current)

    return (
        <header className={`header ${isScrolled ? 'header__shrink' : ''}`}>
            <Container>
                <div className="navigation">
                    <Link to="/home" className="logo" onClick={closeMenu}>
                        <span className="logo__mark">
                            <i className="ri-shape-line"></i>
                        </span>
                        <span className="logo__text">MintLab</span>
                    </Link>

                    <div className={`nav__menu ${isMenuOpen ? 'active__menu' : ''}`} onClick={closeMenu}>
                        <ul className="nav__list">
                            {NAV__LINKS.map((item, index) => (
                                <li className="nav__item" key={index}>
                                    <NavLink to={item.url} className={navClass => navClass.isActive ? 'active' : ''} onClick={closeMenu}>
                                        {item.display}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="nav__right">
                        <Link className="wallet__link" to="/wallet" onClick={closeMenu}>
                            <i className="ri-wallet-3-line"></i>
                            Wallet
                        </Link>

                        <button className="mobile__menu" onClick={toggleMenu} aria-label="Ouvrir le menu">
                            <i className={isMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
                        </button>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header
