export interface Project {
  title: string
  shortDescription: string
  priority: number
  cover: string
  livePreview?: string
  githubLink?: string
  visitors?: string
  earned?: string
  githubStars?: string
  ratings?: string
  numberOfSales?: string
  type: string
  siteAge?: string
}

export interface EnhancedProject {
  id: string
  title: string
  type: string
  status: 'completed' | 'current' | 'in-development'
  statusLabel: string
  grade?: string
  shortDescription: string
  highlights: string[]
  techStack: string[]
  githubLink?: string
  livePreview?: string
  featured?: boolean
  disclaimer?: string
  accentColor?: string
  tags: string[]
  problem?: string
  whatIBuilt?: string
  technicalDepth?: string[]
  learned?: string
  complexityBadges?: string[]
}

export interface Experience {
  company: string
  companyInitials: string
  role: string
  duration: string
  status: 'current' | 'previous'
  summary: string
  responsibilities: string[]
  technologies: string[]
  demonstrates?: string[]
}

export interface Capability {
  title: string
  description: string
}

export interface EducationModule {
  title: string
  year: string
  group: string
}

export interface TechnicalDepthCard {
  id: string
  code: string
  title: string
  description: string
  skills: string[]
  accentColor: string
}

export interface ArchitectureStage {
  step: number
  label: string
  desc: string
}

export interface ArchitecturePanel {
  id: string
  title: string
  subtitle: string
  context: string
  accentColor: string
  stages: ArchitectureStage[]
}

export interface BuildQualityPrinciple {
  number: string
  title: string
  description: string
}

export interface FeaturedSkill {
  name: string
  tag: string
  context: string
  tools: string[]
}

export interface SnapshotCard {
  label: string
  value: string
  sub: string
  accentColor: string
}

export interface Heading {
  id: string
  title: string
  items: Heading[]
}

export interface Testimonial {
  name: string
  title?: string
  feedback: string
  image: string
  stars: number
  createdAt: string
}
