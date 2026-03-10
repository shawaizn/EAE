import { theme } from '../../styles/theme';
import { PricingTier } from './PricingTier';

const pricingTiers = [
  {
    name: 'Basic',
    description: 'Essential AI concepts and foundational frameworks to get you started',
    features: [
      'Core AI principles and evaluation frameworks',
      'Understanding how AI tools work',
      'Access to module 1-3 lessons',
      'Progress tracking dashboard',
    ],
  },
  {
    name: 'Pro',
    description: 'Complete curriculum with practical implementation strategies and real-world applications',
    features: [
      'All modules 1-8 with full curriculum access',
      'Practical implementation frameworks',
      'Strategic decision-making guides',
      'Progress tracking and completion certificates',
    ],
  },
  {
    name: 'Advanced',
    description: 'Premium support with personalized guidance and advanced strategic insights',
    features: [
      'Everything in Pro tier',
      'Direct mentorship and guidance',
      'Personalized implementation roadmap',
      'Priority email support and resources',
    ],
  },
];

export function PricingTiers() {
  return (
    <section className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mb-20 sm:mb-32 animate-fade-in-up">
      <div className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2" style={{
          letterSpacing: '-0.03em',
          color: theme.colors.text.primary,
        }}>
          Explore Our Pricing Tiers
        </h2>
        <p style={{ color: theme.colors.text.secondary }}>
          Choose the plan that works best for your learning journey
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingTiers.map((tier, index) => (
          <PricingTier key={index} tier={tier} />
        ))}
      </div>
    </section>
  );
}
