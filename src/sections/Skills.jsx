import React from 'react';
import { Code, Layout, Server, Database, Wrench, Sparkles } from 'lucide-react';
import './Skills.css';

const SKILL_SECTIONS = [
  {
    title: 'Programming',
    icon: Code,
    description: 'Foundational languages for problem-solving, algorithms, and core system scripting.',
    skills: ['C', 'Python', 'JavaScript']
  },
  {
    title: 'Frontend',
    icon: Layout,
    description: 'Modern user interfaces, responsive layouts, and interactive web component systems.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React']
  },
  {
    title: 'Backend',
    icon: Server,
    description: 'API development, asynchronous servers, and scalable backend workflows.',
    skills: ['Node.js', 'FastAPI', 'REST APIs', 'Python API']
  },
  {
    title: 'Database',
    icon: Database,
    description: 'Relational data modeling, query optimization, and structured database design.',
    skills: ['PostgreSQL', 'SQL']
  },
  {
    title: 'Tools',
    icon: Wrench,
    description: 'Version control, developer environments, and collaborative engineering tooling.',
    skills: ['Git', 'GitHub', 'VS Code']
  },
  {
    title: 'Areas of Interest',
    icon: Sparkles,
    description: 'Domains of active exploration, research, and technical project building.',
    skills: ['Artificial Intelligence', 'Software Engineering', 'Web Development', 'Data Analytics', 'Cybersecurity']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section-wrapper skills-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>Capabilities</span>
          </div>
          <h2 className="section-title">What I work with.</h2>
          <p className="section-subtitle">
            A breakdown of technologies, frameworks, and domains I use to build robust software.
          </p>
        </div>

        <div className="skills-grid">
          {SKILL_SECTIONS.map((sec, idx) => {
            const IconComponent = sec.icon;
            const isWide = idx === 5;
            return (
              <div
                key={sec.title}
                className={`surface-card skill-box ${isWide ? 'skill-box-wide' : ''}`}
              >
                <div className="skill-box-top">
                  <div className="skill-box-icon">
                    <IconComponent size={19} />
                  </div>
                  <div>
                    <h3 className="skill-box-title">{sec.title}</h3>
                    <p className="skill-box-desc">{sec.description}</p>
                  </div>
                </div>

                <div className="skill-pill-list">
                  {sec.skills.map((skill) => (
                    <span key={skill} className="skill-pill">
                      <span className="skill-dot" />
                      {skill}
                    </span>
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
