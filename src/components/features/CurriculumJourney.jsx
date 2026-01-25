import React, { useState } from 'react';

const CurriculumJourney = () => {
  const [hoveredWeek, setHoveredWeek] = useState(null);

  const weeks = [
    {
      number: 1,
      lessons: '1-2',
      title: 'Fundamentals & Today\'s AI',
      phase: 'learning',
      session1: 'Lesson 1: AI Basics - How AI works, patterns, and foundation',
      session2: 'Lesson 2: AI Today - Generative systems, agents, capabilities',
      keyPoints: [
        'How AI actually works: patterns and prediction',
        'Understanding modern AI capabilities',
        'Critical limitations and ethics',
        'See the world through AI\'s lens'
      ],
      outcome: 'Build strategic foundation for everything that follows'
    },
    {
      number: 2,
      lessons: '3-4',
      title: 'AI Market & Strategic Use',
      phase: 'learning',
      session1: 'Lesson 3: AI Market - Navigate landscape and choose tools',
      session2: 'Lesson 4: When to Use AI - Strategic decision framework',
      keyPoints: [
        'Understand the AI market and tool selection',
        'Strategic framework for AI deployment',
        'Know when AI multiplies you vs wastes time',
        'Human-in-the-loop workflows'
      ],
      outcome: 'Choose tools correctly and deploy AI where it matters'
    },
    {
      number: 3,
      lessons: '5-6',
      title: 'How to Use AI (Mastery)',
      phase: 'learning',
      session1: 'Lesson 5: How to Use AI 1 - Prompting fundamentals and CO-STAR',
      session2: 'Lesson 6: How to Use AI 2 - Advanced techniques and iteration',
      keyPoints: [
        'CO-STAR framework for structured communication',
        'Advanced prompting techniques and iteration',
        'Domain-specific strategies',
        'Building reusable prompt libraries'
      ],
      outcome: 'Move from trial-and-error to systematic excellence'
    },
    {
      number: 4,
      lessons: '7-8',
      title: 'Efficient Use & Future Strategy',
      phase: 'learning',
      session1: 'Lesson 7: Efficient AI Use - Systematic adoption and workflows',
      session2: 'Lesson 8: The Future with AI - Strategic positioning',
      keyPoints: [
        'Build workflows that compound over time',
        'Operate like top 1% of AI users',
        'Strategic positioning for AI age',
        'Human advantages AI cannot replicate'
      ],
      outcome: 'Systematic AI adoption + long-term strategic positioning'
    },
    {
      number: 5,
      lessons: '9-10',
      title: 'Building Your Project',
      phase: 'project',
      session1: 'Lesson 9: Project foundation and setup',
      session2: 'Lesson 10: Core implementation',
      keyPoints: [
        'Apply all 8 learning lessons to real build',
        'Integrate AI systematically into your project',
        'Get feedback and iterate on implementation',
        'Build with strategic frameworks, not random trial'
      ],
      outcome: 'Transform theory into tangible AI-powered project'
    },
    {
      number: 6,
      lessons: '11-12',
      title: 'Final Build & Presentations',
      phase: 'project',
      session1: 'Lesson 11: Final project refinement and integration',
      session2: 'Lesson 12: Project presentations and next steps',
      keyPoints: [
        'Complete and polish your AI-powered project',
        'Present to cohort with peer feedback',
        'Deploy and document your solution',
        'Create portfolio piece demonstrating capability'
      ],
      outcome: 'Ship a real project with proof of 10X capability'
    }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>The Journey to 10X</h2>
        <p style={styles.subtitle}>Gradual progression from foundation to builder</p>
      </div>

      <div style={styles.mountainContainer}>
        {/* Start Point */}
        <div style={styles.start}>
          <div style={styles.startText}>START HERE</div>
          <div style={styles.startSubtext}>Basic AI use • Random tools • No strategy • Just ChatGPT</div>
        </div>

        {/* The Inverted Pyramid */}
        <div style={styles.pyramid}>
          {weeks.map((week) => {
            const isProject = week.phase === 'project';
            const pyramidWidth = 30 + (week.number * 11);
            
            return (
              <div
                key={week.number}
                style={{
                  ...styles.pyramidLevel,
                  width: `${pyramidWidth}%`,
                  borderColor: isProject ? '#764ba2' : '#667eea',
                  ...(hoveredWeek === week.number ? styles.pyramidLevelHovered : {})
                }}
                onClick={() => setHoveredWeek(week.number)}
              >
                {/* Phase Badge - Only show on first week of each phase */}
                {week.number === 1 && (
                  <div style={{
                    ...styles.phaseBadge,
                    background: 'rgba(102, 126, 234, 0.3)',
                    color: '#8b9ff5',
                    top: '-20px',
                    right: '16px'
                  }}>
                    • LEARNING PHASE •
                  </div>
                )}
                {week.number === 5 && (
                  <div style={{
                    ...styles.phaseBadge,
                    background: 'rgba(118, 75, 162, 0.3)',
                    color: '#b794f6',
                    top: '-20px',
                    right: '16px'
                  }}>
                    • PROJECT PHASE •
                  </div>
                )}

                <div style={styles.levelNumber}>
                  WEEK {week.number} <span style={styles.lessonNumbers}>Lessons {week.lessons}</span>
                </div>
                
                <div style={styles.levelContent}>
                  <h3 style={styles.levelTitle}>{week.title}</h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summit/End Point */}
        <div style={styles.summit}>
          <div style={styles.summitBadge}>SUMMIT</div>
          <div style={styles.summitText}>10X AI Operator</div>
          <div style={styles.summitSubtext}>More Effective • More Efficient • More productive</div>
        </div>
      </div>

      <div style={styles.footer}>
        <p style={styles.footerNote}>Click any week to see detailed breakdown</p>
      </div>

      {/* Modal - Rendered outside main container for proper overlay */}
      {hoveredWeek !== null && (
        <div style={styles.modalOverlay} onClick={() => setHoveredWeek(null)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button style={styles.modalClose} onClick={() => setHoveredWeek(null)}>×</button>
            
            {weeks.find(w => w.number === hoveredWeek) && (() => {
              const week = weeks.find(w => w.number === hoveredWeek);
              return (
                <>
                  <div style={styles.modalHeader}>
                    <div style={styles.modalWeek}>Week {week.number}</div>
                    <h3 style={styles.modalTitle}>{week.title}</h3>
                    <div style={styles.modalLessons}>Lessons {week.lessons}</div>
                  </div>

                  <div style={styles.modalSessions}>
                    <div style={styles.sessionItem}>
                      <div style={styles.sessionLabel}>Session 1</div>
                      <div style={styles.sessionText}>{week.session1}</div>
                    </div>
                    <div style={styles.sessionItem}>
                      <div style={styles.sessionLabel}>Session 2</div>
                      <div style={styles.sessionText}>{week.session2}</div>
                    </div>
                  </div>

                  <div style={styles.modalSection}>
                    <div style={styles.modalSectionTitle}>Key Focus Areas</div>
                    <ul style={styles.modalPoints}>
                      {week.keyPoints.map((point, i) => (
                        <li key={i} style={styles.modalPoint}>
                          <span style={styles.pointBullet}>→</span> {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={styles.modalOutcome}>
                    <div style={styles.modalOutcomeLabel}>Week Outcome</div>
                    <div style={styles.modalOutcomeText}>{week.outcome}</div>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
};

// Styles
const styles = {
  container: {
    width: '100%',
    background: '#000000',
    padding: '80px 20px',
    position: 'relative'
  },
  header: {
    textAlign: 'center',
    marginBottom: '60px'
  },
  title: {
    fontSize: '48px',
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: '16px',
    letterSpacing: '-1px'
  },
  subtitle: {
    fontSize: '18px',
    color: '#888888',
    fontWeight: '400'
  },
  mountainContainer: {
    maxWidth: '1000px',
    margin: '0 auto',
    position: 'relative'
  },
  start: {
    textAlign: 'center',
    marginBottom: '50px',
    padding: '24px',
    borderBottom: '2px solid #222222'
  },
  startText: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#666666',
    marginBottom: '8px',
    letterSpacing: '2px'
  },
  startSubtext: {
    fontSize: '14px',
    color: '#444444'
  },
  pyramid: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '24px',
    position: 'relative',
    marginBottom: '50px'
  },
  pyramidLevel: {
    background: '#0a0a0a',
    border: '2px solid',
    borderRadius: '12px',
    padding: '32px 28px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    position: 'relative',
    minHeight: '90px'
  },
  pyramidLevelHovered: {
    transform: 'translateY(-4px) scale(1.02)',
    boxShadow: '0 12px 40px rgba(102, 126, 234, 0.3)',
    background: '#111111'
  },
  phaseBadge: {
    position: 'absolute',
    padding: '6px 16px',
    fontSize: '10px',
    fontWeight: '700',
    letterSpacing: '1.5px',
    borderRadius: '12px',
    border: '1px solid rgba(255,255,255,0.1)',
    whiteSpace: 'nowrap'
  },
  levelNumber: {
    position: 'absolute',
    top: '-16px',
    left: '24px',
    background: '#000000',
    padding: '6px 16px',
    fontSize: '11px',
    fontWeight: '700',
    color: '#667eea',
    letterSpacing: '1.5px',
    whiteSpace: 'nowrap'
  },
  lessonNumbers: {
    color: '#888888',
    fontSize: '10px',
    marginLeft: '8px'
  },
  levelContent: {
    minHeight: '40px',
    display: 'flex',
    alignItems: 'center'
  },
  levelTitle: {
    fontSize: '22px',
    fontWeight: '600',
    color: '#ffffff',
    lineHeight: '1.3',
    margin: 0
  },
  summit: {
    textAlign: 'center',
    marginTop: '50px',
    paddingTop: '40px',
    borderTop: '2px solid #222222'
  },
  summitBadge: {
    display: 'inline-block',
    padding: '8px 24px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    fontSize: '12px',
    fontWeight: '700',
    letterSpacing: '2px',
    borderRadius: '20px',
    marginBottom: '12px'
  },
  summitText: {
    fontSize: '36px',
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: '8px'
  },
  summitSubtext: {
    fontSize: '14px',
    color: '#666666'
  },
  footer: {
    textAlign: 'center',
    marginTop: '40px'
  },
  footerNote: {
    fontSize: '13px',
    color: '#666666',
    fontStyle: 'italic'
  },
  
  // Modal Styles - Fixed positioning
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.90)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    padding: '40px 20px',
    backdropFilter: 'blur(4px)'
  },
  modal: {
    background: '#0f0f0f',
    border: '2px solid #667eea',
    borderRadius: '16px',
    maxWidth: '650px',
    width: '100%',
    maxHeight: '85vh',
    overflow: 'auto',
    padding: '40px',
    position: 'relative',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
  },
  modalClose: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    background: '#1a1a1a',
    border: '1px solid #333333',
    borderRadius: '50%',
    color: '#888888',
    fontSize: '24px',
    cursor: 'pointer',
    lineHeight: '1',
    padding: '0',
    width: '36px',
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s',
    fontWeight: '300'
  },
  modalHeader: {
    marginBottom: '28px',
    paddingBottom: '24px',
    borderBottom: '1px solid #222222'
  },
  modalWeek: {
    fontSize: '12px',
    color: '#667eea',
    fontWeight: '700',
    letterSpacing: '1.5px',
    marginBottom: '8px'
  },
  modalTitle: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#ffffff',
    margin: '0 0 8px 0',
    lineHeight: '1.2'
  },
  modalLessons: {
    fontSize: '14px',
    color: '#888888'
  },
  modalSessions: {
    marginBottom: '28px'
  },
  sessionItem: {
    marginBottom: '14px',
    padding: '16px',
    background: '#0a0a0a',
    borderRadius: '10px',
    borderLeft: '3px solid #667eea'
  },
  sessionLabel: {
    fontSize: '11px',
    color: '#667eea',
    fontWeight: '700',
    letterSpacing: '1px',
    marginBottom: '8px',
    textTransform: 'uppercase'
  },
  sessionText: {
    fontSize: '15px',
    color: '#cccccc',
    lineHeight: '1.6'
  },
  modalSection: {
    marginBottom: '28px'
  },
  modalSectionTitle: {
    fontSize: '14px',
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: '14px',
    letterSpacing: '0.5px',
    textTransform: 'uppercase'
  },
  modalPoints: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  modalPoint: {
    fontSize: '15px',
    color: '#aaaaaa',
    padding: '10px 0',
    paddingLeft: '28px',
    position: 'relative',
    lineHeight: '1.6'
  },
  pointBullet: {
    position: 'absolute',
    left: 0,
    color: '#667eea',
    fontWeight: '700',
    fontSize: '16px'
  },
  modalOutcome: {
    padding: '20px',
    background: 'rgba(102, 126, 234, 0.08)',
    borderRadius: '10px',
    borderLeft: '4px solid #667eea'
  },
  modalOutcomeLabel: {
    fontSize: '11px',
    color: '#667eea',
    fontWeight: '700',
    letterSpacing: '1px',
    marginBottom: '10px',
    textTransform: 'uppercase'
  },
  modalOutcomeText: {
    fontSize: '16px',
    color: '#ffffff',
    lineHeight: '1.6',
    fontWeight: '500'
  }
};

export default CurriculumJourney;