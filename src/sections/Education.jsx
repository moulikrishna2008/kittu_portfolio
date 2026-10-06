import React from 'react';
import { GraduationCap, Building2, MapPin, BookOpen, Award } from 'lucide-react';
import './Education.css';

export default function Education() {
  return (
    <section id="education" className="section-wrapper education-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>Academics</span>
          </div>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Formal academic background and core theoretical foundations in computer science.
          </p>
        </div>

        <div className="education-container">
          <div className="surface-card education-card">
            <div className="education-top-bar">
              <div className="edu-title-block">
                <span className="edu-program-tag">Undergraduate Program</span>
                <h3 className="edu-degree-name">
                  B.Tech — Computer Science &amp; Engineering
                </h3>
                <div className="edu-college-name">
                  <Building2 size={16} className="edu-icon" />
                  <span>DVR&amp;DR.HS MIC COLLEGE OF TECHNOLOGY</span>
                </div>
                <div className="edu-location">
                  <MapPin size={14} />
                  <span>Andhra Pradesh, India</span>
                </div>
              </div>

              <div className="edu-status-block">
                <div className="edu-status-pill">
                  <span className="edu-pulse-dot" />
                  <span>Currently Pursuing</span>
                </div>
                <span className="edu-year-label">2nd Year Student (2025 – 2029)</span>
              </div>
            </div>

            <div className="edu-card-divider" />

            <div className="edu-details-layout">
              <div className="edu-col">
                <h4 className="edu-section-heading">
                  <BookOpen size={16} />
                  <span>Key Coursework &amp; Foundations</span>
                </h4>
                <div className="edu-tags-cloud">
                  <span className="edu-tag">Data Structures &amp; Algorithms</span>
                  <span className="edu-tag">Object-Oriented Programming (Python / C)</span>
                  <span className="edu-tag">Database Management Systems (DBMS)</span>
                  <span className="edu-tag">Computer Organization &amp; Architecture</span>
                  <span className="edu-tag">Discrete Mathematics</span>
                  <span className="edu-tag">Web Application Technologies</span>
                </div>
              </div>

              <div className="edu-col">
                <h4 className="edu-section-heading">
                  <Award size={16} />
                  <span>Academic Focus</span>
                </h4>
                <p className="edu-focus-text">
                  Developing strong problem-solving discipline through algorithmic coursework, software engineering best practices, and building end-to-end full-stack applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
