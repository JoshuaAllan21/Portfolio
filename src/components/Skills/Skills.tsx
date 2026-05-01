'use client'

import { featuredSkills, skillGroups } from '@/appData'
import { useState } from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'

const Skills = () => {
  const categories = Object.keys(skillGroups) as (keyof typeof skillGroups)[]
  const [activeCategory, setActiveCategory] = useState<string>(categories[0])

  return (
    <section id="skills" className="mx-auto my-14 max-w-[1200px] px-4">
      <SectionHeading
        title="Technical Skills"
        subtitle="Skills built through real production work, academic projects, and ongoing personal development."
      />

      {/* Featured skills with context */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featuredSkills.map((skill) => (
          <div
            key={skill.name}
            className="bg-secondary border-border hover:-translate-y-0.5 rounded-xl border p-4 transition-all duration-200">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-primary-content text-sm font-semibold">{skill.name}</h3>
              <span className="bg-accent/10 text-accent rounded px-1.5 py-0.5 font-mono text-[10px] font-medium">
                {skill.tag}
              </span>
            </div>
            <p className="text-neutral mb-3 text-xs leading-relaxed">{skill.context}</p>
            <div className="flex flex-wrap gap-1">
              {skill.tools.map((tool) => (
                <span
                  key={tool}
                  className="bg-primary border-border text-tertiary-content rounded border px-1.5 py-0.5 text-[10px]">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Full skill list by category */}
      <div className="mt-8">
        <p className="text-primary-content mb-4 text-xs font-semibold uppercase tracking-wider">Full Skill List</p>

        <div className="flex flex-wrap gap-2">
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

        <div className="bg-secondary border-border mt-4 min-h-[100px] rounded-xl border p-5">
          <div className="flex flex-wrap gap-2">
            {(skillGroups[activeCategory] ?? []).map((skill) => (
              <span
                key={skill}
                className="bg-primary border-border text-neutral hover:border-accent/40 rounded-lg border px-3 py-1.5 text-xs transition-colors duration-150">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`bg-secondary border-border rounded-lg border p-2 text-left transition-colors duration-150 hover:border-accent/40 ${activeCategory === category ? 'border-accent/40' : ''}`}>
              <p className="text-accent text-[10px] font-semibold">{category}</p>
              <p className="text-tertiary-content text-[10px]">{skillGroups[category].length} skills</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
