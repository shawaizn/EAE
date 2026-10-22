import { moduleNotes } from '../data/moduleNotes';

export async function getModuleNotes(moduleId) {
  return moduleNotes[Number(moduleId)] || null;
}

export async function getAllModuleNotes() {
  return moduleNotes;
}
