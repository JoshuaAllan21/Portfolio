import { proofOfWorkItems } from '@/appData'

const ProofOfWorkBand = () => {
  return (
    <section id="proof" className="border-border bg-secondary/60 border-y">
      <div className="mx-auto max-w-[1200px] px-4 py-10">
        <p className="text-accent mb-6 text-center text-xs font-semibold uppercase tracking-widest">
          Proof of Work
        </p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {proofOfWorkItems.map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-accent text-xl font-bold">{item.value}</p>
              <p className="text-neutral mt-1 text-xs font-medium leading-tight">{item.label}</p>
              <p className="text-tertiary-content mt-0.5 text-[10px] leading-tight">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProofOfWorkBand
