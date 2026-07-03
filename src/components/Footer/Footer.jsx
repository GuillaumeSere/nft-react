import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import './footer.css'

const MY__ACCOUNT = [
    {
        display: 'Profil créateur',
        url: '/seller-profile'
    },
    {
        display: 'Créer un NFT',
        url: '/create'
    },
    {
        display: 'Collection',
        url: '/market'
    },
    {
        display: 'Modifier profil',
        url: '/edit-profile'
    },
]

const RESOURCES = [
    {
        display: 'Guide du mint',
        url: '#'
    },
    {
        display: 'Frais et royalties',
        url: '#'
    },
    {
        display: 'Communauté',
        url: '#'
    },
    {
        display: 'Statut plateforme',
        url: '#'
    },
]

const COMPANY = [
    {
        display: 'À propos',
        url: '#'
    },
    {
        display: 'Studio',
        url: '#'
    },
    {
        display: 'Ranking',
        url: '#'
    },
    {
        display: 'Contact',
        url: '/contact'
    },
]

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg='3' md='6' sm='6'>
                        <div className="footer__logo">
                            <Link to="/home" className="footer__brand">
                                <span className="logo__mark">
                                    <i className="ri-shape-line"></i>
                                </span>
                                <span>MintLab</span>
                            </Link>
                            <p>Un atelier simple pour préparer, prévisualiser et bientôt publier vos NFTs sans perdre le fil créatif.</p>
                        </div>
                    </Col>

                    <Col lg='2' md='3' sm='6' className='mb-4'>
                        <h5>Compte</h5>
                        <ListGroup className='list__group'>
                            {MY__ACCOUNT.map((item, index) => (
                                <ListGroupItem key={index} className='list__item'>
                                    <Link to={item.url}>{item.display}</Link>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </Col>

                    <Col lg='2' md='3' sm='6' className='mb-4'>
                        <h5>Ressources</h5>
                        <ListGroup className='list__group'>
                            {RESOURCES.map((item, index) => (
                                <ListGroupItem key={index} className='list__item'>
                                    <Link to={item.url}>{item.display}</Link>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </Col>

                    <Col lg='2' md='3' sm='6' className='mb-4'>
                        <h5>Projet</h5>
                        <ListGroup className='list__group'>
                            {COMPANY.map((item, index) => (
                                <ListGroupItem key={index} className='list__item'>
                                    <Link to={item.url}>{item.display}</Link>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </Col>

                    <Col lg='3' md='6' sm='6' className='mb-4'>
                        <h5>Newsletter</h5>
                        <p className="footer__note">Recevez les nouveautés sur le mint, les ventes et les wallets pris en charge.</p>
                        <div className="newsletter__wrap">
                            <input type="email" className='newsletter' placeholder='votre@email.com' />
                            <button aria-label="S'inscrire à la newsletter">
                                <i className="ri-arrow-right-line"></i>
                            </button>
                        </div>
                        <div className="social__links d-flex gap-3 align-items-center">
                            <span>
                                <Link to='#'>
                                    <i className="ri-facebook-line"></i>
                                </Link>
                            </span>
                            <span>
                                <Link to='#'>
                                    <i className="ri-instagram-line"></i>
                                </Link>
                            </span>
                            <span>
                                <Link to='#'>
                                    <i className="ri-twitter-line"></i>
                                </Link>
                            </span>
                            <span>
                                <Link to='#'>
                                    <i className="ri-telegram-line"></i>
                                </Link>
                            </span>
                            <span>
                                <Link to='#'>
                                    <i className="ri-discord-line"></i>
                                </Link>
                            </span>
                        </div>
                    </Col>
                    <Col lg='12' className='mt-4 text-center'>
                        <p className='copyright'>
                            © 2026 MintLab. Prototype React de marketplace NFT.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
