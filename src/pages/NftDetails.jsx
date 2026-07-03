import React from 'react'
import CommonSection from '../components/ui/Common-section/CommonSection'
import { Link, useParams } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import { NFT__DATA } from '../assets/data/data'
import LiveAction from '../components/ui/Live-action/LiveAction'
import '../styles/nft-details.css'


const NftDetails = () => {

    const { id } = useParams()

    const singleNft = NFT__DATA.find(item => item.id === id)

    if (!singleNft) {
        return (
            <>
                <CommonSection title="NFT introuvable" subtitle="Cette pièce n’existe pas ou n’est plus disponible dans la collection de démonstration." />
                <section>
                    <Container className="text-center">
                        <Link className="primary__btn" to="/market">
                            <i className="ri-arrow-left-line"></i>
                            Retour marketplace
                        </Link>
                    </Container>
                </section>
            </>
        )
    }

    const detailDesc = singleNft.desc?.toLowerCase().startsWith('lorem')
        ? 'Une pièce numérique issue de la collection de démonstration MintLab. Cette page sert à valider le parcours de consultation, l’identité créateur et l’appel à l’action avant de brancher les données on-chain.'
        : singleNft.desc

    return (
        <>
            <CommonSection title={singleNft.title} subtitle="Détail de la pièce, créateur, prix et action d’achat." />
            <section>
                <Container>
                    <Row>
                        <Col lg='6' md='6' sm='6'>
                            <img src={singleNft.imgUrl} alt={singleNft.title} className='w-100 single__nft__img' />
                        </Col>

                        <Col lg='6' md='6' sm='6'>
                            <div className="single__nft__content">
                                <h2>{singleNft.title}</h2>

                                <div className='d-flex align-items-center justify-content-between mt-4 mb-4'>
                                    <div className='d-flex align-items-center gap-4 single__nft-seen'>
                                        <span>
                                            <i className="ri-eye-line"></i> 234
                                        </span>
                                        <span>
                                            <i className="ri-heart-line"></i> 123
                                        </span>
                                    </div>

                                    <div className='d-flex align-items-center gap-2 single__nft-more'>
                                        <span>
                                            <i className="ri-send-plane-line"></i>
                                        </span>
                                        <span>
                                            <i className="ri-more-2-line"></i>
                                        </span>
                                    </div>
                                </div>


                                <div className="nft__creator d-flex gap-3 align-items-center">
                                    <div className="creator__img">
                                        <img src={singleNft.creatorImg} alt="" className='w-100' />
                                    </div>

                                    <div className="creator__detail">
                                        <p>Créateur</p>
                                        <h6>{singleNft.creator}</h6>
                                    </div>
                                </div>

                                <p className='my-4'>{detailDesc}</p>
                                <button className='singleNft-btn d-flex align-items-center gap-2 w-100'>
                                    <i className="ri-shopping-bag-line"></i>
                                    <Link to='/wallet'>Placer une offre</Link>
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <LiveAction />
        </>
    )
}

export default NftDetails
