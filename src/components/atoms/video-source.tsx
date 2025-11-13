// components/atoms/video-sequence.tsx
"use client"

import { useEffect, useRef } from "react"

type Props = {
  sources: string[] // e.g. ["/videos/a.mp4","/videos/b.mp4","/videos/c.mp4"]
  className?: string
  // optional poster (shown before first play)
  poster?: string
}

export function VideoSequence({ sources, className, poster }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const indexRef = useRef(0)

  useEffect(() => {
    const v = videoRef.current
    if (!v || !sources?.length) return

    let active = true

    const playCurrent = () => {
      if (!active) return
      // ensure index wraps
      if (indexRef.current >= sources.length) indexRef.current = 0
      const src = sources[indexRef.current]

      // Set src & reload
      v.src = src
      v.load()

      // Try to play as soon as it can
      const tryPlay = () => {
        // Safari/iOS sometimes needs a fresh play() call
        const p = v.play()
        if (p && typeof p.then === "function") {
          p.catch(() => {
            // If autoplay was somehow blocked, try again on next tick
            setTimeout(() => v.play().catch(() => {}), 50)
          })
        }
      }

      if (v.readyState >= 2) tryPlay()
      else v.addEventListener("canplay", tryPlay, { once: true })
    }

    const handleEnded = () => {
      indexRef.current = (indexRef.current + 1) % sources.length
      playCurrent()
    }

    v.addEventListener("ended", handleEnded)
    playCurrent()

    return () => {
      active = false
      v.removeEventListener("ended", handleEnded)
    }
  }, [sources])

  return (
    <video
      ref={videoRef}
      className={className}
      // autoplay needs muted + playsInline for mobile
      muted
      autoPlay
      playsInline
      // we handle the loop manually across the source list
      // so don't set loop on the element
      controls={false}
      preload="auto"
      poster={poster}
    />
  )
}
