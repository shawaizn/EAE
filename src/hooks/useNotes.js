import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export function useNotes(userId) {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }
    fetchNotes();
  }, [userId]);

  const fetchNotes = async () => {
    try {
      const { data, error } = await supabase
        .from('notes')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching notes:', error);
        setNotes([]);
      } else {
        setNotes(data || []);
      }
    } catch (err) {
      console.error('Error:', err);
      setNotes([]);
    } finally {
      setLoading(false);
    }
  };

  const addNote = async (category, content) => {
    const { data, error } = await supabase
      .from('notes')
      .insert({ user_id: userId, category, content })
      .select()
      .maybeSingle();

    if (error) throw error;
    setNotes(prev => [data, ...prev]);
    return data;
  };

  const updateNote = async (id, content) => {
    const { data, error } = await supabase
      .from('notes')
      .update({ content, updated_at: new Date().toISOString() })
      .eq('id', id)
      .eq('user_id', userId)
      .select()
      .maybeSingle();

    if (error) throw error;
    setNotes(prev => prev.map(n => n.id === id ? data : n));
    return data;
  };

  const deleteNote = async (id) => {
    const { error } = await supabase
      .from('notes')
      .delete()
      .eq('id', id)
      .eq('user_id', userId);

    if (error) throw error;
    setNotes(prev => prev.filter(n => n.id !== id));
  };

  const getNotesByCategory = (category) => notes.filter(n => n.category === category);

  return { notes, loading, addNote, updateNote, deleteNote, getNotesByCategory };
}
