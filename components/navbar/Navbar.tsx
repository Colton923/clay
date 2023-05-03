import styles from './Navbar.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import Logo from 'public/images/logo309x78.png'
import PhoneIcon from 'svgs/PhoneIcon'
import EmailIcon from 'svgs/EmailIcon'
import LocationIcon from 'svgs/LocationIcon'
import Hamburger from 'components/Hamburger/Hamburger'

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.banner}>
        <div className={styles.bannerBurger}>
          <Hamburger />
        </div>
        <div className={styles.bannerItem}>
          <div className={styles.bannerItemIcon}>
            <PhoneIcon />
          </div>
          <Link type={'tel'} href={'+17039998254'} className={styles.bannerItemText}>
              (703) 999 8254
          </Link>
        </div>
        <div className={styles.bannerItem}>
          <div className={styles.bannerItemIcon}>
            <LocationIcon />
          </div>
          <h2 className={styles.bannerItemText}>
            Clay Construction Services P.O. Box 4726 Ashburn, VA 20148
          </h2>
        </div>
        <div className={styles.bannerItem}>
          <div className={styles.bannerItemIcon}>
            <EmailIcon />
          </div>
          <Link href={'mailto:info@claycs.com'} className={styles.bannerItemText}>
            info@claycs.com
          </Link>
        </div>
      </div>
      <div className={styles.logoWrapper}>
        <Link href="/" className={styles.logoLink}>
          <Image src={Logo} alt="Logo" className={styles.logoImage} />
        </Link>
      </div>
      <div className={styles.linkWrapper}>
        <Link href={'/about'} className={styles.link}>
          About
        </Link>
        <Link href={'/services'} className={styles.link}>
          Services
        </Link>
        <Link href={'/projects'} className={styles.link}>
          Projects
        </Link>
        <Link href={'/contact'} className={styles.link}>
          Contact
        </Link>
      </div>
    </div>
  )
}

export default Navbar
