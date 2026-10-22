import { Link } from 'react-router-dom';
import { ChevronLeft, FileText, Lock } from 'lucide-react';
import { eduTheme as theme } from '../../styles/theme';
import { COURSE_TITLE, SECTIONS, getModule, moduleStats, lessonPath } from '../../lib/course';
import { getLessonNumber } from '../../lib/utils';
import { isModuleLocked } from '../../config/access';
import { LessonStatus, ProgressBar } from './Syllabus';

const c = theme.colors;

// Left-hand outline on lesson pages: the current module's lessons with
// ticks, its notes & quiz, then every other module to jump to.
export function CourseOutline({ moduleId, lessonId, user, isComplete, onNavigate }) {
  const module = getModule(moduleId);
  const { done, total, pct } = moduleStats(moduleId, isComplete);

  return (
    <nav className="p-5" aria-label="Course outline">
      <Link to="/hub" onClick={onNavigate} className="inline-flex items-center gap-1 text-sm font-semibold hover:opacity-70" style={{ color: c.text.primary }}>
        <ChevronLeft size={16} /> Dashboard
      </Link>
      <p className="mt-4 text-xs font-bold uppercase tracking-widest" style={{ color: c.accent.cyan }}>{COURSE_TITLE}</p>
      <p className="mt-1 text-xs font-semibold" style={{ color: c.text.muted }}>Module {moduleId}</p>
      <h2 className="text-lg font-extrabold leading-snug" style={{ color: c.text.primary }}>{module.title}</h2>
      <div className="mt-3 flex items-center gap-3">
        <ProgressBar pct={pct} height={6} />
        <span className="text-xs font-semibold whitespace-nowrap" style={{ color: c.text.secondary }}>{done}/{total}</span>
      </div>

      <ol className="mt-4 space-y-1">
        {module.lessons.map(l => {
          const here = l.id === Number(lessonId);
          const isDone = isComplete(getLessonNumber(moduleId, l.id), 'lesson');
          return (
            <li key={l.id}>
              <Link
                to={lessonPath({ moduleId, lessonId: l.id })}
                onClick={onNavigate}
                aria-current={here ? 'page' : undefined}
                className="flex items-start gap-3 p-2.5 rounded-lg transition-colors hover:bg-orange-50"
                style={here ? { backgroundColor: c.brand.soft } : undefined}
              >
                <span className="flex-none flex mt-0.5"><LessonStatus done={isDone} next={here} size={20} /></span>
                <span className="min-w-0">
                  <span className="block text-[11px] font-semibold" style={{ color: c.text.muted }}>Lesson {l.id}</span>
                  <span className="block text-sm leading-snug" style={{ color: c.text.primary, fontWeight: here ? 700 : 500 }}>{l.title}</span>
                </span>
              </Link>
            </li>
          );
        })}
        <li>
          <Link to={`/modules/${moduleId}/recap`} onClick={onNavigate} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-orange-50">
            <FileText size={20} style={{ color: c.accent.cyan }} />
            <span className="text-sm font-semibold" style={{ color: c.text.primary }}>Module notes &amp; quiz</span>
          </Link>
        </li>
      </ol>

      <div className="mt-6 pt-5 border-t" style={{ borderColor: c.border.subtle }}>
        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: c.text.muted }}>All modules</p>
        {SECTIONS.map(section => (
          <div key={section.id} className="mb-3">
            <p className="text-xs font-semibold mb-1" style={{ color: c.text.secondary }}>{section.title}</p>
            <ul>
              {section.modules.map(id => {
                const locked = isModuleLocked(id, user);
                const m = getModule(id);
                const here = id === Number(moduleId);
                return (
                  <li key={id}>
                    <Link
                      to={`/modules/${id}`}
                      onClick={onNavigate}
                      className="flex items-center gap-2 px-2.5 py-1.5 rounded-md text-sm hover:bg-orange-50"
                      style={{ color: locked ? c.text.muted : c.text.primary, fontWeight: here ? 700 : 500 }}
                    >
                      <span className="w-5 text-xs font-bold" style={{ color: c.text.muted }}>{id}</span>
                      <span className="flex-1 truncate">{m.title}</span>
                      {locked && <Lock size={13} />}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}
