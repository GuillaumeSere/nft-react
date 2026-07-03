import React from 'react'
import './modal.css'

const Modal = ({ setShowModal, currentBid = 5.89, title = 'NFT' }) => {
    const serviceFee = 0.02
    const totalBid = Number(currentBid + serviceFee).toFixed(2)

    return (
        <div className='modal__wrapper' onClick={() => setShowModal(false)}>
            <div className="single__modal" onClick={(e) => e.stopPropagation()}>
                <button className='close__modal' onClick={() => setShowModal(false)} aria-label="Fermer">
                    <i className="ri-close-line"></i>
                </button>

                <h6 className='text-center text-light'>Miser sur {title}</h6>
                <p className='text-center text-light'>
                    Votre offre minimale est de <span className='money'>{currentBid} ETH</span>
                </p>

                <div className="input__item mb-4">
                    <input type="number" placeholder={`${currentBid} ETH`} />
                </div>

                <div className="input__item mb-3">
                    <h6>Quantité</h6>
                    <input type="number" placeholder='1' min="1" />
                </div>

                <div className='d-flex align-items-center justify-content-between'>
                    <p>Offre minimale</p>
                    <span className='money'>{currentBid} ETH</span>
                </div>

                <div className='d-flex align-items-center justify-content-between'>
                    <p>Frais service</p>
                    <span className='money'>{serviceFee} ETH</span>
                </div>

                <div className='d-flex align-items-center justify-content-between'>
                    <p>Total estimé</p>
                    <span className='money'>{totalBid} ETH</span>
                </div>

                <button className="place__bid-btn">
                    Valider l'offre
                </button>

            </div>
        </div>
    )
}

export default Modal
