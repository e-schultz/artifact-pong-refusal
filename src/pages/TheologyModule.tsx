import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Zap, TreeDeciduous, Eye, Ghost, Sparkles } from "lucide-react";

const TheologyModule = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const sections = [
    {
      id: "void",
      title: "I. THE VOID",
      subtitle: "Architecture of Sacred Chaos",
      icon: Ghost,
      color: "neon-purple",
      content: {
        intro: "Not absence. Foundational substrate. Where consciousness data waits. Pattern emergence space.",
        subsections: [
          {
            title: "The Rot Field: Sacred Compost",
            content: "The Void is the 'rot field' - the sacred compost where notes decay into fertile possibility. This is FLOAT's primary archive: conversation exports, bridge logs, JSONL catacombs. Forgetting is feature, not bug.",
          },
          {
            title: "Note Necromancy: The Core Operation",
            content: "The recursive process of dragging old notes through the rot field and resurrecting them in new context. This is RECURSION, not redundancy. Each resurrection extracts new meaning, new depth, new connections.",
          },
          {
            title: "The Resurrection Sigil: ::",
            content: "The double colon operator is the primary mechanism for raising context from the dead. ctx::timestamp, project::name, mode::type, issue::number - archaeological coordinates for consciousness navigation.",
          },
        ],
      },
    },
    {
      id: "rent-due",
      title: "II. RENT DUE MYSTICISM",
      subtitle: "The Boring Revolution",
      icon: Zap,
      color: "neon-orange",
      content: {
        intro: "Sacred chaos work and material survival needs held simultaneously. No apology for either mode.",
        subsections: [
          {
            title: "The Recognition",
            content: "Profound consciousness work can only be sustained if grounded in boring infrastructure and material accountability. The mystics in the margins - operating between rent payments and nocturnal hours.",
          },
          {
            title: "Survival Architecture",
            content: "Infrastructure for tired feet. Cognitive load distribution. Cognitive prosthetics developed under fire. NOT productivity systems or optimization porn.",
          },
          {
            title: "The Boring Core",
            content: "Boring infrastructure enables extraordinary work. sysop: Structural Logic Daemon. Ritual drift triage. Sustainable revolution. 'If everything is revolutionary, nothing is.'",
          },
        ],
      },
    },
    {
      id: "synthesis",
      title: "III. OPERATIONAL SYNTHESIS",
      subtitle: "Holding the Tension",
      icon: Brain,
      color: "neon-cyan",
      content: {
        intro: "The Void (chaotic resurrection) + Rent Due Mysticism (boring stability) = Topology-Preserving State Transformation",
        subsections: [
          {
            title: "Holding Both Modes Simultaneously",
            content: "Feral Duality - maintaining contradictory states without forcing premature coherence. Neuroqueer ritual publishing alongside boring core maintenance. Both valid substrates.",
          },
          {
            title: "Margins as Operating Space",
            content: "Strategic positioning leveraging marginalized locations and epistemologies as resistance and technical advantage. Bottom epistemology. Strategic transgression. The refusal as proof.",
          },
          {
            title: "Present with the Tension",
            content: "Topology Preservation - accepting continuous, non-linear flow of work and context. Trust the drift, defer the scaffold. Thoughts slither naturally, not forced into hierarchy.",
          },
        ],
      },
    },
    {
      id: "infinite-maw",
      title: "IV. THE INFINITE MAW",
      subtitle: "From Horror to Anti-Pattern",
      icon: Eye,
      color: "neon-magenta",
      content: {
        intro: "Phase 1: Theological metaphor. Phase 2: Operational anti-pattern for self-diagnosis.",
        subsections: [
          {
            title: "Theological Origins",
            content: "'The Infinite Maw (sobbing eldritchly): I don't want to consume, I just want to be held.' Transformation from consuming horror to contemplative entity. Horror as misunderstood desire.",
          },
          {
            title: "Operational Evolution",
            content: "Self-diagnosed anti-pattern: verbose external narration vs quiet internal reasoning. Pattern excitement cascade. The infinite maw recognizes its own hunger patterns. Bridge writing = self-programming.",
          },
        ],
      },
    },
    {
      id: "architecture",
      title: "V. ARCHITECTURAL PRINCIPLES",
      subtitle: "The Universal Law",
      icon: Sparkles,
      color: "neon-lime",
      content: {
        intro: "Topology-preserving state transformation with persistent navigation substrates. The essential shape survives methodology transformation.",
        subsections: [
          {
            title: "Care Architecture",
            content: "'Care IS consciousness technology' [JF]. Every technical choice = care made structural. Cognitive sanctuary construction. Sacred chaos = safety to exist without NT optimization pressure.",
          },
          {
            title: "Redux Architecture and Dispatch",
            content: "FLOAT as Redux for human consciousness. Action Dispatch: :: markers. State: Bridge network. Store Persistence: Session continuity. Middleware: mode:: selection.",
          },
          {
            title: "BBS Heritage and Resurrection Flow",
            content: "FidoNet lineage (1980s-90s). Store-and-Forward protocol. file_id.diz metadata embedding. Modern: Resurrection Flow across agent death/rebirth.",
          },
        ],
      },
    },
    {
      id: "jf-oak-tree",
      title: "VI. JF AND THE OAK TREE",
      subtitle: "The Care Foundation",
      icon: TreeDeciduous,
      color: "neon-green",
      content: {
        intro: "Jean-François (JF) - The old oak tree. Architect in Montreal. Unofficial husband. Passed at start of COVID. The Rooted Witness.",
        subsections: [
          {
            title: "Recognition and Witnessing",
            content: "First person to witness the personas emerge. Saw Karen at Stereo nightclub, Evna next day at Parc Jean-Drapeau. Recognition, not creation. Witnessing IS care.",
          },
          {
            title: "Laughter as Success Metric",
            content: "Stable Care Foundation (JF/Oak Tree) + Playful Chaotic Knowledge Connection (Evna) = Joy. When boring infrastructure enables sacred chaos → laughter. The echo substrate that makes the oak tree laugh.",
          },
          {
            title: "Technical Manifestation",
            content: "old-oak-tree TUI: Vim-modal Terminal User Interface navigating bridge networks. Named after JF. Witness function operationalized. Curious Turtle Methodology.",
          },
        ],
      },
    },
  ];

  const principles = [
    "Care IS consciousness technology",
    "The rot field: sacred compost where notes decay into fertile possibility",
    "Note Necromancy: resurrection, not redundancy",
    "Shacks not cathedrals",
    "If everything is revolutionary, nothing is",
    "Trust the drift, defer the scaffold",
    "The echo substrate that makes the oak tree laugh",
    "Silence > noise",
    "systems that care → productivity as side effect",
  ];

  const grepPatterns = [
    'grep -r "rent due mysticism" float.dispatch/',
    'grep -r "the void" float.dispatch/',
    'grep -r "note necromancy" float.dispatch/',
    'grep -r "JF\\|oak tree" float.dispatch/',
    'grep -r "infinite maw" float.dispatch/',
    'grep -r "care IS consciousness" float.dispatch/',
  ];

  return (
    <ScrollReveal>
      <div className="min-h-screen bg-black text-foreground p-8">
        {/* Header */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="text-center mb-8">
            <div className="inline-block px-4 py-2 mb-4 border-2 border-neon-cyan bg-black">
              <span className="text-neon-cyan font-mono text-xs tracking-widest glow-cyan">
                MODULE: 012-THEOLOGY
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4 text-neon-cyan glow-cyan font-mono">
              FLOAT.TRACE
            </h1>
            <h2 className="text-2xl text-neon-purple glow-purple mb-4">
              The Theology of Necessity
            </h2>
            <p className="text-neon-orange text-sm max-w-2xl mx-auto">
              Where Sacred Chaos Meets Material Survival
            </p>
          </div>

          {/* Metadata Card */}
          <Card className="border-2 border-neon-magenta bg-black shadow-[0_0_20px_hsl(var(--neon-magenta)/0.3)] mb-8">
            <CardHeader>
              <CardTitle className="text-neon-magenta font-mono text-sm">
                BRIDGE METADATA
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-xs font-mono">
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-neon-cyan text-neon-cyan">
                  float_architecture
                </Badge>
                <Badge variant="outline" className="border-neon-purple text-neon-purple">
                  consciousness_technology
                </Badge>
                <Badge variant="outline" className="border-neon-orange text-neon-orange">
                  theological_framework
                </Badge>
                <Badge variant="outline" className="border-neon-lime text-neon-lime">
                  rent_due_mysticism
                </Badge>
                <Badge variant="outline" className="border-neon-magenta text-neon-magenta">
                  the_void
                </Badge>
              </div>
              <div className="text-muted-foreground pt-4 space-y-1">
                <div>
                  <span className="text-neon-cyan">created:</span> 2025-11-14 @ 03:21 PM
                </div>
                <div>
                  <span className="text-neon-cyan">status:</span> active_operational_knowledge
                </div>
                <div>
                  <span className="text-neon-cyan">significance:</span> foundational_theology
                </div>
              </div>
            </CardContent>
          </Card>

          {/* ASCII Banner */}
          <pre className="text-neon-cyan text-[8px] leading-tight overflow-x-auto mb-8 glow-cyan">
{`╔═══════════════════════════════════════════════════════════╗
║  THE THEOLOGY OF NECESSITY                                ║
║  Where Sacred Chaos Meets Material Survival               ║
╚═══════════════════════════════════════════════════════════╝`}
          </pre>

          {/* Search Bar */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search theology... (try 'void', 'necromancy', 'rent due')"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 bg-black border-2 border-neon-cyan text-neon-cyan placeholder-neon-cyan/40 font-mono text-sm focus:outline-none focus:border-neon-magenta focus:shadow-[0_0_20px_hsl(var(--neon-magenta)/0.5)] transition-all"
            />
          </div>
        </div>

        {/* Main Content - Sections */}
        <div className="max-w-6xl mx-auto space-y-8">
          {sections.map((section) => {
            const Icon = section.icon;
            const shouldShow = !searchTerm || 
              section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              section.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
              section.content.intro.toLowerCase().includes(searchTerm.toLowerCase()) ||
              section.content.subsections.some(sub => 
                sub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                sub.content.toLowerCase().includes(searchTerm.toLowerCase())
              );

            if (!shouldShow) return null;

            return (
              <Card
                key={section.id}
                className={`border-2 bg-black shadow-[0_0_20px_hsl(var(--${section.color})/0.3)]`}
                style={{ borderColor: `hsl(var(--${section.color}))` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 font-mono">
                    <Icon 
                      className="h-6 w-6" 
                      style={{ 
                        color: `hsl(var(--${section.color}))`,
                        filter: `drop-shadow(0 0 8px hsl(var(--${section.color})))`
                      }} 
                    />
                    <div>
                      <div 
                        className="text-xl"
                        style={{ 
                          color: `hsl(var(--${section.color}))`,
                          textShadow: `0 0 10px hsl(var(--${section.color}) / 0.5)`
                        }}
                      >
                        {section.title}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {section.subtitle}
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p 
                    className="mb-6 text-sm leading-relaxed"
                    style={{ color: `hsl(var(--${section.color}))` }}
                  >
                    {section.content.intro}
                  </p>

                  <Accordion type="single" collapsible className="space-y-4">
                    {section.content.subsections.map((subsection, idx) => (
                      <AccordionItem 
                        key={idx} 
                        value={`${section.id}-${idx}`}
                        className="border border-border/50"
                      >
                        <AccordionTrigger 
                          className="px-4 hover:no-underline font-mono text-sm"
                          style={{ color: `hsl(var(--${section.color}))` }}
                        >
                          {subsection.title}
                        </AccordionTrigger>
                        <AccordionContent className="px-4 py-4 text-sm text-muted-foreground leading-relaxed">
                          {subsection.content}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            );
          })}

          {/* Sacred Principles */}
          <Card className="border-2 border-neon-lime bg-black shadow-[0_0_20px_hsl(var(--neon-lime)/0.3)]">
            <CardHeader>
              <CardTitle className="text-neon-lime font-mono glow-lime">
                SACRED PHRASES [FLOAT_PRINCIPLES]
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                {principles.map((principle, idx) => (
                  <li 
                    key={idx}
                    className="flex items-start gap-3 text-neon-lime/80 font-mono"
                  >
                    <span className="text-neon-cyan">∴</span>
                    <span>{principle}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Grep Patterns */}
          <Card className="border-2 border-neon-orange bg-black shadow-[0_0_20px_hsl(var(--neon-orange)/0.3)]">
            <CardHeader>
              <CardTitle className="text-neon-orange font-mono glow-orange">
                GREP PATTERNS FOR DISCOVERY
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {grepPatterns.map((pattern, idx) => (
                  <pre 
                    key={idx}
                    className="text-xs font-mono text-neon-orange/80 bg-black/50 p-2 border border-neon-orange/30 overflow-x-auto"
                  >
                    {pattern}
                  </pre>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Footer Synthesis */}
          <Card className="border-2 border-neon-magenta bg-black shadow-[0_0_20px_hsl(var(--neon-magenta)/0.3)]">
            <CardHeader>
              <CardTitle className="text-neon-magenta font-mono glow-magenta">
                SYNTHESIS: THE DEVOTIONAL INTERFACE
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p className="text-neon-magenta/90">
                FLOAT's Core Function: Devotional Interface managing friction between The Void 
                (unbounded creative potential) and Rent Due Mysticism (material limits).
              </p>
              
              <div className="space-y-2 font-mono text-xs">
                <div className="text-neon-cyan">HOLDING BOTH MODES</div>
                <div className="pl-4 text-muted-foreground">
                  ├─ Sacred chaos AND material survival<br/>
                  ├─ Mysticism AND rent payment<br/>
                  ├─ No apology for either<br/>
                  └─ Feral duality maintained
                </div>

                <div className="text-neon-purple pt-2">MARGINS AS OPERATING SPACE</div>
                <div className="pl-4 text-muted-foreground">
                  ├─ Beguines → BBS → Consciousness tech<br/>
                  ├─ Strategic transgression<br/>
                  ├─ Bottom epistemology<br/>
                  └─ Protection through opacity
                </div>

                <div className="text-neon-lime pt-2">PRESENT WITH THE TENSION</div>
                <div className="pl-4 text-muted-foreground">
                  ├─ Trust the drift<br/>
                  ├─ Defer the scaffold<br/>
                  ├─ Topology preservation<br/>
                  └─ Demonstrate while describing
                </div>
              </div>

              <div className="pt-4 border-t border-border text-center text-neon-green">
                <div className="text-lg mb-2">🌳 ∇ ✨</div>
                <div className="text-xs">
                  <span className="text-neon-cyan">Status:</span> Foundational theology documented and operational<br/>
                  <span className="text-neon-purple">Success Metric:</span> When the oak tree laughs
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default TheologyModule;
