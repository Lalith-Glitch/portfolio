import React, { useState } from 'react';
import { ViewType } from './HeaderBar';
import { Mail, Phone, MapPin, Send, CheckCircle2, Github, Linkedin, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactViewProps {
  onNavigate: (view: ViewType) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  return (
    <div
      id="contact-view"
      className="min-h-[calc(100vh-4rem)] flex flex-col justify-start items-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-[#F4F6FB]"
    >
      <div className="w-full max-w-4xl mx-auto flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          {/* Contact Details Card */}
          <div className="md:col-span-2 rounded-2xl bg-white border border-slate-200/90 shadow-sm p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold text-[#233594] mb-2">Get in Touch</h2>
              <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                Interested in recruiting me for software engineering roles or internships? Feel free to connect directly.
              </p>

              <div className="space-y-4">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-start gap-3 text-xs text-slate-700 hover:text-[#4355B9] transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-indigo-50 text-[#4355B9] group-hover:bg-[#4355B9] group-hover:text-white transition-colors shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Email</div>
                    <div className="font-medium break-all">{PERSONAL_INFO.email}</div>
                  </div>
                </a>

                <div className="flex items-start gap-3 text-xs text-slate-700">
                  <div className="p-2 rounded-lg bg-indigo-50 text-[#4355B9] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Location</div>
                    <div className="font-medium">{PERSONAL_INFO.location}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-slate-700">
                  <div className="p-2 rounded-lg bg-indigo-50 text-[#4355B9] shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Availability</div>
                    <div className="font-medium text-emerald-600">Open for Roles &amp; Internships</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social profiles */}
            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-[#4355B9] hover:text-white transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-[#0A66C2] hover:text-white transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-[#FFA116] hover:text-white transition-colors"
                title="LeetCode"
              >
                <Code2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Direct Message Form */}
          <div className="md:col-span-3 rounded-2xl bg-white border border-slate-200/90 shadow-sm p-6 sm:p-7">
            <h3 className="text-base font-bold text-slate-800 mb-1">Send a Message</h3>
            <p className="text-xs text-slate-500 mb-5">
              Directly submit your inquiry or collaboration message:
            </p>

            {isSubmitted ? (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center text-emerald-800 space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-sm">Message Sent Successfully!</h4>
                <p className="text-xs text-emerald-700">
                  Thank you for reaching out to Pallagani Lalitha Manohar. I will reply to you promptly.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-2 text-xs font-semibold text-emerald-700 underline cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-[#4355B9] focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. recruiter@company.com"
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-[#4355B9] focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Interview Inquiry / Spring Boot Opportunity"
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-[#4355B9] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your note or project requirements here..."
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-[#4355B9] focus:bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-xl bg-[#4355B9] hover:bg-[#34449D] text-white font-semibold text-xs shadow-sm flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Direct Message</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="flex justify-center mb-6">
          <button
            type="button"
            id="contact-btn-back-home"
            onClick={() => onNavigate('home')}
            className="py-2.5 px-8 rounded-xl bg-[#4355B9] hover:bg-[#34449D] active:bg-[#2A3780] text-white font-semibold text-sm shadow-md transition-all duration-150 cursor-pointer text-center"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};
