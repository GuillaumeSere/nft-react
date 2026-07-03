import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import CommonSection from '../components/ui/Common-section/CommonSection'
import { NFT__DATA } from '../assets/data/data'
import NftCard from '../components/ui/Nft-card/NftCard'
import ava01 from '../assets/images/ava-01.png'
import '../styles/profile.css'

const SellerProfile = () => {
  return (
    <>
      <CommonSection title="Profil créateur" subtitle="Un aperçu de profil prêt à recevoir les données wallet et collections réelles." />
      <section>
        <Container>
          <div className="profile__hero">
            <img src={ava01} alt="Créateur MintLab" />
            <div>
              <span className="app__eyebrow">Créateur vérifié</span>
              <h3>MintLab Studio</h3>
              <p>Prototype de profil pour présenter les collections, les ventes et les statistiques d’un créateur.</p>
            </div>
            <div className="profile__stats">
              <div>
                <strong>25</strong>
                <span>NFTs</span>
              </div>
              <div>
                <strong>142 ETH</strong>
                <span>Volume</span>
              </div>
              <div>
                <strong>7%</strong>
                <span>Royalties</span>
              </div>
            </div>
          </div>

          <Row>
            {NFT__DATA.slice(0, 4).map((item) => (
              <Col lg='3' md='4' sm='6' className='mb-4' key={item.id}>
                <NftCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  )
}

export default SellerProfile
