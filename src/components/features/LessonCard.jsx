import { Check } from 'lucide-react';
import { Card } from '../ui/Card';

export function LessonCard({ lessonNumber, title, progress, isComplete }) {
  return (
    <Card>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-lg font-semibold">Lesson {lessonNumber}</h3>
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
