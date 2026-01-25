import { Lock, Check } from 'lucide-react';
import { Card } from '../ui/Card';

export function LessonCard({ lessonNumber, title, progress, isUnlocked, isComplete }) {
  const opacity = isUnlocked ? 'opacity-100' : 'opacity-60';

  return (
    <Card className={opacity}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-lg font-semibold">Lesson {lessonNumber}</h3>
            {!isUnlocked && <Lock size={18} className="text-gray-400" />}
            {isComplete && <Check size={18} className="text-green-600" />}
          </div>
          <p className="text-gray-700 mb-2">{title}</p>
          <p className="text-sm text-gray-600">
            Progress: {progress} items complete
          </p>
        </div>
      </div>
    </Card>
  );
}
