import React from 'react'
import './seller.css'
import { Container, Row, Col } from 'reactstrap'
import { SELLER__DATA } from '../../../assets/data/data'

const SellerSection = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg='12' className='mb-5'>
                        <div className="section__heading">
                            <div className="seller__section-title">
                                <span className="app__eyebrow">Communauté</span>
                                <h3>Créateurs actifs</h3>
                                <p>Une base de profils prête à évoluer vers de vrais comptes wallet et collections vérifiées.</p>
                            </div>
                        </div>
                    </Col>

                    {SELLER__DATA.map(item => (
                        <Col lg='2' md='3' sm='4' xs='6' key={item.id} className='mb-4'>
                            <div className="single__seller-card d-flex align-items-center gap-3">
                                <div className="seller__img">
                                    <img src={item.sellerImg} alt="" className='w-100' />
                                </div>

                                <div className="seller__content">
                                    <h6>{item.sellerName}</h6>
                                    <h6>{item.currentBid} ETH</h6>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export default SellerSection
