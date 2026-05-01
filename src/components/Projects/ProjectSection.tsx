'use client'

import { enhancedProjects, projectFilterTags } from '@/appData'
import { useState } from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import ProjectCard from './ProjectCard'

const ProjectSection = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered =
    activeFilter === 'All'
      ? enhancedProjects
      : enhancedProjects.filter((p) => p.tags.includes(activeFilter))

  return (
    <section id="projects" className="my-14">
      <SectionHeading
        title="Featured Projects"
        subtitle="Personal, academic, and ongoing engineering work across FinTech, AI/ML, and full-stack development. Click 'Case study' to expand."
      />

      {/* Filter tabs */}
      <div className="mt-6 flex flex-wrap gap-2">
        {projectFilterTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveFilter(tag)}
            aria-pressed={activeFilter === tag}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-150 ${
              activeFilter === tag
                ? 'bg-accent text-primary'
                : 'bg-secondary border-border text-neutral hover:border-accent/50 border'
            }`}>
            {tag}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2">
        {filtered.length > 0 ? (
          filtered.map((project) => <ProjectCard key={project.id} project={project} />)
        ) : (
          <p className="text-neutral col-span-2 py-8 text-center text-sm">
            No projects match this filter.
          </p>
        )}
      </div>
    </section>
  )
}

export default ProjectSection
