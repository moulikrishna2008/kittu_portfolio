import React from 'react';
import { Award, Trophy, Code2, FileCheck2, Users, Presentation } from 'lucide-react';
import './Achievements.css';

const CATEGORIES = [
  {
    icon: Trophy,
    title: 'Hackathons',
    status: 'Active Participation',
    items: [
      {
        title: 'AI Debugging & Automation Hackathon Prototype',
        issuer: 'Sprint Developer Submission',
        note: 'Engineered CYVORA prototype for autonomous error detection.'
      },
      {
        title: '[Upcoming Hackathon / Team Entry]',
        issuer: 'Technical Track Submission',
        isPlaceholder: true
      }
    ]
  },
  {
    icon: Code2,
    title: 'Coding Competitions',
    status: 'Problem Solving',
    items: [
      {
        title: 'Algorithmic Problem Solving & Data Structures',
        issuer: 'Competitive Programming Practice',
        note: 'Practicing algorithmic complexity, arrays, strings, and graphs.'
      },
      {
        title: '[Coding Contest / Platform Contest]',
        issuer: 'Contest Series',
        isPlaceholder: true
      }
    ]
  },
  {
    icon: FileCheck2,
    title: 'Certifications',
    status: 'Verified Learning',
    items: [
      {
        title: 'Computer Science Foundations & Python Programming',
        issuer: 'Undergraduate Curriculum & Online Tracks',
        note: 'Core language syntax, data structures, and algorithmic principles.'
      },
      {
        title: '[Certification: Full-Stack / Cloud / AI]',
        issuer: 'Issuing Authority',
        isPlaceholder: true
      }
    ]
  },
  {
    icon: Presentation,
    title: 'Workshops & Technical Events',
    status: 'Active Engagement',
    items: [
      {
        title: 'Modern Web Architectures & REST API Labs',
        issuer: 'DVR&DR.HS MIC College Technical Event',
        note: 'Hands-on exploration of API endpoints and frontend component integration.'
      },
      {
        title: '[Technical Symposium / Tech Talk]',
        issuer: 'Department of Computer Science',
        isPlaceholder: true
      }
    ]
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="section-wrapper achievements-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>Milestones</span>
          </div>
          <h2 className="section-title">Achievements &amp; Certifications</h2>
          <p className="section-subtitle">
            Notable milestones, technical certifications, workshops, and competitive programming initiatives.
          </p>
        </div>

        <div className="achievements-grid">
          {CATEGORIES.map((cat, index) => {
            const IconComp = cat.icon;
            return (
              <div key={index} className="surface-card achievement-card">
                <div className="achieve-card-top">
                  <div className="achieve-icon-box">
                    <IconComp size={18} />
                  </div>
                  <div>
                    <h3 className="achieve-title">{cat.title}</h3>
                    <span className="achieve-status">{cat.status}</span>
                  </div>
                </div>

                <div className="achieve-items-list">
                  {cat.items.map((item, idx) => (
                    <div
                      key={idx}
                      className={`achieve-box ${item.isPlaceholder ? 'achieve-box-placeholder' : ''}`}
                    >
                      <span className="achieve-item-title">{item.title}</span>
                      <span className="achieve-item-issuer">{item.issuer}</span>
                      {item.note && <p className="achieve-item-note">{item.note}</p>}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
