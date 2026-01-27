import { modulesData } from '../data/modulesData';
export const MODULE_TITLES = modulesData.map(m => m.title);

export const CATEGORIES = ['notes', 'activities', 'practice_questions', 'resources'];

export function calculateProgress(completions, totalLessons = null) {
  if (totalLessons === null) {
    totalLessons = modulesData.reduce((sum, m) => sum + m.lessons.length, 0);
  }
  const totalPossible = totalLessons * 4;

  if (totalPossible === 0) return 0;

  const completed = completions.filter(c => c.completed).length;
  return Math.round((completed / totalPossible) * 100);
}

export function getModuleProgress(moduleId, completions) {
  const module = modulesData.find(m => m.id === moduleId);
  if (!module) return 0;
  
  const moduleCompletions = completions.filter(
    c => c.category === 'lesson' && 
    c.lesson_number.toString().startsWith(`${moduleId}-`)
  );
  
  const totalLessons = module.lessons.length;
  const completedLessons = moduleCompletions.length;
  
  if (totalLessons === 0) return 0;
  return Math.round((completedLessons / totalLessons) * 100);
}

export function getLessonKey(moduleId, lessonId) {
  return `${moduleId}-${lessonId}`;
}

// Convert (moduleId, lessonId) to global lesson number
export function getLessonNumber(moduleId, lessonId) {
  let lessonNumber = 0;
  for (let i = 0; i < moduleId - 1; i++) {
    lessonNumber += modulesData[i].lessons.length;
  }
  return lessonNumber + lessonId;
}

// Reverse: convert global lesson number back to (moduleId, lessonId)
export function getModuleAndLesson(lessonNumber) {
  let count = 0;
  for (const module of modulesData) {
    if (count + module.lessons.length >= lessonNumber) {
      return { moduleId: module.id, lessonId: lessonNumber - count };
    }
    count += module.lessons.length;
  }
  return { moduleId: 1, lessonId: 1 };
}


// Helper to calculate module progress from moduleProgresses array
export function getModuleProgressFromArray(moduleId, moduleProgresses) {
  const module = moduleProgresses.find(m => m.moduleId === moduleId);
  return module ? module.progress : 0;
}

// Get the state of a module for display purposes
export function getModuleState(moduleId, moduleProgresses) {
  const module = moduleProgresses.find(m => m.moduleId === moduleId);
  if (!module) return 'available';
  if (module.progress === 100) return 'completed';
  if (module.progress > 0) return 'in-progress';
  return 'available';
}