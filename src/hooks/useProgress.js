import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { calculateProgress } from '../lib/utils';

export function useProgress(userId, lessonAccess) {
  const [completions, setCompletions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }

    fetchCompletions();
  }, [userId]);

  const fetchCompletions = async () => {
    try {
      const { data, error } = await supabase
        .from('completions')
        .select('*')
        .eq('user_id', userId)
        .eq('completed', true);

      if (error) {
        console.error('Error fetching completions:', error);
        setCompletions([]);
      } else {
        setCompletions(data || []);
      }
    } catch (err) {
      console.error('Error:', err);
      setCompletions([]);
    } finally {
      setLoading(false);
    }
  };

  const markComplete = async (lessonNumber, category) => {
    try {
      const { data, error } = await supabase
        .from('completions')
        .upsert({
          user_id: userId,
          lesson_number: lessonNumber,
          category,
          completed: true,
          completed_at: new Date().toISOString()
        }, {
          onConflict: 'user_id,lesson_number,category'
        })
        .select()
        .maybeSingle();

      if (error) {
        console.error('Error marking complete:', error);
        throw error;
      }

      await fetchCompletions();
      return data;
    } catch (err) {
      console.error('Error:', err);
      throw err;
    }
  };

  const toggleComplete = async (lessonNumber, category) => {
    try {
      const isCurrentlyComplete = completions.some(
        c => c.lesson_number === lessonNumber &&
             c.category === category &&
             c.completed
      );

      if (isCurrentlyComplete) {
        const { error } = await supabase
          .from('completions')
          .delete()
          .eq('user_id', userId)
          .eq('lesson_number', lessonNumber)
          .eq('category', category);

        if (error) {
          console.error('Error removing completion:', error);
          throw error;
        }
      } else {
        const { data, error } = await supabase
          .from('completions')
          .upsert({
            user_id: userId,
            lesson_number: lessonNumber,
            category,
            completed: true,
            completed_at: new Date().toISOString()
          }, {
            onConflict: 'user_id,lesson_number,category'
          })
          .select()
          .maybeSingle();

        if (error) {
          console.error('Error marking complete:', error);
          throw error;
        }
      }

      await fetchCompletions();
    } catch (err) {
      console.error('Error:', err);
      throw err;
    }
  };

  const isComplete = (lessonNumber, category) => {
    return completions.some(
      c => c.lesson_number === lessonNumber &&
           c.category === category &&
           c.completed
    );
  };

  const getLessonProgress = (lessonNumber) => {
    const lessonCompletions = completions.filter(
      c => c.lesson_number === lessonNumber && c.completed
    );
    return lessonCompletions.length;
  };

  const unlockedLessons = lessonAccess.filter(a => a.unlocked);
  const overallProgress = calculateProgress(completions, unlockedLessons);

  return {
    completions,
    overallProgress,
    getLessonProgress,
    isComplete,
    markComplete,
    toggleComplete,
    loading
  };
}
