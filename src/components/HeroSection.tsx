import React from 'react';
import { EditableText } from './EditableText';
import { ContactInfo } from '../types/portfolio';
import { 
  FileText, 
  Send, 
  Award, 
  GraduationCap, 
  School, 
  Sparkles, 
  Image as ImageIcon,
  Mail,
  Phone,
  MessageSquare
} from 'lucide-react';

interface HeroSectionProps {
  name: string;
  photoUrl: string;
  bio: string;
  gradeLevel: string;
  school: string;
  gpa: string;
  major: string;
  contact: ContactInfo;
  heroButtons: {
    resumeText: string;
    contactText: string;
  };
  isEditingMode: boolean;
  onUpdate: (fields: Partial<{
    name: string;
    photoUrl: string;
    bio: string;
    gradeLevel: string;
    school: string;
    gpa: string;
    major: string;
    heroButtons: { resumeText: string; contactText: string };
  }>) => void;
  onTriggerResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  name,
  photoUrl,
  bio,
  gradeLevel,
  school,
  gpa,
  major,
  contact,
  heroButtons,
  isEditingMode,
  onUpdate,
  onTriggerResume
}) => {
  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white pointer-events-none" />
      
      {/* Subtle absolute decorative blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Subtitle Tag */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">
              <Sparkles className="w-3.5 h-3.5 text-rose-800" />
              <span className="text-xs font-semibold tracking-wide text-slate-800 uppercase">
                Academic & Leadership Showcase
              </span>
            </div>

            {/* Student Full Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-slate-900 tracking-tight leading-none">
              <EditableText
                value={name}
                onSave={(val) => onUpdate({ name: val })}
                isEditingMode={isEditingMode}
              />
            </h1>

            {/* Major / Career Aspirations */}
            <div className="text-lg sm:text-xl font-medium text-rose-800/95 font-serif">
              <EditableText
                value={major}
                onSave={(val) => onUpdate({ major: val })}
                isEditingMode={isEditingMode}
              />
            </div>

            {/* Bio */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              <EditableText
                value={bio}
                onSave={(val) => onUpdate({ bio: val })}
                isEditingMode={isEditingMode}
                multiline
              />
            </p>

            {/* Quick Access Contacts Direct Row */}
            <div className="pt-1 pb-2">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                Immediate Contacts
              </span>
              <div className="flex flex-wrap items-center gap-2">
                
                {/* Email */}
                {contact.email && (
                  <a
                    href={`mailto:${contact.email}`}
                    className="inline-flex items-center px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-medium text-slate-700 transition-colors border border-slate-200"
                    title="Direct Email"
                  >
                    <Mail className="w-3 h-3 mr-1 text-rose-800" />
                    <span className="truncate max-w-[140px]">{contact.email}</span>
                  </a>
                )}

                {/* Phone */}
                {contact.phone && (
                  <a
                    href={`tel:${contact.phone}`}
                    className="inline-flex items-center px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-medium text-slate-700 transition-colors border border-slate-200"
                    title="Direct Line"
                  >
                    <Phone className="w-3 h-3 mr-1 text-rose-800" />
                    <span>{contact.phone}</span>
                  </a>
                )}

                {/* GitHub */}
                {contact.github && (
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-medium text-slate-700 transition-colors border border-slate-200"
                    title="GitHub Repository"
                  >
                    <svg className="w-3 h-3 mr-1 text-slate-900 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.6: .825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    <span>GitHub</span>
                  </a>
                )}

                {/* WeChat */}
                {contact.wechat && (
                  <span
                    className="inline-flex items-center px-2.5 py-1 rounded-lg bg-emerald-50 text-xs font-medium text-emerald-800 border border-emerald-200 cursor-help"
                    title={`WeChat ID: ${contact.wechat}`}
                  >
                    <MessageSquare className="w-3 h-3 mr-1 text-emerald-600" />
                    <span>WeChat: {contact.wechat}</span>
                  </span>
                )}

                {/* QQ */}
                {contact.qq && (
                  <span
                    className="inline-flex items-center px-2.5 py-1 rounded-lg bg-blue-50 text-xs font-medium text-blue-800 border border-blue-200 cursor-help"
                    title={`QQ Number: ${contact.qq}`}
                  >
                    <span className="text-[10px] font-bold mr-1 font-mono">QQ:</span>
                    <span>{contact.qq}</span>
                  </span>
                )}

              </div>
            </div>

            {/* Core Stats / Credentials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
              
              {/* Grade Level */}
              <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
                <div className="flex items-center space-x-2 text-slate-400 mb-1">
                  <GraduationCap className="w-4 h-4 text-rose-800" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Academic Year</span>
                </div>
                <div className="text-sm font-bold text-slate-900">
                  <EditableText
                    value={gradeLevel}
                    onSave={(val) => onUpdate({ gradeLevel: val })}
                    isEditingMode={isEditingMode}
                  />
                </div>
              </div>

              {/* School */}
              <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
                <div className="flex items-center space-x-2 text-slate-400 mb-1">
                  <School className="w-4 h-4 text-rose-800" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Institution</span>
                </div>
                <div className="text-sm font-bold text-slate-900 line-clamp-2">
                  <EditableText
                    value={school}
                    onSave={(val) => onUpdate({ school: val })}
                    isEditingMode={isEditingMode}
                  />
                </div>
              </div>

              {/* GPA */}
              <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
                <div className="flex items-center space-x-2 text-slate-400 mb-1">
                  <Award className="w-4 h-4 text-rose-800" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Academic Standing</span>
                </div>
                <div className="text-sm font-bold text-rose-800">
                  <EditableText
                    value={gpa}
                    onSave={(val) => onUpdate({ gpa: val })}
                    isEditingMode={isEditingMode}
                  />
                </div>
              </div>

            </div>

            {/* Primary Call to Actions */}
            <div className="flex flex-wrap gap-3 pt-4">
              
              {/* Download Resume Button */}
              <button
                onClick={onTriggerResume}
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 shadow-md hover:shadow-lg transition-all"
              >
                <FileText className="w-4 h-4 mr-2 text-rose-300" />
                <EditableText
                  value={heroButtons.resumeText}
                  onSave={(val) => onUpdate({ heroButtons: { ...heroButtons, resumeText: val } })}
                  isEditingMode={isEditingMode}
                />
              </button>

              {/* Contact Button */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 shadow-xs transition-all"
              >
                <Send className="w-4 h-4 mr-2 text-slate-400" />
                <EditableText
                  value={heroButtons.contactText}
                  onSave={(val) => onUpdate({ heroButtons: { ...heroButtons, contactText: val } })}
                  isEditingMode={isEditingMode}
                />
              </a>

            </div>

          </div>

          {/* Right Column: Profile Photo Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Soft visual frames */}
              <div className="absolute inset-0 bg-gradient-to-tr from-rose-800/10 to-transparent rounded-3xl transform rotate-3 scale-105 transition-transform" />
              <div className="absolute inset-0 bg-white rounded-3xl shadow-xl border border-slate-100" />

              <div className="relative p-3 sm:p-4">
                
                {/* Image Aspect Box */}
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/60">
                  <img
                    src={photoUrl}
                    alt={name}
                    className="w-full h-full object-cover object-center transition-all duration-500 hover:scale-105"
                    onError={(e) => {
                      // Fallback placeholder if custom image broken
                      e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800";
                    }}
                  />
                  
                  {/* Edit overlay for image URL */}
                  {isEditingMode && (
                    <div className="absolute inset-0 bg-slate-950/85 p-4 flex flex-col justify-center items-center text-center space-y-2 animate-fade-in">
                      <ImageIcon className="w-8 h-8 text-rose-400 mb-1" />
                      <span className="text-xs font-bold text-white uppercase tracking-wider">
                        Edit Profile Photo URL
                      </span>
                      <input
                        type="text"
                        value={photoUrl}
                        onChange={(e) => onUpdate({ photoUrl: e.target.value })}
                        placeholder="Paste image URL here..."
                        className="w-full text-xs bg-slate-900 text-white border border-slate-700 rounded px-2 py-1 text-center font-mono"
                      />
                      <div className="text-[10px] text-slate-400 space-y-1">
                        <p>To use an image directly from your repository:</p>
                        <p className="bg-slate-900 p-1 rounded font-mono text-rose-300">/images/sample-profile.jpg</p>
                        <p>Or paste any absolute https:// URL directly.</p>
                      </div>
                    </div>
                  )}

                  {/* Absolute Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-900/85 backdrop-blur-md rounded-xl p-3 text-white border border-white/10">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-xs font-medium text-slate-200">
                        Admissions Portfolio • <strong className="text-white font-semibold">Verified Records</strong>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Optional subtle tagline below image */}
                <div className="mt-3 text-center">
                  <span className="text-xs text-slate-400 italic">
                    {name} • Academic Showcase
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
