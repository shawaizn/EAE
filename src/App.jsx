import { BrowserRouter, Routes, Route, Navigate, useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth } from './hooks/useAuth';
import { Layout } from './components/layout/Layout';
import { AIEducationLanding } from './pages/AIEducationLanding';
import { ProgramCurriculum } from './pages/ProgramCurriculum';
import { AIEducation } from './pages/AIEducation';
import { AIStrategy } from './pages/AIStrategy';
import { AIImplementation } from './pages/AIImplementation';
import { AISolutions } from './pages/AISolutions';
import { AISecurity } from './pages/AISecurity';
import { Login } from './pages/Login';
import { DashboardPage } from './pages/DashboardPage';
import { LessonPage } from './pages/LessonPage';
import { ModulePage } from './pages/ModulePage';
import { RecapPage } from './pages/RecapPage';
import { NotesPage } from './pages/NotesPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { PromptsPage } from './pages/PromptsPage';
import { CertificatePage } from './pages/CertificatePage';
import QuizPage from './components/quiz-system/QuizPage';
import { isModuleLocked } from './config/access';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Lessons in locked modules (Strategy) redirect to the module overview page
function UnlockedLessonRoute({ children }) {
  const { moduleId } = useParams();
  const { user } = useAuth();
  if (isModuleLocked(moduleId, user)) {
    return <Navigate to={`/modules/${moduleId}`} replace />;
  }
  return children;
}

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function App() {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }
  return (
      <BrowserRouter basename={import.meta.env.VITE_BASENAME || '/EAE/app'}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={user ? <Navigate to="/hub" replace /> : <Navigate to="/login" replace />} />
          <Route path="/ai-education-landing" element={<AIEducationLanding />} />
          <Route path="/program-curriculum" element={<ProgramCurriculum />} />
          <Route path="/ai-education" element={<AIEducation />} />
          <Route path="/ai-strategy" element={<AIStrategy />} />
          <Route path="/ai-implementation" element={<AIImplementation />} />
          <Route path="/ai-solutions" element={<AISolutions />} />
          <Route path="/ai-security" element={<AISecurity />} />
          <Route path="/login" element={user ? <Navigate to="/hub" replace /> : <Login />} />
          <Route
            path="/hub"
            element={
              <ProtectedRoute>
                <Layout backToDashboard={false}>
                  <DashboardPage />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route path="/progress" element={<Navigate to="/hub" replace />} />
          <Route
            path="/dashboard"
            element={<Navigate to="/hub" replace />}
          />
          <Route
            path="/modules/:moduleId"
            element={
              <ProtectedRoute>
                <Layout>
                  <ModulePage />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/modules/:moduleId/lessons/:lessonId"
            element={
              <ProtectedRoute>
                <UnlockedLessonRoute>
                  <Layout bare>
                    <LessonPage />
                  </Layout>
                </UnlockedLessonRoute>
              </ProtectedRoute>
            }
          />
          <Route
            path="/modules/:moduleId/recap"
            element={
              <ProtectedRoute>
                <UnlockedLessonRoute>
                  <Layout>
                    <RecapPage />
                  </Layout>
                </UnlockedLessonRoute>
              </ProtectedRoute>
            }
          />
          <Route
            path="/notes"
            element={
              <ProtectedRoute>
                <Layout>
                  <NotesPage />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/resources"
            element={
              <ProtectedRoute>
                <Layout>
                  <ResourcesPage />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/prompts"
            element={
              <ProtectedRoute>
                <Layout>
                  <PromptsPage />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/certificate"
            element={
              <ProtectedRoute>
                <Layout>
                  <CertificatePage />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/quiz/lesson/:lessonNumber"
            element={
              <ProtectedRoute>
                <Layout>
                  <QuizPage />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
