'use client'
import useRoleSwitcher from '@/hooks/useRoleSwitcher'
import useRotatingAnimation from '@/hooks/useRotatingAnimation'
import Image from 'next/image'
import HeroImage from '../../assets/images/hero-image.jpg'
import Ellipse from './Ellipse'

const credibilityCards = [
  { label: 'Role', value: 'Graduate RegTech Engineer', sub: 'Suade Labs · 9 months' },
  { label: 'Degree', value: 'First-Class BSc Computer Science', sub: 'University of East Anglia · 2025' },
  { label: 'Dissertation', value: 'Neural Network Stock Trading', sub: 'Grade: 86.3%' },
  { label: 'Focus', value: 'FinTech · RegTech · AI/ML', sub: 'Backend & Full-Stack' },
]

const Hero = () => {
  const ellipseRef = useRotatingAnimation()
  const role = useRoleSwitcher({
    roles: [
      'Graduate RegTech Engineer',
      'FinTech & AI/ML Builder',
      'First-Class CS Graduate',
      'Full-Stack Developer',
    ],
  })

  return (
    <section className="bg-primary bg-small-glow bg-small-glow-position md:bg-large-glow-position lg:bg-large-glow min-h-[calc(100dvh-4rem)] bg-no-repeat">
      <div className="mx-auto max-w-[1200px] px-4 pt-12 pb-10 lg:pt-20 lg:pb-14">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          {/* Left: Text */}
          <div className="flex flex-col gap-5">
            <div>
              <span className="text-tertiary-content text-xs font-medium uppercase tracking-widest">
                Portfolio · 2026
              </span>
              <h1 className="text-neutral mt-2 text-3xl font-bold leading-tight lg:text-4xl">
                Hi, I&apos;m Joshua Allan.
              </h1>
              <h2 className="text-accent mt-2 block text-xl font-bold lg:text-2xl">{role}</h2>
            </div>

            <p className="text-neutral max-w-lg text-sm leading-relaxed lg:text-base">
              I&apos;m a First-Class Computer Science graduate from the University of East Anglia and currently a
              Graduate RegTech Engineer at Suade Labs. I work on Python-based regulatory reporting logic, financial
              calculations, testing, data models, and production software used in banking regulation.
            </p>

            <p className="text-neutral max-w-lg text-sm leading-relaxed">
              Outside of work, I build fintech, AI/ML, analytics, and marketplace projects — including a neural-network
              stock trading dissertation graded{' '}
              <span className="text-accent font-semibold">86.3%</span>.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="/CV_NoCover.pdf"
                download="Joshua_Allan_CV.pdf"
                aria-label="Download my CV"
                className="bg-accent text-primary rounded-lg px-4 py-2.5 text-sm font-semibold transition-opacity duration-200 hover:opacity-90">
                Download CV
              </a>
              <a
                href="#projects"
                aria-label="View my projects"
                className="bg-secondary border-border text-neutral rounded-lg border px-4 py-2.5 text-sm transition-colors duration-200 hover:border-accent">
                View Projects
              </a>
              <a
                href="https://www.linkedin.com/in/joshua-allan-094238329/"
                aria-label="LinkedIn Profile"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary border-border text-neutral rounded-lg border px-4 py-2.5 text-sm transition-colors duration-200 hover:border-accent">
                LinkedIn
              </a>
              <a
                href="https://github.com/JoshuaAllan21"
                aria-label="GitHub Profile"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary border-border text-neutral rounded-lg border px-4 py-2.5 text-sm transition-colors duration-200 hover:border-accent">
                GitHub
              </a>
            </div>

            {/* Credibility cards */}
            <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {credibilityCards.map((card) => (
                <div
                  key={card.label}
                  className="bg-secondary border-border rounded-lg border px-3 py-2.5">
                  <p className="text-tertiary-content text-[10px] font-medium uppercase tracking-wider">
                    {card.label}
                  </p>
                  <p className="text-neutral mt-0.5 text-xs font-medium leading-tight">{card.value}</p>
                  <p className="text-secondary-content/60 text-[10px] leading-tight">{card.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Photo */}
          <div className="flex items-center justify-center">
            <div className="text-accent relative size-56 sm:size-64 md:size-72 lg:size-80">
              <Image
                src={HeroImage}
                fill={true}
                priority={true}
                sizes="(min-width: 1024px) 20rem, (min-width: 768px) 18rem, (min-width: 640px) 16rem, 14rem"
                alt="Joshua Allan — Graduate RegTech Engineer and Software Developer"
                className="object-cover object-top p-7"
              />
              <Ellipse
                ref={ellipseRef}
                className="absolute top-0 left-0 size-56 transition-transform duration-500 ease-out sm:size-64 md:size-72 lg:size-80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
