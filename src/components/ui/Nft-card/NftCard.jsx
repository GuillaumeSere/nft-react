import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './nft-card.css'
import Modal from '../Modal/Modal'

const NftCard = (props) => {

    const {title, id, currentBid, creatorImg, imgUrl, creator} = props.item

    const [showModal, setShowModal] = useState(false)

    return (
        <div className="single__nft__card">
            <div className="nft__img">
                <img src={imgUrl} alt="" className='w-100' />
            </div>

            <div className="nft__content">
                <h5 className='nft__title'><Link to={`/market/${id}`}>{title}</Link></h5>

                <div className="creator__info-wrapper">
                    <div className="creator__img">
                        <img src={creatorImg} alt={creator} className='w-100' />
                    </div>
                    <div className="creator__info">
                        <div>
                            <h6>Créateur</h6>
                            <p>{creator}</p>
                        </div>

                        <div>
                            <h6>Prix actuel</h6>
                            <p>{currentBid} ETH</p>
                        </div>
                    </div>
                </div>

                <div className='nft__actions'>
                    <button type="button" className="bid__btn" onClick={() => setShowModal(true)}>
                        <i className="ri-shopping-bag-line"></i>
                        Miser
                    </button>

                    {showModal && <Modal setShowModal={setShowModal} currentBid={currentBid} title={title} />}

                    <span className='history__link'>
                        <Link to='#'>Historique</Link>
                    </span>
                </div>

            </div>
        </div>
    )
}

export default NftCard
