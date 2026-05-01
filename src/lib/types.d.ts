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
