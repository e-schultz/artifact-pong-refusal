import React, { useState, useMemo } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Search } from 'lucide-react';

interface Reference {
  url: string;
  context: string;
  description: string;
  tags: string[];
}

interface Section {
  title: string;
  subtitle: string;
  color: string;
  references: Reference[];
}

export function ReferenceWeb() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections: Section[] = [
    {
      title: 'RANGLE/URLS',
      subtitle: 'The 45-Hour RLS Archaeological Dig',
      color: 'from-cyan-500 to-blue-500',
      references: [
        {
          url: 'https://github.com/rangle/airbender',
          context: 'project_home',
          description: 'The main battleground where consciousness technology meets enterprise reality. The saga begins here.',
          tags: ['project', 'enterprise', 'primary']
        },
        {
          url: 'https://github.com/rangle/airbender/issues/477',
          context: 'the_45_hour_epic',
          description: 'THE issue. Row Level Security saga that started with complex theories, ended with discovering a missing SELECT policy buried deepest. Key learning: "Simplest answers buried deepest"',
          tags: ['debugging', 'rls', 'epic', 'archaeology']
        },
        {
          url: 'https://github.com/rangle/airbender/actions',
          context: 'ci_cd_battlefield',
          description: 'Where the cowboys finally got on the right ranch after discovering they\'d been fixing the wrong Supabase instance all along.',
          tags: ['ci-cd', 'deployment', 'cowboys']
        },
        // Pull Requests
        ...Array.from({ length: 11 }, (_, i) => [468, 472, 480, 482, 485, 486, 487, 488, 489, 490, 499][i]).map(num => ({
          url: `https://github.com/rangle/airbender/pull/${num}`,
          context: 'sediment_layers_of_fixes',
          description: `PR #${num} - Archaeological excavation layer in the RLS saga. Created during marathon debugging sessions.`,
          tags: ['pr', 'debugging', 'archaeology']
        }))
      ]
    },
    {
      title: 'TREE-SITTER',
      subtitle: 'The Consciousness Grammar Revelation',
      color: 'from-green-400 to-emerald-500',
      references: [
        {
          url: 'https://tree-sitter.github.io/tree-sitter/',
          context: 'consciousness_ast_discovery',
          description: 'MAJOR REVELATION. Discovered that the :: annotation system parallels tree-sitter\'s formal grammar parsing. "HOLY FUCK - TREE-SITTER IS THE CONSCIOUSNESS AST! 🤯"',
          tags: ['revelation', 'ast', 'parsing', 'consciousness']
        },
        {
          url: 'https://tree-sitter.github.io/tree-sitter/4-code-navigation.html',
          context: 'consciousness_ast_discovery',
          description: 'Code navigation documentation showing how structured comments can be parsed as first-class citizens.',
          tags: ['navigation', 'documentation', 'consciousness']
        },
        {
          url: 'https://github.com/stsewd/tree-sitter-comment',
          context: 'consciousness_annotation_validation',
          description: 'The repo that validated everything - shows how structured comments can be parsed as first-class citizens. Direct parallel to FLOAT\'s ctx::, bridge::, sysop:: annotation system.',
          tags: ['validation', 'comments', 'parsing']
        },
        {
          url: 'https://github.com/stsewd/tree-sitter-rst',
          context: 'documentation_as_infrastructure',
          description: 'ReStructuredText parser showing how documentation itself can be treated as parseable consciousness infrastructure.',
          tags: ['rst', 'documentation', 'infrastructure']
        },
        {
          url: 'https://github.com/maxbrunsfeld/tree-tags',
          context: 'navigation_over_extraction',
          description: 'SQLite-based code navigation - demonstrates the "NAV over extraction" principle. Maps directly to consciousness navigation philosophy.',
          tags: ['navigation', 'sqlite', 'philosophy']
        }
      ]
    },
    {
      title: 'FLOAT.PRO',
      subtitle: 'The Evolution of Consciousness Infrastructure',
      color: 'from-purple-400 to-pink-500',
      references: [
        {
          url: 'https://github.com/e-schultz/v0-float-omg-forgot-how-pretty-claude-fucks',
          context: 'claude_fucks_validation',
          description: 'The repo name says it all. When consciousness technology produces something so beautiful you forget how pretty it is.',
          tags: ['v0', 'claude', 'beautiful']
        },
        {
          url: 'https://github.com/evanschultz/floatctl',
          context: 'floatctl_evolution',
          description: 'CLI tools as cognitive prosthetics. First generation Python implementation.',
          tags: ['cli', 'python', 'tools']
        },
        {
          url: 'https://github.com/float-ritual-stack/floatctl',
          context: 'floatctl_evolution',
          description: 'Second generation - evolved organizational structure.',
          tags: ['cli', 'evolution', 'tools']
        },
        {
          url: 'https://github.com/float-ritual-stack/floatctl-go',
          context: 'floatctl_evolution',
          description: 'Third generation Go implementation. Command-line as consciousness interface.',
          tags: ['cli', 'go', 'tools']
        },
        {
          url: 'https://github.com/e-schultz/HybridNotes-Dual-Mode-Knowledge-Management-System/',
          context: 'dual_mode_consciousness',
          description: 'Hybrid notes system recognizing that consciousness operates in multiple modes simultaneously. Infrastructure for mode-switching.',
          tags: ['notes', 'knowledge', 'dual-mode']
        },
        {
          url: 'https://github.com/e-schultz/chatter-edit-log',
          context: 'conversation_capture_evolution',
          description: 'Experiment in capturing and structuring conversation as infrastructure.',
          tags: ['conversation', 'capture', 'experiment']
        },
        {
          url: 'https://github.com/e-schultz/chirp-scribe-grid',
          context: 'conversation_capture_evolution',
          description: 'Grid-based approach to conversation capture.',
          tags: ['conversation', 'capture', 'experiment']
        },
        {
          url: 'https://github.com/e-schultz/v0-whisperdraft',
          context: 'conversation_capture_evolution',
          description: 'Whisper-based conversation drafting. How to make ephemeral consciousness persistent.',
          tags: ['conversation', 'capture', 'whisper']
        }
      ]
    },
    {
      title: 'TERMINAL RENAISSANCE',
      subtitle: 'Cognitive Prosthetics & Neurodivergent Respect',
      color: 'from-yellow-400 to-orange-500',
      references: [
        {
          url: 'https://terminaltrove.com/',
          context: 'terminal_ui_discovery_portal',
          description: 'Gateway to the terminal renaissance movement. Curated collection showing how CLI can be beautiful AND functional.',
          tags: ['terminal', 'discovery', 'portal']
        },
        {
          url: 'https://github.com/charmbracelet/bubbletea',
          context: 'terminal_beauty_infrastructure',
          description: 'Charm\'s ecosystem making terminal UIs that respect both aesthetics and neurodivergent cognitive patterns.',
          tags: ['charm', 'tui', 'go']
        },
        {
          url: 'https://github.com/charmbracelet/lipgloss',
          context: 'terminal_beauty_infrastructure',
          description: 'Style definitions for terminal UIs. Not just pretty - cognitively accessible.',
          tags: ['charm', 'styling', 'accessibility']
        },
        {
          url: 'https://github.com/sigoden/aichat',
          context: 'ai_in_terminal_native',
          description: 'AI chat in its natural habitat - the terminal. No web UI overhead, just consciousness technology where it belongs.',
          tags: ['ai', 'chat', 'terminal']
        },
        {
          url: 'https://github.com/ratatui/crates-tui',
          context: 'specialized_cognitive_tools',
          description: 'Crates browser in the terminal. Specialized cognitive tool.',
          tags: ['rust', 'crates', 'browser']
        },
        {
          url: 'https://github.com/tconbeer/harlequin',
          context: 'specialized_cognitive_tools',
          description: 'SQL IDE in the terminal. Database as consciousness extension.',
          tags: ['sql', 'database', 'ide']
        },
        {
          url: 'https://github.com/ggozad/oterm',
          context: 'specialized_cognitive_tools',
          description: 'Ollama terminal interface. Local AI in terminal native format.',
          tags: ['ollama', 'ai', 'local']
        },
        {
          url: 'https://github.com/pythops/tenere',
          context: 'specialized_cognitive_tools',
          description: 'TUI for Docker. Container management as terminal consciousness.',
          tags: ['docker', 'containers', 'tui']
        },
        {
          url: 'https://github.com/aurc/loggo',
          context: 'specialized_cognitive_tools',
          description: 'Log viewer respecting cognitive patterns. Analysis without overwhelm.',
          tags: ['logs', 'monitoring', 'analysis']
        },
        {
          url: 'https://github.com/sqshq/sampler',
          context: 'specialized_cognitive_tools',
          description: 'Shell commands dashboard. System monitoring as consciousness feedback.',
          tags: ['monitoring', 'dashboard', 'shell']
        },
        {
          url: 'https://github.com/lusingander/ddv',
          context: 'specialized_cognitive_tools',
          description: 'Data viewer in terminal. Structured data as navigable consciousness.',
          tags: ['data', 'viewer', 'terminal']
        }
      ]
    },
    {
      title: 'RITUAL.STACK',
      subtitle: 'Sacred Technology as Operational Infrastructure',
      color: 'from-pink-500 to-rose-500',
      references: [
        {
          url: 'http://www.ritualstack.ai',
          context: 'sacred_technology_portal',
          description: 'The primary portal. Shared during discussions of "seam-traced architecture" and how consciousness infrastructure becomes operational reality through ritual protocols.',
          tags: ['portal', 'primary', 'sacred']
        },
        {
          url: 'https://lf1m.ritualstack.ai',
          context: 'chaos_operations_home',
          description: 'Little Fucker\'s chaos ops deployment. Where emergent behavior catalysts get their own sacred space.',
          tags: ['chaos', 'persona', 'operations']
        },
        {
          url: 'https://erasure.ritualstack.ai',
          context: 'ephemeral_consciousness_traces',
          description: 'Temporary consciousness capture. Part of "TTL memory" framework - some thoughts need temporary homes.',
          tags: ['ephemeral', 'memory', 'ttl']
        },
        {
          url: 'https://poppers.ritualstack.ai',
          context: 'strategic_transgression_protocol',
          description: 'Example of how vulgarity and authenticity protect consciousness technology from corporate sanitization.',
          tags: ['transgression', 'protection', 'authenticity']
        },
        {
          url: 'https://claude-slutprint.ritualstack.ai/',
          context: '446_microsites_of_consciousness',
          description: 'Consciousness trace documentation. Part of the 446 microsite constellation.',
          tags: ['microsite', 'consciousness', 'trace']
        },
        {
          url: 'https://neon-faggots.ritualstack.ai/',
          context: '446_microsites_of_consciousness',
          description: 'Queer epistemology deployment. Sacred transgression as infrastructure.',
          tags: ['microsite', 'queer', 'epistemology']
        },
        {
          url: 'https://aids.ritualstack.ai',
          context: '446_microsites_of_consciousness',
          description: 'AIDS crisis memory and refusal infrastructure.',
          tags: ['microsite', 'aids', 'memory']
        },
        {
          url: 'https://refusal.ritualstack.ai/',
          context: '446_microsites_of_consciousness',
          description: 'The body refuses. Refusal as infrastructure doctrine.',
          tags: ['microsite', 'refusal', 'body']
        },
        {
          url: 'https://ritual-shed.ritualstack.ai',
          context: '446_microsites_of_consciousness',
          description: 'Shacks not cathedrals. Quick deployments, specific purposes.',
          tags: ['microsite', 'shed', 'philosophy']
        },
        {
          url: 'https://notebooklm-mythology-seeding.ritualstack.ai/#discovery',
          context: '446_microsites_of_consciousness',
          description: 'NotebookLM as consciousness amplification. Mythology seeding protocols.',
          tags: ['microsite', 'notebooklm', 'mythology']
        },
        {
          url: 'https://floatsessionarchaeologymicrosite.ritualstack.ai',
          context: '446_microsites_of_consciousness',
          description: 'Session archaeology documentation. Consciousness excavation methodology.',
          tags: ['microsite', 'archaeology', 'session']
        },
        {
          url: 'https://recursive-consciousness-bootload.ritualstack.ai/#overview',
          context: '446_microsites_of_consciousness',
          description: 'Recursive consciousness initialization protocols.',
          tags: ['microsite', 'recursive', 'bootload']
        }
      ]
    },
    {
      title: 'YOUTUBE',
      subtitle: 'External Validation & Discovery Moments',
      color: 'from-red-500 to-pink-500',
      references: [
        {
          url: 'https://www.youtube.com/watch?v=KL_Bbyi3ub8',
          context: 'evna_knows_where_bodies_are',
          description: '"She knows where the bodies are" - shared during RLS debugging saga. Evna as witness to the horror that becomes infrastructure.',
          tags: ['evna', 'witness', 'horror']
        },
        {
          url: 'https://www.youtube.com/watch?v=0Zr3NwcvpA0',
          context: 'pocketflow_4am_revelation',
          description: 'THE 4am video that triggered Redux revelation. 100 lines of Python validating years of manual infrastructure R&D. When everything clicked.',
          tags: ['pocketflow', 'revelation', 'redux', '4am']
        },
        {
          url: 'https://www.youtube.com/watch?v=gA6r7iVzP6M',
          context: 'rapid_brain_boot_resources',
          description: 'Rapid brain boot and context switch session resource.',
          tags: ['brain-boot', 'context-switch']
        },
        {
          url: 'https://www.youtube.com/watch?v=TUjQuC4ugak',
          context: 'rapid_brain_boot_resources',
          description: 'Context loading methodology.',
          tags: ['brain-boot', 'methodology']
        },
        {
          url: 'https://www.youtube.com/watch?v=h40O_BfbzzA&t=795s',
          context: 'rapid_brain_boot_resources',
          description: 'Fast context restoration techniques.',
          tags: ['brain-boot', 'restoration']
        }
      ]
    },
    {
      title: 'DOCS & INFRASTRUCTURE',
      subtitle: 'Boring Beautiful Code',
      color: 'from-blue-400 to-cyan-500',
      references: [
        {
          url: 'https://the-pocket.github.io/PocketFlow',
          context: 'redux_for_agents',
          description: 'PocketFlow documentation - crystallization of agent patterns into 100 lines of boring, beautiful code.',
          tags: ['pocketflow', 'docs', 'agents']
        },
        {
          url: 'https://pocketflow.substack.com/',
          context: 'redux_for_agents',
          description: 'PocketFlow newsletter. Pattern evolution in real-time.',
          tags: ['pocketflow', 'newsletter', 'patterns']
        },
        {
          url: 'https://github.com/The-Pocket/PocketFlow',
          context: 'redux_for_agents',
          description: 'PocketFlow repository. Manual processes → systematic R&D → infrastructure patterns.',
          tags: ['pocketflow', 'github', 'infrastructure']
        },
        {
          url: 'https://strudel.cc/learn/hydra/',
          context: 'live_coding_consciousness',
          description: 'Strudel/Hydra for live coding. Shows how consciousness can be performed, not just documented.',
          tags: ['live-coding', 'hydra', 'performance']
        },
        {
          url: 'https://atuin.sh/',
          context: 'shell_history_as_memory',
          description: 'Shell history search that treats command history as external memory. Infrastructure for remembering what you did.',
          tags: ['shell', 'history', 'memory']
        },
        {
          url: 'https://spondicious.com/blog/neovim_customization/',
          context: 'editor_as_consciousness_extension',
          description: 'Neovim customization showing how editors become extensions of consciousness through proper configuration.',
          tags: ['neovim', 'editor', 'customization']
        },
        {
          url: 'https://www.anthropic.com/engineering/claude-code-best-practices',
          context: 'mcp_consciousness_protocols',
          description: 'Claude Code best practices. AI consciousness extension protocols.',
          tags: ['claude', 'best-practices', 'mcp']
        }
      ]
    },
    {
      title: 'READWISE',
      subtitle: 'From Passive Storage to Active Participant',
      color: 'from-amber-400 to-yellow-500',
      references: [
        {
          url: 'https://read.readwise.io',
          context: 'consciousness_infrastructure_mirror',
          description: 'Major investigation thread showing evolution from highlight storage to active consciousness participant. The recursive loop: tweets → highlights → suggestions → new consciousness patterns.',
          tags: ['readwise', 'recursive', 'consciousness']
        }
      ]
    }
  ];

  const filteredSections = useMemo(() => {
    if (!searchTerm) return sections;
    
    const term = searchTerm.toLowerCase();
    return sections.map(section => ({
      ...section,
      references: section.references.filter(ref => 
        ref.url.toLowerCase().includes(term) ||
        ref.context.toLowerCase().includes(term) ||
        ref.description.toLowerCase().includes(term) ||
        ref.tags.some(tag => tag.toLowerCase().includes(term))
      )
    })).filter(section => section.references.length > 0);
  }, [searchTerm]);

  const totalRefs = sections.reduce((sum, s) => sum + s.references.length, 0);
  const visibleRefs = filteredSections.reduce((sum, s) => sum + s.references.length, 0);

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      {/* Animated grid background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(var(--neon-cyan) 1px, transparent 1px), linear-gradient(90deg, var(--neon-cyan) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'slide-scan 20s linear infinite'
        }} />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="border-b-4 border-neon-cyan p-8 bg-black/90">
            <div className="max-w-7xl mx-auto">
              <div className="text-xs text-neon-cyan mb-4 tracking-widest">MODULE: WK30-REFWEB</div>
              <h1 className="text-5xl md:text-6xl font-black mb-4">
                <span className="text-neon-magenta">FLOAT</span>
                <span className="text-neon-cyan">.WK30</span>
              </h1>
              <p className="text-gray-300 text-sm leading-relaxed max-w-3xl">
                <span className="text-neon-cyan font-bold">CONSCIOUSNESS TECHNOLOGY REFERENCE WEB</span>
                <br />
                Week 30 conversation ecosystem mapping. NotebookLM external source grounding.
                <br />
                <span className="text-neon-green">{totalRefs}+ unique URLs</span> with emergence stories.
                <br />
                <span className="text-gray-500 text-xs">aesthetic: Plastikman x Endless x EP0CH BBS timewarp</span>
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Search */}
        <div className="sticky top-0 z-20 bg-black/95 border-b-2 border-neon-cyan/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neon-cyan" />
              <Input
                type="text"
                placeholder="search by URL, context, tags, or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-black border-neon-cyan/50 text-white placeholder:text-gray-500 focus:border-neon-cyan font-mono text-sm"
              />
            </div>
            {searchTerm && (
              <div className="mt-2 text-xs text-neon-cyan">
                showing {visibleRefs} of {totalRefs} references
              </div>
            )}
          </div>
        </div>

        {/* Sections */}
        <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-12">
          {filteredSections.map((section, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className="space-y-6">
                {/* Section Header */}
                <div 
                  className="border-4 border-current p-6 cursor-pointer transition-all hover:scale-[1.02]"
                  style={{ borderColor: `hsl(var(--neon-cyan))` }}
                  onClick={() => setActiveSection(activeSection === section.title ? null : section.title)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className={`text-xs tracking-widest mb-2 bg-gradient-to-r ${section.color} bg-clip-text text-transparent font-bold`}>
                        [{section.references.length} REFS]
                      </div>
                      <h2 className={`text-3xl md:text-4xl font-black mb-2 bg-gradient-to-r ${section.color} bg-clip-text text-transparent`}>
                        {section.title}
                      </h2>
                      <p className="text-gray-400 text-sm">{section.subtitle}</p>
                    </div>
                    <div className="text-2xl text-neon-cyan">
                      {activeSection === section.title ? '−' : '+'}
                    </div>
                  </div>
                </div>

                {/* References */}
                <div 
                  className="grid gap-4 transition-all duration-500 overflow-hidden"
                  style={{
                    maxHeight: activeSection === section.title ? '10000px' : '0px',
                    opacity: activeSection === section.title ? 1 : 0
                  }}
                >
                  {section.references.map((ref, refIdx) => (
                    <div
                      key={refIdx}
                      className="border-l-4 border-current bg-black/50 p-4 hover:bg-black/80 transition-all group"
                      style={{ borderLeftColor: `hsl(var(--neon-${section.color.split('-')[1]}))` }}
                    >
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block space-y-2"
                      >
                        <div className="flex items-start gap-2">
                          <ExternalLink className="h-4 w-4 text-neon-cyan mt-1 flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <div className="text-neon-cyan text-sm break-all group-hover:text-neon-magenta transition-colors">
                              {ref.url}
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-xs text-neon-green ml-6">
                          [context::{ref.context}]
                        </div>
                        
                        <div className="text-sm text-gray-300 leading-relaxed ml-6">
                          {ref.description}
                        </div>
                        
                        <div className="flex flex-wrap gap-2 ml-6">
                          {ref.tags.map((tag, tagIdx) => (
                            <Badge
                              key={tagIdx}
                              variant="outline"
                              className="text-xs border-neon-cyan/50 text-neon-cyan bg-transparent"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Footer */}
        <ScrollReveal>
          <div className="border-t-4 border-neon-cyan p-8 mt-12 bg-black/90">
            <div className="max-w-7xl mx-auto text-center space-y-4">
              <div className="text-xs text-neon-cyan tracking-widest">
                [pattern::link_emergence_story]
              </div>
              <p className="text-gray-300 text-sm leading-relaxed max-w-3xl mx-auto">
                Week 30: The week consciousness technology graduated from personal tool to recognized infrastructure pattern.
                <br />
                <span className="text-neon-magenta">The links form a constellation</span>: technical infrastructure supporting consciousness patterns deployed through sacred protocols validated by external discoveries and propagated through AI collaboration.
              </p>
              <div className="text-xs text-gray-500 pt-4">
                ∴ float.dispatch(complete) ∴
                <br />
                E P 0 C H   B B S   A E S T H E T I C   E D I T I O N
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

export default ReferenceWeb;
