import React from 'react';
import { ArrowUpRight, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import './Projects.css';

const PROJECTS = [
  {
    number: '01',
    featured: true,
    title: 'CYVORA',
    description:
      'An AI-powered software repair and debugging agent that detects, analyzes, repairs, and validates software errors across codebases.',
    technologies: ['Python', 'AI', 'Automation', 'Software Engineering'],
    githubUrl: 'https://github.com/Devasish009/CYVORA',
    demoUrl: null,
    githubLabel: 'View on GitHub',
    highlights: [
      'Automated error localization and root cause analysis',
      'AST code parsing and automated patch generation',
      'Continuous repair validation test suites'
    ]
  },
  {
    number: '02',
    featured: false,
    title: 'IncidentMind',
    description:
      'An intelligent incident analysis platform designed to analyze software incidents and provide meaningful insights for debugging and resolution.',
    technologies: ['Python', 'FastAPI', 'AI', 'PostgreSQL', 'Web Development'],
    githubUrl: 'https://github.com/moulikrishna2008',
    demoUrl: '#demo',
    demoLabel: 'Live Demo',
    githubLabel: 'GitHub',
    highlights: [
      'Real-time incident ingestion and telemetry processing',
      'FastAPI microservice backend with PostgreSQL database',
      'Context-aware incident summarization and reporting'
    ]
  },
  {
    number: '03',
    featured: false,
    title: 'More Projects',
    description:
      'More projects, experiments, and open-source work are currently being developed in web systems, developer tooling, and applied AI.',
    technologies: ['React', 'Full-Stack', 'REST APIs', 'Cloud & APIs'],
    githubUrl: 'https://github.com/moulikrishna2008',
    demoUrl: null,
    githubLabel: 'View GitHub',
    highlights: [
      'Active open-source repository contributions',
      'Exploratory prototypes in developer experience'
    ]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-wrapper projects-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>Portfolio</span>
          </div>
          <h2 className="section-title">Selected Projects</h2>
          <p className="section-subtitle">
            A few things I've built while learning, experimenting, and solving real-world problems.
          </p>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((proj) => (
            <article
              key={proj.number}
              className={`project-minimal-card ${proj.featured ? 'is-featured' : ''}`}
            >
              <div className="project-top-row">
                <span className="project-number">{proj.number}</span>
                {proj.featured && (
                  <span className="featured-pill">
                    <Sparkles size={13} />
                    <span>Featured Project</span>
                  </span>
                )}
              </div>

              <div className="project-main-info">
                <h3 className="project-heading">{proj.title}</h3>
                <p className="project-summary">{proj.description}</p>
              </div>

              {proj.highlights && (
                <ul className="project-bullets">
                  {proj.highlights.map((h, i) => (
                    <li key={i} className="bullet-item">
                      <span className="bullet-dot" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="project-tags-row">
                {proj.technologies.map((t) => (
                  <span key={t} className="proj-tag">
                    {t}
                  </span>
                ))}
              </div>

              <div className="project-action-bar">
                {proj.githubUrl && (
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn primary-link"
                    aria-label={`View ${proj.title} on GitHub`}
                  >
                    <GithubIcon size={16} />
                    <span>{proj.githubLabel || 'GitHub'}</span>
                    <ArrowRight size={15} className="arrow-icon" />
                  </a>
                )}

                {proj.demoUrl && (
                  <a
                    href={proj.demoUrl}
                    className="project-link-btn secondary-link"
                    onClick={(e) => {
                      if (proj.demoUrl.startsWith('#')) {
                        e.preventDefault();
                        alert('Live demo is being scheduled for deployment!');
                      }
                    }}
                    aria-label={`View live demo for ${proj.title}`}
                  >
                    <ExternalLink size={15} />
                    <span>{proj.demoLabel}</span>
                    <ArrowRight size={14} className="arrow-icon" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
