import React from 'react';
import { Mail, Phone, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container footer-inner">
        <div className="footer-top-row">
          <div className="footer-brand-box">
            <div className="footer-logo">
              <span className="footer-logo-badge">M</span>
              <span className="footer-logo-text">MOULI</span>
            </div>
            <p className="footer-tagline">
              Computer Science Engineering Student &amp; Aspiring Software Engineer
            </p>
          </div>

          <div className="footer-nav-links">
            <a
              href="https://github.com/moulikrishna2008"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-nav-link"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/sri-mouli-krishna-penugonda-667a22361"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-nav-link"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={16} />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:kittubtech2008@gmail.com"
              className="footer-nav-link"
              aria-label="Email Sri Mouli Krishna Penugonda"
            >
              <Mail size={16} />
              <span>Email</span>
            </a>
            <a
              href="tel:+918008520977"
              className="footer-nav-link"
              aria-label="Call Sri Mouli Krishna Penugonda"
            >
              <Phone size={15} />
              <span>Phone</span>
            </a>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom-row">
          <p className="footer-copy-text">
            &copy; 2026 Sri Mouli Krishna Penugonda. Built with curiosity and code.
          </p>

          <button
            type="button"
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
