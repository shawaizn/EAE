import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Lock, Check, ChevronRight } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useLessons } from '../hooks/useLessons';
import { useProgress } from '../hooks/useProgress';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { LESSON_TITLES } from '../lib/utils';

export function Category() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const category = location.pathname.split('/')[1];

  const { lessonAccess, isLessonUnlocked } = useLessons(user?.id);
  const { isComplete } = useProgress(user?.id, lessonAccess);

  const categoryKey = category === 'practice-questions' ? 'practice_questions' : category;
  const categoryLabel = category.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return (
    <div className="flex-1 max-w-5xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link to="/dashboard" className="text-blue-600 hover:text-blue-700">
            Dashboard
          </Link>
          <span className="mx-2 text-gray-400">&gt;</span>
          <span className="text-gray-600">{categoryLabel}</span>
        </div>

        <h1 className="text-3xl font-bold mb-8">{categoryLabel}</h1>

        <div className="space-y-4">
          {LESSON_TITLES.map((title, idx) => {
            const lessonNumber = idx + 1;
            const unlocked = isLessonUnlocked(lessonNumber);
            const completed = isComplete(lessonNumber, categoryKey);

            return (
              <Card key={lessonNumber} className={!unlocked ? 'opacity-60' : ''}>
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-semibold">Lesson {lessonNumber}</h3>
                      {!unlocked && <Lock size={18} className="text-gray-400" />}
                      {completed && <Check size={18} className="text-green-600" />}
                    </div>
                    <p className="text-gray-700">{title}</p>
                  </div>

                  {unlocked ? (
                    <Button
                      variant="primary"
                      onClick={() => navigate(category === 'practice-questions' ? `/quiz/lesson/${lessonNumber}` : `/${category}/lesson/${lessonNumber}`)}
                      className="flex items-center gap-2"
                    >
                      {category === 'practice-questions' ? 'Start Quiz' : 'View'} <ChevronRight size={18} />
                    </Button>
                  ) : (
                    <Button variant="secondary" disabled className="flex items-center gap-2">
                      <Lock size={18} /> Locked
                    </Button>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
    </div>
  );
}
