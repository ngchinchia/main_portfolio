import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article>
        <motion.img 
        initial={{
            y: -100,
            opacity: 0,
        }}
        transition={{ duration: 1.2}}
        whileInView={{ opacity: 1, y: 0}}
        viewport={{ once: true}}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://imageio.forbes.com/specials-images/imageserve/64213c10fc7ed6f0a3eb47ae/The-Intersection-Of-AI-And-Human-Creativity--Can-Machines-Really-Be-Creative-/960x0.jpg?height=473&width=711&fit=bounds"
        alt="img"/>

        <div>
            <h4>CEO OF PAPAFAM</h4>
            <p>PAPAFAM</p>
            <div>
                test
            </div>
            <p>Started working... -Ended....</p>
        </div>
        
        
     
    </article>
  )
}