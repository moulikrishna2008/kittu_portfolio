import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import './Navbar.css';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // ScrollSpy logic
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container container">
        <a href="#home" className="navbar-logo" onClick={(e) => handleNavClick(e, '#home')}>
          <span className="logo-badge">M</span>
          <span className="logo-name">MOULI</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-desktop-nav" aria-label="Main Navigation">
          <ul className="navbar-links">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                    {isActive && <span className="nav-active-bar" />}
                  </a>
                </li>
              );
            })}
            <li className="nav-divider-dot" aria-hidden="true" />
            <li>
              <a
                href="https://github.com/moulikrishna2008"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-icon-link"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <GithubIcon size={16} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/sri-mouli-krishna-penugonda-667a22361"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-icon-link"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <LinkedinIcon size={16} />
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          className="mobile-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`mobile-nav-overlay ${mobileMenuOpen ? 'is-open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div className="mobile-nav-panel" onClick={(e) => e.stopPropagation()}>
          <div className="mobile-nav-header">
            <div className="navbar-logo">
              <span className="logo-badge">M</span>
              <span className="logo-name">MOULI</span>
            </div>
            <button
              type="button"
              className="mobile-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <ul className="mobile-links">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`mobile-nav-link ${isActive ? 'mobile-nav-link-active' : ''}`}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="mobile-indicator">Active</span>}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mobile-nav-footer">
            <a
              href="#contact"
              className="btn btn-primary btn-sm"
              style={{ width: '100%' }}
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              Let's Connect &rarr;
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
