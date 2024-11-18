import { motion } from "motion/react"

import React from 'react'

const LinkHover = () => {
  return (
    <div className="grid h-screen place-content-center gap-2 ">
      <FlipLink href="#">Twitter</FlipLink>
      <FlipLink href="#">Github</FlipLink>
      <FlipLink href="#">LinkedIn</FlipLink>
      <FlipLink href="#">Instagram</FlipLink>
    </div>
  )
}

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({children, href}) => {
  return <motion.a
  initial= "initial"
  whileHover="hovered"
  href={href}
  className="relative block whitespace-nowrap text-4xl font-sans font-black uppercase italic sm:text-7xl md:text-[64px] lg:text-[96px] overflow-hidden"
  style={{lineHeight:0.80}}
  >
    <div>
      {children.split("").map((l,i) =>{
        return <motion.span key={i}
        variants={{
          initial: {y:0},
          hovered: {y:"-100%"},
        }}
        transition={{
          duration: DURATION,
          ease: "easeInOut",
          delay: STAGGER * i,
        }}
        className="inline-block"
        >
          {l}
        </motion.span>
      })}
    </div>
    <div className="absolute inset-0">
      {children.split("").map((l,i) =>{
        return <motion.span  key={i}
        variants={{
          initial: {y:"100%"},
          hovered: {y:0},
        }}
        transition={{
          duration: DURATION,
          ease: "easeInOut",
          delay: STAGGER * i,
        }}
        className="inline-block"
        >
          {l}
        </motion.span>
      })}
    </div>

  </motion.a>
}

export default LinkHover