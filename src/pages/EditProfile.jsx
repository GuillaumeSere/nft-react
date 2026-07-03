import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import CommonSection from '../components/ui/Common-section/CommonSection'
import ava01 from '../assets/images/ava-01.png'
import '../styles/profile.css'

const EditProfile = () => {
  const [saved, setSaved] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSaved(true)
  }

  return (
    <>
      <CommonSection title="Modifier profil" subtitle="Un formulaire front-only pour préparer l’édition du compte créateur." />
      <section>
        <Container>
          <Row>
            <Col lg='4' className='mb-4'>
              <div className="profile__side">
                <img src={ava01} alt="Avatar MintLab" />
                <h3>MintLab Studio</h3>
                <p>Les informations seront plus tard synchronisées avec le wallet connecté.</p>
              </div>
            </Col>
            <Col lg='8'>
              <form className="profile__form" onSubmit={handleSubmit}>
                <div className="profile__grid">
                  <div className="profile__input">
                    <label htmlFor="displayName">Nom public</label>
                    <input id="displayName" defaultValue="MintLab Studio" />
                  </div>
                  <div className="profile__input">
                    <label htmlFor="username">Identifiant</label>
                    <input id="username" defaultValue="@mintlab" />
                  </div>
                </div>
                <div className="profile__input">
                  <label htmlFor="bio">Bio</label>
                  <textarea id="bio" rows="6" defaultValue="Créateur digital préparant ses collections dans MintLab." />
                </div>
                <div className="profile__grid">
                  <div className="profile__input">
                    <label htmlFor="website">Site web</label>
                    <input id="website" defaultValue="https://mintlab.local" />
                  </div>
                  <div className="profile__input">
                    <label htmlFor="royalties">Royalties par défaut</label>
                    <input id="royalties" type="number" defaultValue="7" />
                  </div>
                </div>

                {saved && (
                  <div className="profile__notice" role="status">
                    <i className="ri-check-line"></i>
                    <p>Profil sauvegardé côté interface. Il reste à connecter une API ou un stockage.</p>
                  </div>
                )}

                <button type="submit" className="primary__btn">
                  <i className="ri-save-3-line"></i>
                  Enregistrer
                </button>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default EditProfile
