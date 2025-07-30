'use client'
import useRoleSwitcher from '@/hooks/useRoleSwitcher'
import useRotatingAnimation from '@/hooks/useRotatingAnimation'
import Image from 'next/image'
import { HeroImage } from '../../utils/images'
import Ellipse from './Ellipse'

const Hero = () => {
  const ellipseRef = useRotatingAnimation()
  const role = useRoleSwitcher({ roles: ['GRADUATE SOFTWARE DEVELOPER', 'GRADUATE FINTECH DEVELOPER'] })

  return (
    <section className="bg-primary bg-small-glow bg-small-glow-position md:bg-large-glow-position lg:bg-large-glow min-h-[calc(dvh-4rem)] bg-no-repeat">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-4 px-4 pt-12 pb-10 md:grid-cols-2 lg:p-4">
        <div className="flex min-h-48 flex-col justify-between lg:min-h-56 lg:max-w-[33.75rem]">
          <h1>
            <span className="text-neutral mb-2 block text-3xl font-bold">Hi - I'm Joshua Allan</span>
            <span className="text-accent block text-[1.75rem] font-bold">{role}</span>
          </h1>

          <h2 className="text-neutral mt-3">
            I am a recent Computer Science graduate from the University of East Anglia, where I achieved First-Class Honours. I am passionate about building robust software solutions and am actively seeking a graduate role in software engineering or fintech.
          </h2>

          <div className="mt-6 flex flex-wrap gap-6">
            <a
                href="/CV_NoCover.pdf"
                download="CV_NoCover.pdf"
                aria-label="Download my CV"
                className="bg-accent min-w-32 cursor-pointer rounded-lg px-[14px] py-[10px] text-center text-sm font-medium text-[#00071E]"
            >
              CV
            </a>
            <a
                href="https://www.linkedin.com/in/joshua-allan-094238329/"
                aria-label="View LinkedIn Profile"
                className="text-neutral bg-secondary cursor-pointer rounded-lg px-[14px] py-[10px] text-sm">
              LinkedIn Profile
            </a>
          </div>
        </div>

        <div className="flex min-h-[18.75rem] items-center justify-center lg:min-h-[35rem]">
          <div className="text-accent relative size-56 sm:size-60 md:size-[20rem] lg:size-[25.75rem]">
            <Image
              src={HeroImage}
              fill={true}
              priority={true}
              sizes="(min-width: 1024px) 25.75rem, (min-width: 768px) 20rem, (min-width: 640px) 15rem, 14rem"
              alt="Josh Allan - Graduate Software/Fintech Developer"
              className="object-contain p-7"
            />
            <Ellipse
              ref={ellipseRef}
              className="absolute top-0 left-0 size-56 transition-transform duration-500 ease-out sm:size-60 md:size-[20rem] lg:size-[25.75rem]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
