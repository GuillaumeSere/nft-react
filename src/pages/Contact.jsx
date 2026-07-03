import React, { useRef, useState } from 'react'
import CommonSection from '../components/ui/Common-section/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import '../styles/contact.css'

const Contact = () => {
    const nameRef = useRef('')
    const emailRef = useRef('')
    const subjectRef = useRef('')
    const messageRef = useRef('')
    const [sent, setSent] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setSent(true)
    }

    return (
        <>
            <CommonSection title='Contact' subtitle='Une question sur le studio, la marketplace ou la future intégration mint ?' />
            <section>
                <Container>
                    <Row className="align-items-start">
                        <Col lg='5' className='mb-4'>
                            <div className="contact__intro">
                                <span className="app__eyebrow">Support créateur</span>
                                <h3>Parlons de votre collection</h3>
                                <p>La messagerie reste front-only pour le moment, mais l’écran est prêt pour brancher une API de contact ou un CRM.</p>

                                <div className="contact__line">
                                    <i className="ri-mail-line"></i>
                                    <span>studio@mintlab.local</span>
                                </div>
                                <div className="contact__line">
                                    <i className="ri-discord-line"></i>
                                    <span>Communauté MintLab</span>
                                </div>
                            </div>
                        </Col>

                        <Col lg='7'>
                            <form className="contact__form" onSubmit={handleSubmit}>
                                <div className="contact__grid">
                                    <div className="form__input">
                                        <label htmlFor="contactName">Nom</label>
                                        <input id="contactName" type="text" placeholder='Votre nom' ref={nameRef} />
                                    </div>
                                    <div className="form__input">
                                        <label htmlFor="contactEmail">Email</label>
                                        <input id="contactEmail" type="email" placeholder='votre@email.com' ref={emailRef} />
                                    </div>
                                </div>
                                <div className="form__input">
                                    <label htmlFor="contactSubject">Sujet</label>
                                    <input id="contactSubject" type="text" placeholder='Création NFT, wallet, marketplace...' ref={subjectRef} />
                                </div>
                                <div className="form__input">
                                    <label htmlFor="contactMessage">Message</label>
                                    <textarea id="contactMessage" rows="7" placeholder='Décrivez votre besoin' ref={messageRef}></textarea>
                                </div>

                                {sent && (
                                    <div className="contact__notice" role="status">
                                        <i className="ri-check-line"></i>
                                        <p>Message préparé côté interface. Il faudra connecter un service d’envoi pour l’expédition réelle.</p>
                                    </div>
                                )}

                                <button className='primary__btn' type="submit">
                                    <i className="ri-send-plane-line"></i>
                                    Envoyer
                                </button>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Contact
