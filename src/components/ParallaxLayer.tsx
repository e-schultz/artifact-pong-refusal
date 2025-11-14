import { useEffect, useRef } from 'react'

interface ParallaxLayerProps {
  speed: number
  children: React.ReactNode
  className?: string
}

export function ParallaxLayer({
  speed,
  children,
  className = '',
}: ParallaxLayerProps) {
  const layerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (layerRef.current) {
        const scrollY = window.scrollY
        layerRef.current.style.transform = `translateY(${scrollY * speed}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return (
    <div ref={layerRef} className={`absolute inset-0 ${className}`}>
      {children}
    </div>
  )
}
