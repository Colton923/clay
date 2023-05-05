import React from 'react'
import styles from './Card.module.scss'
import Image from 'next/image'
import { CardProps } from 'app/services/page'

const Card = ({ service }: CardProps) => {
  return (
    <div className={styles.card} id={`${service.id}`}>
      <h2 className={styles.card_h2}>{service.name}</h2>
      <div className={styles.cardImageWrapper}>
        <Image
          src={service.imageSrc}
          alt="placeholder text"
          width={400}
          height={300}
        />
      </div>
      <ul>
        {service.details.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Card
