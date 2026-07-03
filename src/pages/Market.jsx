import React, { useMemo, useState } from 'react'
import CommonSection from '../components/ui/Common-section/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import { NFT__DATA } from '../assets/data/data'
import NftCard from '../components/ui/Nft-card/NftCard'
import '../styles/market.css'

const Market = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [priceFilter, setPriceFilter] = useState('all')
    const [sortBy, setSortBy] = useState('featured')

    const data = useMemo(() => {
        const normalizedSearch = searchTerm.trim().toLowerCase()

        return NFT__DATA
            .filter((item) => {
                const matchesSearch =
                    item.title.toLowerCase().includes(normalizedSearch) ||
                    item.creator.toLowerCase().includes(normalizedSearch)

                if (!matchesSearch) return false

                if (priceFilter === 'premium') return item.currentBid >= 6
                if (priceFilter === 'mid') return item.currentBid >= 5.5 && item.currentBid < 6
                if (priceFilter === 'accessible') return item.currentBid < 5.5

                return true
            })
            .sort((a, b) => {
                if (sortBy === 'price-high') return b.currentBid - a.currentBid
                if (sortBy === 'price-low') return a.currentBid - b.currentBid
                if (sortBy === 'name') return a.title.localeCompare(b.title)
                return Number(a.id) - Number(b.id)
            })
    }, [priceFilter, searchTerm, sortBy])

    return (
        <>
            <CommonSection title={'Marketplace'} subtitle={`${data.length} NFTs disponibles pour tester l’expérience d’achat.`} />

            <section className="market__section">
                <Container>
                    <Row>
                        <Col lg='12' className='mb-4'>
                            <div className="market__product__filter">
                                <div className="market__search">
                                    <i className="ri-search-line"></i>
                                    <input
                                        type="search"
                                        placeholder="Rechercher une collection ou un créateur"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>

                                <div className="filter__group">
                                    <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)}>
                                        <option value="all">Tous les prix</option>
                                        <option value="premium">6 ETH et plus</option>
                                        <option value="mid">5.5 à 5.99 ETH</option>
                                        <option value="accessible">Moins de 5.5 ETH</option>
                                    </select>

                                    <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                                        <option value="featured">Mis en avant</option>
                                        <option value="price-high">Prix décroissant</option>
                                        <option value="price-low">Prix croissant</option>
                                        <option value="name">Nom A-Z</option>
                                    </select>
                                </div>
                            </div>
                        </Col>

                        {data.length > 0 ? data.map(item => (
                            <Col lg='3' md='4' sm='6' className='mb-4' key={item.id}>
                                <NftCard item={item} />
                            </Col>
                        )) : (
                            <Col lg='12'>
                                <div className="market__empty">
                                    <i className="ri-emotion-sad-line"></i>
                                    <h4>Aucun NFT trouvé</h4>
                                    <p>Essayez une autre recherche ou retirez un filtre de prix.</p>
                                </div>
                            </Col>
                        )}
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Market
