import { MsgIcon, PhoneIcon } from '@/utils/icons'
import ContactForm from './ContactForm'

const bestFitRoles = [
  'Graduate / Junior Software Engineer',
  'FinTech or RegTech Developer',
  'Junior Backend Engineer',
  'AI/ML Engineer (Graduate level)',
  'Full-Stack Developer',
]

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-secondary border-border my-14 rounded-2xl border p-6 md:p-8 lg:p-10">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8">
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-neutral text-2xl font-bold md:text-3xl">Let&apos;s Connect</h2>
            <p className="text-accent mt-1 font-semibold">
              Graduate RegTech Engineer · Software Developer
            </p>
            <p className="text-neutral mt-4 text-sm leading-relaxed">
              Open to the right software engineering opportunities — FinTech, RegTech, junior backend, AI/ML, and
              full-stack product roles. Currently employed at Suade Labs.
            </p>
          </div>

          {/* Availability */}
          <div className="bg-primary border-border rounded-xl border p-4">
            <p className="text-primary-content mb-2 text-xs font-semibold uppercase tracking-wider">
              Availability
            </p>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="text-neutral text-sm">Currently employed at Suade Labs</span>
            </div>
            <div className="mt-1 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-secondary-content" />
              <span className="text-neutral text-sm">Open to selected opportunities</span>
            </div>
          </div>

          {/* Best fit */}
          <div>
            <p className="text-primary-content mb-2 text-xs font-semibold uppercase tracking-wider">
              Best Fit Roles
            </p>
            <ul className="space-y-1">
              {bestFitRoles.map((role) => (
                <li key={role} className="flex items-center gap-2 text-sm text-neutral">
                  <span className="bg-accent h-1 w-1 flex-shrink-0 rounded-full" />
                  {role}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="space-y-2">
            <p className="text-primary-content text-xs font-semibold uppercase tracking-wider">
              Contact
            </p>
            <a
              href="mailto:joshua.allan21@gmail.com"
              className="text-neutral hover:text-accent flex items-center gap-2 text-sm transition-colors duration-200">
              <MsgIcon />
              joshua.allan21@gmail.com
            </a>
            <a
              href="tel:+447375667127"
              className="text-neutral hover:text-accent flex items-center gap-2 text-sm transition-colors duration-200">
              <PhoneIcon />
              +44 7375 667127
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/joshua-allan-094238329/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary border-border text-neutral hover:border-accent rounded-lg border px-4 py-2 text-sm transition-colors duration-200">
              LinkedIn
            </a>
            <a
              href="https://github.com/JoshuaAllan21"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary border-border text-neutral hover:border-accent rounded-lg border px-4 py-2 text-sm transition-colors duration-200">
              GitHub
            </a>
            <a
              href="/CV_NoCover.pdf"
              download="Joshua_Allan_CV.pdf"
              className="bg-accent text-primary rounded-lg px-4 py-2 text-sm font-semibold transition-opacity hover:opacity-90">
              Download CV
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}

export default ContactSection
