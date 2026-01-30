import { useAuth } from '../hooks/useAuth';
import { Link } from 'react-router-dom';
import appFrameworkPdf from '../assets/app-framework.pdf';
import { EnergeticBackground } from '../components/branding/EnergeticBackground';

export function ResourcesPage() {
  const { user, signOut } = useAuth();

  return (
    <div className="flex-1 overflow-y-auto relative">
      {/* Animated Background */}
      <EnergeticBackground />

      <div className="max-w-screen-xl mx-auto px-8 py-8 relative z-10">
          {/* Breadcrumb */}
          {/* <div className="mb-8">
            <Link to="/dashboard" className="text-cyan-600 hover:text-cyan-700 font-medium transition-colors">
              Dashboard
            </Link>
            <span className="mx-2 text-slate-400">/</span>
            <span className="text-slate-600 font-medium">Resources</span>
          </div> */}

          {/* Header */}
          <div className="mb-24">
            <h1 className="text-5xl font-black text-slate-900 mb-3" style={{ letterSpacing: '-0.02em' }}>
              Resources
            </h1>
            <p className="text-lg text-slate-600 font-medium">Tools, templates, and guides to support your learning</p>
          </div>

          {/* Learner Profile */}
          <div className="mb-24 border-2 border-slate-200 rounded-lg shadow-lg bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:border-cyan-400/50">
            <div className="p-6 bg-slate-50 border-b-2 border-slate-200">
              <h2 className="text-2xl font-black text-slate-900" style={{ letterSpacing: '-0.02em' }}>
                Learner Profile Templates
              </h2>
            </div>
            <div className="p-12">
              <p className="text-slate-700 mb-6 leading-relaxed">
                Create your learner profile to personalize your AI learning experience.
              </p>
              <p className="text-slate-600">
                [Learner profile templates will be displayed here]
              </p>
            </div>
          </div>

          {/* AI Prompts */}
          <div className="mb-24 border-2 border-slate-200 rounded-lg shadow-lg bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:border-violet-400/50">
            <div className="p-6 bg-slate-50 border-b-2 border-slate-200">
              <h2 className="text-2xl font-black text-slate-900" style={{ letterSpacing: '-0.02em' }}>
                AI Response Prompts
              </h2>
            </div>
            <div className="p-12">
              <p className="text-slate-700 mb-6 leading-relaxed">
                Pre-built prompts to use with AI for explaining course content.
              </p>
              <p className="text-slate-600">
                [AI prompt templates will be displayed here]
              </p>
            </div>
          </div>

          {/* How-To Guides */}
          <div className="mb-24 border-2 border-slate-200 rounded-lg shadow-lg bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:border-orange-400/50">
            <div className="p-6 bg-slate-50 border-b-2 border-slate-200">
              <h2 className="text-2xl font-black text-slate-900" style={{ letterSpacing: '-0.02em' }}>
                How-To Guides
              </h2>
            </div>
            <div className="p-12">
              <p className="text-slate-700 mb-8 leading-relaxed">
                Step-by-step guides for getting the most out of the course.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-6 bg-white/80 backdrop-blur-sm border-2 border-slate-200 rounded-lg hover:border-cyan-600 hover:shadow-xl hover:-translate-y-1 hover:shadow-cyan-500/20 transition-all duration-300">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900">The APP Framework</h3>
                    <p className="text-slate-600 mt-2">
                      A comprehensive framework for understanding and applying key concepts
                    </p>
                  </div>
                  <a
                    href={appFrameworkPdf}
                    download="app-framework.pdf"
                    className="ml-6 px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors font-semibold"
                  >
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}