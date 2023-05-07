import styles from './Projects.module.scss'
import Image from 'next/image'

type Project = {
  name: string
  imageSrc: string
}

export default function Projects() {
  return (
    <div className={styles.pageWrapper}>
      <h1>Projects</h1>
      <div className={styles.pageContentWrapper}>
        <Project
          imageSrc={`/images/projects/office-building1280x853.jpeg`}
          name="Office Buildings"
        />
        <Project
          imageSrc={`/images/projects/hospital1280x961.jpeg`}
          name="Healthcare Facilities"
        />
        <Project
          imageSrc={`/images/projects/parking-garage1280x914.jpeg`}
          name="Parking Garages"
        />
        <Project
          imageSrc={`/images/projects/hospitality1024x683.jpeg`}
          name="Hospitality"
        />
        <Project
          imageSrc={`/images/projects/education1280x853.jpeg`}
          name="Education"
        />
        <Project
          imageSrc={`/images/projects/liturgical1280x992.jpeg`}
          name="Liturgical"
        />
        <Project
          imageSrc={`/images/projects/industrial1280x853.jpeg`}
          name="Industrial Buildings"
        />
        <Project
          imageSrc={`/images/projects/residential-mixed1280x853.jpeg`}
          name="Residential Mixed Use"
        />
        <Project
          imageSrc={`/images/projects/residential-single1280x933.jpeg`}
          name="Residential Single Family"
        />
      </div>
    </div>
  )
}

function Project({ imageSrc, name }: Project) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.imageWrapper}>
        <Image
          src={imageSrc}
          alt={name}
          width={1280}
          height={853}
          sizes="100vw"
          className={styles.image}
        />
      </div>
      <h2 className={styles.projectName}>{name}</h2>
    </div>
  )
}
