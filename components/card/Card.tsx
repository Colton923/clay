import React from 'react'
import styles from './Card.module.scss'
import Image from 'next/image'

type Service = {
  name: string
  imageSrc: string
  // Add any other properties of your service object here
}

type CardProps = {
  service: Service
}

const Card = ({ service }: CardProps) => {
  return (
    <div>
      <Image src={service.imageSrc} alt="placeholder text" width={400} height={300}/>
      <h2>{service.name}</h2>
    </div>
  )
}

export default Card
