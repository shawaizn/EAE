import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import { Layout } from './components/layout/Layout';
import { PublicLayout } from './components/layout/PublicLayout';
import { Landing } from './pages/Landing';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { LessonPage } from './pages/LessonPage';
import { ModulePage } from './pages/ModulePage';
import { RecapPage } from './pages/RecapPage';
import { ResourcesPage } from './pages/ResourcesPage';
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
          {/* Public Routes */}
          <Route path="/" element={<PublicLayout><Landing /></PublicLayout>} />
          <Route path="/login" element={<PublicLayout><Login /></PublicLayout>} />

          {/* Protected Routes with Layout */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Layout user={user} onSignOut={signOut} hideDashboardHeader={true}>
                  <Dashboard />
                </Layout>
              </ProtectedRoute>
            }
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
            path="/quiz/lesson/:lessonNumber"
            element={
              <ProtectedRoute>
                <Layout user={user} onSignOut={signOut}>
                  <QuizPage />
                </Layout>
              </ProtectedRoute>
            }
          />

          {/* Catch all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </SidebarProvider>
  );
}

export default App;