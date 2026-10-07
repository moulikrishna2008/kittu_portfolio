import React, { useState } from 'react';
import { ArrowDown, Mail, Phone, ArrowRight, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import './Hero.css';

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-container container">
        <div className="hero-grid">
          {/* LEFT COLUMN: Editorial Typography & Actions */}
          <div className="hero-left">
            <div className="hero-top-badge-row">
              <span className="hero-role-label">COMPUTER SCIENCE ENGINEERING STUDENT</span>
              <div className="badge badge-status">
                <span className="status-dot"></span>
                <span>Open to opportunities</span>
              </div>
            </div>

            <div className="hero-typography">
              <h1 className="hero-title">
                Hi, I'm <span className="hero-name-accent">Sri Mouli Krishna Penugonda.</span>
              </h1>
              <h2 className="hero-subhead">
                I build things with code.
              </h2>
              <p className="hero-bio">
                I'm a Computer Science Engineering student passionate about software development, artificial intelligence, data analytics, web technologies, and building practical solutions to real-world problems.
              </p>
            </div>

            <div className="hero-cta-group">
              <a
                href="#projects"
                className="btn btn-primary"
                onClick={(e) => handleScrollTo(e, 'projects')}
              >
                <span>VIEW MY WORK</span>
                <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="btn btn-secondary"
                onClick={(e) => handleScrollTo(e, 'contact')}
              >
                <span>LET'S CONNECT</span>
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="hero-social-strip">
              <a
                href="https://github.com/moulikrishna2008"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/sri-mouli-krishna-penugonda-667a22361"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:kittubtech2008@gmail.com"
                className="hero-social-link"
                aria-label="Email Sri Mouli Krishna Penugonda"
              >
                <Mail size={16} />
                <span>Email</span>
              </a>
              <a
                href="tel:+918008520977"
                className="hero-social-link"
                aria-label="Call Sri Mouli Krishna Penugonda"
              >
                <Phone size={15} />
                <span>Phone</span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Clean Editorial Portrait */}
          <div className="hero-right">
            {/* Editorial Portrait Container */}
            <div className="hero-portrait-frame">
              <div className="portrait-inner">
                {!imageError ? (
                  <img
                    src={`${import.meta.env.BASE_URL}profile.jpg`}
                    alt="Sri Mouli Krishna Penugonda — Software Engineer & CSE Student"
                    className="portrait-image"
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="portrait-fallback-avatar">
                    <div className="avatar-monogram">M</div>
                    <span className="avatar-caption">Sri Mouli Krishna Penugonda · CSE Student</span>
                  </div>
                )}
              </div>

              {/* Floating Verified Learning Badge */}
              <div className="floating-stat-badge">
                <Sparkles size={14} className="stat-icon" />
                <div className="stat-text-wrap">
                  <span className="stat-headline">2+ Years</span>
                  <span className="stat-subline">Learning &amp; Building</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Scroll Indicator */}
        <div className="hero-bottom-scroll">
          <a
            href="#about"
            className="hero-scroll-pill"
            onClick={(e) => handleScrollTo(e, 'about')}
            aria-label="Scroll to About section"
          >
            <span>EXPLORE PROFILE</span>
            <ArrowDown size={14} className="scroll-arrow-pulse" />
          </a>
        </div>
      </div>
    </section>
  );
}
