import { Link } from 'react-router-dom';
import { Zap, Target, Award, Check } from 'lucide-react';
import { landingContent } from '../data/landing';
import { Button } from '../components/ui/Button';
import CurriculumJourney from '../components/features/CurriculumJourney';
const iconMap = {
  'Zap': Zap,
  'Target': Target,
  'Award': Award
};

export function Landing() {
  const { hero, features, curriculum, howItWorks, audience, pricing, instructor, faq, finalCta, contact } = landingContent;

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {hero.title}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {hero.subtitle}
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/login">
              <Button variant="primary">{hero.ctaPrimary}</Button>
            </Link>
            <Button variant="outline">{hero.ctaSecondary}</Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = iconMap[feature.icon];
              return (
                <div key={idx} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    {Icon && <Icon size={32} className="text-blue-600" />}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CurriculumJourney />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{howItWorks.heading}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.steps.map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{audience.heading}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-green-600">Great Fit For:</h3>
              <ul className="space-y-3">
                {audience.goodFit.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check size={20} className="text-green-600 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-600">Not Ideal For:</h3>
              <ul className="space-y-3">
                {audience.notGoodFit.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{pricing.heading}</h2>
          <div className="bg-white border-2 border-blue-600 rounded-lg p-8 text-center">
            <div className="text-4xl font-bold mb-4">{pricing.amount}</div>
            <p className="text-gray-600 mb-6">{pricing.nextCohort}</p>
            <ul className="space-y-3 mb-8 text-left max-w-md mx-auto">
              {pricing.includes.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check size={20} className="text-green-600 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/login">
              <Button variant="primary" className="w-full max-w-md">{pricing.ctaButton}</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{instructor.heading}</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <img
              src={instructor.photoUrl}
              alt={instructor.name}
              className="w-48 h-48 rounded-full object-cover"
            />
            <div>
              <h3 className="text-2xl font-semibold mb-4">{instructor.name}</h3>
              <p className="text-gray-600 whitespace-pre-line">{instructor.bio}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{faq.heading}</h2>
          <div className="space-y-6">
            {faq.questions.map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{finalCta.heading}</h2>
          <p className="text-xl mb-8">{finalCta.description}</p>
          <Link to="/login">
            <Button variant="secondary">{finalCta.button}</Button>
          </Link>
        </div>
      </section>

      <footer className="py-8 bg-gray-900 text-white text-center">
        <p>Contact: {contact.email}</p>
      </footer>
    </div>
  );
}
