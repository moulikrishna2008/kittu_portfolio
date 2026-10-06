import React, { useState } from 'react';
import { Mail, Phone, Send, ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { submitFormspreeMessage } from '../lib/formspree';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        type: 'error',
        message: 'Please fill out all required fields before submitting.'
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address.'
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      await submitFormspreeMessage({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      });

      setStatus({
        type: 'success',
        message: 'Thanks! Your message has been received.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('Submission failed:', err);
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-wrapper contact-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">Let's build something together.</h2>
          <p className="section-subtitle">
            Have an idea, opportunity, or just want to connect? I'd love to hear from you.
          </p>
        </div>

        <div className="contact-grid-layout">
          {/* Left Column: Direct Contact Details */}
          <div className="contact-details-col">
            <div className="surface-card contact-info-card">
              <h3 className="contact-box-title">Contact Information</h3>
              <p className="contact-box-desc">
                Feel free to reach out for software development internships, project collaborations, hackathons, or general tech inquiries.
              </p>

              <div className="contact-list">
                {/* Phone */}
                <a
                  href="tel:+918008520977"
                  className="contact-card-item"
                  aria-label="Call Sri Mouli Krishna Penugonda"
                >
                  <div className="item-icon-box">
                    <Phone size={18} />
                  </div>
                  <div className="item-text-box">
                    <span className="item-label">Phone</span>
                    <span className="item-val">+91 8008520977</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:kittubtech2008@gmail.com"
                  className="contact-card-item"
                  aria-label="Email Sri Mouli Krishna Penugonda"
                >
                  <div className="item-icon-box">
                    <Mail size={18} />
                  </div>
                  <div className="item-text-box">
                    <span className="item-label">Email</span>
                    <span className="item-val">kittubtech2008@gmail.com</span>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/moulikrishna2008"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card-item"
                  aria-label="GitHub Profile"
                >
                  <div className="item-icon-box">
                    <GithubIcon size={18} />
                  </div>
                  <div className="item-text-box">
                    <span className="item-label">GitHub</span>
                    <span className="item-val">github.com/moulikrishna2008</span>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/sri-mouli-krishna-penugonda-667a22361"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card-item"
                  aria-label="LinkedIn Profile"
                >
                  <div className="item-icon-box">
                    <LinkedinIcon size={18} />
                  </div>
                  <div className="item-text-box">
                    <span className="item-label">LinkedIn</span>
                    <span className="item-val">linkedin.com/in/sri-mouli-krishna-penugonda-667a22361</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-col">
            <form onSubmit={handleSubmit} className="surface-card contact-form-card" noValidate>
              <h3 className="contact-box-title">Send a Message</h3>

              {status.type === 'success' && (
                <div className="form-feedback feedback-success" role="alert">
                  <CheckCircle2 size={18} />
                  <span>{status.message}</span>
                </div>
              )}

              {status.type === 'error' && (
                <div className="form-feedback feedback-error" role="alert">
                  <AlertCircle size={18} />
                  <span>{status.message}</span>
                </div>
              )}

              <div className="form-double-row">
                <div className="input-group">
                  <label htmlFor="name" className="input-label">
                    Name <span className="req-star">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="text-input"
                    required
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="email" className="input-label">
                    Email <span className="req-star">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@domain.com"
                    className="text-input"
                    required
                  />
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="subject" className="input-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Internship / Collaboration / Project Inquiry"
                  className="text-input"
                />
              </div>

              <div className="input-group">
                <label htmlFor="message" className="input-label">
                  Message <span className="req-star">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="text-textarea"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary form-submit-button"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="spin-loader" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
