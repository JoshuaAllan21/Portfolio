import { serviceData } from '../../appData'
import SectionHeading from '../SectionHeading/SectionHeading'
import ServiceCard from './ServiceCard'
import { StaticImageData } from 'next/image'

const ServiceSection = () => {
  return (
    <section id="education" className="my-14">
      <SectionHeading
        title="Education"
        subtitle="A selection of modules from my BSc Computer Science degree at the University of East Anglia (UEA)."
      />

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:mt-[3.75rem]">
        {serviceData.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon as string | StaticImageData} 
            title={service.title}
            shortDescription={service.shortDescription}
          />
        ))}
      </div>
    </section>
  )
}

export default ServiceSection

