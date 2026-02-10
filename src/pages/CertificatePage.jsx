import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useProgress } from '../hooks/useProgress';
import { supabase } from '../lib/supabase';
import { getProgressStats } from '../lib/utils';
import { theme, getShadow } from '../styles/theme';
import { Award, Download, Share2, CheckCircle2, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const COLORS = {
  bg: theme.colors.background.light || theme.colors.background.base,
  cardBg: theme.colors.background.card,
  textPrimary: theme.colors.text.primary,
  textSecondary: theme.colors.text.secondary,
  accent: theme.colors.accent.cyan,
  primary: theme.colors.primary.deep,
  primaryElectric: theme.colors.primary.electric,
  border: theme.colors.border.subtle,
  success: theme.colors.status.success,
  shadow: getShadow('large'),
};

export function CertificatePage() {
  const { user } = useAuth();
  const { completions, loading } = useProgress(user?.id, []);
  const [userName, setUserName] = useState('');
  const [copied, setCopied] = useState(false);
  const certRef = useRef(null);

  const stats = getProgressStats(completions);
  const isComplete = stats.percentComplete === 100;

  useEffect(() => {
    if (user) fetchName();
  }, [user]);

  const fetchName = async () => {
    const { data } = await supabase
      .from('profiles')
      .select('full_name')
      .eq('id', user.id)
      .maybeSingle();
    if (data?.full_name) setUserName(data.full_name);
  };

  const completionDate = (() => {
    if (!isComplete) return null;
    const lessonCompletions = completions
      .filter(c => c.completed && c.category === 'lesson' && c.completed_at)
      .sort((a, b) => new Date(b.completed_at) - new Date(a.completed_at));
    return lessonCompletions[0]?.completed_at
      ? new Date(lessonCompletions[0].completed_at)
      : new Date();
  })();

  const certId = user?.id ? user.id.substring(0, 8).toUpperCase() : '';

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    const text = `I completed the Strategic AI Mastery program by Energise AI -- 44 lessons across 8 modules of hands-on AI strategy.`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-slate-500">Loading...</div>
      </div>
    );
  }

  if (!isComplete) {
    return (
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-2xl mx-auto px-8 py-16 text-center">
          <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-6">
            <Lock size={32} className="text-slate-400" />
          </div>
          <h1 className="text-4xl font-black text-slate-900 mb-4" style={{ letterSpacing: '-0.02em' }}>
            Certificate Locked
          </h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Complete all 44 lessons to unlock your Strategic AI Mastery certificate.
            You've completed {stats.lessonsCompleted} so far -- {44 - stats.lessonsCompleted} to go.
          </p>

          <div className="w-full bg-slate-100 rounded-full h-4 mb-8 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{
                width: `${stats.percentComplete}%`,
                background: `linear-gradient(90deg, ${COLORS.accent}, ${COLORS.primaryElectric})`,
              }}
            />
          </div>

          <Link
            to="/progress"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors"
          >
            Continue Learning
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mb-3" style={{ letterSpacing: '-0.02em' }}>
            Your Certificate
          </h1>
          <p className="text-lg text-slate-600">
            Congratulations on completing the full program
          </p>
        </div>

        <div className="flex justify-center gap-3 mb-8">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors text-sm"
          >
            <Download size={16} />
            Print / Save PDF
          </button>
          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-slate-200 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors text-sm"
          >
            <Share2 size={16} />
            {copied ? 'Copied!' : 'Copy Share Text'}
          </button>
        </div>

        <div ref={certRef} id="certificate" className="certificate-print">
          <div
            className="relative mx-auto rounded-2xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)',
              boxShadow: COLORS.shadow,
              maxWidth: '800px',
            }}
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 rounded-full" style={{ background: `radial-gradient(circle, ${COLORS.accent}40, transparent 70%)`, transform: 'translate(30%, -30%)' }} />
              <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full" style={{ background: `radial-gradient(circle, ${COLORS.primaryElectric}40, transparent 70%)`, transform: 'translate(-30%, 30%)' }} />
            </div>

            <div className="relative px-8 sm:px-16 py-12 sm:py-16">
              <div className="text-center mb-10">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.primaryElectric})` }}>
                    <Award size={22} className="text-white" />
                  </div>
                  <span className="text-white font-bold text-lg tracking-wide">ENERGISE AI</span>
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] mb-2" style={{ color: COLORS.accent }}>
                  Certificate of Completion
                </p>
                <div className="w-16 h-0.5 mx-auto rounded-full" style={{ background: `linear-gradient(90deg, transparent, ${COLORS.accent}, transparent)` }} />
              </div>

              <div className="text-center mb-10">
                <p className="text-slate-400 text-sm mb-3">This certifies that</p>
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
                  {userName || 'Learner'}
                </h2>
                <div className="w-48 h-px mx-auto bg-slate-600 mb-6" />
                <p className="text-slate-400 text-sm leading-relaxed max-w-md mx-auto">
                  has successfully completed all 44 lessons across 8 modules of the
                </p>
                <h3 className="text-xl sm:text-2xl font-bold mt-3" style={{ color: COLORS.accent }}>
                  Strategic AI Mastery Program
                </h3>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-10">
                {[
                  { label: 'Lessons', value: '44' },
                  { label: 'Modules', value: '8' },
                  { label: 'Completed', value: completionDate?.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' }) || '' },
                ].map(item => (
                  <div key={item.label} className="text-center p-3 rounded-lg bg-white/5">
                    <p className="text-lg sm:text-xl font-bold text-white">{item.value}</p>
                    <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-slate-700">
                <div>
                  <p className="text-xs text-slate-500">Certificate ID</p>
                  <p className="text-sm font-mono text-slate-400">{certId}</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} style={{ color: COLORS.success }} />
                  <span className="text-xs font-semibold" style={{ color: COLORS.success }}>Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media print {
          body * { visibility: hidden; }
          .certificate-print, .certificate-print * { visibility: visible; }
          .certificate-print { position: absolute; left: 0; top: 0; width: 100%; padding: 2rem; }
        }
      `}</style>
    </div>
  );
}
