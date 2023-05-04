import servicesData from 'public/data.json'
import Card from '../../components/card/Card'

export default function Services(): JSX.Element {
  const { services } = servicesData
 
  return (
    <div>
      <div>PAGE HERO</div>
      <h2>SERVICES</h2>
      <ul>
        {services.map((service, index) => (
          <li key={index}>{service.name}</li>
        ))}
      </ul>
      <div>
        {services.map((service, index) => (
          <Card service={service} key={index} />
        ))}
      </div>
    </div>
  )
}
