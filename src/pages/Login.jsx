import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useSidebar } from '../context/SidebarContext';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { AnimatedLoginBackground } from '../components/branding/AnimatedLoginBackground';
import { behavior } from '../styles/theme';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const { setSidebarOpen } = useSidebar();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await signIn(email, password);
      setSidebarOpen(false);
      navigate('/progress');
    } catch (err) {
      setError(err.message || 'Failed to sign in. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-6 sm:py-8 pt-20 relative" style={{ backgroundColor: behavior.animatedBackground ? undefined : '#FAFAF9' }}>
      {behavior.animatedBackground && <AnimatedLoginBackground />}
      <Card className="w-full max-w-md relative z-10 bg-white/90 backdrop-blur-lg border-2 border-white/20 shadow-2xl p-4 sm:p-6">
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6 sm:mb-8 text-center" style={{ letterSpacing: '-0.02em' }}>
          Login to Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div>
            <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-slate-900 mb-1 sm:mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-cyan-600 transition text-sm"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-xs sm:text-sm font-semibold text-slate-900 mb-1 sm:mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-cyan-600 transition text-sm"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <div className="p-3 sm:p-4 bg-red-50 border-2 border-red-200 rounded-lg text-red-700 text-xs sm:text-sm font-medium">
              {error}
            </div>
          )}

          <Button
            type="submit"
            variant="primary"
            disabled={loading}
            className="w-full py-3 sm:py-4 font-semibold text-sm sm:text-base"
          >
            {loading ? 'Signing in...' : 'Login'}
          </Button>
        </form>
      </Card>
    </div>
  );
}
