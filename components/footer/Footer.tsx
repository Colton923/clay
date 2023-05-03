import styles from './Footer.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import logo from 'public/images/logo309x78.png'
import emailIcon from 'public/images/envelope-solid.svg'
import locationIcon from 'public/images/location-dot-solid.svg'
import phoneIcon from 'public/images/mobile-screen-solid.svg'

const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerTopSection}>
        <div className={styles.logo}>
          <Image src={logo} alt="clay-construction-logo" 
          />
        </div>
        <div className={styles.navigationWrapper}>
          <p>NAVIGATION</p>
          <div className={styles.line}></div>
          <div className={styles.navLinks}>
            <Link href="/">HOME</Link>
            <Link href="/about">ABOUT</Link>
            <Link href="/services">SERVICES</Link>
            <Link href="/projects">PROJECTS</Link>
            <Link href="/contact">CONTACT</Link>
          </div>
        </div>
        <div className={styles.contactInfoWrapper}>
          <p>GET IN TOUCH</p>
          <div className={styles.line}></div>
          <div className={styles.contactItemWrapper}>
            <Image
              src={emailIcon}
              alt="email icon"
              width={35}
              height={35}
              className={styles.contactItemIcon}
            />
            <span>info@claycs.com</span>
          </div>
          <div className={styles.contactItemWrapper}>
            <Image
              src={phoneIcon}
              alt="phone icon"
              width={35}
              height={35}
              className={styles.contactItemIcon}
            />
            <span>(703) 999 8254</span>
          </div>
          <div className={styles.contactItemWrapper}>
            <Image
              src={locationIcon}
              alt="location icon"
              width={35}
              height={35}
              className={styles.contactItemIcon}
            />
            <div>
            <span>Clay Construction Services</span>
            <span>P.O. Box 4726</span>
            <span> Ashburn, VA 20148</span>
            </div>
            
          </div>
        </div>
      </div>
      <div className={styles.footerBottomSection}>
        <small>
        {`Copyright © 2023 CLAY CONSTRUCTION SERVICES. All rights reserved.`}
        </small>
      </div>
      
    </footer>
  )
}

export default Footer
