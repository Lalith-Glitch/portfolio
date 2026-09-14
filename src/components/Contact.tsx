import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  Github,
  Linkedin,
  Code2,
  Terminal,
  AlertCircle,
  CheckCircle,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ContactFormData } from '../types';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message cannot be empty';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate sending & log to console as requested
    setTimeout(() => {
      console.log('Frontend demo mode: Messages logged to console.', {
        sender: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        timestamp: new Date().toISOString(),
      });

      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 600);
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
    setSubmitSuccess(false);
  };

  return (
    <section
      id="contact"
      aria-label="Contact Section"
      className="py-20 relative bg-[#0B0F17] border-t border-slate-800/80 bg-grid-pattern"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>08. INITIATE CONTACT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Let&apos;s Build Something Resilient Together
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Actively seeking Software Engineering Internships and Full-Time Roles. Reach out directly or dispatch a message below.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto items-start">
          {/* Left Column: Direct Details */}
          <div className="lg:col-span-5 space-y-6">
            <div
              id="contact-info-card"
              className="rounded-xl backdrop-blur-md bg-slate-900/70 border border-slate-800 p-6 sm:p-7 shadow-xl"
            >
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>Direct Contact Channels</span>
              </h3>

              {/* Email with copy button */}
              <div className="mb-6 p-4 rounded-lg bg-slate-950/80 border border-slate-800">
                <div className="text-[11px] font-mono text-slate-400 mb-1 flex items-center justify-between">
                  <span>Primary Email Address</span>
                  <span className="text-cyan-400">Response &lt; 24h</span>
                </div>
                <div className="flex items-center justify-between gap-2 mt-2">
                  <span
                    id="contact-display-email"
                    className="text-xs sm:text-sm font-mono text-slate-100 truncate select-all"
                  >
                    {PERSONAL_INFO.email}
                  </span>
                  <button
                    id="contact-copy-email-btn"
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1 text-xs font-mono px-2.5 py-1.5 rounded-md bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-200 hover:text-cyan-300 transition-all shrink-0 cursor-pointer shadow-sm"
                    aria-label="Copy candidate email"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Phone */}
              <div className="mb-6 p-4 rounded-lg bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-mono text-slate-400 mb-1">
                    Phone Contact
                  </div>
                  <a
                    id="contact-phone-link"
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-xs sm:text-sm font-mono text-slate-100 hover:text-cyan-300 transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                  <Phone className="w-4 h-4 text-emerald-400" />
                </div>
              </div>

              {/* Location */}
              <div className="mb-6 p-4 rounded-lg bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-mono text-slate-400 mb-1">
                    Current Base & Relocation
                  </div>
                  <div className="text-xs sm:text-sm text-slate-200">
                    {PERSONAL_INFO.location}
                  </div>
                </div>
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                  <MapPin className="w-4 h-4 text-indigo-400" />
                </div>
              </div>

              {/* External Profiles */}
              <div className="pt-4 border-t border-slate-800">
                <div className="text-xs font-mono text-slate-400 mb-3">
                  Professional Profiles:
                </div>
                <div className="flex items-center gap-3">
                  <a
                    id="contact-github-badge"
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-2.5 rounded-lg bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs font-mono flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    id="contact-linkedin-badge"
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-2.5 rounded-lg bg-slate-950 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-300 text-xs font-mono flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    id="contact-leetcode-badge"
                    href={PERSONAL_INFO.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-2.5 rounded-lg bg-slate-950 border border-slate-800 hover:border-amber-500/50 text-slate-300 hover:text-amber-300 text-xs font-mono flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>LeetCode</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div
              id="contact-form-container"
              className="rounded-xl backdrop-blur-md bg-slate-900/70 border border-slate-800 p-6 sm:p-8 shadow-xl"
            >
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Send className="w-4 h-4 text-cyan-400" />
                  <span>Send a Message</span>
                </h3>
                <span className="text-[11px] font-mono text-slate-500">
                  Quick Dispatch
                </span>
              </div>

              {submitSuccess ? (
                <div
                  id="contact-success-state"
                  className="p-6 rounded-xl bg-slate-950 border border-emerald-500/40 text-center space-y-4"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Message Logged Successfully!</h4>
                    <p className="text-xs text-slate-400 mt-1">
                      Thanks for reaching out! In demo mode, your message was received and logged to the browser developer console.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <a
                      href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
                        formData.subject || 'Portfolio Inquiry'
                      )}&body=${encodeURIComponent(formData.message)}`}
                      className="px-4 py-2 rounded-lg text-xs font-medium bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors inline-flex items-center gap-1.5"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Send Direct Email Instead</span>
                    </a>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-4 py-2 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                    >
                      Send Another
                    </button>
                  </div>
                </div>
              ) : (
                <form id="portfolio-contact-form" onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="form-name"
                        className="block text-xs font-mono text-slate-300 mb-1.5"
                      >
                        Your Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="form-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Alex Turner"
                        className={`w-full px-3.5 py-2 rounded-lg text-xs bg-slate-950/80 border text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors ${
                          errors.name
                            ? 'border-rose-500/80 focus:border-rose-500 focus:ring-rose-500/20'
                            : 'border-slate-800 focus:border-cyan-400 focus:ring-cyan-400/20'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="form-email"
                        className="block text-xs font-mono text-slate-300 mb-1.5"
                      >
                        Your Email <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="form-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="e.g. alex@company.com"
                        className={`w-full px-3.5 py-2 rounded-lg text-xs bg-slate-950/80 border text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors ${
                          errors.email
                            ? 'border-rose-500/80 focus:border-rose-500 focus:ring-rose-500/20'
                            : 'border-slate-800 focus:border-cyan-400 focus:ring-cyan-400/20'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="form-subject"
                      className="block text-xs font-mono text-slate-300 mb-1.5"
                    >
                      Subject / Opportunity <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="form-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="e.g. Software Engineering Opportunity / Interview Inquiry"
                      className={`w-full px-3.5 py-2 rounded-lg text-xs bg-slate-950/80 border text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors ${
                        errors.subject
                          ? 'border-rose-500/80 focus:border-rose-500 focus:ring-rose-500/20'
                          : 'border-slate-800 focus:border-cyan-400 focus:ring-cyan-400/20'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="form-message"
                      className="block text-xs font-mono text-slate-300 mb-1.5"
                    >
                      Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      id="form-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Discuss a potential role, project collaboration, or technical inquiry..."
                      className={`w-full px-3.5 py-2 rounded-lg text-xs bg-slate-950/80 border text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors resize-none ${
                        errors.message
                          ? 'border-rose-500/80 focus:border-rose-500 focus:ring-rose-500/20'
                          : 'border-slate-800 focus:border-cyan-400 focus:ring-cyan-400/20'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button & Disclaimer */}
                  <div className="pt-2">
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-2.5 rounded-lg text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 transition-all flex items-center justify-center gap-2 shadow-md shadow-cyan-500/15 disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-3.5 h-3.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                          <span>Dispatching...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Dispatch Message</span>
                        </>
                      )}
                    </button>

                    {/* Exact required disclaimer */}
                    <p
                      id="contact-form-disclaimer"
                      className="text-[11px] text-slate-500 font-mono text-center mt-3"
                    >
                      Frontend demo mode: Messages logged to console.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
