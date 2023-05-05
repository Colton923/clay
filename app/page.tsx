import styles from 'styles/App.module.scss'
import Image from 'next/image'

export default function Index() {
  return (
    <div className={styles.contentWrapper}>
      <h2 className={styles.somethingCool}>Revitalizing Structures,</h2>
      <h2 className={styles.somethingCool}>Restoring Building Integrity, </h2>
      <h2 className={styles.somethingCool}>Enhancing Value.</h2>
      <p style={{color: 'white'}}>
        We provide specialty expertise for complex construction challenges in
        commercial, industrial, and residential buildings.
      </p>
      <h2>Who are we?</h2>
      <p>
        Our company is dedicated to improving the value of commercial and
        residential buildings through superior restoration, renovation, and repair
        services. We use our extensive experience to create a tailored plan for
        each project, ensuring that the highest level of quality is achieved to
        increase the value of the property.
      </p>
      <p>
        We currently service Virginia, Washington D.C. and Maryland.
      </p>
    </div>
  )
}
