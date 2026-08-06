import { useState, useEffect } from 'react';
import { calculateProgress } from '../lib/utils';

const STORAGE_KEY = 'eae_completions';

export function useProgress(userId, lessonAccess) {
  const [completions, setCompletions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) { setLoading(false); return; }
    const stored = localStorage.getItem(`${STORAGE_KEY}_${userId}`);
    setCompletions(stored ? JSON.parse(stored) : []);
    setLoading(false);
  }, [userId]);

  const save = (updated) => {
    setCompletions(updated);
    localStorage.setItem(`${STORAGE_KEY}_${userId}`, JSON.stringify(updated));
  };

  const markComplete = async (lessonNumber, category) => {
    const exists = completions.some(c => c.lesson_number === lessonNumber && c.category === category);
    if (!exists) {
      save([...completions, {
        id: `${lessonNumber}-${category}`,
        user_id: userId, lesson_number: lessonNumber, category,
        completed: true, completed_at: new Date().toISOString()
      }]);
    }
  };

  const toggleComplete = async (lessonNumber, category) => {
    const exists = completions.some(c => c.lesson_number === lessonNumber && c.category === category && c.completed);
    if (exists) {
      save(completions.filter(c => !(c.lesson_number === lessonNumber && c.category === category)));
    } else {
      save([...completions, {
        id: `${lessonNumber}-${category}`,
        user_id: userId, lesson_number: lessonNumber, category,
        completed: true, completed_at: new Date().toISOString()
      }]);
    }
  };

  const isComplete = (lessonNumber, category) =>
    completions.some(c => c.lesson_number === lessonNumber && c.category === category && c.completed);

  const getLessonProgress = (lessonNumber) =>
    completions.filter(c => c.lesson_number === lessonNumber && c.completed).length;

  const unlockedLessons = lessonAccess.filter(a => a.unlocked);
  const overallProgress = calculateProgress(completions, unlockedLessons);

  return { completions, overallProgress, getLessonProgress, isComplete, markComplete, toggleComplete, loading };
}
