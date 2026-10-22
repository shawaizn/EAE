import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ChevronDown, Lock, FileText, PlayCircle } from 'lucide-react';
import { eduTheme as theme } from '../../styles/theme';
import { SECTIONS, MODULE_BLURBS, getModule, moduleStats, lessonPath } from '../../lib/course';
import { getLessonNumber } from '../../lib/utils';
import { isModuleLocked } from '../../config/access';

const c = theme.colors;

export function ProgressBar({ pct, height = 8, track = '#F1E7D6', fill = c.brand.fill }) {
  return (
    <div className="w-full rounded-full overflow-hidden" style={{ height, backgroundColor: track }} role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
      <div className="h-full rounded-full transition-all duration-500" style={{ width: `${pct}%`, backgroundColor: fill }} />
    </div>
  );
}

// Lesson status dot: done (orange tick), up next (ring), or not started
export function LessonStatus({ done, next, size = 22 }) {
  if (done) {
    return (
      <span className="flex-none inline-flex rounded-full items-center justify-center" style={{ width: size, height: size, backgroundColor: c.brand.fill, color: c.brand.onFill }}>
        <Check size={size * 0.6} strokeWidth={3} />
      </span>
    );
  }
  return (
    <span className="flex-none inline-block rounded-full" style={{ width: size, height: size, border: `2px solid ${next ? c.brand.fill : '#D9CDB8'}`, backgroundColor: next ? c.brand.soft : '#fff' }} />
  );
}

function ModuleRow({ moduleId, user, isComplete, resume, defaultOpen }) {
  const module = getModule(moduleId);
  const locked = isModuleLocked(moduleId, user);
  const { done, total, pct } = moduleStats(moduleId, isComplete);
  const [open, setOpen] = useState(defaultOpen);
  const finished = done === total;

  return (
    <div className="rounded-xl border bg-white overflow-hidden" style={{ borderColor: c.border.subtle, opacity: locked ? 0.7 : 1 }}>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="w-full text-left flex items-start gap-4 p-4 sm:p-5"
        aria-expanded={open}
      >
        <span
          className="flex-none w-10 h-10 rounded-full flex items-center justify-center text-sm font-extrabold"
          style={finished
            ? { backgroundColor: c.brand.fill, color: c.brand.onFill }
            : locked
              ? { backgroundColor: '#F1EEE9', color: c.text.muted }
              : { backgroundColor: c.brand.soft, color: c.accent.cyan }}
        >
          {finished ? <Check size={20} strokeWidth={3} /> : locked ? <Lock size={16} /> : moduleId}
        </span>
        <span className="flex-1 min-w-0">
          <span className="block text-xs font-semibold uppercase tracking-wide" style={{ color: c.text.muted }}>
            Module {moduleId} · {total} lessons
          </span>
          <span className="block text-base sm:text-lg font-bold mt-0.5" style={{ color: c.text.primary }}>{module.title}</span>
          <span className="block text-sm mt-1 leading-relaxed" style={{ color: c.text.secondary }}>{MODULE_BLURBS[moduleId]}</span>
          {!locked && (
            <span className="flex items-center gap-3 mt-3 max-w-sm">
              <ProgressBar pct={pct} height={6} />
              <span className="text-xs font-semibold whitespace-nowrap" style={{ color: c.text.secondary }}>{done}/{total}</span>
            </span>
          )}
          {locked && (
            <span className="block text-xs font-semibold mt-2" style={{ color: c.text.muted }}>Not part of your course</span>
          )}
        </span>
        <ChevronDown size={20} className={`flex-none mt-2 transition-transform ${open ? 'rotate-180' : ''}`} style={{ color: c.text.muted }} />
      </button>

      {open && (
        <ol className="border-t" style={{ borderColor: c.border.subtle }}>
          {module.lessons.map(l => {
            const num = getLessonNumber(moduleId, l.id);
            const isDone = isComplete(num, 'lesson');
            const isNext = resume && resume.number === num;
            const row = (
              <>
                {locked ? <Lock size={16} className="flex-none" style={{ color: c.text.muted }} /> : <LessonStatus done={isDone} next={isNext} />}
                <span className="flex-1 min-w-0">
                  <span className="text-xs font-semibold" style={{ color: c.text.muted }}>Lesson {l.id}</span>
                  <span className="block text-sm font-semibold" style={{ color: locked ? c.text.muted : c.text.primary }}>{l.title}</span>
                </span>
                {isNext && (
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ backgroundColor: c.brand.fill, color: c.brand.onFill }}>Up next</span>
                )}
              </>
            );
            return (
              <li key={l.id} className="border-b last:border-b-0" style={{ borderColor: c.border.subtle }}>
                {locked ? (
                  <div className="flex items-center gap-3 px-4 sm:px-5 py-3 pl-[4.25rem] sm:pl-[4.75rem]">{row}</div>
                ) : (
                  <Link to={lessonPath({ moduleId, lessonId: l.id })} className="flex items-center gap-3 px-4 sm:px-5 py-3 pl-[4.25rem] sm:pl-[4.75rem] hover:bg-orange-50/60 transition-colors">
                    {row}
                  </Link>
                )}
              </li>
            );
          })}
          {!locked && (
            <li>
              <Link to={`/modules/${moduleId}/recap`} className="flex items-center gap-3 px-4 sm:px-5 py-3 pl-[4.25rem] sm:pl-[4.75rem] hover:bg-orange-50/60 transition-colors" style={{ backgroundColor: '#FFFBF3' }}>
                <FileText size={20} className="flex-none" style={{ color: c.accent.cyan }} />
                <span className="text-sm font-semibold" style={{ color: c.text.primary }}>Module notes &amp; quiz</span>
              </Link>
            </li>
          )}
          {!locked && (
            <li className="px-4 sm:px-5 py-3 pl-[4.25rem] sm:pl-[4.75rem] border-t" style={{ borderColor: c.border.subtle }}>
              <Link to={`/modules/${moduleId}`} className="inline-flex items-center gap-1.5 text-sm font-semibold hover:underline" style={{ color: c.accent.cyan }}>
                <PlayCircle size={16} /> Module overview
              </Link>
            </li>
          )}
        </ol>
      )}
    </div>
  );
}

// The whole course: Foundation → Application → Strategy, each with its
// modules; each module opens to show its lessons with ticks.
export function Syllabus({ user, isComplete, resume }) {
  return (
    <div className="space-y-8">
      {SECTIONS.map((section, i) => {
        const allLocked = section.modules.every(id => isModuleLocked(id, user));
        return (
          <section key={section.id}>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: c.accent.cyan }}>Section {i + 1}</span>
              <h3 className="text-lg font-extrabold flex items-center gap-2" style={{ color: c.text.primary }}>
                {section.title}
                {allLocked && <Lock size={15} style={{ color: c.text.muted }} />}
              </h3>
            </div>
            <div className="space-y-3">
              {section.modules.map(id => (
                <ModuleRow
                  key={id}
                  moduleId={id}
                  user={user}
                  isComplete={isComplete}
                  resume={resume}
                  defaultOpen={resume ? resume.moduleId === id : false}
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
