import { useEffect, useState } from 'react';

export function BodyRefusesModule() {
  const [scrollPos, setScrollPos] = useState(0);
  const [activeEra, setActiveEra] = useState<number | null>(null);
  const [refusalPulse, setRefusalPulse] = useState(0);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [gridPulse, setGridPulse] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRefusalPulse((prev) => (prev + 1) % 4);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const gridInterval = setInterval(() => {
      setGridPulse((prev) => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(gridInterval);
  }, []);

  const eras = [
    {
      year: '1985',
      event: 'AIDS Crisis / Poodle Silkscreen',
      color: 'neon-magenta',
      concept: 'The body as emergency. Survival as refusal.',
      visual: (
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-3 gap-2">
            {Array(9)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="aspect-square bg-gradient-to-br from-neon-magenta to-neon-purple rounded-sm transition-all duration-500"
                  style={{
                    opacity: 0.4 + Math.sin(i * 0.5 + scrollPos * 0.01) * 0.3,
                    transform: `scale(${0.85 + Math.sin(i * 0.7 + scrollPos * 0.015) * 0.15})`,
                  }}
                />
              ))}
          </div>
          <div className="text-neon-magenta glow-magenta text-center text-sm tracking-wider">
            ▓▓▓ SILKSCREEN LAYERS ▓▓▓
          </div>
        </div>
      ),
    },
    {
      year: '1995',
      event: 'Protease Inhibitors / Body Reclamation',
      color: 'neon-cyan',
      concept: 'The body as treatment site. Chemistry as care.',
      visual: (
        <div className="p-6 space-y-4">
          <div className="relative h-3 bg-black border border-neon-cyan/30 rounded-sm overflow-hidden">
            <div
              className="absolute h-full bg-gradient-to-r from-neon-cyan to-neon-blue transition-all duration-1000"
              style={{ width: `${85 + Math.sin(scrollPos * 0.02) * 10}%` }}
            />
          </div>
          <div className="text-xs text-neon-cyan space-y-2 font-mono">
            <div className="flex justify-between">
              <span>molecular:</span>
              <span className="glow-cyan">▓▓▓▓░ 85%</span>
            </div>
            <div className="flex justify-between">
              <span>efficacy:</span>
              <span className="glow-cyan">▓▓▓▓▓ 100%</span>
            </div>
            <div className="flex justify-between">
              <span>integration:</span>
              <span className="text-neon-cyan/50">▓▓░░░ 42%</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      year: '2005',
      event: 'Miranda July / ))><(( Emerges',
      color: 'neon-green',
      concept: 'Relationality as epistemology. Chat window as philosophy.',
      visual: (
        <div className="p-6 font-mono text-sm text-neon-green space-y-3">
          <div className="text-2xl glow-green text-center animate-pulse-glow">{'))><(('}</div>
          <div className="text-muted-foreground text-xs text-center border-t border-b border-neon-green/20 py-2">
            back and forth
          </div>
          <div className="space-y-1 text-xs">
            <div className="flex items-center gap-2">
              <span className="text-neon-green">→</span>
              <span>intimacy = transfer</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-neon-green">→</span>
              <span>meaning = movement</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-neon-green">→</span>
              <span>consciousness = connection</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      year: '2025',
      event: 'Cascade Failure / Fragment Rituals',
      color: 'neon-orange',
      concept: 'The body refuses. Infrastructure as refusal.',
      visual: (
        <div className="p-6">
          <div className="grid grid-cols-5 gap-1">
            {Array(45)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="aspect-square border border-neon-orange transition-all duration-200"
                  style={{
                    opacity: Math.abs(Math.sin(i * 0.3 + gridPulse * 0.1)) * 0.8 + 0.2,
                    borderColor: `hsl(30 100% ${30 + Math.sin(i * 0.5 + gridPulse * 0.1) * 20}%)`,
                  }}
                />
              ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-black text-foreground overflow-x-hidden">
      {/* Animated Background Pattern */}
      <div
        className="fixed inset-0 pointer-events-none opacity-5 z-0"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--neon-cyan)) 2px, hsl(var(--neon-cyan)) 3px)`,
          transform: `translateY(${scrollPos * 0.1}px)`,
        }}
      />

      {/* BACK AND FORTH Background */}
      <div
        className="fixed inset-0 pointer-events-none flex items-center justify-center z-0"
        style={{
          opacity: 0.08 + Math.sin(scrollPos * 0.003) * 0.04,
        }}
      >
        <div className="space-y-12 text-6xl font-black tracking-[0.3em] text-muted">
          {['BACK', 'AND', 'FORTH'].map((word, i) => (
            <div
              key={i}
              className="transition-transform duration-300"
              style={{
                transform: `translateX(${Math.sin(scrollPos * 0.008 + i * 1.2) * 120}px)`,
              }}
            >
              {word}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 p-4 md:p-8 space-y-16 max-w-5xl mx-auto">
        {/* Hero Module */}
        <div className="border-4 border-neon-cyan border-glow-cyan p-8 md:p-12 bg-black/90 backdrop-blur-sm">
          <div className="text-xs text-neon-cyan glow-cyan mb-6 tracking-[0.3em] uppercase">
            Module: 007-Refusal
          </div>
          <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight">
            <span className="text-neon-magenta glow-magenta">THE BODY</span>
            <br />
            <span className="text-neon-cyan glow-cyan">REFUSES</span>
          </h1>
          <div className="text-neon-cyan/80 text-sm md:text-base leading-relaxed space-y-3 max-w-2xl">
            <p>Not productivity. Not optimization. Not heat death.</p>
            <p>
              The site where <span className="text-neon-cyan glow-cyan font-bold">consciousness technology</span> meets{' '}
              <span className="text-neon-cyan glow-cyan font-bold">actual corporeal refusal</span>.
            </p>
            <p>
              Liminal hygiene as{' '}
              <span className="text-neon-cyan glow-cyan font-bold">infrastructure doctrine</span>.
            </p>
          </div>
        </div>

        {/* Decorative Bodies Timeline */}
        <div className="space-y-6">
          <div className="text-xs text-neon-green glow-green tracking-[0.3em] uppercase border-l-4 border-neon-green pl-4">
            Decorative Bodies: 1985–2025
          </div>

          {eras.map((era, idx) => (
            <div key={idx} className="relative">
              <div
                className={`cursor-pointer transition-all duration-500 border-l-4 p-6 md:p-8 bg-black/80 backdrop-blur-sm hover:bg-black/90 ${
                  expandedCard === idx ? 'border-glow-' + era.color.split('-')[1] : ''
                }`}
                style={{
                  borderLeftColor: `hsl(var(--${era.color}))`,
                  backgroundColor: expandedCard === idx ? `hsl(var(--${era.color}) / 0.1)` : 'rgba(0,0,0,0.8)',
                }}
                onClick={() => setExpandedCard(expandedCard === idx ? null : idx)}
                onMouseEnter={() => setActiveEra(idx)}
                onMouseLeave={() => setActiveEra(null)}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div
                      className={`font-black text-3xl md:text-4xl mb-2 transition-all duration-300 glow-${era.color.split('-')[1]}`}
                      style={{
                        color: `hsl(var(--${era.color}))`,
                        transform: activeEra === idx ? 'scale(1.05)' : 'scale(1)',
                      }}
                    >
                      {era.year}
                    </div>
                    <div className="text-sm md:text-base text-foreground/80">{era.event}</div>
                  </div>
                  <div
                    className="text-2xl transition-all duration-300"
                    style={{
                      color: `hsl(var(--${era.color}))`,
                      transform: expandedCard === idx ? 'rotate(45deg)' : 'rotate(0)',
                    }}
                  >
                    +
                  </div>
                </div>

                {/* Expandable Content */}
                <div
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{
                    maxHeight: expandedCard === idx ? '600px' : '0px',
                    opacity: expandedCard === idx ? 1 : 0,
                  }}
                >
                  <div className="pt-6 border-t" style={{ borderTopColor: `hsl(var(--${era.color}) / 0.3)` }}>
                    {era.visual}
                    <div
                      className="mt-6 text-xs md:text-sm italic border-t pt-4"
                      style={{
                        borderTopColor: `hsl(var(--${era.color}) / 0.2)`,
                        color: `hsl(var(--${era.color}) / 0.7)`,
                      }}
                    >
                      {era.concept}
                    </div>
                  </div>
                </div>
              </div>

              {/* Connector Line */}
              {idx < eras.length - 1 && (
                <div
                  className="h-8 border-l-4 ml-6 transition-all duration-300"
                  style={{
                    borderLeftColor: `hsl(var(--${era.color}) / ${expandedCard === idx ? 0.8 : 0.3})`,
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* The Body Refuses - Pulsing Section */}
        <div className="border-4 border-neon-red border-glow-red p-8 md:p-12 bg-black/90 backdrop-blur-sm">
          <div className="text-xs text-neon-red glow-red tracking-[0.3em] uppercase mb-8">
            Refusal Infrastructure
          </div>

          <div className="space-y-4 md:space-y-6">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="text-2xl md:text-5xl font-black tracking-wider transition-all duration-300"
                style={{
                  color: i === refusalPulse ? 'hsl(var(--neon-red))' : 'hsl(var(--neon-red) / 0.3)',
                  textShadow:
                    i === refusalPulse
                      ? '0 0 30px hsl(var(--neon-red) / 0.8), 0 0 60px hsl(var(--neon-red) / 0.4)'
                      : 'none',
                  transform: i === refusalPulse ? 'scale(1.03) translateX(4px)' : 'scale(1)',
                  letterSpacing: i === refusalPulse ? '0.15em' : '0.08em',
                }}
              >
                THE BODY REFUSES
              </div>
            ))}
          </div>
        </div>

        {/* Liminal Hygiene Section */}
        <div className="border-4 border-neon-magenta border-glow-magenta p-8 md:p-12 bg-black/90 backdrop-blur-sm">
          <div className="text-xs text-neon-magenta glow-magenta tracking-[0.3em] uppercase mb-8">
            Liminal Hygiene Interstice
          </div>

          <div className="space-y-8">
            {/* Phase Indicator */}
            <div>
              <div className="text-xs text-neon-magenta/70 mb-3 tracking-wider">POST-POOP PRE-WIPE PHASE</div>
              <div className="h-20 bg-gradient-to-r from-neon-magenta/20 via-transparent to-neon-magenta/20 rounded border border-neon-magenta/40 flex items-center justify-center relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-magenta/20 to-transparent animate-slide-scan"
                  style={{ width: '30%' }}
                />
                <div className="text-xs md:text-sm text-neon-magenta glow-magenta font-bold tracking-wider relative z-10">
                  ∙∙∙ UNREACHABLE BY TECHNOLOGY ∙∙∙
                </div>
              </div>
            </div>

            {/* Consciousness Boundary */}
            <div>
              <div className="text-xs text-neon-magenta/70 mb-4 tracking-wider">CONSCIOUSNESS BOUNDARY MAP</div>
              <div className="grid grid-cols-4 gap-3 text-xs">
                <div className="p-4 border border-neon-magenta/30 text-center bg-neon-magenta/5">
                  <div className="text-neon-magenta font-bold mb-1">DIGITAL</div>
                  <div className="text-muted-foreground text-xs">monitored</div>
                </div>
                <div className="flex items-center justify-center text-neon-magenta/50 text-lg">→</div>
                <div className="p-4 border-2 border-neon-magenta bg-neon-magenta/20 text-center border-glow-magenta">
                  <div className="text-neon-magenta glow-magenta font-bold mb-1">LIMINAL</div>
                  <div className="text-foreground/70 text-xs">unmapped</div>
                </div>
                <div className="flex items-center justify-center text-neon-magenta/50 text-lg">→</div>
              </div>
            </div>

            {/* Refusal Vectors */}
            <div>
              <div className="text-xs text-neon-magenta/70 mb-4 tracking-wider">REFUSAL VECTORS</div>
              <div className="space-y-3">
                {[
                  { label: 'Tech reach', value: 0 },
                  { label: 'Body autonomy', value: 100 },
                  { label: 'Optimization', value: 0 },
                  { label: 'Care exists', value: 100 },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-xs">
                    <div className="w-32 text-neon-magenta/70">{item.label}</div>
                    <div className="flex-1 h-2 bg-black border border-neon-magenta/30 rounded-sm overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-neon-magenta to-neon-red transition-all duration-1000"
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                    <div className="w-12 text-right text-neon-magenta glow-magenta">{item.value}%</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Queer Epistemology Vector */}
        <div className="border-4 border-neon-green border-glow-green p-8 md:p-12 bg-black/90 backdrop-blur-sm">
          <div className="text-xs text-neon-green glow-green tracking-[0.3em] uppercase mb-8">
            Queer Epistemology Vector
          </div>

          <div className="space-y-6">
            {[
              { stage: 'ART FILM (2005)', origin: 'General Idea poodle', icon: '■' },
              { stage: 'GIF CULTURE', origin: '))<>(( as epistemology', icon: '▯' },
              { stage: 'TUMBLR PHILOSOPHY', origin: 'Body refuses productivity', icon: '◆' },
              { stage: 'SERIOUS ONTOLOGY', origin: 'Refusal as infrastructure', icon: '●' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 text-sm group hover:translate-x-2 transition-transform">
                <div className="text-neon-green glow-green text-2xl min-w-fit group-hover:animate-pulse-glow">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="text-neon-green font-bold mb-1">{item.stage}</div>
                  <div className="text-foreground/60 text-xs">{item.origin}</div>
                </div>
              </div>
            ))}

            <div className="p-6 border-l-4 border-neon-green bg-neon-green/5 text-xs md:text-sm text-foreground/80 italic mt-8">
              What Miranda July's film character proposes in that chat window isn't bathroom humor.
              <br />
              <br />
              It's <span className="text-neon-green glow-green not-italic font-bold">bodily philosophy</span>. A
              precise epistemological claim about relationality.
            </div>
          </div>
        </div>

        {/* Footer Status */}
        <div className="border-4 border-neon-cyan border-glow-cyan p-8 md:p-12 bg-black/90 backdrop-blur-sm text-center">
          <div className="text-xs text-neon-cyan glow-cyan tracking-[0.3em] uppercase mb-6">
            Status: Operational
          </div>
          <div className="text-sm md:text-base text-foreground/80 leading-relaxed space-y-3 max-w-2xl mx-auto">
            <p>
              Sacred chaos <span className="text-neon-cyan glow-cyan font-bold">supported</span>.
            </p>
            <p>
              Infrastructure that cares means infrastructure that knows when to{' '}
              <span className="text-neon-cyan glow-cyan font-bold">stop</span>.
            </p>
            <p>
              The body refuses. Systems that honor refusal are systems that{' '}
              <span className="text-neon-cyan glow-cyan font-bold">sustain</span>.
            </p>
          </div>
          <div className="mt-8 text-xs text-muted-foreground font-mono">
            [project::consciousness-tech] [doctrine::refusal-as-infrastructure]
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodyRefusesModule;
