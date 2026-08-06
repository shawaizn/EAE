import { useState, useEffect } from 'react';

const STORAGE_KEY = 'eae_prompts';

export function usePrompts(userId) {
  const [prompts, setPrompts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) { setLoading(false); return; }
    const stored = localStorage.getItem(`${STORAGE_KEY}_${userId}`);
    setPrompts(stored ? JSON.parse(stored) : []);
    setLoading(false);
  }, [userId]);

  const save = (updated) => {
    setPrompts(updated);
    localStorage.setItem(`${STORAGE_KEY}_${userId}`, JSON.stringify(updated));
  };

  const addPrompt = async (category, title, content) => {
    const prompt = { id: Date.now().toString(), user_id: userId, category, title, content, created_at: new Date().toISOString() };
    save([prompt, ...prompts]);
    return prompt;
  };

  const updatePrompt = async (id, title, content) => {
    const updated = prompts.map(p => p.id === id ? { ...p, title, content, updated_at: new Date().toISOString() } : p);
    save(updated);
    return updated.find(p => p.id === id);
  };

  const deletePrompt = async (id) => {
    save(prompts.filter(p => p.id !== id));
  };

  const getPromptsByCategory = (category) => prompts.filter(p => p.category === category);

  return { prompts, loading, addPrompt, updatePrompt, deletePrompt, getPromptsByCategory };
}
