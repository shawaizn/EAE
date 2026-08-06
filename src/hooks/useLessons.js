import { lessons } from '../data/lessons';
import { modulesData } from '../data/modulesData';

const totalLessons = modulesData.reduce((sum, m) => sum + m.lessons.length, 0);
const allUnlocked = Array.from({ length: totalLessons }, (_, i) => ({
  lesson_number: i + 1,
  unlocked: true,
}));

export function useLessons() {
  return {
    lessons,
    lessonAccess: allUnlocked,
    isLessonUnlocked: () => true,
    loading: false,
  };
}
