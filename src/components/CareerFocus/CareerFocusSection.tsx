import { careerFocusRoles } from '@/appData'
import SectionHeading from '../SectionHeading/SectionHeading'

const CareerFocusSection = () => {
  return (
    <section id="career" className="mx-auto my-14 max-w-[1200px] px-4">
      <SectionHeading
        title="What I'm Looking For"
        subtitle="Focused on growing as a software engineer in environments where correctness, learning, and real-world impact matter."
      />

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="bg-secondary border-border rounded-xl border p-5">
          <h3 className="text-secondary-content mb-4 font-semibold">Roles</h3>
          <div className="space-y-2">
            {careerFocusRoles.map((role) => (
              <div key={role} className="flex items-center gap-2">
                <span className="bg-accent h-1 w-1 flex-shrink-0 rounded-full" />
                <span className="text-neutral text-sm">{role}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-secondary border-border rounded-xl border p-5">
            <h3 className="text-secondary-content mb-2 font-semibold">Where I Thrive</h3>
            <p className="text-neutral text-sm leading-relaxed">
              Teams building financial software, regulatory technology, data-heavy products, trading and investing
              tools, and AI-assisted decision systems. Environments where engineering quality matters and where I can
              grow technically.
            </p>
          </div>

          <div className="bg-secondary border-border rounded-xl border p-5">
            <h3 className="text-secondary-content mb-3 font-semibold">Focus Areas</h3>
            <div className="flex flex-wrap gap-2">
              {['FinTech', 'RegTech', 'AI/ML Engineering', 'Backend Systems', 'Full-Stack', 'Financial Software', 'Data-Heavy Products'].map((area) => (
                <span
                  key={area}
                  className="border-accent/30 text-accent rounded-full border bg-accent/10 px-3 py-1 text-xs font-medium">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CareerFocusSection
