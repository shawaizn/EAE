import { useParams, useLocation, Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useLessons } from '../hooks/useLessons';
import { useProgress } from '../hooks/useProgress';
import { MainSidebar } from '../components/layout/MainSidebar';
import { Button } from '../components/ui/Button';
import { Check } from 'lucide-react';

export function Content() {
  const { user, signOut } = useAuth();
  const { lessonNumber } = useParams();
  const location = useLocation();
  const category = location.pathname.split('/')[1];

  const { lessons } = useLessons(user?.id);
  const { isComplete, toggleComplete } = useProgress(user?.id, []);

  const [isMarking, setIsMarking] = useState(false);

  const categoryKey = category === 'practice-questions' ? 'practice_questions' : category;
  const categoryLabel = category.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const lessonNum = parseInt(lessonNumber);

  const lessonData = lessons[categoryKey]?.[lessonNum];
  const completed = isComplete(lessonNum, categoryKey);
  const isPracticeQuestions = category === 'practice-questions';

  const handleToggleComplete = async () => {
    setIsMarking(true);
    try {
      await toggleComplete(lessonNum, categoryKey);
    } catch (err) {
      console.error('Error toggling complete:', err);
    } finally {
      setIsMarking(false);
    }
  };

  if (!lessonData) {
    return (
      <div className="flex">
        <MainSidebar user={user} onSignOut={signOut} />
        <div className="flex-1 p-8">
          <p>Content not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex">
      <MainSidebar user={user} onSignOut={signOut} />

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6">
            <Link to={`/${category}`} className="text-blue-600 hover:text-blue-700">
              {categoryLabel}
            </Link>
            <span className="mx-2 text-gray-400">&gt;</span>
            <span className="text-gray-600">{lessonData.title}</span>
          </div>

          <article
            className={`prose prose-lg max-w-none ${categoryKey === 'notes' ? 'prose-notes' : 'prose-activities'}`}
            dangerouslySetInnerHTML={{ __html: lessonData.content }}
          />

          {!isPracticeQuestions && (
            <div className="mt-8 pt-8 border-t">
              <Button
                variant={completed ? 'success' : 'primary'}
                onClick={handleToggleComplete}
                disabled={isMarking}
                className="flex items-center gap-2"
              >
                {completed ? (
                  <>
                    <Check size={18} /> Completed
                  </>
                ) : (
                  'Mark as Complete'
                )}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
