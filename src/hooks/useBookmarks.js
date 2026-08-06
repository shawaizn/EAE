import { useState, useEffect } from 'react';

const STORAGE_KEY = 'eae_bookmarks';

export function useBookmarks(userId) {
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) { setLoading(false); return; }
    const stored = localStorage.getItem(`${STORAGE_KEY}_${userId}`);
    setBookmarks(stored ? JSON.parse(stored) : []);
    setLoading(false);
  }, [userId]);

  const save = (updated) => {
    setBookmarks(updated);
    localStorage.setItem(`${STORAGE_KEY}_${userId}`, JSON.stringify(updated));
  };

  const toggleBookmark = async (lessonNumber) => {
    const exists = bookmarks.find(b => b.lesson_number === lessonNumber);
    if (exists) {
      save(bookmarks.filter(b => b.lesson_number !== lessonNumber));
    } else {
      save([{ id: `${userId}-${lessonNumber}`, user_id: userId, lesson_number: lessonNumber, created_at: new Date().toISOString() }, ...bookmarks]);
    }
  };

  const isBookmarked = (lessonNumber) => bookmarks.some(b => b.lesson_number === lessonNumber);

  return { bookmarks, loading, toggleBookmark, isBookmarked };
}
