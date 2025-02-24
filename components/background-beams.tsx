"use client"

import { useEffect, useRef } from "react"

export const BackgroundBeams = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const updateMousePosition = (ev: MouseEvent) => {
      if (!ref.current) return
      const { clientX, clientY } = ev
      ref.current.style.setProperty("--x", `${clientX}px`)
      ref.current.style.setProperty("--y", `${clientY}px`)
    }

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  return (
    <div ref={ref} className="pointer-events-none fixed inset-0 z-0 h-full w-full bg-slate-950" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_var(--x)_var(--y),rgba(29,78,216,0.15),transparent_80%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_var(--x)_var(--y),rgba(16,185,129,0.1),transparent_80%)]" />
    </div>
  )
}

