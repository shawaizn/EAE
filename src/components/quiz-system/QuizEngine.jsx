// QuizEngine.jsx - Core Quiz Logic Component
import React, { useState, useEffect } from 'react';
import {
  colors,
  spacing,
  typography,
  borderRadius,
  borderRadiusSmall,
  shadows,
  transitions,
} from './QuizTheme';

const QuizEngine = ({ lessonData, onBack }) => {
  // State management
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showAnswer, setShowAnswer] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [selectedMCQIndex, setSelectedMCQIndex] = useState(null);
  const [shortAnswerText, setShortAnswerText] = useState('');

  // Get current question
  const currentQuestion = lessonData.questions[currentQuestionIndex];
  const totalQuestions = lessonData.questions.length;
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  // Check if answer is provided
  const hasAnswer = currentQuestion?.type === 'mcq' 
    ? selectedMCQIndex !== null 
    : shortAnswerText.trim().length > 0;

  // Handlers
  const handleMCQSelect = (optionIndex) => {
    if (!showAnswer) {
      setSelectedMCQIndex(optionIndex === selectedMCQIndex ? null : optionIndex);
    }
  };

  const handleShortAnswerChange = (e) => {
    setShortAnswerText(e.target.value);
  };

  const handleSubmit = () => {
    const answer = currentQuestion.type === 'mcq' ? selectedMCQIndex : shortAnswerText;
    setUserAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: answer
    }));
    setShowAnswer(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setShowAnswer(false);
      setSelectedMCQIndex(null);
      setShortAnswerText('');
    } else {
      setQuizComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setShowAnswer(false);
    setQuizComplete(false);
    setSelectedMCQIndex(null);
    setShortAnswerText('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey && hasAnswer && !showAnswer) {
      e.preventDefault();
      handleSubmit();
    }
  };

  // Calculate score (MCQ only)
  const calculateScore = () => {
    let correct = 0;
    let incorrect = 0;
    let shortAnswerCount = 0;
    
    lessonData.questions.forEach(question => {
      if (question.type === 'mcq') {
        if (userAnswers[question.id] === question.correct) {
          correct++;
        } else {
          incorrect++;
        }
      } else {
        shortAnswerCount++;
      }
    });
    
    const totalMCQ = lessonData.questions.filter(q => q.type === 'mcq').length;
    return { correct, incorrect, shortAnswerCount, totalMCQ };
  };

  // Styles
  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: colors.bg,
      fontFamily: typography.fontFamily,
      padding: spacing.lg,
      boxSizing: 'border-box',
    },
    innerContainer: {
      maxWidth: '800px',
      margin: '0 auto',
    },
    header: {
      marginBottom: spacing.xl,
    },
    lessonTitle: {
      fontSize: typography.heading,
      fontWeight: typography.bold,
      color: colors.text,
      marginBottom: spacing.sm,
      lineHeight: typography.lineHeightTight,
    },
    progressContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: spacing.md,
      marginBottom: spacing.md,
    },
    progressBar: {
      flex: 1,
      height: '8px',
      backgroundColor: colors.border,
      borderRadius: '4px',
      overflow: 'hidden',
    },
    progressFill: {
      height: '100%',
      backgroundColor: colors.primary,
      borderRadius: '4px',
      transition: `width ${transitions.normal}`,
      width: `${progress}%`,
    },
    progressText: {
      fontSize: typography.small,
      color: colors.textSecondary,
      fontWeight: typography.medium,
      whiteSpace: 'nowrap',
    },
    questionCard: {
      backgroundColor: colors.cardBg,
      borderRadius: borderRadius,
      boxShadow: shadows.md,
      padding: spacing.xl,
      marginBottom: spacing.lg,
    },
    questionType: {
      display: 'inline-block',
      fontSize: typography.tiny,
      fontWeight: typography.semibold,
      color: colors.primary,
      backgroundColor: colors.primaryLight,
      padding: `${spacing.xs} ${spacing.sm}`,
      borderRadius: borderRadiusSmall,
      marginBottom: spacing.md,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },
    questionText: {
      fontSize: typography.subheading,
      fontWeight: typography.semibold,
      color: colors.text,
      lineHeight: typography.lineHeightRelaxed,
      marginBottom: spacing.lg,
    },
    optionsContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: spacing.sm,
    },
    optionButton: (isSelected, isCorrect, isWrong, showAnswer) => ({
      display: 'flex',
      alignItems: 'flex-start',
      gap: spacing.md,
      padding: spacing.md,
      border: `2px solid ${
        showAnswer && isCorrect ? colors.success :
        showAnswer && isWrong ? colors.error :
        isSelected ? colors.primary :
        colors.border
      }`,
      borderRadius: borderRadiusSmall,
      backgroundColor: 
        showAnswer && isCorrect ? colors.successLight :
        showAnswer && isWrong ? colors.errorLight :
        isSelected ? colors.primaryLight :
        colors.secondaryBg,
      cursor: showAnswer ? 'default' : 'pointer',
      transition: `all ${transitions.fast}`,
      textAlign: 'left',
      width: '100%',
      fontFamily: typography.fontFamily,
      fontSize: typography.body,
    }),
    optionLetter: (isSelected, isCorrect, isWrong, showAnswer) => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: '28px',
      height: '28px',
      borderRadius: '50%',
      backgroundColor: 
        showAnswer && isCorrect ? colors.success :
        showAnswer && isWrong ? colors.error :
        isSelected ? colors.primary :
        colors.border,
      color: 
        (showAnswer && (isCorrect || isWrong)) || isSelected ? '#fff' : colors.textSecondary,
      fontSize: typography.small,
      fontWeight: typography.semibold,
      flexShrink: 0,
    }),
    optionText: {
      flex: 1,
      lineHeight: typography.lineHeightNormal,
      color: colors.text,
    },
    textArea: {
      width: '100%',
      minHeight: '150px',
      padding: spacing.md,
      border: `2px solid ${colors.border}`,
      borderRadius: borderRadiusSmall,
      fontSize: typography.body,
      fontFamily: typography.fontFamily,
      lineHeight: typography.lineHeightRelaxed,
      resize: 'vertical',
      boxSizing: 'border-box',
      transition: `border-color ${transitions.fast}`,
      outline: 'none',
    },
    answerReveal: {
      marginTop: spacing.lg,
      padding: spacing.lg,
      backgroundColor: colors.successLight,
      borderRadius: borderRadiusSmall,
      borderLeft: `4px solid ${colors.success}`,
    },
    answerLabel: {
      fontSize: typography.small,
      fontWeight: typography.semibold,
      color: colors.success,
      marginBottom: spacing.xs,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },
    answerText: {
      fontSize: typography.body,
      color: colors.text,
      lineHeight: typography.lineHeightRelaxed,
      marginBottom: spacing.md,
    },
    explanationLabel: {
      fontSize: typography.small,
      fontWeight: typography.semibold,
      color: colors.textSecondary,
      marginBottom: spacing.xs,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },
    explanationText: {
      fontSize: typography.small,
      color: colors.textSecondary,
      lineHeight: typography.lineHeightRelaxed,
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: spacing.md,
    },
    button: (isPrimary, isDisabled) => ({
      padding: `${spacing.md} ${spacing.xl}`,
      borderRadius: borderRadiusSmall,
      fontSize: typography.body,
      fontWeight: typography.semibold,
      fontFamily: typography.fontFamily,
      cursor: isDisabled ? 'not-allowed' : 'pointer',
      transition: `all ${transitions.fast}`,
      backgroundColor: isPrimary
        ? (isDisabled ? colors.textMuted : colors.primary)
        : colors.secondaryBg,
      color: isPrimary
        ? '#fff'
        : colors.text,
      boxShadow: isPrimary && !isDisabled ? shadows.sm : 'none',
      border: isPrimary ? 'none' : `2px solid ${colors.border}`,
      opacity: isDisabled ? 0.6 : 1,
    }),
    // Results screen styles
    resultsContainer: {
      backgroundColor: colors.cardBg,
      borderRadius: borderRadius,
      boxShadow: shadows.lg,
      padding: spacing.xxl,
      textAlign: 'center',
    },
    resultsTitle: {
      fontSize: typography.heading,
      fontWeight: typography.bold,
      color: colors.text,
      marginBottom: spacing.lg,
    },
    scoreDisplay: {
      fontSize: '4rem',
      fontWeight: typography.bold,
      color: colors.primary,
      marginBottom: spacing.md,
    },
    scoreLabel: {
      fontSize: typography.body,
      color: colors.textSecondary,
      marginBottom: spacing.xl,
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: spacing.md,
      marginBottom: spacing.xl,
    },
    statBox: (color) => ({
      padding: spacing.lg,
      backgroundColor: color === 'success' ? colors.successLight : 
                       color === 'error' ? colors.errorLight : 
                       colors.primaryLight,
      borderRadius: borderRadiusSmall,
    }),
    statNumber: (color) => ({
      fontSize: typography.heading,
      fontWeight: typography.bold,
      color: color === 'success' ? colors.success : 
             color === 'error' ? colors.error : 
             colors.primary,
    }),
    statLabel: {
      fontSize: typography.small,
      color: colors.textSecondary,
      marginTop: spacing.xs,
    },
    resultsButtons: {
      display: 'flex',
      justifyContent: 'center',
      gap: spacing.md,
      flexWrap: 'wrap',
    },
    mcqResultIndicator: (isCorrect) => ({
      display: 'flex',
      alignItems: 'center',
      gap: spacing.xs,
      fontSize: typography.small,
      fontWeight: typography.semibold,
      color: isCorrect ? colors.success : colors.error,
      marginTop: spacing.sm,
    }),
  };

  // Results Screen
  if (quizComplete) {
    const { correct, incorrect, shortAnswerCount, totalMCQ } = calculateScore();
    const percentage = totalMCQ > 0 ? Math.round((correct / totalMCQ) * 100) : 0;

    return (
      <div style={styles.container}>
        <div style={styles.innerContainer}>
          <div style={styles.resultsContainer}>
            <h1 style={styles.resultsTitle}>Quiz Complete! 🎉</h1>
            
            <div style={styles.scoreDisplay}>{percentage}%</div>
            <p style={styles.scoreLabel}>
              You scored {correct} out of {totalMCQ} multiple choice questions
            </p>

            <div style={styles.statsGrid}>
              <div style={styles.statBox('success')}>
                <div style={styles.statNumber('success')}>{correct}</div>
                <div style={styles.statLabel}>Correct</div>
              </div>
              <div style={styles.statBox('primary')}>
                <div style={styles.statNumber('primary')}>{shortAnswerCount}</div>
                <div style={styles.statLabel}>Short Answer</div>
              </div>
              <div style={styles.statBox('error')}>
                <div style={styles.statNumber('error')}>{incorrect}</div>
                <div style={styles.statLabel}>Incorrect</div>
              </div>
            </div>

            <div style={styles.resultsButtons}>
              <button
                style={styles.button(false, false)}
                onClick={handleRestart}
                onMouseOver={(e) => e.target.style.backgroundColor = colors.bg}
                onMouseOut={(e) => e.target.style.backgroundColor = colors.secondaryBg}
              >
                Restart Quiz
              </button>
              {onBack && (
                <button
                  style={styles.button(true, false)}
                  onClick={onBack}
                  onMouseOver={(e) => e.target.style.backgroundColor = colors.primaryHover}
                  onMouseOut={(e) => e.target.style.backgroundColor = colors.primary}
                >
                  Back to Lessons
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Question Screen
  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.lessonTitle}>
            Lesson {lessonData.lesson}: {lessonData.title}
          </h1>
          <div style={styles.progressContainer}>
            <div style={styles.progressBar}>
              <div style={styles.progressFill} />
            </div>
            <span style={styles.progressText}>
              Question {currentQuestionIndex + 1} of {totalQuestions}
            </span>
          </div>
        </div>

        {/* Question Card */}
        <div style={styles.questionCard}>
          <span style={styles.questionType}>
            {currentQuestion.type === 'mcq' ? 'Multiple Choice' : 'Short Answer'}
          </span>
          <p style={styles.questionText}>{currentQuestion.question}</p>

          {/* MCQ Options */}
          {currentQuestion.type === 'mcq' && (
            <div style={styles.optionsContainer}>
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedMCQIndex === index;
                const isCorrect = showAnswer && index === currentQuestion.correct;
                const isWrong = showAnswer && isSelected && index !== currentQuestion.correct;
                const letters = ['A', 'B', 'C', 'D'];

                return (
                  <button
                    key={index}
                    style={styles.optionButton(isSelected, isCorrect, isWrong, showAnswer)}
                    onClick={() => handleMCQSelect(index)}
                    disabled={showAnswer}
                  >
                    <span style={styles.optionLetter(isSelected, isCorrect, isWrong, showAnswer)}>
                      {letters[index]}
                    </span>
                    <span style={styles.optionText}>{option}</span>
                  </button>
                );
              })}
            </div>
          )}

          {/* Short Answer Input */}
          {currentQuestion.type === 'short' && !showAnswer && (
            <textarea
              style={styles.textArea}
              value={shortAnswerText}
              onChange={handleShortAnswerChange}
              onKeyDown={handleKeyPress}
              placeholder="Type your answer here..."
              onFocus={(e) => e.target.style.borderColor = colors.borderFocus}
              onBlur={(e) => e.target.style.borderColor = colors.border}
            />
          )}

          {/* Answer Reveal */}
          {showAnswer && (
            <div style={styles.answerReveal}>
              {currentQuestion.type === 'mcq' ? (
                <>
                  <div style={styles.mcqResultIndicator(
                    userAnswers[currentQuestion.id] === currentQuestion.correct
                  )}>
                    {userAnswers[currentQuestion.id] === currentQuestion.correct ? (
                      <>✓ Correct!</>
                    ) : (
                      <>✗ Incorrect</>
                    )}
                  </div>
                  <div style={{ marginTop: spacing.md }}>
                    <div style={styles.explanationLabel}>Explanation</div>
                    <p style={styles.explanationText}>{currentQuestion.explanation}</p>
                  </div>
                </>
              ) : (
                <>
                  <div style={styles.answerLabel}>Expected Answer</div>
                  <p style={styles.answerText}>{currentQuestion.explanation}</p>
                  {shortAnswerText && (
                    <>
                      <div style={{ ...styles.explanationLabel, marginTop: spacing.md }}>
                        Your Answer
                      </div>
                      <p style={styles.explanationText}>{shortAnswerText}</p>
                    </>
                  )}
                </>
              )}
            </div>
          )}
        </div>

        {/* Buttons */}
        <div style={styles.buttonContainer}>
          {!showAnswer ? (
            <button
              style={styles.button(true, !hasAnswer)}
              onClick={handleSubmit}
              disabled={!hasAnswer}
              onMouseOver={(e) => {
                if (hasAnswer) e.target.style.backgroundColor = colors.primaryHover;
              }}
              onMouseOut={(e) => {
                if (hasAnswer) e.target.style.backgroundColor = colors.primary;
              }}
            >
              Submit Answer
            </button>
          ) : (
            <button
              style={styles.button(true, false)}
              onClick={handleNext}
              onMouseOver={(e) => e.target.style.backgroundColor = colors.primaryHover}
              onMouseOut={(e) => e.target.style.backgroundColor = colors.primary}
            >
              {currentQuestionIndex < totalQuestions - 1 ? 'Next Question' : 'View Results'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizEngine;