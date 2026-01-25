import { modulesData } from '../data/modulesData';
export const MODULE_TITLES = [
  'What is AI?',
  'Today\'s AI - From Chatbots to Agents',
  'The AI Market',
  'When to Use AI (and When Not)',
  'Speaking AI - Prompting Mastery',
  'Using AI Like the Top 1%',
  'Your Future Strategy in the AI Era'
];

export const CATEGORIES = ['notes', 'activities', 'practice_questions', 'resources'];

export function calculateProgress(completions, totalLessons = 35) {
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

// Convert (moduleId, lessonId) to global lesson number (1-35)
// Module 1, Lesson 1 = 1
// Module 1, Lesson 5 = 5
// Module 2, Lesson 1 = 6
// Module 2, Lesson 5 = 10
// Module 7, Lesson 5 = 35
export function getLessonNumber(moduleId, lessonId) {
  return (moduleId - 1) * 5 + lessonId;
}

// Reverse: convert global lesson number back to (moduleId, lessonId)
export function getModuleAndLesson(lessonNumber) {
  const moduleId = Math.floor((lessonNumber - 1) / 5) + 1;
  const lessonId = ((lessonNumber - 1) % 5) + 1;
  return { moduleId, lessonId };
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