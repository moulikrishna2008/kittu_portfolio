import React from 'react';
import { GraduationCap, Building2, Calendar, Sparkles, Target, ArrowRight } from 'lucide-react';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section-wrapper about-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>Background</span>
          </div>
          <h2 className="section-title">A little about me.</h2>
        </div>

        <div className="about-grid">
          {/* Left Column: Narrative */}
          <div className="about-narrative">
            <p className="narrative-lead">
              I am a 2nd-year <strong>B.Tech Computer Science Engineering</strong> student at <strong>DVR&amp;DR.HS MIC COLLEGE OF TECHNOLOGY</strong> in Andhra Pradesh, India.
            </p>
            <p className="narrative-body">
              My technical journey centers on engineering solid software systems, developing intelligent AI-assisted developer workflows, extracting insights through data analytics, and architecting modern web applications.
            </p>
            <p className="narrative-body">
              I actively take part in technical hackathons and build hands-on projects, transforming conceptual architectures into functional, user-focused software. I believe in clean code, strong foundational problem solving, and building tools that make an impact.
            </p>
            
            <div className="about-goal-box">
              <div className="goal-icon-wrap">
                <Target size={18} />
              </div>
              <div>
                <span className="goal-label">Primary Career Goal</span>
                <p className="goal-text">To become a skilled Software Engineer and build useful technology.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Structured Info Card */}
          <div className="about-info-container">
            <div className="surface-card about-card">
              <div className="card-header-bar">
                <span className="card-header-title">Academic Profile</span>
                <span className="card-header-status">2nd Year</span>
              </div>

              <div className="info-rows">
                <div className="info-row">
                  <div className="info-icon">
                    <GraduationCap size={18} />
                  </div>
                  <div className="info-meta">
                    <span className="info-meta-label">Education</span>
                    <span className="info-meta-value">B.Tech — Computer Science Engineering</span>
                  </div>
                </div>

                <div className="info-row">
                  <div className="info-icon">
                    <Building2 size={18} />
                  </div>
                  <div className="info-meta">
                    <span className="info-meta-label">College</span>
                    <span className="info-meta-value college-highlight">DVR&amp;DR.HS MIC COLLEGE OF TECHNOLOGY</span>
                  </div>
                </div>

                <div className="info-row">
                  <div className="info-icon">
                    <Calendar size={18} />
                  </div>
                  <div className="info-meta">
                    <span className="info-meta-label">Current Status</span>
                    <span className="info-meta-value">2nd Year Student (Undergraduate)</span>
                  </div>
                </div>

                <div className="info-row">
                  <div className="info-icon">
                    <Sparkles size={18} />
                  </div>
                  <div className="info-meta">
                    <span className="info-meta-label">Interests</span>
                    <span className="info-meta-value">Software Development · AI · Data Analytics · Web Development</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
