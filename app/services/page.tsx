'use client'
import servicesData from 'public/data.json'
import Card from '../../components/card/Card'
import heroImage from 'public/images/masonryBanner.jpeg'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Services.module.scss'

type Service = {
  id: number
  name: string
  details: string[]
  imageSrc: string
  // Add any other properties of your service object here
}

export type CardProps = {
  service: Service
}

export default function Services(): JSX.Element {
  const { commercial } = servicesData.services[0]
  const { residential } = servicesData.services[1]

  console.log(commercial)
  console.log(residential)
  return (
    <div className={styles.pageWrapper}>
      {/* <div className={styles.heroWrapper}>
        <Image alt="masonry" src={heroImage} placeholder="blur" sizes="100vw" fill />
        <div className={styles.pageTitle}>
          <h1>SERVICES</h1>
        </div>
      </div> */}
      <div className={styles.pageContentWrapper}>
        <div className={styles.topSectionWrapper}>
          <div className={styles.serviceTypeWrapper}>
            <h2>Commercial</h2>
            <ul className={styles.topSectionList}>
              {commercial?.map((service) => (
                <li key={service.id}>
                  <a href={`#${service.id}`}>{service.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.serviceTypeWrapper}>
          <h2>Residential</h2>
            <ul className={styles.topSectionList}>
            {residential?.map((service) => (
              <li key={service.id}>
                <a href={`#${service.id}`}>{service.name}</a>
              </li>
            ))}
          </ul>
          </div>
          
        </div>
        <div className={styles.cardGrid}>
          {/* {services.map((service) => (
            <Card service={service} key={service.id} />
          ))} */}
        </div>
      </div>
    </div>
  )
}
