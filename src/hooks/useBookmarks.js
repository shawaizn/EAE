import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export function useBookmarks(userId) {
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }
    fetchBookmarks();
  }, [userId]);

  const fetchBookmarks = async () => {
    try {
      const { data, error } = await supabase
        .from('bookmarks')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching bookmarks:', error);
        setBookmarks([]);
      } else {
        setBookmarks(data || []);
      }
    } catch (err) {
      console.error('Error:', err);
      setBookmarks([]);
    } finally {
      setLoading(false);
    }
  };

  const toggleBookmark = async (lessonNumber) => {
    const existing = bookmarks.find(b => b.lesson_number === lessonNumber);

    if (existing) {
      const { error } = await supabase
        .from('bookmarks')
        .delete()
        .eq('id', existing.id)
        .eq('user_id', userId);

      if (error) throw error;
      setBookmarks(prev => prev.filter(b => b.id !== existing.id));
    } else {
      const { data, error } = await supabase
        .from('bookmarks')
        .insert({ user_id: userId, lesson_number: lessonNumber })
        .select()
        .maybeSingle();

      if (error) throw error;
      setBookmarks(prev => [data, ...prev]);
    }
  };

  const isBookmarked = (lessonNumber) => bookmarks.some(b => b.lesson_number === lessonNumber);

  return { bookmarks, loading, toggleBookmark, isBookmarked };
}
