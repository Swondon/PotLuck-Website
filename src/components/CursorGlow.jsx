import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function CursorGlow() {
  const glowRef = useRef(null)

  useEffect(() => {
    const glow = glowRef.current
    if (!glow) return

    const handleMouseMove = (e) => {
      gsap.to(glow, {
        duration: 0.5,
        x: e.clientX,
        y: e.clientY,
        ease: 'power2.out'
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return <div ref={glowRef} className="cursor-glow" />
}
