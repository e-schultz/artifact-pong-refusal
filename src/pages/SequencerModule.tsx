import { useState } from 'react'
import { SequencerGrid } from '@/components/SequencerGrid'
import { TerminalChrome } from '@/components/TerminalChrome'
import { VisualLayer } from '@/components/VisualLayer'
import { ParallaxLayer } from '@/components/ParallaxLayer'
import { useSequencer } from '@/hooks/useSequencer'
import { useAudioEngine } from '@/hooks/useAudioEngine'
import { Play, Pause, RotateCcw, Shuffle } from 'lucide-react'
import { ScrollReveal } from '@/components/ScrollReveal'

export default function SequencerModule() {
  const gridSize = 16
  const {
    pattern,
    isPlaying,
    currentStep,
    bpm,
    toggleCell,
    clearPattern,
    randomizePattern,
    setIsPlaying,
    setBpm,
  } = useSequencer(gridSize, 140)

  const { isInitialized, initAudio, playGridNote } = useAudioEngine({
    bpm,
    volume: 0.3,
  })

  const [visualIntensity, setVisualIntensity] = useState(0)

  const handleCellClick = (x: number, y: number) => {
    if (!isInitialized) {
      initAudio()
    }
    toggleCell(x, y)
    playGridNote(x, y, gridSize)
    setVisualIntensity(1)
    setTimeout(() => setVisualIntensity(0), 100)
  }

  const handleCellTrigger = (x: number, y: number) => {
    playGridNote(x, y, gridSize)
    setVisualIntensity(1)
    setTimeout(() => setVisualIntensity(0), 50)
  }

  const handlePlayPause = () => {
    if (!isInitialized) {
      initAudio()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <ScrollReveal>
      <div className="min-h-screen bg-black text-white font-mono overflow-x-hidden">
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <ParallaxLayer speed={0.1} className="opacity-20">
            <div className="text-neon-cyan text-xs whitespace-pre leading-relaxed p-8">
              {`)) <> ((
BACK AND FORTH
BACK AND FORTH
BACK AND FORTH
FOR THE QUEERS WHO DON'T FIT YOUR POLITICS
FOR THE SEX WORKERS WHO TELL THE TRUTH
FOR THE ACTIVISTS WHO CALL OUT CULT SHIT
FOR THE COMMUNITY THAT SURVIVES TOGETHER`.repeat(3)}
            </div>
          </ParallaxLayer>

          <ParallaxLayer speed={0.3} className="opacity-10">
            <div className="text-neon-magenta text-[8px] whitespace-pre leading-relaxed p-12">
              {`DECORATIVE BODIES
1985 AIDS Crisis / Poodle Silkscreen
1995 Protease Inhibitors / Body Reclamation
2005 Miranda July / ))<>(( Emerges
2025 Cascade Failure / Fragment Rituals`.repeat(4)}
            </div>
          </ParallaxLayer>

          <ParallaxLayer speed={0.5} className="opacity-5">
            <div className="text-neon-lime text-[6px] whitespace-pre leading-relaxed p-16">
              {`pattern:: pattern_persistence | pattern:: conversation_archaeology
The "liminal hygiene interstice" first documented May–June 2025
Not bathroom humor but precise epistemological claim
the abject body as site where technocapitalism's demand breaks down`.repeat(5)}
            </div>
          </ParallaxLayer>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-8 max-w-6xl">
          <div className="mb-8 text-center">
            <h1 className="text-6xl font-bold mb-4 tracking-wider">
              <span className="text-neon-magenta">))</span>
              <span className="text-neon-cyan"> &lt;&gt; </span>
              <span className="text-neon-magenta">((</span>
            </h1>
            <p className="text-neon-cyan text-sm tracking-widest">
              TENORI-ON × REZ × TUI PARALLAX PUNK
            </p>
          </div>

          <TerminalChrome
            title="MATRIX SEQUENCER"
            status={isPlaying ? 'PLAYING' : 'READY'}
          >
            <div className="relative">
              <VisualLayer
                isActive={visualIntensity > 0}
                intensity={visualIntensity}
              />
              <SequencerGrid
                pattern={pattern}
                currentStep={currentStep}
                isPlaying={isPlaying}
                onCellClick={handleCellClick}
                onCellTrigger={handleCellTrigger}
              />
            </div>
          </TerminalChrome>

          <div className="mt-6 border-2 border-neon-lime bg-black p-4 shadow-[0_0_15px_hsl(var(--neon-lime)/0.2)]">
            <div className="flex flex-wrap gap-4 items-center justify-between">
              <div className="flex gap-2">
                <button
                  onClick={handlePlayPause}
                  className="px-6 py-3 bg-neon-magenta/80 hover:bg-neon-magenta border-2 border-neon-magenta text-white font-bold transition-all shadow-[0_0_10px_hsl(var(--neon-magenta)/0.3)] hover:shadow-[0_0_20px_hsl(var(--neon-magenta)/0.5)] flex items-center gap-2"
                >
                  {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                  {isPlaying ? 'PAUSE' : 'PLAY'}
                </button>

                <button
                  onClick={clearPattern}
                  className="px-4 py-3 bg-neon-cyan/20 hover:bg-neon-cyan/30 border-2 border-neon-cyan text-neon-cyan transition-all flex items-center gap-2"
                >
                  <RotateCcw size={18} />
                  CLEAR
                </button>

                <button
                  onClick={randomizePattern}
                  className="px-4 py-3 bg-neon-lime/20 hover:bg-neon-lime/30 border-2 border-neon-lime text-neon-lime transition-all flex items-center gap-2"
                >
                  <Shuffle size={18} />
                  RANDOM
                </button>
              </div>

              <div className="flex items-center gap-4">
                <label className="text-neon-cyan text-sm">BPM:</label>
                <input
                  type="range"
                  min="60"
                  max="200"
                  value={bpm}
                  onChange={(e) => setBpm(Number(e.target.value))}
                  className="w-32 accent-neon-magenta"
                />
                <span className="text-neon-magenta font-bold w-12">{bpm}</span>
              </div>
            </div>
          </div>

          <div className="mt-6 border-2 border-neon-orange bg-black p-6 shadow-[0_0_15px_hsl(var(--neon-orange)/0.2)]">
            <div className="text-neon-orange text-xs space-y-2">
              <div className="font-bold text-sm mb-3">
                $&gt; DISPATCH_PROTOCOL
              </div>
              <div className="text-neon-lime">
                <span className="text-neon-orange">●</span> CLICK GRID TO ACTIVATE CELLS
              </div>
              <div className="text-neon-cyan">
                <span className="text-neon-orange">●</span> PRESS PLAY TO START SEQUENCE
              </div>
              <div className="text-neon-magenta">
                <span className="text-neon-orange">●</span> ADJUST BPM FOR TEMPO CONTROL
              </div>
              <div className="text-neon-lime mt-4 pt-4 border-t border-neon-orange/30">
                NO BAD DAYS!!! NEW CITY PASSAGE! CONSCIOUSNESS_TECH
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-xs text-neon-cyan/60 space-y-1">
            <div>
              QUEER EPISTEMOLOGY VECTOR: Art film (2005) → GIF culture → Cascade failure
            </div>
            <div className="text-neon-magenta/60">
              The body refuses / The body refuses / The body refuses
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}
