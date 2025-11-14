import { useEffect, useRef } from 'react'

interface VisualLayerProps {
  isActive: boolean
  intensity: number
}

export function VisualLayer({ isActive, intensity }: VisualLayerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<
    Array<{
      x: number
      y: number
      vx: number
      vy: number
      life: number
      color: string
    }>
  >([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    let animationId: number

    const animate = () => {
      if (!ctx || !canvas) return

      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particlesRef.current = particlesRef.current.filter((p) => {
        p.x += p.vx
        p.y += p.vy
        p.life -= 0.01

        if (p.life > 0) {
          ctx.fillStyle = p.color
          ctx.globalAlpha = p.life
          ctx.fillRect(p.x, p.y, 3, 3)
          ctx.globalAlpha = 1
          return true
        }
        return false
      })

      if (isActive && Math.random() > 0.7) {
        const colors = ['#00ffff', '#ff00ff', '#00ff00']
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          life: 1,
          color: colors[Math.floor(Math.random() * colors.length)],
        })
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [isActive, intensity])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{
        width: '100%',
        height: '100%',
      }}
    />
  )
}
