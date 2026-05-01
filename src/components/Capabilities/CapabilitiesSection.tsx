import { capabilitiesData } from '@/appData'
import SectionHeading from '../SectionHeading/SectionHeading'

const CapabilitiesSection = () => {
  return (
    <section id="capabilities" className="mx-auto my-14 max-w-[1200px] px-4">
      <SectionHeading
        title="What I Can Build"
        subtitle="A range of software engineering capabilities — from backend logic to full-stack products."
      />

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {capabilitiesData.map((cap) => (
          <div
            key={cap.title}
            className="bg-secondary border-border hover:border-accent/50 group rounded-xl border p-4 transition-colors duration-200">
            <h3 className="text-secondary-content group-hover:text-accent mb-2 text-sm font-semibold transition-colors duration-200">
              {cap.title}
            </h3>
            <p className="text-neutral text-xs leading-relaxed">{cap.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CapabilitiesSection
