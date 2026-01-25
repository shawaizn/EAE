import { useAuth } from '../hooks/useAuth';
import { Link } from 'react-router-dom';

export function ResourcesPage() {
  const { user, signOut } = useAuth();

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link to="/dashboard" className="text-blue-600 hover:text-blue-700">
              Dashboard
            </Link>
            <span className="mx-2 text-gray-400">&gt;</span>
            <span className="text-gray-600">Resources</span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Resources</h1>
            <p className="text-gray-600">Tools, templates, and guides to support your learning</p>
          </div>

          {/* Learner Profile */}
          <div className="mb-8 border rounded-lg">
            <div className="p-4 bg-gray-50">
              <h2 className="font-semibold text-gray-900">Learner Profile Templates</h2>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                Create your learner profile to personalize your AI learning experience.
              </p>
              <p className="text-gray-600 text-sm">
                [Learner profile templates will be displayed here]
              </p>
            </div>
          </div>

          {/* AI Prompts */}
          <div className="mb-8 border rounded-lg">
            <div className="p-4 bg-gray-50">
              <h2 className="font-semibold text-gray-900">AI Response Prompts</h2>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                Pre-built prompts to use with AI for explaining course content.
              </p>
              <p className="text-gray-600 text-sm">
                [AI prompt templates will be displayed here]
              </p>
            </div>
          </div>

          {/* How-To Guides */}
          <div className="mb-8 border rounded-lg">
            <div className="p-4 bg-gray-50">
              <h2 className="font-semibold text-gray-900">How-To Guides</h2>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                Step-by-step guides for getting the most out of the course.
              </p>
              <p className="text-gray-600 text-sm">
                [How-to guide content will be displayed here]
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}