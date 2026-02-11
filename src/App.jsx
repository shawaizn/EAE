import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import { Layout } from './components/layout/Layout';
import { Landing } from './pages/Landing';
import { AIEducation } from './pages/AIEducation';
import { Login } from './pages/Login';
import { ProgressPage } from './pages/ProgressPage';
import { LessonPage } from './pages/LessonPage';
import { ModulePage } from './pages/ModulePage';
import { RecapPage } from './pages/RecapPage';
import { NotesPage } from './pages/NotesPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { PromptsPage } from './pages/PromptsPage';
import { CertificatePage } from './pages/CertificatePage';
import QuizPage from './components/quiz-system/QuizPage';
import { SidebarProvider } from './context/SidebarContext';

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
  const { user, loading, signOut } = useAuth();
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <SidebarProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={user ? <Navigate to="/progress" replace /> : <Landing />} />
          <Route path="/ai-education" element={<AIEducation />} />
          <Route path="/login" element={user ? <Navigate to="/progress" replace /> : <Login />} />

          <Route
            path="/progress"
            element={
              <ProtectedRoute>
                <Layout user={user} onSignOut={signOut}>
                  <ProgressPage />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={<Navigate to="/progress" replace />}
          />
          <Route
            path="/modules/:moduleId"
            element={
              <ProtectedRoute>
                <Layout user={user} onSignOut={signOut}>
                  <ModulePage />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/modules/:moduleId/lessons/:lessonId"
            element={
              <ProtectedRoute>
                <Layout user={user} onSignOut={signOut}>
                  <LessonPage />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/modules/:moduleId/recap"
            element={
              <ProtectedRoute>
                <Layout user={user} onSignOut={signOut}>
                  <RecapPage />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/notes"
            element={
              <ProtectedRoute>
                <Layout user={user} onSignOut={signOut}>
                  <NotesPage />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/resources"
            element={
              <ProtectedRoute>
                <Layout user={user} onSignOut={signOut}>
                  <ResourcesPage />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/prompts"
            element={
              <ProtectedRoute>
                <Layout user={user} onSignOut={signOut}>
                  <PromptsPage />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/certificate"
            element={
              <ProtectedRoute>
                <Layout user={user} onSignOut={signOut}>
                  <CertificatePage />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/quiz/lesson/:lessonNumber"
            element={
              <ProtectedRoute>
                <Layout user={user} onSignOut={signOut}>
                  <QuizPage />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </SidebarProvider>
  );
}

export default App;
