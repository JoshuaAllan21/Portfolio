import SectionHeading from '../SectionHeading/SectionHeading'

const values = [
  { label: 'Correctness', desc: 'Software that can be trusted to do what it should.' },
  { label: 'Explainability', desc: 'Systems where outputs can be understood and questioned.' },
  { label: 'Financial Technology', desc: 'Building tools that matter in banking, investing, and regulation.' },
  { label: 'Clean Backend Systems', desc: 'Well-structured logic, tested thoroughly, easy to maintain.' },
  { label: 'User-Focused Products', desc: 'Real people should be able to use and benefit from what I build.' },
  { label: 'Testing & Reliability', desc: 'Confidence in software through good test coverage and validation.' },
  { label: 'Data-Driven Decisions', desc: 'Using data, not assumptions, to understand and improve systems.' },
  { label: 'Production-Quality Engineering', desc: 'Code written as if it will be read, maintained, and extended.' },
]

const AboutSection = () => {
  return (
    <section id="about" className="mx-auto my-14 max-w-[1200px] px-4">
      <SectionHeading
        title="About Me"
        subtitle="Software engineer with experience across RegTech, financial software, AI/ML, and full-stack product development."
      />

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <p className="text-neutral leading-relaxed">
            I&apos;m a software engineer with experience across RegTech, financial software, AI/ML, and full-stack
            product development. My current work at Suade Labs focuses on regulatory technology, where correctness,
            testing, and reliable financial calculations matter.
          </p>
          <p className="text-neutral leading-relaxed">
            I enjoy building systems that combine technical depth with real-world usefulness — from banking regulation
            logic to neural-network trading systems and full-stack SaaS-style products.
          </p>
          <p className="text-neutral leading-relaxed">
            I&apos;m especially interested in software where trust matters: fintech platforms, regulatory systems,
            investing tools, data-heavy applications, and explainable AI products. I like working across backend logic,
            data models, machine learning, frontend interfaces, testing, and deployment workflows.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="bg-secondary border-border rounded-lg border p-3">
              <p className="text-secondary-content text-xs font-medium uppercase tracking-wider">Current Role</p>
              <p className="text-neutral mt-1 text-sm">Graduate RegTech Engineer</p>
              <p className="text-tertiary-content text-xs">Suade Labs · 9 months</p>
            </div>
            <div className="bg-secondary border-border rounded-lg border p-3">
              <p className="text-secondary-content text-xs font-medium uppercase tracking-wider">Degree</p>
              <p className="text-neutral mt-1 text-sm">First-Class BSc Computer Science</p>
              <p className="text-tertiary-content text-xs">University of East Anglia · 2025</p>
            </div>
            <div className="bg-secondary border-border rounded-lg border p-3">
              <p className="text-secondary-content text-xs font-medium uppercase tracking-wider">Dissertation</p>
              <p className="text-neutral mt-1 text-sm">Neural Network Stock Trading</p>
              <p className="text-tertiary-content text-xs">Grade: 86.3%</p>
            </div>
            <div className="bg-secondary border-border rounded-lg border p-3">
              <p className="text-secondary-content text-xs font-medium uppercase tracking-wider">Focus Areas</p>
              <p className="text-neutral mt-1 text-sm">FinTech · RegTech · AI/ML</p>
              <p className="text-tertiary-content text-xs">Backend & Full-Stack</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-primary-content mb-4 text-lg font-semibold">What I care about</h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {values.map(({ label, desc }) => (
              <div
                key={label}
                className="bg-secondary border-border rounded-lg border p-3 transition-colors duration-200 hover:border-accent">
                <p className="text-accent text-sm font-semibold">{label}</p>
                <p className="text-neutral mt-1 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
