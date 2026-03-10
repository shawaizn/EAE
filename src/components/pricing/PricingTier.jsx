import { theme } from '../../styles/theme';

export function PricingTier({ tier }) {
  return (
    <div className="h-full flex flex-col rounded-xl border-2 p-8 transition-all" style={{
      backgroundColor: theme.colors.background.card,
      borderColor: theme.colors.border.default,
      boxShadow: theme.shadows.medium,
    }}>
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2" style={{ color: theme.colors.text.primary }}>
          {tier.name}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: theme.colors.text.secondary }}>
          {tier.description}
        </p>
      </div>

      <div className="flex-1 mb-8">
        <div className="space-y-4">
          {tier.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5" style={{
                backgroundColor: `${theme.colors.accent.cyan}20`,
              }}>
                <div className="w-2 h-2 rounded-full" style={{
                  backgroundColor: theme.colors.accent.cyan,
                }} />
              </div>
              <span className="text-sm leading-relaxed" style={{ color: theme.colors.text.secondary }}>
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      <button
        className="w-full px-6 py-3 rounded-lg font-semibold transition-all"
        style={{
          backgroundColor: theme.colors.primary.electric,
          color: 'white',
          border: `2px solid ${theme.colors.primary.electric}`,
          boxShadow: theme.shadows.subtle,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = theme.shadows.medium;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = theme.shadows.subtle;
        }}
      >
        Get Started
      </button>
    </div>
  );
}
