import Image, { StaticImageData } from 'next/image'

interface ServiceCardTypes {
  icon: string | StaticImageData
  title: string
  shortDescription: string
}

const ServiceCard: React.FC<ServiceCardTypes> = ({ title, shortDescription, icon }) => {
  return (
    <div className="bg-secondary border-border flex flex-col items-center rounded-[10px] border p-3 shadow-sm">
      <Image src={icon} alt={title} className="my-1 w-10 h-10" />
      <h5 className="text-accent mt-1 mb-3 text-center text-sm font-semibold">{title}</h5>
      <div className="bg-primary rounded-xl p-2 w-full">
        <p className="text-primary-content text-center text-xs font-normal">{shortDescription}</p>
      </div>
    </div>
  )
}

export default ServiceCard

