import AboutSection from '@/components/About/AboutSection'
import ArchitectureShowcase from '@/components/Architecture/ArchitectureShowcase'
import BuildQualitySection from '@/components/BuildQuality/BuildQualitySection'
import CareerFocusSection from '@/components/CareerFocus/CareerFocusSection'
import ContactSection from '@/components/Contact/ContactSection'
import DissertationSection from '@/components/Dissertation/DissertationSection'
import EducationSection from '@/components/Education/EducationSection'
import SnapshotSection from '@/components/EngSnapshot/SnapshotSection'
import ExperienceSection from '@/components/Experience/ExperienceSection'
import Hero from '@/components/Hero/Hero'
import ProjectSection from '@/components/Projects/ProjectSection'
import ProofOfWorkBand from '@/components/ProofOfWork/ProofOfWorkBand'
import Skills from '@/components/Skills/Skills'
import TechnicalDepthSection from '@/components/TechnicalDepth/TechnicalDepthSection'

export default function Home() {
  return (
    <main>
      <Hero />
      <SnapshotSection />
      <AboutSection />
      <ExperienceSection />
      <TechnicalDepthSection />
      <div className="mx-auto max-w-[1200px] px-4">
        <ProjectSection />
      </div>
      <ProofOfWorkBand />
      <DissertationSection />
      <ArchitectureShowcase />
      <BuildQualitySection />
      <Skills />
      <EducationSection />
      <CareerFocusSection />
      <div className="mx-auto max-w-[1200px] px-4">
        <ContactSection />
      </div>
    </main>
  )
}
