'use client'

import { EnhancedProject } from '@/lib/types'
import { useState } from 'react'
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
  const [expanded, setExpanded] = useState(false)

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
    disclaimer,
    accentColor,
    complexityBadges,
    problem,
    whatIBuilt,
    technicalDepth,
    learned,
  } = project

  const hasValidGithub = githubLink && !githubLink.startsWith('TODO')
  const hasValidLive = livePreview && !livePreview.startsWith('TODO')
  const hasTodoGithub = githubLink?.startsWith('TODO')
  const hasTodoLive = livePreview?.startsWith('TODO')

  const hasExpandContent = problem || whatIBuilt || (technicalDepth && technicalDepth.length > 0) || learned

  return (
    <div
      className="bg-secondary border-border flex flex-col rounded-xl border transition-colors duration-200 hover:border-accent/30"
      style={{ borderTopColor: accentColor, borderTopWidth: '3px' }}>
      {/* Header */}
      <div className="p-5 pb-3">
        <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-secondary-content text-base font-bold leading-tight">{title}</h3>
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
          <div className="flex items-center gap-2">
            <span className="text-primary-content text-xs">{statusLabel}</span>
            <span
              className={`flex-shrink-0 rounded-full border px-2 py-0.5 text-xs font-medium ${statusStyles[status]}`}>
              {statusLabels[status]}
            </span>
          </div>
        </div>

        {/* Complexity badges */}
        {complexityBadges && complexityBadges.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {complexityBadges.map((badge) => (
              <span
                key={badge}
                className="border-border text-tertiary-content bg-primary rounded px-1.5 py-0.5 text-[10px] border">
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Description */}
      <div className="bg-primary/40 mx-5 rounded-lg px-4 py-3">
        <p className="text-neutral text-xs leading-relaxed">{shortDescription}</p>
        {disclaimer && (
          <p className="text-tertiary-content/60 mt-1.5 text-[10px] italic">{disclaimer}</p>
        )}
      </div>

      {/* Highlights */}
      <div className="px-5 pt-3">
        <p className="text-primary-content mb-1.5 text-[10px] font-semibold uppercase tracking-wider">
          Highlights
        </p>
        <ul className="space-y-1">
          {highlights.slice(0, 4).map((h) => (
            <li key={h} className="text-neutral flex items-start gap-2 text-xs leading-relaxed">
              <span className="bg-accent mt-1.5 h-1 w-1 flex-shrink-0 rounded-full" />
              {h}
            </li>
          ))}
          {highlights.length > 4 && !expanded && (
            <li className="text-tertiary-content text-xs">+{highlights.length - 4} more</li>
          )}
          {expanded &&
            highlights.slice(4).map((h) => (
              <li key={h} className="text-neutral flex items-start gap-2 text-xs leading-relaxed">
                <span className="bg-accent mt-1.5 h-1 w-1 flex-shrink-0 rounded-full" />
                {h}
              </li>
            ))}
        </ul>
      </div>

      {/* Expandable case study detail */}
      {expanded && hasExpandContent && (
        <div className="border-border mx-5 mt-4 rounded-lg border p-4 space-y-3">
          {problem && (
            <div>
              <p className="text-primary-content mb-1 text-[10px] font-semibold uppercase tracking-wider">Problem</p>
              <p className="text-neutral text-xs leading-relaxed">{problem}</p>
            </div>
          )}
          {whatIBuilt && (
            <div>
              <p className="text-primary-content mb-1 text-[10px] font-semibold uppercase tracking-wider">What I Built</p>
              <p className="text-neutral text-xs leading-relaxed">{whatIBuilt}</p>
            </div>
          )}
          {technicalDepth && technicalDepth.length > 0 && (
            <div>
              <p className="text-primary-content mb-1.5 text-[10px] font-semibold uppercase tracking-wider">Technical Depth</p>
              <div className="flex flex-wrap gap-1">
                {technicalDepth.map((t) => (
                  <span
                    key={t}
                    className="border-border text-secondary-content bg-primary rounded px-2 py-0.5 text-[10px] border">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
          {learned && (
            <div>
              <p className="text-primary-content mb-1 text-[10px] font-semibold uppercase tracking-wider">What I Learned</p>
              <p className="text-neutral text-xs leading-relaxed">{learned}</p>
            </div>
          )}
        </div>
      )}

      {/* Tech Stack */}
      <div className="px-5 pt-3">
        <p className="text-primary-content mb-1.5 text-[10px] font-semibold uppercase tracking-wider">Stack</p>
        <div className="flex flex-wrap gap-1">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="bg-primary border-border text-tertiary-content rounded border px-1.5 py-0.5 text-[10px]">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer: links + expand */}
      <div className="mt-auto flex flex-wrap items-center gap-3 p-5 pt-4">
        {hasValidGithub && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub: ${title}`}
            className="text-accent flex items-center gap-1.5 text-xs underline underline-offset-2 transition-opacity hover:opacity-80">
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
        )}
        {hasTodoGithub && (
          <span className="text-tertiary-content/50 flex items-center gap-1.5 text-xs cursor-not-allowed">
            <GithubIcon className="h-4 w-4" />
            Link coming soon
          </span>
        )}
        {hasValidLive && (
          <a
            href={livePreview}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Live preview: ${title}`}
            className="text-accent flex items-center gap-1.5 text-xs underline underline-offset-2 transition-opacity hover:opacity-80">
            <PreviewIcon className="h-4 w-4" />
            Live Preview
          </a>
        )}
        {hasTodoLive && (
          <span className="text-tertiary-content/50 flex items-center gap-1.5 text-xs cursor-not-allowed">
            <PreviewIcon className="h-4 w-4" />
            Link coming soon
          </span>
        )}
        {hasExpandContent && (
          <button
            onClick={() => setExpanded((v) => !v)}
            className="text-secondary-content border-border hover:border-accent/50 ml-auto rounded-lg border px-3 py-1 text-xs transition-colors duration-150">
            {expanded ? 'Less detail' : 'Case study'}
          </button>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
