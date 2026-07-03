import React from 'react'
import './live-action.css'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import NftCard from '../Nft-card/NftCard'
import { NFT__DATA } from '../../../assets/data/data.js'

const LiveAction = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg='12' className='mb-5'>
                        <div className="section__heading">
                            <div>
                                <span className="app__eyebrow">Marketplace</span>
                                <h3>Drops en cours</h3>
                                <p>Un aperçu des collections à surveiller pendant que le studio de création prend forme.</p>
                            </div>
                            <Link className="ghost__btn" to='/market'>
                                <i className="ri-arrow-right-line"></i>
                                Tout voir
                            </Link>
                        </div>
                    </Col>

                    {NFT__DATA.slice(0, 4).map((item) => (
                        <Col lg='3' md='4' sm='6' className='mb-4' key={item.id}>
                            <NftCard key={item.id} item={item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export default LiveAction
