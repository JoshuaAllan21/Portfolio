'use client'

import { skillGroups } from '@/appData'
import { useState } from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'

const Skills = () => {
  const categories = Object.keys(skillGroups) as (keyof typeof skillGroups)[]
  const [activeCategory, setActiveCategory] = useState<string>(categories[0])

  return (
    <section id="skills" className="mx-auto my-14 max-w-[1200px] px-4">
      <SectionHeading
        title="Technical Skills"
        subtitle="Skills grouped by discipline — from backend engineering and AI/ML to FinTech and RegTech domain knowledge."
      />

      {/* Category tabs */}
      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            aria-pressed={activeCategory === category}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-150 ${
              activeCategory === category
                ? 'bg-accent text-primary'
                : 'bg-secondary border-border text-neutral hover:border-accent/50 border'
            }`}>
            {category}
          </button>
        ))}
      </div>

      {/* Skill chips */}
      <div className="bg-secondary border-border mt-4 min-h-[140px] rounded-xl border p-5">
        <div className="flex flex-wrap gap-2">
          {(skillGroups[activeCategory] ?? []).map((skill) => (
            <span
              key={skill}
              className="bg-primary border-border text-neutral hover:border-accent/50 rounded-lg border px-3 py-1.5 text-xs transition-colors duration-150">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* All skills overview */}
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`bg-secondary border-border rounded-lg border p-3 text-left transition-colors duration-150 hover:border-accent/40 ${activeCategory === category ? 'border-accent/40' : ''}`}>
            <p className="text-accent text-xs font-semibold">{category}</p>
            <p className="text-tertiary-content mt-0.5 text-[10px]">
              {skillGroups[category].length} skills
            </p>
          </button>
        ))}
      </div>
    </section>
  )
}

export default Skills
