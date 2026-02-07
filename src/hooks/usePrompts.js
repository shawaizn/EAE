import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export function usePrompts(userId) {
  const [prompts, setPrompts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }
    fetchPrompts();
  }, [userId]);

  const fetchPrompts = async () => {
    try {
      const { data, error } = await supabase
        .from('prompts')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching prompts:', error);
        setPrompts([]);
      } else {
        setPrompts(data || []);
      }
    } catch (err) {
      console.error('Error:', err);
      setPrompts([]);
    } finally {
      setLoading(false);
    }
  };

  const addPrompt = async (category, title, content) => {
    const { data, error } = await supabase
      .from('prompts')
      .insert({ user_id: userId, category, title, content })
      .select()
      .maybeSingle();

    if (error) throw error;
    setPrompts(prev => [data, ...prev]);
    return data;
  };

  const updatePrompt = async (id, title, content) => {
    const { data, error } = await supabase
      .from('prompts')
      .update({ title, content, updated_at: new Date().toISOString() })
      .eq('id', id)
      .eq('user_id', userId)
      .select()
      .maybeSingle();

    if (error) throw error;
    setPrompts(prev => prev.map(p => p.id === id ? data : p));
    return data;
  };

  const deletePrompt = async (id) => {
    const { error } = await supabase
      .from('prompts')
      .delete()
      .eq('id', id)
      .eq('user_id', userId);

    if (error) throw error;
    setPrompts(prev => prev.filter(p => p.id !== id));
  };

  const getPromptsByCategory = (category) => prompts.filter(p => p.category === category);

  return { prompts, loading, addPrompt, updatePrompt, deletePrompt, getPromptsByCategory };
}
