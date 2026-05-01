import { buildQualityPrinciples } from '@/appData'
import SectionHeading from '../SectionHeading/SectionHeading'

const BuildQualitySection = () => {
  return (
    <section id="quality" className="mx-auto my-14 max-w-[1200px] px-4">
      <SectionHeading
        title="How I Build Software"
        subtitle="Principles that shape how I approach engineering — from the first commit to the final deployment."
      />

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {buildQualityPrinciples.map((principle) => (
          <div
            key={principle.number}
            className="bg-secondary border-border hover:-translate-y-0.5 rounded-xl border p-5 transition-all duration-200">
            <div className="mb-2 flex items-center gap-3">
              <span className="text-accent font-mono text-xs font-bold">{principle.number}</span>
              <h3 className="text-primary-content font-semibold">{principle.title}</h3>
            </div>
            <p className="text-neutral text-xs leading-relaxed">{principle.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BuildQualitySection
