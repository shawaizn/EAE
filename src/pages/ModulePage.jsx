import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useProgress } from '../hooks/useProgress';
import { moduleIntros } from '../data/moduleIntros';
import { ArrowRight, FileText, Lock } from 'lucide-react';
import { getLessonNumber } from '../lib/utils';
import { eduTheme as theme } from '../styles/theme';
import { isModuleLocked } from '../config/access';
import { COURSE_TITLE, MODULE_BLURBS, getModule, moduleStats, sectionForModule, lessonPath } from '../lib/course';
import { LessonStatus, ProgressBar } from '../components/course/Syllabus';

const c = theme.colors;

// Module overview, like a Codecademy module page: what it covers, your
// progress, a Start/Resume button and the lessons as a list of steps.
export function ModulePage() {
  const { user } = useAuth();
  const { moduleId } = useParams();
  const { isComplete, loading } = useProgress(user?.id, []);

  const moduleIdNum = parseInt(moduleId);
  const module = getModule(moduleIdNum);

  if (!module) {
    return <div className="p-8"><p>Module not found</p></div>;
  }
  if (loading) {
    return <div className="p-8 text-center" style={{ color: c.text.secondary }}>Loading...</div>;
  }

  const isLocked = isModuleLocked(moduleIdNum, user);
  const { done, total, pct } = moduleStats(moduleIdNum, isComplete);
  const nextLesson = module.lessons.find(l => !isComplete(getLessonNumber(moduleIdNum, l.id), 'lesson'));
  const section = sectionForModule(moduleIdNum);
  const nextModule = getModule(moduleIdNum + 1);
  const nextModuleOpen = nextModule && !isModuleLocked(nextModule.id, user);
  const intro = moduleIntros[moduleIdNum];

  const cta = isLocked ? null
    : done === 0 ? { label: 'Start module', to: lessonPath({ moduleId: moduleIdNum, lessonId: module.lessons[0].id }) }
    : nextLesson ? { label: 'Resume', to: lessonPath({ moduleId: moduleIdNum, lessonId: nextLesson.id }) }
    : { label: 'Notes & quiz', to: `/modules/${moduleIdNum}/recap` };

  return (
    <div>
      {/* Header */}
      <header className="bg-white border-b" style={{ borderColor: c.border.subtle }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
          <p className="text-xs font-bold uppercase tracking-widest" style={{ color: c.accent.cyan }}>
            {COURSE_TITLE} · {section?.title}
          </p>
          <p className="mt-3 text-sm font-semibold" style={{ color: c.text.muted }}>Module {moduleIdNum} · {total} lessons</p>
          <h1 className="mt-1 text-3xl sm:text-5xl font-extrabold tracking-tight" style={{ color: c.text.primary }}>{module.title}</h1>
          <p className="mt-3 max-w-2xl text-base sm:text-lg leading-relaxed" style={{ color: c.text.secondary }}>{MODULE_BLURBS[moduleIdNum]}</p>

          {isLocked ? (
            <div className="mt-6 flex items-start gap-3 p-4 rounded-xl max-w-2xl" style={{ backgroundColor: c.background.subtle, border: `1px solid ${c.border.default}` }}>
              <Lock size={20} className="flex-none mt-0.5" style={{ color: c.accent.cyan }} />
              <div>
                <p className="font-bold text-sm" style={{ color: c.text.primary }}>Module locked</p>
                <p className="text-sm mt-1" style={{ color: c.text.secondary }}>
                  Strategy isn't part of your course, so these lessons are locked. You can still read what it covers below.
                </p>
              </div>
            </div>
          ) : (
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
              <Link
                to={cta.to}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-bold text-base transition-transform hover:scale-[1.02]"
                style={{ backgroundColor: c.brand.fill, color: c.brand.onFill }}
              >
                {cta.label} <ArrowRight size={18} />
              </Link>
              <div className="flex-1 max-w-sm">
                <div className="flex justify-between text-sm font-semibold mb-1.5" style={{ color: c.text.secondary }}>
                  <span>{done} of {total} lessons complete</span><span>{pct}%</span>
                </div>
                <ProgressBar pct={pct} />
              </div>
            </div>
          )}
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10 grid lg:grid-cols-3 gap-8 items-start">
        {/* Lessons as steps */}
        <section className="lg:col-span-2">
          <h2 className="text-xl font-extrabold mb-4" style={{ color: c.text.primary }}>Lessons</h2>
          <ol className="rounded-xl border bg-white overflow-hidden" style={{ borderColor: c.border.subtle }}>
            {module.lessons.map(l => {
              const n = getLessonNumber(moduleIdNum, l.id);
              const isDone = isComplete(n, 'lesson');
              const isNext = !isLocked && nextLesson?.id === l.id;
              const inner = (
                <>
                  {isLocked ? <Lock size={18} className="flex-none" style={{ color: c.text.muted }} /> : <LessonStatus done={isDone} next={isNext} size={24} />}
                  <span className="flex-1 min-w-0">
                    <span className="block text-xs font-semibold" style={{ color: c.text.muted }}>Lesson {l.id}</span>
                    <span className="block text-base font-semibold" style={{ color: isLocked ? c.text.muted : c.text.primary }}>{l.title}</span>
                  </span>
                  {!isLocked && (
                    <span className="text-sm font-bold whitespace-nowrap" style={{ color: isNext ? c.accent.cyan : c.text.muted }}>
                      {isDone ? 'Review' : isNext ? 'Start' : ''}
                    </span>
                  )}
                </>
              );
              return (
                <li key={l.id} className="border-b" style={{ borderColor: c.border.subtle }}>
                  {isLocked
                    ? <div className="flex items-center gap-4 px-5 py-4">{inner}</div>
                    : <Link to={lessonPath({ moduleId: moduleIdNum, lessonId: l.id })} className="flex items-center gap-4 px-5 py-4 hover:bg-orange-50/60 transition-colors" style={isNext ? { backgroundColor: '#FFFBF3' } : undefined}>{inner}</Link>}
                </li>
              );
            })}
            {!isLocked && (
              <li>
                <Link to={`/modules/${moduleIdNum}/recap`} className="flex items-center gap-4 px-5 py-4 hover:bg-orange-50/60 transition-colors">
                  <span className="flex-none w-6 h-6 rounded-md flex items-center justify-center" style={{ backgroundColor: c.brand.soft, color: c.accent.cyan }}>
                    <FileText size={15} />
                  </span>
                  <span className="flex-1">
                    <span className="block text-xs font-semibold" style={{ color: c.text.muted }}>Checkpoint</span>
                    <span className="block text-base font-semibold" style={{ color: c.text.primary }}>Module notes &amp; quiz</span>
                  </span>
                </Link>
              </li>
            )}
          </ol>

          {nextModuleOpen && (
            <Link to={`/modules/${nextModule.id}`} className="mt-4 flex items-center justify-between gap-4 p-4 rounded-xl border bg-white hover:shadow-sm transition-shadow" style={{ borderColor: c.border.subtle }}>
              <span>
                <span className="block text-xs font-semibold" style={{ color: c.text.muted }}>Next module</span>
                <span className="block font-bold" style={{ color: c.text.primary }}>Module {nextModule.id}: {nextModule.title}</span>
              </span>
              <ArrowRight size={18} style={{ color: c.accent.cyan }} />
            </Link>
          )}
        </section>

        {/* About this module */}
        {intro && (
          <aside className="rounded-xl border bg-white p-6 space-y-5" style={{ borderColor: c.border.subtle }}>
            <h2 className="text-lg font-extrabold" style={{ color: c.text.primary }}>About this module</h2>
            {[['What you already know', intro.activation], ['In this module', intro.zoom], ['Why this matters', intro.stakes]].map(([h, t]) => (
              <div key={h}>
                <h3 className="text-sm font-bold mb-1" style={{ color: c.text.primary }}>{h}</h3>
                <p className="text-sm leading-relaxed" style={{ color: c.text.secondary }}>{t}</p>
              </div>
            ))}
          </aside>
        )}
      </div>
    </div>
  );
}
