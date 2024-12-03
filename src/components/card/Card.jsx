import React from 'react'
import './Card.css'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { FiGithub } from 'react-icons/fi'
const Card = ({title,description,imageUrl,sourceCode,liveLink}) => {
  return (
    <div className={'landscape-card card'}>
        <section className="image-section">
            <img src={imageUrl} alt="..." />
            <section className="card-actions">
                <a className='all-centered' title='source code' target='_blank' href={sourceCode}>
                <FiGithub />
                </a>
                <a className='all-centered' title='live link' target='_blank' href={liveLink}>
                <HiOutlineExternalLink />
                </a>
            </section>
        </section>
        
        <section className="card-info-section">
            <h1>{title}</h1>
            <p>{description}</p>
           
            
        </section>
    </div>
  )
}

export default Card