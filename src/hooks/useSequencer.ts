import { useState, useEffect, useRef, useCallback } from 'react'

interface SequencerState {
  pattern: boolean[][]
  isPlaying: boolean
  currentStep: number
  bpm: number
}

export function useSequencer(gridSize: number = 16, initialBpm: number = 120) {
  const [pattern, setPattern] = useState<boolean[][]>(() =>
    Array(gridSize)
      .fill(null)
      .map(() => Array(gridSize).fill(false)),
  )
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [bpm, setBpm] = useState(initialBpm)
  const intervalRef = useRef<number | null>(null)

  const toggleCell = useCallback((x: number, y: number) => {
    setPattern((prev) => {
      const newPattern = prev.map((row) => [...row])
      newPattern[y][x] = !newPattern[y][x]
      return newPattern
    })
  }, [])

  const clearPattern = useCallback(() => {
    setPattern(
      Array(gridSize)
        .fill(null)
        .map(() => Array(gridSize).fill(false)),
    )
  }, [gridSize])

  const randomizePattern = useCallback(() => {
    setPattern(
      Array(gridSize)
        .fill(null)
        .map(() =>
          Array(gridSize)
            .fill(null)
            .map(() => Math.random() > 0.85),
        ),
    )
  }, [gridSize])

  useEffect(() => {
    if (isPlaying) {
      const interval = ((60 / bpm) * 1000) / 4 // 16th notes
      intervalRef.current = window.setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % gridSize)
      }, interval)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPlaying, bpm, gridSize])

  return {
    pattern,
    isPlaying,
    currentStep,
    bpm,
    toggleCell,
    clearPattern,
    randomizePattern,
    setIsPlaying,
    setBpm,
  }
}
