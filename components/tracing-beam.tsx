"use client"

import type React from "react"

import { motion, useScroll, useSpring } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export const TracingBeam = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <div ref={ref} className="relative w-full">
      {isVisible && (
        <motion.div
          className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 to-emerald-500"
          style={{ scaleY, opacity: scrollYProgress }}
        />
      )}
      {children}
    </div>
  )
}

