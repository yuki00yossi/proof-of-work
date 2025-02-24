"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export function BackgroundGrid() {
  const { theme } = useTheme()

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-grid-white/10"
        style={{
          backgroundSize: "30px 30px",
          backgroundImage:
            theme === "dark"
              ? "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)"
              : "linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)",
        }}
      />
      <div className="absolute left-0 top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-green-500/20 [mask-image:radial-gradient(circle_at_center,transparent_30%,black)]" />
      </div>
    </div>
  )
}

