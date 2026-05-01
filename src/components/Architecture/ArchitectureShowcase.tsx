import { architectureShowcases } from '@/appData'
import { ArchitectureStage } from '@/lib/types'
import SectionHeading from '../SectionHeading/SectionHeading'

interface StepFlowProps {
  stages: ArchitectureStage[]
  accentColor: string
}

const StepFlow = ({ stages, accentColor }: StepFlowProps) => (
  <div className="relative">
    {/* Connecting line — desktop only */}
    <div className="border-border absolute top-[1.125rem] left-0 right-0 hidden border-t border-dashed md:block" />
    <div className="grid grid-cols-3 gap-4 md:grid-cols-6 md:gap-2">
      {stages.map((stage) => (
        <div key={stage.step} className="flex flex-col items-center gap-2">
          <div
            className="relative z-10 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border-2 font-bold text-xs"
            style={{
              borderColor: accentColor,
              backgroundColor: `${accentColor}20`,
              color: accentColor,
            }}>
            {stage.step}
          </div>
          <p className="text-neutral text-center text-[11px] font-medium leading-tight">{stage.label}</p>
          <p className="text-tertiary-content text-center text-[10px] leading-tight">{stage.desc}</p>
        </div>
      ))}
    </div>
  </div>
)

const ArchitectureShowcase = () => {
  return (
    <section id="architecture" className="mx-auto my-14 max-w-[1200px] px-4">
      <SectionHeading
        title="Architecture Showcase"
        subtitle="System designs from real projects — showing how components connect from data to user."
      />

      <div className="mt-8 space-y-5">
        {architectureShowcases.map((panel) => (
          <div
            key={panel.id}
            className="bg-secondary border-border rounded-xl border p-5 md:p-6"
            style={{ borderLeftColor: panel.accentColor, borderLeftWidth: '3px' }}>
            <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-primary-content font-bold">{panel.title}</h3>
                <p
                  className="mt-0.5 text-xs font-medium"
                  style={{ color: panel.accentColor }}>
                  {panel.subtitle}
                </p>
              </div>
              <p className="text-neutral max-w-sm text-xs leading-relaxed">{panel.context}</p>
            </div>
            <StepFlow stages={panel.stages} accentColor={panel.accentColor} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default ArchitectureShowcase
