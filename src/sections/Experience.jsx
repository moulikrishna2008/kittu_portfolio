import React from 'react';
import { Trophy, Code2, Calendar } from 'lucide-react';
import './Experience.css';

const ACTIVITIES = [
  {
    type: 'hackathon',
    icon: Trophy,
    title: 'Hackathons & Technical Prototyping',
    subtitle: 'Competitive Development & Sprint Engineering',
    period: '2024 — Present',
    description:
      'Participated in technical hackathons and worked on AI-powered software projects including CYVORA and IncidentMind.',
    points: [
      'Engineered automated AST analysis pipelines and agent validation routines.',
      'Designed responsive web user interfaces and integrated backend microservices.',
      'Collaborated effectively within fast-paced sprint timelines to solve challenging problem statements.'
    ]
  },
  {
    type: 'projects',
    icon: Code2,
    title: 'Practical Project Development',
    subtitle: 'Hands-on Software & Full-Stack Systems',
    period: '2023 — Present',
    description:
      'Built practical applications using AI, web technologies, APIs, backend technologies, and databases like PostgreSQL.',
    points: [
      'Developed modern frontends using React, clean CSS architectures, and component patterns.',
      'Implemented backend endpoints with FastAPI, Node.js, and secure RESTful design.',
      'Practiced clean Git version control, branch management, and continuous iteration.'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section-wrapper experience-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>Track Record</span>
          </div>
          <h2 className="section-title">Experience &amp; Activities</h2>
          <p className="section-subtitle">
            Hands-on technical initiatives, hackathon participation, and full-stack software development.
          </p>
        </div>

        <div className="timeline-wrapper">
          <div className="timeline-spine" />

          <div className="timeline-items-list">
            {ACTIVITIES.map((act, index) => {
              const IconComp = act.icon;
              return (
                <div key={index} className="timeline-entry">
                  <div className="timeline-node">
                    <div className="node-icon-box">
                      <IconComp size={16} />
                    </div>
                  </div>

                  <div className="surface-card timeline-card">
                    <div className="timeline-header-row">
                      <div>
                        <h3 className="timeline-card-title">{act.title}</h3>
                        <span className="timeline-card-sub">{act.subtitle}</span>
                      </div>
                      <div className="timeline-period-badge">
                        <Calendar size={13} />
                        <span>{act.period}</span>
                      </div>
                    </div>

                    <p className="timeline-text">{act.description}</p>

                    <ul className="timeline-details">
                      {act.points.map((pt, pIdx) => (
                        <li key={pIdx} className="timeline-detail-item">
                          <span className="detail-dot" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
