"use client"

import { useEffect, useMemo, useRef, useState } from "react"

// Deterministic pseudo-data so server & client render identically
function series(seed: number, n: number, base: number, amp: number) {
  const out: number[] = []
  let v = base
  for (let i = 0; i < n; i++) {
    const wobble = Math.sin((i + seed) * 0.8) * amp + Math.cos((i + seed) * 0.37) * amp * 0.5
    v = base + wobble
    out.push(v)
  }
  return out
}

function toPath(data: number[], w: number, h: number, pad = 6) {
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1
  const step = (w - pad * 2) / (data.length - 1)
  return data
    .map((d, i) => {
      const x = pad + i * step
      const y = pad + (h - pad * 2) * (1 - (d - min) / range)
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`
    })
    .join(" ")
}

const bars = [
  { label: "parse", value: 82, color: "var(--color-syntax-mint)" },
  { label: "infer", value: 64, color: "var(--color-latency-peach)" },
  { label: "trace", value: 91, color: "var(--color-qubit-orchid)" },
  { label: "emit", value: 47, color: "var(--color-packet-sky)" },
  { label: "cache", value: 73, color: "var(--color-cache-sand)" },
  { label: "build", value: 58, color: "var(--color-core-coral)" },
]

export function ProductWidget() {
  const ref = useRef<HTMLDivElement>(null)
  const [live, setLive] = useState(false)
  const [tick, setTick] = useState(0)

  const W = 640
  const H = 220

  const coral = useMemo(() => series(tick, 24, 120, 34), [tick])
  const sand = useMemo(() => series(tick + 4, 24, 90, 24), [tick])
  const ink = useMemo(() => series(tick + 9, 24, 60, 16), [tick])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setLive(true)
          io.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // Live data refresh loop
  useEffect(() => {
    if (!live) return
    const id = setInterval(() => setTick((t) => t + 1), 2600)
    return () => clearInterval(id)
  }, [live])

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-[20px] border border-white/5 bg-obsidian-depth p-6 sm:p-8"
      style={{ boxShadow: "var(--shadow-card-soft)" }}
    >
      {/* header row */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-core-coral" />
            <span className="size-2.5 rounded-full bg-signal-amber" />
            <span className="size-2.5 rounded-full bg-verdant-pass" />
          </div>
          <span className="font-mono text-[12px] uppercase tracking-[0.75px] text-paper-cream/50">
            trace.session — live
          </span>
        </div>
        <span className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.75px] text-syntax-mint">
          <span className="size-2 animate-pulse rounded-full bg-verdant-pass" />
          streaming
        </span>
      </div>

      {/* line chart */}
      <div className="relative">
        <svg viewBox={`0 0 ${W} ${H}`} className="h-[200px] w-full" preserveAspectRatio="none">
          {[0.25, 0.5, 0.75].map((g) => (
            <line
              key={g}
              x1="0"
              x2={W}
              y1={H * g}
              y2={H * g}
              stroke="rgba(247,246,245,0.06)"
              strokeWidth="1"
            />
          ))}
          {live && (
            <>
              <path
                key={`c-${tick}`}
                d={toPath(coral, W, H)}
                fill="none"
                stroke="var(--color-core-coral)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ns-draw"
                style={{ ["--dash" as string]: "1600" }}
              />
              <path
                key={`s-${tick}`}
                d={toPath(sand, W, H)}
                fill="none"
                stroke="var(--color-cache-sand)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ns-draw"
                style={{ ["--dash" as string]: "1600", animationDelay: "0.15s" }}
              />
              <path
                key={`i-${tick}`}
                d={toPath(ink, W, H)}
                fill="none"
                stroke="rgba(247,246,245,0.35)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ns-draw"
                style={{ ["--dash" as string]: "1600", animationDelay: "0.3s" }}
              />
            </>
          )}
        </svg>
      </div>

      {/* time-distribution bars */}
      <div className="mt-6 flex items-end justify-between gap-3">
        {bars.map((b, i) => (
          <div key={b.label} className="flex flex-1 flex-col items-center gap-2">
            <div className="flex h-24 w-full items-end justify-center">
              <div
                className={live ? "ns-grow w-full rounded-t-md" : "w-full rounded-t-md"}
                style={{
                  height: `${b.value}%`,
                  background: b.color,
                  animationDelay: `${i * 0.08}s`,
                }}
              />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.75px] text-paper-cream/40">
              {b.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
