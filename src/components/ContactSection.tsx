import React, { useState } from 'react';
import { ContactInfo } from '../types/portfolio';
import { EditableText } from './EditableText';
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  Check, 
  Copy, 
  FileText,
  Send
} from 'lucide-react';

interface ContactSectionProps {
  contact: ContactInfo;
  isEditingMode: boolean;
  onUpdateContact: (fields: Partial<ContactInfo>) => void;
  onTriggerResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  contact,
  isEditingMode,
  onUpdateContact,
  onTriggerResume
}) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background graphic */}
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-rose-400 mb-2">
            <Send className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-widest">Connect & Inquire</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-white">
            Get in Touch
          </h2>
          <div className="w-16 h-1 bg-rose-500 mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-base text-slate-300">
            Available for formal interviews, admissions inquiries, laboratory assignments, internships, and research collaborations.
          </p>
        </div>

        {/* Two-Column Setup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Instant Access Contacts */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Email */}
            <div className="bg-slate-800/80 rounded-xl p-4 sm:p-5 border border-slate-700/80 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-lg bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-medium text-slate-400">Primary Email</span>
                  <span className="text-sm sm:text-base font-medium text-white break-all">
                    <EditableText
                      value={contact.email}
                      onSave={(val) => onUpdateContact({ email: val })}
                      isEditingMode={isEditingMode}
                    />
                  </span>
                </div>
              </div>

              {!isEditingMode && (
                <button
                  onClick={() => handleCopy(contact.email, 'email')}
                  className="p-2 rounded text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                  title="Copy Email Address"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              )}
            </div>

            {/* Phone */}
            <div className="bg-slate-800/80 rounded-xl p-4 sm:p-5 border border-slate-700/80 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-lg bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-medium text-slate-400">Direct Line / SMS</span>
                  <span className="text-sm sm:text-base font-medium text-white">
                    <EditableText
                      value={contact.phone}
                      onSave={(val) => onUpdateContact({ phone: val })}
                      isEditingMode={isEditingMode}
                    />
                  </span>
                </div>
              </div>

              {!isEditingMode && (
                <button
                  onClick={() => handleCopy(contact.phone, 'phone')}
                  className="p-2 rounded text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                  title="Copy Phone Number"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              )}
            </div>

            {/* WeChat — only shown when value exists or in edit mode for editing */}
            {(contact.wechat || isEditingMode) && (
              <div className="bg-slate-800/80 rounded-xl p-4 sm:p-5 border border-slate-700/80 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-medium text-slate-400">WeChat ID</span>
                    <span className="text-sm sm:text-base font-medium text-white">
                      <EditableText
                        value={contact.wechat}
                        onSave={(val) => onUpdateContact({ wechat: val })}
                        isEditingMode={isEditingMode}
                      />
                    </span>
                  </div>
                </div>

                {!isEditingMode && contact.wechat && (
                  <button
                    onClick={() => handleCopy(contact.wechat, 'wechat')}
                    className="p-2 rounded text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                    title="Copy WeChat ID"
                  >
                    {copiedField === 'wechat' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                )}
              </div>
            )}

            {/* QQ — only shown when value exists or in edit mode for editing */}
            {(contact.qq || isEditingMode) && (
              <div className="bg-slate-800/80 rounded-xl p-4 sm:p-5 border border-slate-700/80 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold font-mono">QQ</span>
                  </div>
                  <div>
                    <span className="block text-xs font-medium text-slate-400">QQ Number</span>
                    <span className="text-sm sm:text-base font-medium text-white font-mono">
                      <EditableText
                        value={contact.qq}
                        onSave={(val) => onUpdateContact({ qq: val })}
                        isEditingMode={isEditingMode}
                      />
                    </span>
                  </div>
                </div>

                {!isEditingMode && contact.qq && (
                  <button
                    onClick={() => handleCopy(contact.qq, 'qq')}
                    className="p-2 rounded text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                    title="Copy QQ Number"
                  >
                    {copiedField === 'qq' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                )}
              </div>
            )}

          </div>

          {/* Right Column: Digital Footprints & Resume Actions */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Social Links & Web Repositories */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-4">
                Digital Repositories & Profiles
              </h3>

              <div className="space-y-4">

                {/* GitHub — only shown when value exists or in edit mode */}
                {(contact.github || isEditingMode) && (
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-slate-400 flex items-center">
                        <svg className="w-3.5 h-3.5 mr-1.5 text-slate-300 fill-current" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        GitHub URL
                      </span>
                      {contact.github && !isEditingMode && (
                        <a
                          href={contact.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-rose-400 hover:underline"
                        >
                          Visit Profile →
                        </a>
                      )}
                    </div>

                    <div className="text-xs text-slate-200 bg-slate-900/90 p-2 rounded font-mono truncate">
                      <EditableText
                        value={contact.github}
                        onSave={(val) => onUpdateContact({ github: val })}
                        isEditingMode={isEditingMode}
                      />
                    </div>
                  </div>
                )}

                {/* LinkedIn — only shown when value exists or in edit mode */}
                {(contact.linkedin || isEditingMode) && (
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-slate-400 flex items-center">
                        <svg className="w-3.5 h-3.5 mr-1.5 text-slate-300 fill-current" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                        </svg>
                        LinkedIn URL
                      </span>
                      {contact.linkedin && !isEditingMode && (
                        <a
                          href={contact.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-rose-400 hover:underline"
                        >
                          Visit Profile →
                        </a>
                      )}
                    </div>

                    <div className="text-xs text-slate-200 bg-slate-900/90 p-2 rounded font-mono truncate">
                      <EditableText
                        value={contact.linkedin}
                        onSave={(val) => onUpdateContact({ linkedin: val })}
                        isEditingMode={isEditingMode}
                      />
                    </div>
                  </div>
                )}

                {/* Fallback message when no social profiles set and not in edit mode */}
                {!contact.github && !contact.linkedin && !isEditingMode && (
                  <p className="text-xs text-slate-500 italic">
                    No digital profiles added yet. Enable Edit Mode to add GitHub, LinkedIn, or other links.
                  </p>
                )}

              </div>

              <div className="mt-4 pt-4 border-t border-slate-700/50">
                <span className="text-[11px] text-slate-400 block italic">
                  * Admissions advisors are welcome to review complete open-source repositories and contributions via the provided GitHub footprint.
                </span>
              </div>
            </div>

            {/* Resume Generation Feature Prompt */}
            <div className="bg-gradient-to-r from-rose-950 to-rose-900 rounded-2xl p-6 border border-rose-800 shadow-xl text-left">
              <div className="flex items-center space-x-2 text-rose-200 mb-2">
                <FileText className="w-5 h-5" />
                <h4 className="text-xs font-bold uppercase tracking-widest">
                  Live Dynamic Resume Generator
                </h4>
              </div>
              
              <p className="text-xs text-rose-100 leading-relaxed mb-4">
                Instantly export a highly accessible, cleanly formatted, standalone printable HTML resume mirroring all your latest inline portfolio updates.
              </p>

              <button
                onClick={onTriggerResume}
                className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 transition-all shadow-md"
              >
                <FileText className="w-4 h-4 mr-2 text-rose-800" />
                <span>Generate & Download Resume</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
