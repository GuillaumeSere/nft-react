import React from 'react'
import CommonSection from '../components/ui/Common-section/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import '../styles/wallet.css'

const wallet__data = [
    {
        title: 'MetaMask',
        desc: 'Connexion EVM prévue pour signer le mint, lire l’adresse et préparer la transaction.',
        icon: 'ri-wallet-3-line',
        status: 'Bientôt',
    },
    {
        title: 'WalletConnect',
        desc: 'Support mobile et multi-wallet pour faciliter la publication depuis n’importe quel appareil.',
        icon: 'ri-qr-code-line',
        status: 'Roadmap',
    },
    {
        title: 'Stockage IPFS',
        desc: 'Étape nécessaire pour héberger asset et métadonnées avant l’appel au smart contract.',
        icon: 'ri-cloud-line',
        status: 'À brancher',
    },
    {
        title: 'Smart contract',
        desc: 'La couche mint permettra de publier réellement le NFT après validation du draft.',
        icon: 'ri-braces-line',
        status: 'À brancher',
    },
]

const Wallet = () => {
    return (
        <>
            <CommonSection title='Wallet' subtitle='La page prépare les futures connexions nécessaires pour rendre le mint vraiment fonctionnel.' />
            <section>
                <Container>
                    <Row>
                        <Col lg='8' className='mb-5'>
                            <div className="wallet__intro">
                                <span className="app__eyebrow">Connexion</span>
                                <h3>Relier le studio à la blockchain</h3>
                                <p>Pour l’instant, MintLab gère la création côté interface. La prochaine étape technique sera de connecter wallet, stockage décentralisé et smart contract.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="wallet__grid">
                        {wallet__data.map((item,index) => (
                            <Col lg='3' md='4' sm='6' className='mb-4' key={index}>
                                <div className="wallet__item">
                                    <span>
                                        <i className={item.icon}></i>
                                    </span>
                                    <strong>{item.status}</strong>
                                    <h5>{item.title}</h5>
                                    <p>{item.desc}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Wallet
