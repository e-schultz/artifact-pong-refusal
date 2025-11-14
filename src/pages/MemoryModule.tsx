import { useState, useEffect } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';

export default function MemoryModule() {
  const [fragments, setFragments] = useState<string[]>([]);
  const [currentFragment, setCurrentFragment] = useState(0);

  const memoryFragments = [
    'childhood.bedroom.wallpaper',
    'first.kiss.parking.lot',
    'grandmother.recipe.kitchen',
    'deleted.photo.2019.summer',
    'dream.sequence.recurring',
    'password.forgotten.account',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFragments(prev => {
        const newFragments = [...prev];
        if (newFragments.length < memoryFragments.length) {
          newFragments.push(memoryFragments[newFragments.length]);
        }
        return newFragments;
      });
      setCurrentFragment(prev => (prev + 1) % memoryFragments.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-foreground p-4 md:p-8 space-y-16 max-w-5xl mx-auto">
      <ScrollReveal>
        <div className="border-4 border-neon-green border-glow-green p-8 md:p-12 bg-black/90">
          <div className="text-xs text-neon-green glow-green mb-6 tracking-[0.3em] uppercase">
            Module: 010-Memory
          </div>
          <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight">
            <span className="text-neon-green glow-green">MEMORY</span>
            <br />
            <span className="text-neon-cyan glow-cyan">FRAGMENTS</span>
          </h1>
          <div className="text-foreground/80 text-sm md:text-base leading-relaxed space-y-3 max-w-2xl">
            <p>What you remember isn't what happened. What you forget isn't gone.</p>
            <p>
              Every recall is a{' '}
              <span className="text-neon-green glow-green font-bold">reconstruction</span>. Every save is{' '}
              <span className="text-neon-green glow-green font-bold">lossy compression</span>.
            </p>
            <p>Memory is not storage. Memory is infrastructure in constant flux.</p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="border-4 border-neon-cyan border-glow-cyan p-8 md:p-12 bg-black/90">
          <div className="text-xs text-neon-cyan glow-cyan tracking-[0.3em] uppercase mb-6">
            Fragment Registry
          </div>

          <div className="space-y-3">
            <AnimatePresence>
              {fragments.map((fragment, i) => (
                <motion.div
                  key={fragment}
                  initial={{ opacity: 0, x: -40, scale: 0.9 }}
                  animate={{ 
                    opacity: currentFragment === i ? 1 : 0.4, 
                    x: 0,
                    scale: currentFragment === i ? 1 : 0.95
                  }}
                  transition={{ duration: 0.5 }}
                  className={`p-4 border font-mono text-sm transition-all duration-500 ${
                    currentFragment === i
                      ? 'border-neon-green bg-neon-green/20 border-glow-green'
                      : 'border-neon-green/20 bg-black/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={currentFragment === i ? 'text-neon-green glow-green' : 'text-muted-foreground'}
                    >
                      {fragment}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {currentFragment === i ? '● ACTIVE' : '○ DORMANT'}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <div className="border-4 border-neon-magenta border-glow-magenta p-8 md:p-12 bg-black/90">
          <div className="text-xs text-neon-magenta glow-magenta tracking-[0.3em] uppercase mb-6">
            Digital vs Biological
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="text-neon-cyan glow-cyan font-bold mb-3">DIGITAL STORAGE</div>
              {[
                { label: 'Accuracy', value: 100 },
                { label: 'Permanence', value: 95 },
                { label: 'Emotion', value: 0 },
                { label: 'Context', value: 30 },
              ].map((item, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-foreground/70">{item.label}</span>
                    <span className="text-neon-cyan">{item.value}%</span>
                  </div>
                  <div className="h-2 bg-black border border-neon-cyan/40 rounded overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-neon-cyan to-neon-blue"
                      initial={{ width: 0 }}
                      animate={{ width: `${item.value}%` }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div className="text-neon-magenta glow-magenta font-bold mb-3">BIOLOGICAL MEMORY</div>
              {[
                { label: 'Accuracy', value: 45 },
                { label: 'Permanence', value: 60 },
                { label: 'Emotion', value: 100 },
                { label: 'Context', value: 95 },
              ].map((item, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-foreground/70">{item.label}</span>
                    <span className="text-neon-magenta">{item.value}%</span>
                  </div>
                  <div className="h-2 bg-black border border-neon-magenta/40 rounded overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-neon-magenta to-neon-purple"
                      initial={{ width: 0 }}
                      animate={{ width: `${item.value}%` }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 p-4 border-l-4 border-neon-green bg-neon-green/5 text-sm italic">
            Photos preserve <span className="text-neon-cyan glow-cyan font-bold not-italic">pixels</span>.
            <br />
            Memories preserve <span className="text-neon-magenta glow-magenta font-bold not-italic">
              meaning
            </span>.
            <br />
            Neither is complete without the other.
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.4}>
        <div className="border-4 border-neon-orange border-glow-orange p-8 md:p-12 bg-black/90">
          <div className="text-xs text-neon-orange glow-orange tracking-[0.3em] uppercase mb-6">
            Decay Timeline
          </div>

          <div className="space-y-6">
            {[
              { time: 'SECONDS', retention: 100, note: 'Working memory peak' },
              { time: 'HOURS', retention: 70, note: 'Initial consolidation' },
              { time: 'DAYS', retention: 45, note: 'Sleep-dependent solidification' },
              { time: 'MONTHS', retention: 30, note: 'Emotional salience matters' },
              { time: 'YEARS', retention: 15, note: 'Fragments remain, details fade' },
            ].map((stage, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-24 text-neon-orange glow-orange font-bold text-sm">{stage.time}</div>
                <div className="flex-1">
                  <div className="h-3 bg-black border border-neon-orange/40 rounded overflow-hidden mb-1">
                    <div
                      className="h-full bg-gradient-to-r from-neon-orange to-neon-red transition-all duration-1000"
                      style={{ width: `${stage.retention}%` }}
                    />
                  </div>
                  <div className="text-xs text-foreground/60">{stage.note}</div>
                </div>
                <div className="w-16 text-right text-neon-orange text-sm">{stage.retention}%</div>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.5}>
        <div className="border-4 border-neon-cyan border-glow-cyan p-8 md:p-12 bg-black/90 text-center">
          <div className="text-xs text-neon-cyan glow-cyan tracking-[0.3em] uppercase mb-6">
            Preservation Protocol
          </div>
          <div className="text-sm md:text-base text-foreground/80 leading-relaxed space-y-3 max-w-2xl mx-auto">
            <p>
              Write things down. Not to remember perfectly, but to{' '}
              <span className="text-neon-cyan glow-cyan font-bold">remember to remember</span>.
            </p>
            <p>
              Digital archives preserve data. <span className="text-neon-green glow-green font-bold">Stories</span>{' '}
              preserve meaning.
            </p>
            <p>Memory infrastructure serves the living, not the archive.</p>
          </div>
          <div className="mt-6 text-xs text-muted-foreground font-mono">
            [protocol::memory-sovereignty] [status::active]
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
