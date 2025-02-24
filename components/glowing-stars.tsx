"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useTransform, useScroll, useSpring } from "framer-motion"

export const GlowingStars = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const [stars, setStars] = useState<{ x: number; y: number; size: number }[]>([])

  useEffect(() => {
    const newStars = Array.from({ length: 50 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1, // サイズを1-4pxの範囲に
    }))
    setStars(newStars)
  }, [])

  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 0]), {
    stiffness: 100,
    damping: 30,
  })

  return (
    <motion.div ref={ref} style={{ opacity }} className="pointer-events-none absolute inset-0">
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size * 2}px`, // サイズを2倍に
            height: `${star.size * 2}px`, // サイズを2倍に
            background: `radial-gradient(circle at center, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%)`,
            animation: `twinkle ${Math.random() * 5 + 3}s ease-in-out infinite`,
            transform: "translate(-50%, -50%)", // 中心を基準に配置
          }}
        />
      ))}
    </motion.div>
  )
}

