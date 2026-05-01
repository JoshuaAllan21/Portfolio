import { technicalDepthData } from '@/appData'
import SectionHeading from '../SectionHeading/SectionHeading'

const TechnicalDepthSection = () => {
  return (
    <section id="depth" className="mx-auto my-14 max-w-[1200px] px-4">
      <SectionHeading
        title="Technical Depth"
        subtitle="Engineering areas I work across — from regulatory backend logic to full-stack products and AI/ML systems."
      />

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {technicalDepthData.map((card) => (
          <div
            key={card.id}
            className="bg-secondary border-border hover:-translate-y-0.5 flex flex-col rounded-xl border p-5 transition-all duration-200 hover:shadow-lg"
            style={{ borderTopColor: card.accentColor, borderTopWidth: '3px' }}>
            <div className="mb-3 flex items-center gap-2">
              <span
                className="rounded px-1.5 py-0.5 font-mono text-[10px] font-bold"
                style={{ backgroundColor: `${card.accentColor}20`, color: card.accentColor }}>
                {card.code}
              </span>
              <h3 className="text-primary-content text-sm font-bold">{card.title}</h3>
            </div>
            <p className="text-neutral mb-4 text-xs leading-relaxed">{card.description}</p>
            <div className="mt-auto flex flex-wrap gap-1.5">
              {card.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-primary border-border text-tertiary-content hover:border-accent/40 rounded-md border px-2 py-0.5 text-[10px] transition-colors duration-150">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechnicalDepthSection
