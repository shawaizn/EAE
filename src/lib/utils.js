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

export function getProgressStats(completions, totalLessons = 44) {
  const totalCompleted = completions.length;
  const percentComplete = Math.round((totalCompleted / (totalLessons * 5)) * 100);

  const lessonsWithAnyCompletion = new Set();
  const lessonCompletion = {};

  completions.forEach(c => {
    lessonsWithAnyCompletion.add(c.lesson_number);
    if (!lessonCompletion[c.lesson_number]) {
      lessonCompletion[c.lesson_number] = [];
    }
    lessonCompletion[c.lesson_number].push(c.category);
  });

  const fullLessonsCompleted = Object.values(lessonCompletion).filter(
    categories => categories.length === 5
  ).length;

  return {
    totalCompleted,
    percentComplete,
    lessonsStarted: lessonsWithAnyCompletion.size,
    lessonsFullyCompleted: fullLessonsCompleted,
    lessonCompletion
  };
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

// Parse markdown text and convert to formatted HTML
export function parseMarkdownToHTML(text) {
  if (!text) return '';

  // Split into lines
  let lines = text.split('\n');
  let html = '';
  let inList = false;

  lines.forEach((line, index) => {
    // Handle bold text with **
    line = line.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

    // Check if line starts with dash (bullet point)
    if (line.trim().startsWith('-')) {
      // Start list if not already in one
      if (!inList) {
        html += '<ul class="space-y-2 my-4">';
        inList = true;
      }
      // Remove the dash and add list item
      const content = line.trim().substring(1).trim();
      html += `<li class="ml-6">${content}</li>`;
    } else {
      // Close list if we were in one
      if (inList) {
        html += '</ul>';
        inList = false;
      }

      // Add paragraph for non-empty lines
      if (line.trim()) {
        html += `<p class="mb-4">${line}</p>`;
      }
    }
  });

  // Close list if still open at end
  if (inList) {
    html += '</ul>';
  }

  return html;
}