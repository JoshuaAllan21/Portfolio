'use client'

import { useState } from 'react'
import Image from 'next/image'
import { groupedSkills } from '../../appData'
import dynamic from 'next/dynamic'

const MarqueeWrapper = dynamic(() => import('../Marquee/MarqueeWrapper'), { ssr: false })

const Skills = () => {
    const categories = Object.keys(groupedSkills) as (keyof typeof groupedSkills)[]
    const [activeCategory, setActiveCategory] = useState(categories[0])

    return (
        <section id="skills" className="my-14">
            <h2 className="text-3xl font-bold text-center text-accent mb-8">Skills</h2>

            {/* Category Tabs */}
            <div className="flex justify-center flex-wrap gap-3 mb-6">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`rounded-xl px-4 py-2 text-sm font-medium transition-all ${
                            activeCategory === category
                                ? 'bg-accent text-white'
                                : 'bg-primary text-primary-content hover:bg-secondary'
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Auto-scrolling skill row via MarqueeWrapper */}
            <MarqueeWrapper className="px-6 md:px-12">
                <div className="flex gap-6">
                    {groupedSkills[activeCategory].map(({ name, icon }) => (
                        <div
                            key={name}
                            className="bg-secondary text-center rounded-lg w-60 h-64 p-4 flex-shrink-0 flex flex-col justify-between items-center shadow"
                        >
                            <Image
                                src={icon}
                                alt={name}
                                width={264}
                                height={264}
                                className="rounded"
                                unoptimized
                            />
                            <p className="text-primary-content text-sm font-medium text-center h-10 whitespace-nowrap overflow-hidden text-ellipsis">
                                {name}
                            </p>
                        </div>
                    ))}
                </div>
            </MarqueeWrapper>
        </section>
    )
}

export default Skills

