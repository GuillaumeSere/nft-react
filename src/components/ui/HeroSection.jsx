import React from 'react'
import { Container } from 'reactstrap'
import { Link } from 'react-router-dom'
import './hero-section.css'
import heroImg from '../../assets/images/hero.jpg'

const HeroSection = () => {
    return (
        <section className="hero__section" style={{ '--hero-image': `url(${heroImg})` }}>
            <Container>
                <div className="hero__content">
                    <span className="app__eyebrow">Atelier NFT pour créateurs</span>
                    <h1>MintLab</h1>
                    <p>Préparez votre collection, testez le rendu de vos métadonnées et organisez la vente avant de brancher le smart contract.</p>
                    <div className="hero__btns">
                        <Link className='primary__btn' to='/create'>
                            <i className="ri-magic-line"></i>
                            Créer un NFT
                        </Link>
                        <Link className='ghost__btn' to='/market'>
                            <i className="ri-compass-3-line"></i>
                            Explorer
                        </Link>
                    </div>
                </div>

                <div className="hero__metrics" aria-label="Indicateurs MintLab">
                    <div>
                        <span>3 étapes</span>
                        <p>Upload, métadonnées, preview</p>
                    </div>
                    <div>
                        <span>Live preview</span>
                        <p>Aperçu mis à jour en direct</p>
                    </div>
                    <div>
                        <span>Mint à venir</span>
                        <p>UX prête pour le wallet</p>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default HeroSection
