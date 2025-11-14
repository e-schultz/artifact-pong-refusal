import { useEffect, useState } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { motion } from 'framer-motion';

export default function AttentionModule() {
  const [focusLevel, setFocusLevel] = useState(100);
  const [distractions, setDistractions] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFocusLevel(prev => Math.max(20, prev - Math.random() * 5));
      setDistractions(prev => Math.min(99, prev + Math.random() * 3));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-foreground p-4 md:p-8 space-y-16 max-w-5xl mx-auto">
      <ScrollReveal>
        <div className="border-4 border-neon-orange border-glow-orange p-8 md:p-12 bg-black/90">
          <div className="text-xs text-neon-orange glow-orange mb-6 tracking-[0.3em] uppercase">
            Module: 008-Attention
          </div>
          <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight">
            <span className="text-neon-orange glow-orange">THE ATTENTION</span>
            <br />
            <span className="text-neon-red glow-red">ECONOMY</span>
          </h1>
          <div className="text-foreground/80 text-sm md:text-base leading-relaxed space-y-3 max-w-2xl">
            <p>Your focus is the product. Your distraction is the business model.</p>
            <p>
              Every notification is an <span className="text-neon-orange glow-orange font-bold">interruption protocol</span>.
              Every scroll is a <span className="text-neon-orange glow-orange font-bold">dopamine transaction</span>.
            </p>
            <p>The infrastructure of distraction runs deep.</p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="border-4 border-neon-red border-glow-red p-8 md:p-12 bg-black/90">
          <div className="text-xs text-neon-red glow-red tracking-[0.3em] uppercase mb-6">
            Real-Time Metrics
          </div>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2 text-sm">
                <span className="text-foreground/70">Focus Remaining</span>
                <span className="text-neon-orange glow-orange font-bold">{focusLevel.toFixed(0)}%</span>
              </div>
              <div className="h-4 bg-black border border-neon-orange/40 rounded overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-neon-orange to-neon-red"
                  initial={{ width: "100%" }}
                  animate={{ width: `${focusLevel}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2 text-sm">
                <span className="text-foreground/70">Distraction Load</span>
                <span className="text-neon-red glow-red font-bold">{distractions.toFixed(0)}%</span>
              </div>
              <div className="h-4 bg-black border border-neon-red/40 rounded overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-neon-red to-neon-magenta"
                  animate={{ width: `${distractions}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <div className="border-4 border-neon-magenta border-glow-magenta p-8 md:p-12 bg-black/90">
          <div className="text-xs text-neon-magenta glow-magenta tracking-[0.3em] uppercase mb-6">
            Notification Archaeology
          </div>
          
          <div className="space-y-4">
            {[
              { time: "09:23", source: "EMAIL", urgency: "HIGH" },
              { time: "09:24", source: "SLACK", urgency: "MEDIUM" },
              { time: "09:24", source: "TWITTER", urgency: "LOW" },
              { time: "09:25", source: "EMAIL", urgency: "HIGH" },
              { time: "09:26", source: "CALENDAR", urgency: "CRITICAL" },
            ].map((notif, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-4 p-4 border border-neon-magenta/30 bg-neon-magenta/5 font-mono text-xs"
              >
                <span className="text-neon-magenta glow-magenta">{notif.time}</span>
                <span className="flex-1 text-foreground/70">{notif.source}</span>
                <span 
                  className="font-bold"
                  style={{
                    color: notif.urgency === "CRITICAL" ? "hsl(var(--neon-red))" : 
                           notif.urgency === "HIGH" ? "hsl(var(--neon-orange))" : 
                           "hsl(var(--neon-cyan))"
                  }}
                >
                  {notif.urgency}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 p-4 border-l-4 border-neon-magenta bg-neon-magenta/5 text-sm italic">
            Every ping is a <span className="text-neon-magenta glow-magenta font-bold not-italic">cognitive tax</span>.
            <br />
            The cost accumulates. The debt compounds.
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.4}>
        <div className="border-4 border-neon-cyan border-glow-cyan p-8 md:p-12 bg-black/90 text-center">
          <div className="text-xs text-neon-cyan glow-cyan tracking-[0.3em] uppercase mb-6">
            Resistance Protocol
          </div>
          <div className="text-sm md:text-base text-foreground/80 leading-relaxed space-y-3 max-w-2xl mx-auto">
            <p>Turn off notifications. All of them.</p>
            <p>
              Your attention is <span className="text-neon-cyan glow-cyan font-bold">finite</span>. Treat it like the
              resource it is.
            </p>
            <p>
              Build infrastructure that <span className="text-neon-cyan glow-cyan font-bold">protects</span> instead of
              extracts.
            </p>
          </div>
          <div className="mt-6 text-xs text-muted-foreground font-mono">
            [protocol::attention-sovereignty] [status::active]
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
