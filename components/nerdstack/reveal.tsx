"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

type RevealProps = {
  children: ReactNode
  /** delay in ms before the reveal animation runs */
  delay?: number
  /** translate distance in px for the entrance */
  y?: number
  className?: string
  as?: "div" | "section" | "span" | "li" | "h1" | "h2" | "h3" | "p"
}

export function Reveal({ children, delay = 0, y = 24, className = "", as = "div" }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const Tag = as as any

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </Tag>
  )
}
