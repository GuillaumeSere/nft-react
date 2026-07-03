import React, { useEffect, useMemo, useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import CommonSection from '../components/ui/Common-section/CommonSection'
import img04 from '../assets/images/img-04.jpg'
import ava04 from '../assets/images/ava-04.png'
import '../styles/create-item.css'

const initialForm = {
    title: 'Genesis Signal #01',
    price: '1.25',
    minimumBid: '0.80',
    royalties: '7',
    collection: 'MintLab Genesis',
    category: 'Art digital',
    blockchain: 'Ethereum',
    saleType: 'auction',
    startDate: '',
    expirationDate: '',
    description: 'Une pièce digitale préparée dans MintLab, prête à recevoir ses métadonnées et son smart contract.',
    properties: 'neon, 3D, genesis',
}

const Create = () => {
    const [form, setForm] = useState(initialForm)
    const [localPreview, setLocalPreview] = useState('')
    const [fileName, setFileName] = useState('img-04.jpg')
    const [notice, setNotice] = useState('')

    useEffect(() => {
        return () => {
            if (localPreview) {
                URL.revokeObjectURL(localPreview)
            }
        }
    }, [localPreview])

    const previewImage = localPreview || img04

    const completion = useMemo(() => {
        const requiredFields = [
            form.title,
            form.price,
            form.minimumBid,
            form.collection,
            form.category,
            form.blockchain,
            form.description,
        ]

        const filledFields = requiredFields.filter(Boolean).length
        return Math.round((filledFields / requiredFields.length) * 100)
    }, [form])

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm((current) => ({ ...current, [name]: value }))
        setNotice('')
    }

    const handleFileChange = (e) => {
        const file = e.target.files?.[0]
        if (!file) return

        if (localPreview) {
            URL.revokeObjectURL(localPreview)
        }

        setLocalPreview(URL.createObjectURL(file))
        setFileName(file.name)
        setNotice('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setNotice('Draft prêt côté interface. Il restera à connecter le wallet, IPFS et le smart contract pour publier réellement ce NFT.')
    }

    return (
        <>
            <CommonSection
                title='Créer un NFT'
                subtitle='Un studio de préparation clair, interactif et prêt pour la future intégration blockchain.'
            />

            <section className="create__studio">
                <Container>
                    <div className="create__statusbar">
                        <div>
                            <span className="app__eyebrow">Draft NFT</span>
                            <h3>Préparez votre mint</h3>
                            <p>Remplissez les métadonnées, contrôlez le rendu et gardez une interface honnête tant que la publication blockchain n’est pas branchée.</p>
                        </div>
                        <div className="create__progress" aria-label={`Draft complété à ${completion}%`}>
                            <strong>{completion}%</strong>
                            <span>complété</span>
                        </div>
                    </div>

                    <Row>
                        <Col lg='5' className='mb-4'>
                            <div className="create__preview" aria-label="Aperçu du NFT">
                                <div className="preview__asset">
                                    <img src={previewImage} alt={form.title} />
                                    <span className="preview__badge">{form.saleType === 'auction' ? 'Enchère' : 'Prix fixe'}</span>
                                </div>

                                <div className="preview__content">
                                    <div>
                                        <p className="preview__label">Aperçu collection</p>
                                        <h4>{form.title || 'Titre du NFT'}</h4>
                                    </div>

                                    <div className="preview__creator">
                                        <img src={ava04} alt="Créateur MintLab" />
                                        <div>
                                            <span>Créateur</span>
                                            <strong>MintLab Studio</strong>
                                        </div>
                                    </div>

                                    <p>{form.description || 'La description de votre NFT apparaitra ici.'}</p>

                                    <div className="preview__meta">
                                        <div>
                                            <span>Prix</span>
                                            <strong>{form.price || '0'} ETH</strong>
                                        </div>
                                        <div>
                                            <span>Royalties</span>
                                            <strong>{form.royalties || '0'}%</strong>
                                        </div>
                                        <div>
                                            <span>Réseau</span>
                                            <strong>{form.blockchain || 'À choisir'}</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col lg='7'>
                            <form className="create__form" onSubmit={handleSubmit}>
                                <div className="form__section">
                                    <div className="form__section-title">
                                        <span>01</span>
                                        <h4>Asset</h4>
                                    </div>

                                    <label className="upload__dropzone" htmlFor="assetFile">
                                        <i className="ri-upload-cloud-2-line"></i>
                                        <strong>{fileName}</strong>
                                        <small>PNG, JPG ou GIF. Aperçu local instantané.</small>
                                        <input id="assetFile" type="file" accept="image/*" onChange={handleFileChange} />
                                    </label>
                                </div>

                                <div className="form__grid">
                                    <div className="form__input">
                                        <label htmlFor="title">Titre</label>
                                        <input id="title" name="title" type="text" value={form.title} onChange={handleChange} placeholder='Ex: Genesis Signal #01' />
                                    </div>

                                    <div className="form__input">
                                        <label htmlFor="collection">Collection</label>
                                        <input id="collection" name="collection" type="text" value={form.collection} onChange={handleChange} placeholder='Ex: MintLab Genesis' />
                                    </div>

                                    <div className="form__input">
                                        <label htmlFor="price">Prix</label>
                                        <input id="price" name="price" type="number" min="0" step="0.01" value={form.price} onChange={handleChange} placeholder='1.25' />
                                    </div>

                                    <div className="form__input">
                                        <label htmlFor="minimumBid">Mise minimale</label>
                                        <input id="minimumBid" name="minimumBid" type="number" min="0" step="0.01" value={form.minimumBid} onChange={handleChange} placeholder='0.80' />
                                    </div>

                                    <div className="form__input">
                                        <label htmlFor="royalties">Royalties (%)</label>
                                        <input id="royalties" name="royalties" type="number" min="0" max="50" value={form.royalties} onChange={handleChange} placeholder='7' />
                                    </div>

                                    <div className="form__input">
                                        <label htmlFor="category">Catégorie</label>
                                        <select id="category" name="category" value={form.category} onChange={handleChange}>
                                            <option>Art digital</option>
                                            <option>Musique</option>
                                            <option>Gaming</option>
                                            <option>Photo</option>
                                            <option>Collectible</option>
                                        </select>
                                    </div>

                                    <div className="form__input">
                                        <label htmlFor="blockchain">Blockchain</label>
                                        <select id="blockchain" name="blockchain" value={form.blockchain} onChange={handleChange}>
                                            <option>Ethereum</option>
                                            <option>Polygon</option>
                                            <option>Solana</option>
                                            <option>Base</option>
                                        </select>
                                    </div>

                                    <div className="form__input">
                                        <label htmlFor="saleType">Type de vente</label>
                                        <select id="saleType" name="saleType" value={form.saleType} onChange={handleChange}>
                                            <option value="auction">Enchère</option>
                                            <option value="fixed">Prix fixe</option>
                                        </select>
                                    </div>

                                    <div className="form__input">
                                        <label htmlFor="startDate">Début</label>
                                        <input id="startDate" name="startDate" type="date" value={form.startDate} onChange={handleChange} />
                                    </div>

                                    <div className="form__input">
                                        <label htmlFor="expirationDate">Fin</label>
                                        <input id="expirationDate" name="expirationDate" type="date" value={form.expirationDate} onChange={handleChange} />
                                    </div>
                                </div>

                                <div className="form__input">
                                    <label htmlFor="description">Description</label>
                                    <textarea id="description" name="description" rows="5" value={form.description} onChange={handleChange} placeholder='Décrivez l’histoire, les droits et la rareté.'></textarea>
                                </div>

                                <div className="form__input">
                                    <label htmlFor="properties">Propriétés</label>
                                    <input id="properties" name="properties" type="text" value={form.properties} onChange={handleChange} placeholder='Ex: neon, 3D, rare' />
                                </div>

                                {notice && (
                                    <div className="create__notice" role="status">
                                        <i className="ri-information-line"></i>
                                        <p>{notice}</p>
                                    </div>
                                )}

                                <div className="create__actions">
                                    <button type="submit" className="primary__btn">
                                        <i className="ri-save-3-line"></i>
                                        Enregistrer le draft
                                    </button>
                                    <button type="button" className="ghost__btn" onClick={() => setNotice('Aperçu mis à jour. Le bouton de mint réel sera ajouté avec la connexion wallet.')}>
                                        <i className="ri-eye-line"></i>
                                        Prévisualiser
                                    </button>
                                </div>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Create
