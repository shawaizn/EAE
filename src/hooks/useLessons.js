import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { lessons } from '../data/lessons';

export function useLessons(userId) {
  const [lessonAccess, setLessonAccess] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }

    fetchLessonAccess();
  }, [userId]);

  const fetchLessonAccess = async () => {
    try {
      const { data, error } = await supabase
        .from('lesson_access')
        .select('*')
        .eq('user_id', userId);

      if (error) {
        console.error('Error fetching lesson access:', error);
        setLessonAccess([]);
      } else {
        setLessonAccess(data || []);
      }
    } catch (err) {
      console.error('Error:', err);
      setLessonAccess([]);
    } finally {
      setLoading(false);
    }
  };

  const isLessonUnlocked = (lessonNumber) => {
    const access = lessonAccess.find(a => a.lesson_number === lessonNumber);
    return access?.unlocked || false;
  };

  return {
    lessons,
    lessonAccess,
    isLessonUnlocked,
    loading
  };
}
