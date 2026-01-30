import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import QuizEngine from './QuizEngine';

import { lesson1 } from './Lesson1Quiz';
import { lesson2 } from './Lesson2Quiz';
import { lesson3 } from './Lesson3Quiz';
import { lesson4 } from './Lesson4Quiz';
import { lesson5 } from './Lesson5Quiz';
import { lesson6 } from './Lesson6Quiz';
import { lesson7 } from './Lesson7Quiz';
import { EnergeticBackground } from '../branding/EnergeticBackground';

const lessonsMap = {
  1: lesson1,
  2: lesson2,
  3: lesson3,
  4: lesson4,
  5: lesson5,
  6: lesson6,
  7: lesson7,
};

const QuizPage = () => {
  const { lessonNumber } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const lessonNum = parseInt(lessonNumber);
  const lessonData = lessonsMap[lessonNum];

  // Handle invalid lesson number
  if (!lessonData) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        backgroundColor: '#F8FAFC',
      }}>
        <div style={{
          textAlign: 'center',
          padding: '2rem',
          backgroundColor: '#fff',
          borderRadius: '12px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        }}>
          <h2 style={{ color: '#EF4444', marginBottom: '1rem' }}>
            Quiz Not Found
          </h2>
          <p style={{ color: '#64748B', marginBottom: '1.5rem' }}>
            Lesson {lessonNumber} quiz is not available.
          </p>
          <button
            onClick={() => navigate(-1)}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#2563EB',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600',
            }}
          >
            Back to Lessons
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ position: 'relative' }}>
      <EnergeticBackground />
      <div style={{ position: 'relative', zIndex: 10 }}>
        <QuizEngine lessonData={lessonData} onBack={() => navigate(-1)} />
      </div>
    </div>
  );
};

export default QuizPage;