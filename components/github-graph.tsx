"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export function GithubGraph() {
  const { theme } = useTheme()
  const weeks = 52
  const days = 7

  return (
    <div className="w-full overflow-hidden rounded-lg border bg-card p-4">
      <div className="flex gap-1">
        {Array.from({ length: weeks }).map((_, weekIndex) => (
          <div key={weekIndex} className="flex flex-col gap-1">
            {Array.from({ length: days }).map((_, dayIndex) => {
              const opacity = Math.random()
              const delay = (weekIndex * days + dayIndex) * 0.01

              return (
                <motion.div
                  key={dayIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity }}
                  transition={{ duration: 0.5, delay }}
                  className="h-3 w-3 rounded-sm"
                  style={{
                    backgroundColor:
                      theme === "dark" ? `rgba(74, 222, 128, ${opacity})` : `rgba(34, 197, 94, ${opacity})`,
                  }}
                />
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

