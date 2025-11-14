import { useEffect, useState } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { motion } from 'framer-motion';

export default function SleepModule() {
  const [sleepPhase, setSleepPhase] = useState(0);
  const phases = ['AWAKE', 'LIGHT', 'DEEP', 'REM'];

  useEffect(() => {
    const interval = setInterval(() => {
      setSleepPhase(prev => (prev + 1) % phases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-foreground p-4 md:p-8 space-y-16 max-w-5xl mx-auto">
      <ScrollReveal>
        <div className="border-4 border-neon-purple border-glow-magenta p-8 md:p-12 bg-black/90">
          <div className="text-xs text-neon-purple mb-6 tracking-[0.3em] uppercase" 
            style={{ textShadow: '0 0 20px hsl(var(--neon-purple) / 0.5)' }}>
            Module: 009-Sleep
          </div>
          <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight">
            <span className="text-neon-purple" style={{ textShadow: '0 0 30px hsl(var(--neon-purple) / 0.6)' }}>
              SLEEP
            </span>
            <br />
            <span className="text-neon-blue glow-cyan">ARCHITECTURE</span>
          </h1>
          <div className="text-foreground/80 text-sm md:text-base leading-relaxed space-y-3 max-w-2xl">
            <p>The only biological imperative capitalism hasn't fully colonized.</p>
            <p>
              Eight hours offline. Consciousness{' '}
              <span className="text-neon-purple font-bold" style={{ textShadow: '0 0 20px hsl(var(--neon-purple) / 0.5)' }}>
                suspended
              </span>
              . Systems{' '}
              <span className="text-neon-purple font-bold" style={{ textShadow: '0 0 20px hsl(var(--neon-purple) / 0.5)' }}>
                regenerating
              </span>
              .
            </p>
            <p>The body demands downtime. The infrastructure must honor it.</p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="border-4 border-neon-blue border-glow-cyan p-8 md:p-12 bg-black/90">
          <div className="text-xs text-neon-blue glow-cyan tracking-[0.3em] uppercase mb-6">
            Sleep Cycle Monitor
          </div>

          <div className="grid grid-cols-4 gap-4 mb-8">
            {phases.map((phase, i) => (
              <div
                key={phase}
                className={`p-4 border-2 text-center transition-all duration-500 ${
                  sleepPhase === i ? 'border-neon-purple bg-neon-purple/20' : 'border-neon-purple/20 bg-black/50'
                }`}
                style={{
                  boxShadow: sleepPhase === i ? '0 0 30px hsl(var(--neon-purple) / 0.4)' : 'none',
                }}
              >
                <div
                  className={`text-sm font-bold transition-all duration-500 ${
                    sleepPhase === i ? 'text-neon-purple scale-110' : 'text-muted-foreground'
                  }`}
                  style={{
                    textShadow: sleepPhase === i ? '0 0 20px hsl(var(--neon-purple) / 0.6)' : 'none',
                  }}
                >
                  {phase}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="w-32 text-neon-purple">Wave Pattern:</span>
              <div className="flex-1 h-16 border border-neon-purple/40 rounded overflow-hidden relative">
                {Array(20)
                  .fill(0)
                  .map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute bottom-0 w-1 bg-neon-purple"
                      style={{
                        left: `${i * 5}%`,
                        height: `${30 + Math.sin(i * 0.5 + sleepPhase * 2) * 20}%`,
                        boxShadow: '0 0 10px hsl(var(--neon-purple))',
                      }}
                      animate={{
                        height: `${30 + Math.sin(i * 0.5 + sleepPhase * 2) * 20}%`,
                      }}
                      transition={{ duration: 0.5 }}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <div className="border-4 border-neon-magenta border-glow-magenta p-8 md:p-12 bg-black/90">
          <div className="text-xs text-neon-magenta glow-magenta tracking-[0.3em] uppercase mb-6">
            Screen Time Impact
          </div>

          <div className="space-y-6">
            {[
              { hour: '21:00', blue_light: 85, melatonin: 45 },
              { hour: '22:00', blue_light: 92, melatonin: 30 },
              { hour: '23:00', blue_light: 95, melatonin: 15 },
              { hour: '00:00', blue_light: 88, melatonin: 10 },
            ].map((data, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="space-y-2"
              >
                <div className="text-neon-magenta glow-magenta text-sm font-bold">{data.hour}</div>
                <div className="flex items-center gap-3 text-xs">
                  <span className="w-24 text-foreground/70">Blue Light:</span>
                  <div className="flex-1 h-2 bg-black border border-neon-blue/40 rounded overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-neon-blue to-neon-cyan"
                      style={{ width: `${data.blue_light}%` }}
                    />
                  </div>
                  <span className="w-12 text-right text-neon-blue">{data.blue_light}%</span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <span className="w-24 text-foreground/70">Melatonin:</span>
                  <div className="flex-1 h-2 bg-black border border-neon-purple/40 rounded overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-neon-purple to-neon-magenta"
                      style={{ width: `${data.melatonin}%` }}
                    />
                  </div>
                  <span className="w-12 text-right text-neon-purple">{data.melatonin}%</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 p-4 border-l-4 border-neon-magenta bg-neon-magenta/5 text-sm italic">
            Every screen before bed is a{' '}
            <span className="text-neon-magenta glow-magenta font-bold not-italic">sleep tax</span>.
            <br />
            The circadian system doesn't negotiate.
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.4}>
        <div className="border-4 border-neon-cyan border-glow-cyan p-8 md:p-12 bg-black/90 text-center">
          <div className="text-xs text-neon-cyan glow-cyan tracking-[0.3em] uppercase mb-6">
            Recovery Protocol
          </div>
          <div className="text-sm md:text-base text-foreground/80 leading-relaxed space-y-3 max-w-2xl mx-auto">
            <p>Screens off two hours before sleep.</p>
            <p>
              Your brain needs <span className="text-neon-cyan glow-cyan font-bold">darkness</span> to produce
              melatonin.
            </p>
            <p>
              Sleep is not <span className="text-neon-cyan glow-cyan font-bold">downtime</span>—it's{' '}
              <span className="text-neon-cyan glow-cyan font-bold">maintenance</span>.
            </p>
          </div>
          <div className="mt-6 text-xs text-muted-foreground font-mono">
            [protocol::circadian-sovereignty] [status::active]
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
