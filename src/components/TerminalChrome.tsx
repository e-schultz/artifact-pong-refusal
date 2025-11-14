interface TerminalChromeProps {
  title?: string
  status?: string
  children: React.ReactNode
}

export function TerminalChrome({
  title = 'MATRIX SEQUENCER',
  status = 'OPERATIONAL',
  children,
}: TerminalChromeProps) {
  return (
    <div className="relative border-4 border-neon-cyan bg-black shadow-[0_0_20px_hsl(var(--neon-cyan)/0.3)]">
      <div className="border-b-2 border-neon-cyan bg-black px-4 py-2 flex justify-between items-center font-mono text-sm">
        <div className="text-neon-cyan font-bold tracking-wider">{title}</div>
        <div className="flex items-center gap-4">
          <div className="text-neon-lime animate-pulse">● {status}</div>
        </div>
      </div>

      <div className="relative">{children}</div>

      <div className="border-t-2 border-neon-magenta bg-black px-4 py-2 font-mono text-xs text-neon-magenta">
        <div className="flex justify-between">
          <span>MODULE: SEQUENCER</span>
          <span className="text-neon-cyan">CONSCIOUSNESS_TECH</span>
        </div>
      </div>
    </div>
  )
}
