import servicesData from 'public/data.json'
import Card from '../../components/card/Card'
import styles from './Services.module.scss'

type Service = {
  id: number
  name: string
  details: string[]
  imageSrc: string
}

export type CardProps = {
  service: Service
}

export default function Services(): JSX.Element {
  const { commercial } = servicesData.services[0]
  const { residential } = servicesData.services[1]

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.pageContentWrapper}>
        <h1>
          <span className={styles.h1Span}>Explore</span> Our Services
        </h1>
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
        <div className={styles.cardGrids}>
          <div>
            <h2 className={styles.grid_h2}>COMMERCIAL</h2>
            <div className={styles.serviceTypeGrid}>
              {commercial?.map((service) => (
                <Card service={service} key={service.id} />
              ))}
            </div>
          </div>
          <div>
            <h2 className={styles.grid_h2}>RESIDENTIAL</h2>
            <div className={styles.serviceTypeGrid}>
              {residential?.map((service) => (
                <Card service={service} key={service.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
