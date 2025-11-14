import { useEffect, useRef, useState } from 'react'

interface AudioEngineConfig {
  bpm: number
  volume: number
}

export function useAudioEngine(
  config: AudioEngineConfig = { bpm: 120, volume: 0.3 },
) {
  const audioContextRef = useRef<AudioContext | null>(null)
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close()
      }
    }
  }, [])

  const initAudio = () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext ||
        (window as any).webkitAudioContext)()
      setIsInitialized(true)
    }
  }

  const playNote = (
    frequency: number,
    duration: number = 0.1,
    type: 'sine' | 'square' | 'sawtooth' | 'triangle' = 'sine',
  ) => {
    if (!audioContextRef.current) return

    const ctx = audioContextRef.current
    const oscillator = ctx.createOscillator()
    const gainNode = ctx.createGain()

    oscillator.type = type
    oscillator.frequency.setValueAtTime(frequency, ctx.currentTime)

    gainNode.gain.setValueAtTime(config.volume, ctx.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration)

    oscillator.connect(gainNode)
    gainNode.connect(ctx.destination)

    oscillator.start(ctx.currentTime)
    oscillator.stop(ctx.currentTime + duration)
  }

  const playGridNote = (x: number, y: number, gridSize: number = 16) => {
    // Map grid position to frequency (pentatonic scale)
    const baseFreq = 220 // A3
    const scale = [1, 9 / 8, 5 / 4, 3 / 2, 5 / 3, 2] // Pentatonic ratios
    const octaves = 3

    const scaleIndex = y % scale.length
    const octave = Math.floor(y / scale.length)
    const frequency =
      baseFreq * scale[scaleIndex] * Math.pow(2, octave / octaves)

    // Vary timbre based on x position
    const types: Array<'sine' | 'square' | 'sawtooth' | 'triangle'> = [
      'sine',
      'triangle',
      'sawtooth',
      'square',
    ]
    const typeIndex = Math.floor((x / gridSize) * types.length)
    const type = types[typeIndex]

    playNote(frequency, 0.15, type)
  }

  return {
    isInitialized,
    initAudio,
    playNote,
    playGridNote,
    audioContext: audioContextRef.current,
  }
}
