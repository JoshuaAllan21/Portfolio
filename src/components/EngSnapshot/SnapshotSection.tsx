import { snapshotCards } from '@/appData'

const SnapshotSection = () => {
  return (
    <section id="snapshot" className="border-border bg-secondary/40 border-y">
      <div className="mx-auto max-w-[1200px] px-4 py-8">
        <p className="text-primary-content mb-5 text-xs font-semibold uppercase tracking-widest">
          Engineering Snapshot
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {snapshotCards.map((card) => (
            <div
              key={card.label}
              className="bg-secondary border-border hover:-translate-y-0.5 group rounded-xl border p-4 transition-all duration-200 hover:shadow-lg"
              style={{ borderTopColor: card.accentColor, borderTopWidth: '3px' }}>
              <p
                className="mb-1 text-[10px] font-semibold uppercase tracking-widest"
                style={{ color: card.accentColor }}>
                {card.label}
              </p>
              <p className="text-neutral text-sm font-semibold leading-snug">{card.value}</p>
              <p className="text-tertiary-content mt-1 text-[10px] leading-relaxed">{card.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SnapshotSection
