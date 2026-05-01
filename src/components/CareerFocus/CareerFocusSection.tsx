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
          <h3 className="text-secondary-content mb-4 font-semibold">Roles I&apos;m Interested In</h3>
          <div className="space-y-2">
            {careerFocusRoles.map((role) => (
              <div key={role} className="flex items-center gap-2">
                <span className="text-accent flex-shrink-0 text-sm">▸</span>
                <span className="text-neutral text-sm">{role}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-secondary border-border rounded-xl border p-5">
            <h3 className="text-secondary-content mb-2 font-semibold">Where I Thrive</h3>
            <p className="text-neutral text-sm leading-relaxed">
              I&apos;m especially interested in fintech, regtech, AI/ML, backend engineering, and full-stack product
              teams. I&apos;m particularly drawn to teams building financial software, regulatory technology, data-heavy
              products, trading and investing tools, and AI-assisted decision systems.
            </p>
          </div>

          <div className="bg-secondary border-border rounded-xl border p-5">
            <h3 className="text-secondary-content mb-3 font-semibold">Areas of Focus</h3>
            <div className="flex flex-wrap gap-2">
              {[
                'FinTech',
                'RegTech',
                'AI/ML Engineering',
                'Backend Systems',
                'Full-Stack Development',
                'Financial Software',
                'Data-Heavy Products',
                'Investing & Trading Tools',
              ].map((area) => (
                <span
                  key={area}
                  className="border-accent/30 text-accent rounded-full border bg-accent/10 px-3 py-1 text-xs font-medium">
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-secondary border-border rounded-xl border p-5">
            <h3 className="text-secondary-content mb-2 font-semibold">Contact & Availability</h3>
            <p className="text-neutral text-sm leading-relaxed">
              Currently employed at Suade Labs and open to the right opportunity. Get in touch via the contact section
              below or connect on LinkedIn.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CareerFocusSection
