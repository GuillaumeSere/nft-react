import React from 'react'
import './common-section.css'
import { Container } from 'reactstrap'

const CommonSection = ({ title, subtitle }) => {
  return (
    <section className='common__section'>
        <Container className='text-center'>
            <h2>{title}</h2>
            {subtitle && <p>{subtitle}</p>}
        </Container>
    </section>
  )
}

export default CommonSection
