import React from 'react'
import './step-section.css'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

const STEP__DATA = [
    {
        title: 'Importer le visuel',
        desc: 'Ajoutez votre image, vidéo ou fichier source et contrôlez immédiatement le rendu de la carte.',
        icon: 'ri-upload-cloud-2-line'
    },
    {
        title: 'Décrire l’œuvre',
        desc: 'Renseignez titre, description, collection, catégorie et royalties avant publication.',
        icon: 'ri-quill-pen-line'
    },
    {
        title: 'Préparer la vente',
        desc: 'Choisissez prix fixe ou enchère, dates, mise minimale et blockchain cible.',
        icon: 'ri-auction-line'
    },
    {
        title: 'Brancher le mint',
        desc: 'Le front est prêt pour connecter wallet, smart contract et stockage décentralisé.',
        icon: 'ri-link-m'
    }
]

const StepSection = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg='12' className='mb-4'>
                        <div className="section__heading">
                            <div>
                                <span className="app__eyebrow">Workflow</span>
                                <h3 className="step__title">Créer sans friction</h3>
                                <p>Une interface pensée comme un atelier: elle guide la préparation du NFT avant l’intégration blockchain.</p>
                            </div>
                            <Link className="secondary__btn" to="/create">
                                <i className="ri-add-circle-line"></i>
                                Lancer un draft
                            </Link>
                        </div>
                    </Col>
                    {STEP__DATA.map((item, index) => 
                    <Col lg='3' md='4' sm='6' key={index} className='mb-4'>
                        <div className="single__step__item">
                            <span>
                                <i className={item.icon}></i>
                            </span>
                            <div className="step__item__content">
                                <h5>
                                    <Link to='/create'>{item.title}</Link>
                                </h5>
                                <p className='mb-0'>{item.desc}</p>
                            </div>
                        </div>
                    </Col>
                    )}
                </Row>
            </Container>
        </section>
    )
}

export default StepSection
