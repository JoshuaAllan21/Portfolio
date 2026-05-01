import { experienceData } from '@/appData'
import SectionHeading from '../SectionHeading/SectionHeading'

const statusColors = {
  current: 'bg-accent/20 text-accent border-accent/30',
  previous: 'bg-secondary text-tertiary-content border-border',
}

const ExperienceSection = () => {
  return (
    <section id="experience" className="mx-auto my-14 max-w-[1200px] px-4">
      <SectionHeading
        title="Professional Experience"
        subtitle="Software engineering roles in regulatory technology, financial systems, and data-critical software development."
      />

      <div className="relative mt-10 space-y-6">
        {/* Vertical timeline line */}
        <div className="border-border absolute top-0 bottom-0 left-6 hidden w-px border-l border-dashed md:block" />

        {experienceData.map((exp) => (
          <div key={exp.company} className="relative flex flex-col gap-4 md:flex-row md:gap-8">
            {/* Company badge */}
            <div className="relative z-10 flex-shrink-0">
              <div className="border-border bg-secondary flex h-12 w-12 items-center justify-center rounded-xl border shadow-sm">
                <span className="text-accent text-xs font-bold">{exp.companyInitials}</span>
              </div>
            </div>

            {/* Card */}
            <div className="bg-secondary border-border flex-1 rounded-xl border p-5 md:p-6">
              {/* Header */}
              <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-secondary-content text-base font-bold">{exp.company}</h3>
                    <span
                      className={`rounded-full border px-2 py-0.5 text-xs font-medium ${statusColors[exp.status]}`}>
                      {exp.status === 'current' ? 'Current' : 'Previous'}
                    </span>
                  </div>
                  <p className="text-neutral mt-0.5 text-sm">{exp.role}</p>
                </div>
                <p className="text-tertiary-content text-sm font-medium">{exp.duration}</p>
              </div>

              <p className="text-neutral mb-4 text-sm leading-relaxed">{exp.summary}</p>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {/* Responsibilities */}
                <div>
                  <p className="text-primary-content mb-2 text-[10px] font-semibold uppercase tracking-wider">
                    Key Responsibilities
                  </p>
                  <ul className="space-y-1.5">
                    {exp.responsibilities.map((r) => (
                      <li key={r} className="text-neutral flex items-start gap-2 text-xs leading-relaxed">
                        <span className="bg-accent mt-1.5 h-1 w-1 flex-shrink-0 rounded-full" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What this demonstrates */}
                {exp.demonstrates && exp.demonstrates.length > 0 && (
                  <div>
                    <p className="text-primary-content mb-2 text-[10px] font-semibold uppercase tracking-wider">
                      What This Demonstrates
                    </p>
                    <ul className="space-y-1.5">
                      {exp.demonstrates.map((d) => (
                        <li key={d} className="text-neutral flex items-start gap-2 text-xs leading-relaxed">
                          <span className="bg-tertiary-content mt-1.5 h-1 w-1 flex-shrink-0 rounded-full" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Tech */}
              <div className="mt-4 border-t border-border pt-4">
                <p className="text-primary-content mb-2 text-[10px] font-semibold uppercase tracking-wider">
                  Engineering Environment
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-primary border-border text-tertiary-content rounded-md border px-2 py-0.5 text-[10px]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection
