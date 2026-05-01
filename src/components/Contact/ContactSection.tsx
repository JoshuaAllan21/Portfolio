import { MsgIcon, PhoneIcon } from '@/utils/icons'
import ContactForm from './ContactForm'

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-secondary border-border my-14 grid grid-cols-1 gap-12 rounded-2xl border p-6 md:grid-cols-2 md:gap-8 md:p-8 lg:p-10">
      <div className="flex flex-col justify-between gap-8">
        <div>
          <h2 className="text-neutral text-2xl font-bold md:text-3xl">Let&apos;s Connect</h2>
          <p className="text-accent mt-1 text-lg font-semibold">Graduate RegTech Engineer · Software Developer</p>
          <p className="text-neutral mt-4 text-sm leading-relaxed">
            I&apos;m open to software engineering opportunities, FinTech and RegTech roles, junior developer positions,
            AI/ML projects, and selected freelance or startup-style builds.
          </p>
          <p className="text-neutral mt-2 text-sm leading-relaxed">
            Contact me directly or use the form and I&apos;ll get back to you.
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-primary-content text-xs font-semibold uppercase tracking-wider">
            Contact Information
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
            className="bg-accent text-primary rounded-lg px-4 py-2 text-sm font-semibold transition-opacity duration-200 hover:opacity-90">
            Download CV
          </a>
        </div>
      </div>

      <ContactForm />
    </section>
  )
}

export default ContactSection
