import { useState, useEffect } from 'react';

const STORAGE_KEY = 'eae_notes';

export function useNotes(userId) {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) { setLoading(false); return; }
    const stored = localStorage.getItem(`${STORAGE_KEY}_${userId}`);
    setNotes(stored ? JSON.parse(stored) : []);
    setLoading(false);
  }, [userId]);

  const save = (updated) => {
    setNotes(updated);
    localStorage.setItem(`${STORAGE_KEY}_${userId}`, JSON.stringify(updated));
  };

  const addNote = async (category, content) => {
    const note = { id: Date.now().toString(), user_id: userId, category, content, created_at: new Date().toISOString() };
    save([note, ...notes]);
    return note;
  };

  const updateNote = async (id, content) => {
    const updated = notes.map(n => n.id === id ? { ...n, content, updated_at: new Date().toISOString() } : n);
    save(updated);
    return updated.find(n => n.id === id);
  };

  const deleteNote = async (id) => {
    save(notes.filter(n => n.id !== id));
  };

  const getNotesByCategory = (category) => notes.filter(n => n.category === category);

  return { notes, loading, addNote, updateNote, deleteNote, getNotesByCategory };
}
