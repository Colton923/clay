import styles from 'styles/App.module.scss'
import Image from 'next/image'
import SkylineImage from 'public/images/skyline980x612.jpg'

export default function Index() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Image
          src={SkylineImage}
          alt="Skyline"
          width={980}
          height={612}
          className={styles.skylineImage}
        />
        <h1 className={styles.title}>
          <span className={styles.titleText}>
            Revitalizing Structures, Restoring Building Integrity, Enhancing Value
          </span>
          <span className={styles.titleSubText}>
            We provide specialty expertise for complex construction challenges in
            commercial, industrial, and residential buildings.
          </span>
        </h1>
      </div>
      <div className={styles.container} style={{ height: '600px', width: '100vw' }}>
        <h2 className={styles.subTitle}>Who are we?</h2>
        <span className={styles.paragraph}>
          Our company is dedicated to improving the value of commercial and
          residential buildings through superior restoration, renovation, and repair
          services. We use our extensive experience to create a tailored plan for
          each project, ensuring that the highest level of quality is achieved to
          increase the value of the property.
        </span>
        <span className={styles.paragraph}>
          We currently service Virginia, Washington D.C. and Maryland.
        </span>
      </div>
      <div className={styles.container} style={{ height: '600px', width: '100vw' }}>
        {/* We're Hiring */}
      </div>
      <div className={styles.container} style={{ height: '600px', width: '100vw' }}>
        {/* Let's Connect */}
      </div>
    </div>
  )
}
