import { Link } from 'react-router-dom';
import { ArrowRight, Award, Bookmark, NotebookPen, Sparkles, FolderOpen } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useProgress } from '../hooks/useProgress';
import { useBookmarks } from '../hooks/useBookmarks';
import { eduTheme as theme } from '../styles/theme';
import { COURSE_TITLE, unlockedLessons, resumeLesson, lessonPath, getModule } from '../lib/course';
import { getModuleAndLesson } from '../lib/utils';
import { Syllabus, ProgressBar } from '../components/course/Syllabus';

const c = theme.colors;

const TOOLS = [
  { to: '/notes', icon: NotebookPen, title: 'Notes', text: 'Capture your reflections and ideas as you learn.' },
  { to: '/prompts', icon: Sparkles, title: 'Prompt Vault', text: 'Save, organise and reuse your best prompts.' },
  { to: '/resources', icon: FolderOpen, title: 'Resources', text: 'Tools, templates and guides for your learning.' },
  { to: '/certificate', icon: Award, title: 'Certificate', text: 'Yours when you finish every lesson.' },
];

// Student home, like Codecademy's: the course with a Resume button, the full
// syllabus, and the tools (notes, prompts, resources, certificate).
export function DashboardPage() {
  const { user } = useAuth();
  const { isComplete } = useProgress(user?.id, []);
  const { bookmarks } = useBookmarks(user?.id);

  const open = unlockedLessons(user);
  const done = open.filter(l => isComplete(l.number, 'lesson')).length;
  const pct = open.length ? Math.round((done / open.length) * 100) : 0;
  const resume = resumeLesson(user, isComplete);
  const name = user?.username ? user.username.charAt(0).toUpperCase() + user.username.slice(1) : '';

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: c.text.primary }}>
        {name ? `Welcome back, ${name}` : 'Welcome back'}
      </h1>
      <p className="mt-1 text-base" style={{ color: c.text.secondary }}>
        {done === 0 ? 'Ready when you are. Start with your first lesson.' : 'Pick up where you left off.'}
      </p>

      <div className="mt-7 grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
        <div className="lg:col-span-2 space-y-10">
          {/* Course card */}
          <section className="rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden" style={{ backgroundColor: c.text.primary }}>
            <div className="absolute -right-16 -top-20 w-64 h-64 rounded-full" style={{ backgroundColor: 'rgba(245,161,0,0.12)' }} aria-hidden="true" />
            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-widest" style={{ color: c.brand.fill }}>Your course</p>
              <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold tracking-tight">{COURSE_TITLE}</h2>
              <div className="mt-5 flex items-center gap-4">
                <ProgressBar pct={pct} height={10} track="rgba(255,255,255,0.15)" />
                <span className="text-sm font-bold whitespace-nowrap">{pct}%</span>
              </div>
              <p className="mt-2 text-sm" style={{ color: '#CFCFCF' }}>{done} of {open.length} lessons complete</p>

              {resume ? (
                <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between rounded-xl p-4 sm:p-5" style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold" style={{ color: '#BDBDBD' }}>
                      {done === 0 ? 'Start here' : 'Up next'} · Module {resume.moduleId}, Lesson {resume.lessonId}
                    </p>
                    <p className="text-base sm:text-lg font-bold mt-0.5">{resume.title}</p>
                    <p className="text-sm mt-0.5" style={{ color: '#BDBDBD' }}>{getModule(resume.moduleId).title}</p>
                  </div>
                  <Link
                    to={lessonPath(resume)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold whitespace-nowrap transition-transform hover:scale-[1.02]"
                    style={{ backgroundColor: c.brand.fill, color: c.brand.onFill }}
                  >
                    {done === 0 ? 'Start course' : 'Resume'} <ArrowRight size={18} />
                  </Link>
                </div>
              ) : (
                <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between rounded-xl p-4 sm:p-5" style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}>
                  <p className="text-base font-bold">You've finished every lesson. Well done!</p>
                  <Link to="/certificate" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold whitespace-nowrap" style={{ backgroundColor: c.brand.fill, color: c.brand.onFill }}>
                    Get your certificate <Award size={18} />
                  </Link>
                </div>
              )}
            </div>
          </section>

          {/* Syllabus */}
          <section>
            <h2 className="text-2xl font-extrabold tracking-tight mb-1" style={{ color: c.text.primary }}>Syllabus</h2>
            <p className="text-sm mb-5" style={{ color: c.text.secondary }}>Open a module to see its lessons. Ticks show what you've finished.</p>
            <Syllabus user={user} isComplete={isComplete} resume={resume} />
          </section>
        </div>

        {/* Tools */}
        <aside className="space-y-6 lg:sticky lg:top-24">
          <section className="rounded-2xl bg-white border p-5" style={{ borderColor: c.border.subtle }}>
            <h2 className="text-base font-extrabold mb-3" style={{ color: c.text.primary }}>Your tools</h2>
            <ul className="space-y-1">
              {TOOLS.map(({ to, icon: Icon, title, text }) => (
                <li key={to}>
                  <Link to={to} className="flex items-start gap-3 p-2.5 -mx-2.5 rounded-lg hover:bg-orange-50 transition-colors">
                    <span className="flex-none w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: c.brand.soft, color: c.accent.cyan }}>
                      <Icon size={18} />
                    </span>
                    <span>
                      <span className="block text-sm font-bold" style={{ color: c.text.primary }}>{title}</span>
                      <span className="block text-xs leading-relaxed" style={{ color: c.text.secondary }}>{text}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl bg-white border p-5" style={{ borderColor: c.border.subtle }}>
            <h2 className="text-base font-extrabold mb-3 flex items-center gap-2" style={{ color: c.text.primary }}>
              <Bookmark size={16} style={{ color: c.accent.cyan }} /> Bookmarks
            </h2>
            {bookmarks.length === 0 ? (
              <p className="text-xs leading-relaxed" style={{ color: c.text.secondary }}>
                Tap <Bookmark size={12} className="inline -mt-0.5" /> on any lesson to save it here.
              </p>
            ) : (
              <ul className="space-y-1">
                {bookmarks.map(bm => {
                  const { moduleId, lessonId } = getModuleAndLesson(bm.lesson_number);
                  const lesson = getModule(moduleId)?.lessons.find(l => l.id === lessonId);
                  if (!lesson) return null;
                  return (
                    <li key={bm.id}>
                      <Link to={lessonPath({ moduleId, lessonId })} className="block p-2 -mx-2 rounded-lg hover:bg-orange-50">
                        <span className="block text-xs font-semibold" style={{ color: c.text.muted }}>Module {moduleId}, Lesson {lessonId}</span>
                        <span className="block text-sm font-semibold" style={{ color: c.text.primary }}>{lesson.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </section>
        </aside>
      </div>
    </div>
  );
}
