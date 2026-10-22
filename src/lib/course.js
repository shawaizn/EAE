import { modulesData } from '../data/modulesData';
import { getLessonNumber } from './utils';
import { isModuleLocked } from '../config/access';

// The course as students see it: sections → modules → lessons.
export const COURSE_TITLE = 'AI Advantage Academy';

export const SECTIONS = [
  { id: 'foundation', title: 'Foundation', modules: [1, 2] },
  { id: 'application', title: 'Application', modules: [3, 4, 5] },
  { id: 'strategy', title: 'Strategy', modules: [6, 7, 8] },
];

// One-line description of each module, shown in the syllabus
export const MODULE_BLURBS = {
  1: 'Learn what AI is, how it fits in technology history, and the evolution from programming to machine learning.',
  2: 'Understand how ChatGPT works, the autonomy ladder, and frameworks to evaluate any AI tool in your workflow.',
  3: 'Explore how AI moves from research labs to products, who controls what, and the business models driving development.',
  4: 'Discover when to use AI and when not to, which work to protect, and how to avoid the five most common AI traps.',
  5: 'Master contextual prompting frameworks, meta-prompting techniques, and build custom prompt libraries for your needs.',
  6: 'Learn systems thinking for building workflows around outcomes and creating playbooks that survive tool changes.',
  7: 'Identify which skills increase in value with AI and understand the competitive advantages AI cannot replicate.',
  8: 'Build systematic implementation strategies, enable team collaboration, and learn to measure real business impact.',
};

export const getModule = (moduleId) => modulesData.find(m => m.id === Number(moduleId));

export const sectionForModule = (moduleId) => SECTIONS.find(s => s.modules.includes(Number(moduleId)));

// Every lesson in course order
export const ALL_LESSONS = modulesData.flatMap(m =>
  m.lessons.map((l, i) => ({
    moduleId: m.id,
    lessonId: l.id,
    title: l.title,
    number: getLessonNumber(m.id, l.id),
    indexInModule: i,
    moduleLessonCount: m.lessons.length,
  }))
);

export const lessonPath = (l) => `/modules/${l.moduleId}/lessons/${l.lessonId}`;

export const unlockedLessons = (user) => ALL_LESSONS.filter(l => !isModuleLocked(l.moduleId, user));

// The lesson to pick up from: the first unfinished lesson the student can open
export function resumeLesson(user, isComplete) {
  const open = unlockedLessons(user);
  return open.find(l => !isComplete(l.number, 'lesson')) || null;
}

export function neighbours(moduleId, lessonId) {
  const i = ALL_LESSONS.findIndex(l => l.moduleId === Number(moduleId) && l.lessonId === Number(lessonId));
  return { prev: i > 0 ? ALL_LESSONS[i - 1] : null, next: i >= 0 ? ALL_LESSONS[i + 1] || null : null, current: ALL_LESSONS[i] };
}

export function moduleStats(moduleId, isComplete) {
  const m = getModule(moduleId);
  const done = m.lessons.filter(l => isComplete(getLessonNumber(m.id, l.id), 'lesson')).length;
  return { done, total: m.lessons.length, pct: Math.round((done / m.lessons.length) * 100) };
}
