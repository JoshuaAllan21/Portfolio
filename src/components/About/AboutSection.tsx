import SectionHeading from '../SectionHeading/SectionHeading'

const AboutSection = () => {
  return (
    <section id="about" className="mx-auto my-14 max-w-[1200px] px-4">
      <SectionHeading
        title="About Me"
        subtitle="Software engineer with a focus on correctness, explainability, and real-world usefulness."
      />

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-5">
        {/* Narrative */}
        <div className="space-y-4 lg:col-span-3">
          <p className="text-neutral leading-relaxed">
            I build systems where correctness, explainability, and usability matter. My current work at Suade Labs
            sits deep inside regulatory technology — production Python, financial calculation logic, structured banking
            data, and the kind of testing culture where a wrong output has consequences.
          </p>
          <p className="text-neutral leading-relaxed">
            Outside of that, I build across the stack. Clear Trade is a FinTech investing education platform. A
            reverse-auction marketplace for tradesmen. A dissertation that combined LSTM and CNN models with real
            market data, sentiment analysis, and custom backtesting — graded 86.3%.
          </p>
          <p className="text-neutral leading-relaxed">
            I&apos;m drawn to software where domain complexity meets technical depth: financial systems, regulatory
            logic, AI-assisted products, and data-heavy applications. I want to build things that are genuinely useful
            and that I can stand behind technically.
          </p>
        </div>

        {/* What I care about */}
        <div className="lg:col-span-2">
          <p className="text-primary-content mb-3 text-xs font-semibold uppercase tracking-wider">
            What I care about
          </p>
          <div className="space-y-2">
            {[
              { title: 'Correctness', desc: 'Software that does what it claims and proves it with tests.' },
              { title: 'Explainability', desc: 'Systems where outputs can be understood and questioned.' },
              { title: 'Financial technology', desc: 'Building tools that matter in banking, regulation, and investing.' },
              { title: 'Production quality', desc: 'Code written as if someone will maintain it in two years.' },
              { title: 'Data-driven thinking', desc: 'Evidence over assumptions — in engineering and product decisions.' },
              { title: 'User-focused products', desc: 'Real people should benefit from what I build.' },
            ].map(({ title, desc }) => (
              <div
                key={title}
                className="bg-secondary border-border hover:border-accent/40 rounded-lg border p-3 transition-colors duration-150">
                <p className="text-accent text-xs font-semibold">{title}</p>
                <p className="text-neutral mt-0.5 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
