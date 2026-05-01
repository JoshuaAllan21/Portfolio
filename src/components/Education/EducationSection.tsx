import { educationModules } from '@/appData'
import SectionHeading from '../SectionHeading/SectionHeading'

const groupColors: Record<string, string> = {
  'AI & Data': 'text-accent border-accent/30',
  'Software Engineering': 'text-secondary-content border-secondary-content/30',
  'Systems & Security': 'text-tertiary-content border-tertiary-content/30',
  'Web & Product': 'text-purple-400 border-purple-400/30',
  'Maths & Foundations': 'text-orange-400 border-orange-400/30',
}

const groups = ['AI & Data', 'Software Engineering', 'Systems & Security', 'Web & Product', 'Maths & Foundations']

const EducationSection = () => {
  const modulesByGroup = groups.reduce<Record<string, typeof educationModules>>(
    (acc, group) => ({
      ...acc,
      [group]: educationModules.filter((m) => m.group === group),
    }),
    {},
  )

  return (
    <section id="education" className="mx-auto my-14 max-w-[1200px] px-4">
      {/* Degree header */}
      <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div>
          <SectionHeading
            title="Education"
            subtitle="BSc Computer Science — First-Class Honours, University of East Anglia, 2025."
          />
        </div>
        <div className="bg-secondary border-border rounded-xl border p-5">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-secondary-content font-bold">University of East Anglia</p>
              <p className="text-neutral mt-0.5 text-sm">BSc Computer Science</p>
              <p className="text-accent mt-0.5 text-sm font-semibold">First-Class Honours</p>
              <p className="text-tertiary-content text-xs">Graduated 2025</p>
            </div>
            <div className="border-accent/30 bg-accent/10 rounded-xl border px-4 py-2 text-center">
              <p className="text-accent text-xl font-bold">86.3%</p>
              <p className="text-tertiary-content text-[10px]">Dissertation</p>
            </div>
          </div>
        </div>
      </div>

      {/* Module groups */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => {
          const mods = modulesByGroup[group] ?? []
          if (mods.length === 0) return null
          const colorClass = groupColors[group] ?? 'text-neutral border-border'
          return (
            <div key={group} className={`bg-secondary border-border rounded-xl border p-4`}>
              <p className={`mb-3 border-b pb-2 text-xs font-semibold uppercase tracking-wider ${colorClass}`}>
                {group}
              </p>
              <ul className="space-y-2">
                {mods.map((mod) => (
                  <li key={mod.title} className="flex items-start justify-between gap-2">
                    <span className="text-neutral text-xs leading-relaxed">{mod.title}</span>
                    <span className="text-tertiary-content flex-shrink-0 text-[10px]">{mod.year}</span>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default EducationSection
