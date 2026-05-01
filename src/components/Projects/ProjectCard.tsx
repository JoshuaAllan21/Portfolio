import { EnhancedProject } from '@/lib/types'
import { GithubIcon, PreviewIcon } from '../../utils/icons'

interface ProjectCardProps {
  project: EnhancedProject
}

const statusStyles = {
  completed: 'bg-secondary text-tertiary-content border-border',
  current: 'bg-accent/10 text-accent border-accent/30',
  'in-development': 'bg-secondary text-secondary-content border-secondary-content/30',
}

const statusLabels = {
  completed: 'Completed',
  current: 'Active',
  'in-development': 'In Development',
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const {
    title,
    type,
    status,
    statusLabel,
    grade,
    shortDescription,
    highlights,
    techStack,
    githubLink,
    livePreview,
    featured,
    disclaimer,
    accentColor,
  } = project

  const validGithubLink = githubLink && !githubLink.startsWith('TODO')
  const validLiveLink = livePreview && !livePreview.startsWith('TODO')

  return (
    <div
      className={`bg-secondary border-border flex flex-col rounded-xl border transition-colors duration-200 hover:border-accent/40 ${featured ? 'lg:col-span-2' : ''}`}
      style={{ borderTopColor: accentColor, borderTopWidth: '3px' }}>
      {/* Header */}
      <div className="p-5 pb-3">
        <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-secondary-content text-base font-bold">{title}</h3>
              {grade && (
                <span
                  className="rounded-full px-2 py-0.5 text-xs font-bold"
                  style={{ backgroundColor: `${accentColor}20`, color: accentColor }}>
                  {grade}
                </span>
              )}
            </div>
            <p className="text-tertiary-content mt-0.5 text-xs">{type}</p>
          </div>
          <span
            className={`flex-shrink-0 rounded-full border px-2 py-0.5 text-xs font-medium ${statusStyles[status]}`}>
            {statusLabels[status]}
          </span>
        </div>

        <p className="text-primary-content text-xs leading-relaxed">{statusLabel}</p>
      </div>

      {/* Description */}
      <div className="bg-primary/50 mx-5 rounded-lg px-4 py-3">
        <p className="text-neutral text-xs leading-relaxed">{shortDescription}</p>
        {disclaimer && (
          <p className="text-tertiary-content/70 mt-2 text-[10px] italic">{disclaimer}</p>
        )}
      </div>

      {/* Highlights */}
      {highlights.length > 0 && (
        <div className="px-5 pt-3">
          <p className="text-primary-content mb-1.5 text-[10px] font-semibold uppercase tracking-wider">
            Highlights
          </p>
          <ul className="space-y-1">
            {highlights.slice(0, featured ? highlights.length : 4).map((h) => (
              <li key={h} className="text-neutral flex items-start gap-1.5 text-xs leading-relaxed">
                <span className="text-accent mt-0.5 flex-shrink-0 text-[10px]">▸</span>
                {h}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tech Stack */}
      <div className="px-5 pt-3">
        <p className="text-primary-content mb-1.5 text-[10px] font-semibold uppercase tracking-wider">
          Tech Stack
        </p>
        <div className="flex flex-wrap gap-1">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="bg-primary border-border text-tertiary-content rounded px-1.5 py-0.5 text-[10px] border">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="mt-auto flex gap-4 p-5 pt-4">
        {validGithubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub: ${title}`}
            className="text-accent flex items-center gap-1.5 text-xs underline underline-offset-2 transition-opacity duration-200 hover:opacity-80">
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
        )}
        {validLiveLink && (
          <a
            href={livePreview}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Live preview: ${title}`}
            className="text-accent flex items-center gap-1.5 text-xs underline underline-offset-2 transition-opacity duration-200 hover:opacity-80">
            <PreviewIcon className="h-4 w-4" />
            Live Preview
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
