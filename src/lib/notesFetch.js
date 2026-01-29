import { supabase } from './supabase';

let notesCache = null;

export async function getModuleNotes(moduleId) {
  try {
    // Try cache first
    if (notesCache && notesCache[moduleId]) {
      return notesCache[moduleId];
    }

    const { data, error } = await supabase
      .from('module_notes')
      .select('title, sections')
      .eq('module_id', moduleId)
      .maybeSingle();

    if (error) {
      console.error('Error fetching module notes:', error);
      return null;
    }

    if (data) {
      if (!notesCache) notesCache = {};
      notesCache[moduleId] = data;
      return data;
    }

    return null;
  } catch (error) {
    console.error('Error fetching module notes:', error);
    return null;
  }
}

export async function getAllModuleNotes() {
  try {
    if (notesCache && Object.keys(notesCache).length >= 7) {
      return notesCache;
    }

    const { data, error } = await supabase
      .from('module_notes')
      .select('module_id, title, sections')
      .order('module_id', { ascending: true });

    if (error) {
      console.error('Error fetching all module notes:', error);
      return null;
    }

    notesCache = {};
    data?.forEach(note => {
      notesCache[note.module_id] = {
        title: note.title,
        sections: note.sections
      };
    });

    return notesCache;
  } catch (error) {
    console.error('Error fetching all module notes:', error);
    return null;
  }
}
