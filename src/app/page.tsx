import AboutSection from '@/components/About/AboutSection'
import CapabilitiesSection from '@/components/Capabilities/CapabilitiesSection'
import CareerFocusSection from '@/components/CareerFocus/CareerFocusSection'
import ContactSection from '@/components/Contact/ContactSection'
import DissertationSection from '@/components/Dissertation/DissertationSection'
import EducationSection from '@/components/Education/EducationSection'
import ExperienceSection from '@/components/Experience/ExperienceSection'
import Hero from '@/components/Hero/Hero'
import ProjectSection from '@/components/Projects/ProjectSection'
import Skills from '@/components/Skills/Skills'

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <ExperienceSection />
      {/* ProjectSection has no internal container — wrap here */}
      <div className="mx-auto max-w-[1200px] px-4">
        <ProjectSection />
      </div>
      <DissertationSection />
      <Skills />
      <EducationSection />
      <CapabilitiesSection />
      <CareerFocusSection />
      {/* ContactSection has no internal container — wrap here */}
      <div className="mx-auto max-w-[1200px] px-4">
        <ContactSection />
      </div>
    </main>
  )
}
