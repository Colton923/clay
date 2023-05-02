import styles from './about.module.scss';
import skyline from 'public/images/dcFive3000x1141.jpg'
import businessPeople from 'public/images/business1500x1001.jpg'
import president from 'public/images/clay3047x4571.jpg'
import facade from 'public/images/facade980x245.jpeg'
import Link from 'next/link'
import Image from 'next/image';

export default function About() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.heroWrapper}>
        <Image alt="dc-skyline" src={skyline} width={1200} height={300} />
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.topSection}>
          <div>
            <h2>GET TO KNOW US</h2>
            <span></span>
            <h3>Our Commitment</h3>
            <p>
              {`We are dedicated to fulfilling the specific needs of each client and ensuring their complete satisfaction with our work. Our area of expertise is performing renovations and repairs on occupied commercial and residential properties without causing significant disruption to the daily operations and routines of the occupants. Our clients include management firms and owners of commercial, residential and industrial properties.`}
            </p>
            <p>{`Please review our list of Services for more information.`}</p>
            <Link href="/about">OUR SERVICES</Link>
          </div>
          <div>
            <div></div>
            <Image
              alt="business-people-meeting-business-park"
              src={businessPeople}
              width={500}
              height={333}
            />
          </div>
        </div>
        <div>
          <h2>OUR PEOPLE</h2>
          <span></span>
          <p>
          {`Our company is committed to providing long-term employment opportunities for our staff. We strive to foster a sense of pride and belonging among our team, making Clay Construction Services feel like a second family. We select and retain dedicated team players who prioritize customer satisfaction and positive team dynamics. Our field staff go through comprehensive initial training and ongoing evaluations using advanced technology. We are committed to providing ongoing education and certifications to ensure the highest level of safety and quality for every project.`}
          </p>
          <Link href="/about">OUR SERVICES</Link>
        </div>
        <div>
          <h2>Clay Geilmann, President</h2>
          <span></span>
          <div>
            <Image alt="Clay Geilmann" src={president} width={166} height={250} />
          </div>
          <div>
            <p>
              {`Clay leads all operational activities.  As President, he is responsible for all of planning and building operations including safety, quality, production, estimating, scheduling, and construction.`}
            </p>
            <p>
              {`Clay gained a solid foundation for his successful career through a combination of formal education and hands-on field experience. He attended Weber State University, studying Construction Management in the evenings, while working as a carpenter during the day. Prior to starting the company, he gained over 20 years of experience managing projects across multiple states including Utah, Idaho, California, Pennsylvania, Maryland, Virginia, and Washington D.C.`}
            </p>
            <p>
              {`Clay has extensive experience working on notable projects, including some of the tallest buildings in the country, university campuses, Class A office spaces, healthcare facilities, federal buildings, Fortune 500 campuses, and landmark structures such as the Pentagon and the Rose Bowl Stadium. He has collaborated with prestigious architectural and engineering firms across the country. He believes in continuously learning from industry experts, participating in industry trade associations, and working with the A/E community to combine skills, experience, and intelligence to support clients in achieving successful projects.`}
            </p>
          </div>
          <div>
            <Image alt="building-facade" src={facade} width={980} height={245} />
            <div>
              <h2>WE ARE HIRING</h2>
              <span></span>
              <Link href="/">{`APPLY HERE`}</Link>
              <Link href="/">{`APLICAR AQUI' EN ESPANOL`}</Link>
            </div>
         </div>
        </div>
      </div>
    </div>
  )
}
