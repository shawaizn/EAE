import { Video, Wrench, BookMarked, FileText, Brain, MapPin, Lightbulb, Layers, Diamond, Workflow, Gauge, Trophy } from 'lucide-react';
import { theme, behavior } from '../../styles/theme';

const FEATURES = [
  {
    icon: Video,
    name: 'Video Lessons',
    benefit: 'Concise explanations designed for action. Every video includes copy-paste summaries you can feed directly into an LLM and convert for your specific needs -- extracting maximum value from every lesson.',
  },
  {
    icon: Wrench,
    name: 'Hands-On Activities',
    benefit: "Don't just learn about AI -- apply it. Build valuable, career-relevant skills through practical application, not passive consumption.",
  },
  {
    icon: BookMarked,
    name: 'Quick-Reference Guides',
    benefit: 'Short on time or already familiar with the basics? Jump straight to what matters or use these for rapid revision.',
  },
  {
    icon: FileText,
    name: 'Module Notes',
    benefit: 'Accelerate learning with distilled insights from each module -- no fluff, just what you need to know.',
  },
  {
    icon: Brain,
    name: 'Knowledge Checks',
    benefit: 'Test your understanding and cement new concepts through targeted quizzes after each module.',
  },
  {
    icon: MapPin,
    name: 'Progress Tracking',
    benefit: 'Resume exactly where you left off -- never lose momentum or waste time searching for your place.',
  },
  {
    icon: Lightbulb,
    name: 'Application Tips',
    benefit: 'Never wonder "How do I actually use this?" Specific, practical guidance ensures you can immediately apply what you\'ve learned.',
  },
  {
    icon: Layers,
    name: 'Lasting Frameworks',
    benefit: 'Build durable understanding through timeless mental models -- not information that becomes outdated as tools evolve.',
  },
  {
    icon: Diamond,
    name: 'Proprietary Mental Models',
    benefit: "Strategic thinking frameworks built from real-world experience, not generic theory you'll find in every other course.",
  },
  {
    icon: Workflow,
    name: 'AI Adoption Process',
    benefit: 'Our streamlined methodology for integrating AI into your workflow -- turning knowledge into consistent productivity gains.',
  },
  {
    icon: Gauge,
    name: 'Maximum Learning, Zero Waste',
    benefit: 'Every component is designed for efficiency -- dense with value, stripped of filler.',
  },
  {
    icon: Trophy,
    name: 'Final Project',
    benefit: 'Tangible proof of capability, not just a certificate. Build something real that demonstrates mastery and creates immediate value.',
  },
];

export function FeaturesTable() {
  return (
    <section className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mb-20 sm:mb-32 animate-fade-in-up" style={{
      animationDelay: '0.45s',
    }}>
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4" style={{
          backgroundColor: `${theme.colors.accent.coral}10`,
        }}>
          <Gauge size={14} style={{ color: theme.colors.accent.coral }} />
          <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: theme.colors.accent.coral }}>
            Platform Features
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold mb-2" style={{
          letterSpacing: '-0.03em',
          color: theme.colors.text.primary,
        }}>
          What's Inside
        </h2>
        <p style={{ color: theme.colors.text.secondary }}>
          A few of the components built into the platform
        </p>
      </div>

      <div className="hidden md:block rounded-xl border-2 overflow-hidden" style={{
        borderColor: theme.colors.border.subtle,
        boxShadow: theme.shadows.medium,
      }}>
        <table className="w-full">
          <thead>
            <tr style={{
              background: `linear-gradient(135deg, ${theme.colors.primary.deep} 0%, ${theme.colors.primary.electric} 100%)`,
            }}>
              <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-wider text-white/90 w-[260px]">
                Feature
              </th>
              <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-wider text-white/90">
                What You Get
              </th>
            </tr>
          </thead>
          <tbody>
            {FEATURES.map((feature, index) => {
              const Icon = feature.icon;
              const isEven = index % 2 === 0;
              return (
                <tr
                  key={feature.name}
                  className="group transition-colors duration-150"
                  style={{
                    backgroundColor: isEven ? theme.colors.background.card : theme.colors.background.subtle,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = `${theme.colors.accent.cyan}08`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = isEven ? theme.colors.background.card : theme.colors.background.subtle;
                  }}
                >
                  <td className="px-6 py-5 align-top" style={{ borderBottom: `1px solid ${theme.colors.border.subtle}` }}>
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform ${behavior.hoverScale ? 'group-hover:scale-110' : ''}`} style={{
                        backgroundColor: `${theme.colors.accent.cyan}12`,
                        transitionDuration: '200ms',
                      }}>
                        <Icon size={18} style={{ color: theme.colors.accent.cyan }} />
                      </div>
                      <span className="font-semibold text-sm" style={{ color: theme.colors.text.primary }}>
                        {feature.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5 align-top" style={{ borderBottom: `1px solid ${theme.colors.border.subtle}` }}>
                    <p className="text-sm leading-relaxed" style={{ color: theme.colors.text.secondary }}>
                      {feature.benefit}
                    </p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="md:hidden space-y-3">
        {FEATURES.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.name}
              className="p-5 rounded-xl border transition-all"
              style={{
                borderColor: theme.colors.border.subtle,
                backgroundColor: theme.colors.background.card,
                boxShadow: theme.shadows.subtle,
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{
                  backgroundColor: `${theme.colors.accent.cyan}12`,
                }}>
                  <Icon size={18} style={{ color: theme.colors.accent.cyan }} />
                </div>
                <span className="font-semibold text-sm" style={{ color: theme.colors.text.primary }}>
                  {feature.name}
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: theme.colors.text.secondary }}>
                {feature.benefit}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
