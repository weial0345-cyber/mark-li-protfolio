import React from 'react';
import { EditableText } from './EditableText';
import { GraduationCap, ShieldCheck } from 'lucide-react';

interface FooterProps {
  name: string;
  school: string;
  isEditingMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({
  name,
  school,
  isEditingMode
}) => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Info */}
        <div className="flex flex-col sm:flex-row items-center justify-between pb-8 border-b border-slate-800/80 gap-6">
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-rose-900/40 text-rose-400 flex items-center justify-center border border-rose-800/50">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="block font-serif font-bold text-white text-base">
                {name || "Student Portfolio"}
              </span>
              <span className="text-xs text-slate-500">
                {school || "Verified Undergraduate Applicant"}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs">
            <a href="#hero" className="hover:text-white transition-colors">Top</a>
            <a href="#academics" className="hover:text-white transition-colors">Academics</a>
            <a href="#competitions" className="hover:text-white transition-colors">Competitions</a>
            <a href="#leadership" className="hover:text-white transition-colors">Leadership</a>
            <a href="#volunteer" className="hover:text-white transition-colors">Service</a>
            <a href="#awards" className="hover:text-white transition-colors">Awards</a>
            <a href="#highlights" className="hover:text-white transition-colors">Highlights</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

        </div>

        {/* Bottom Legal / Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs space-y-4 sm:space-y-0">
          
          <div className="flex items-center space-x-1.5 text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>
              <EditableText
                value="All statements, scores, and volunteer contributions are officially verifiable."
                onSave={() => {}}
                isEditingMode={isEditingMode}
              />
            </span>
          </div>

          <div className="text-slate-500 text-center sm:text-right">
            <span>&copy; {new Date().getFullYear()} {name}. Built for University Admissions & Academic Showcasing.</span>
          </div>

        </div>

      </div>
    </footer>
  );
};
