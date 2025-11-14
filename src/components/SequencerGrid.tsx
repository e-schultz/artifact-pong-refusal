import { useEffect } from 'react'

interface SequencerGridProps {
  pattern: boolean[][]
  currentStep: number
  isPlaying: boolean
  onCellClick: (x: number, y: number) => void
  onCellTrigger?: (x: number, y: number) => void
}

export function SequencerGrid({
  pattern,
  currentStep,
  isPlaying,
  onCellClick,
  onCellTrigger,
}: SequencerGridProps) {
  const gridSize = pattern.length

  useEffect(() => {
    if (isPlaying && onCellTrigger) {
      for (let y = 0; y < gridSize; y++) {
        if (pattern[y][currentStep]) {
          onCellTrigger(currentStep, y)
        }
      }
    }
  }, [currentStep, isPlaying, pattern, gridSize, onCellTrigger])

  return (
    <div className="relative p-8">
      <div
        className="grid gap-1"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
        }}
      >
        {pattern.map((row, y) =>
          row.map((isActive, x) => {
            const isCurrentStep = x === currentStep && isPlaying
            const isTriggered = isCurrentStep && isActive

            return (
              <button
                key={`${x}-${y}`}
                onClick={() => onCellClick(x, y)}
                className={`
                  aspect-square border-2 transition-all duration-100
                  ${isActive ? 'bg-neon-cyan border-neon-cyan' : 'bg-black border-neon-cyan/20'}
                  ${isCurrentStep ? 'border-neon-magenta shadow-[0_0_10px_hsl(var(--neon-magenta)/0.5)]' : ''}
                  ${isTriggered ? 'bg-neon-magenta shadow-[0_0_20px_hsl(var(--neon-magenta)/0.8)]' : ''}
                  hover:border-neon-cyan hover:shadow-[0_0_10px_hsl(var(--neon-cyan)/0.3)]
                  active:scale-95
                `}
                style={{
                  minWidth: '20px',
                  minHeight: '20px',
                }}
              />
            )
          }),
        )}
      </div>

      {isPlaying && (
        <div
          className="absolute top-0 bottom-0 w-1 bg-neon-magenta opacity-30 pointer-events-none transition-all duration-100"
          style={{
            left: `calc(${(currentStep / gridSize) * 100}% + 2rem)`,
          }}
        />
      )}
    </div>
  )
}
