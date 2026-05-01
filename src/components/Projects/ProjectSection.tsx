import { enhancedProjects } from '@/appData'
import SectionHeading from '../SectionHeading/SectionHeading'
import ProjectCard from './ProjectCard'

const ProjectSection = () => {
  return (
    <section id="projects" className="my-14">
      <SectionHeading
        title="Featured Projects"
        subtitle="A selection of personal, academic, and ongoing engineering projects across FinTech, AI/ML, and full-stack development."
      />

      <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
        {enhancedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default ProjectSection
