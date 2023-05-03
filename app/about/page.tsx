import Link from 'next/link'
import styles from './About.module.scss'

export default function About() {
  return (
    <div>
      <h2 className={styles.h2}>GET TO KNOW US</h2>
      <h3>Our Commitment</h3>
      <p>
        {`We are dedicated to fulfilling the specific needs of each client and ensuring their complete satisfaction with our work. Our area of expertise is performing renovations and repairs on occupied commercial and residential properties without causing significant disruption to the daily operations and routines of the occupants. Our clients include management firms and owners of commercial, residential and industrial properties.`}
      </p>
      <p>{`Please review our list of Services for more information.`}</p>
      <Link href="/services">OUR SERVICES</Link>
      <h2>OUR PEOPLE</h2>
      <p>
        {`Our company is committed to providing long-term employment opportunities for our staff. We strive to foster a sense of pride and belonging among our team, making Clay Construction Services feel like a second family. We select and retain dedicated team players who prioritize customer satisfaction and positive team dynamics. Our field staff go through comprehensive initial training and ongoing evaluations using advanced technology. We are committed to providing ongoing education and certifications to ensure the highest level of safety and quality for every project.`}
      </p>
      <Link href="/contac">CONTACT US</Link>
      <h2>Clay Geilmann, President</h2>
      <p>
        {`Clay leads all operational activities.  As President, he is responsible for all of planning and building operations including safety, quality, production, estimating, scheduling, and construction.`}
      </p>
      <p>
        {`Clay gained a solid foundation for his successful career through a combination of formal education and hands-on field experience. He attended Weber State University, studying Construction Management in the evenings, while working as a carpenter during the day. Prior to starting the company, he gained over 20 years of experience managing projects across multiple states including Utah, Idaho, California, Pennsylvania, Maryland, Virginia, and Washington D.C.`}
      </p>
      <p>
        {`Clay has extensive experience working on notable projects, including some of the tallest buildings in the country, university campuses, Class A office spaces, healthcare facilities, federal buildings, Fortune 500 campuses, and landmark structures such as the Pentagon and the Rose Bowl Stadium. He has collaborated with prestigious architectural and engineering firms across the country. He believes in continuously learning from industry experts, participating in industry trade associations, and working with the A/E cosmmunity to combine skills, experience, and intelligence to support clients in achieving successful projects.`}
      </p>
      <div>
        <h2>WE ARE HIRING</h2>
        <Link href="/"> APPLY HERE</Link>
        <Link href="/">{`APLICAR AQUI' EN ESPANOL`}</Link>
      </div>
    </div>
  )
}
