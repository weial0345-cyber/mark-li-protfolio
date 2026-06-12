import React, { useState } from 'react';
import { NavLink } from '../types/portfolio';
import { EditableText } from './EditableText';
import { 
  Sliders, 
  Edit3, 
  Eye, 
  Plus, 
  Trash2, 
  Menu, 
  X,
  FileText
} from 'lucide-react';

interface NavbarProps {
  name: string;
  navLinks: NavLink[];
  isEditingMode: boolean;
  setIsEditingMode: (val: boolean) => void;
  onUpdateNavLinks: (links: NavLink[]) => void;
  onOpenThemeCustomizer: () => void;
  onTriggerResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  name,
  navLinks,
  isEditingMode,
  setIsEditingMode,
  onUpdateNavLinks,
  onOpenThemeCustomizer,
  onTriggerResume
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleUpdateLinkLabel = (id: string, newLabel: string) => {
    onUpdateNavLinks(
      navLinks.map(link => link.id === id ? { ...link, label: newLabel } : link)
    );
  };

  const handleAddLink = () => {
    const newId = `nav-${Date.now()}`;
    const newLink: NavLink = {
      id: newId,
      label: "New Section",
      href: `#section-${Date.now()}`,
      visible: true
    };
    onUpdateNavLinks([...navLinks, newLink]);
  };

  const handleRemoveLink = (id: string) => {
    onUpdateNavLinks(navLinks.filter(l => l.id !== id));
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/85 border-b border-slate-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand / Student Name */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#hero" className="font-serif text-lg sm:text-xl font-bold tracking-tight text-slate-900 hover:opacity-80 transition-opacity">
              {name || "Student Portfolio"}
            </a>
            <span className="ml-2.5 hidden md:inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-rose-50 text-rose-800 border border-rose-100">
              Admissions Ready
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-4">
            {navLinks.map((link) => (
              <div key={link.id} className="relative group flex items-center">
                <a
                  href={link.href}
                  className="px-2.5 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <EditableText
                    value={link.label}
                    onSave={(val) => handleUpdateLinkLabel(link.id, val)}
                    isEditingMode={isEditingMode}
                  />
                </a>
                {isEditingMode && (
                  <button
                    onClick={() => handleRemoveLink(link.id)}
                    className="absolute -top-1 -right-1 bg-red-100 text-red-600 rounded-full p-0.5 hover:bg-red-200"
                    title="Remove link"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                )}
              </div>
            ))}

            {isEditingMode && (
              <button
                onClick={handleAddLink}
                className="inline-flex items-center px-2 py-1 text-xs font-medium text-rose-700 bg-rose-50 hover:bg-rose-100 rounded border border-rose-200 transition-colors"
              >
                <Plus className="w-3 h-3 mr-1" /> Add Link
              </button>
            )}
          </div>

          {/* Action Controls: Edit Mode Toggle, Edit Colors, Resume */}
          <div className="hidden sm:flex items-center space-x-3">
            
            {/* Edit Mode Toggle */}
            <button
              onClick={() => setIsEditingMode(!isEditingMode)}
              className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold transition-all shadow-sm border ${
                isEditingMode 
                  ? 'bg-rose-800 text-white border-rose-900 ring-2 ring-rose-300' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200'
              }`}
              title="Toggle all inline editors and content additions"
            >
              {isEditingMode ? (
                <>
                  <Edit3 className="w-3.5 h-3.5 mr-1.5 animate-pulse" />
                  <span>Edit Mode: ON</span>
                </>
              ) : (
                <>
                  <Eye className="w-3.5 h-3.5 mr-1.5 text-slate-500" />
                  <span>Edit Mode: OFF</span>
                </>
              )}
            </button>

            {/* Edit Colors Popover Button */}
            <button
              onClick={onOpenThemeCustomizer}
              className="inline-flex items-center px-3 py-1.5 rounded text-xs font-medium bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-sm"
              title="Customize Theme, Accent Colors and Backgrounds"
            >
              <Sliders className="w-3.5 h-3.5 mr-1.5 text-rose-300" />
              <span>Edit Colors</span>
            </button>

            {/* Resume Fast Generate Trigger */}
            <button
              onClick={onTriggerResume}
              className="inline-flex items-center px-2.5 py-1.5 rounded text-xs font-medium bg-rose-50 text-rose-900 hover:bg-rose-100 border border-rose-200 transition-colors"
              title="Generate & Export Standalone HTML Resume"
            >
              <FileText className="w-3.5 h-3.5 mr-1 text-rose-700" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-4 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Controls</span>
            
            {/* Edit Mode Toggle */}
            <button
              onClick={() => setIsEditingMode(!isEditingMode)}
              className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-semibold ${
                isEditingMode ? 'bg-rose-800 text-white' : 'bg-slate-100 text-slate-700'
              }`}
            >
              {isEditingMode ? "Edit Mode: ON" : "Edit Mode: OFF"}
            </button>
          </div>

          <div className="flex space-x-2">
            <button
              onClick={() => {
                onOpenThemeCustomizer();
                setMobileMenuOpen(false);
              }}
              className="flex-1 inline-flex justify-center items-center px-3 py-1.5 rounded text-xs font-medium bg-slate-900 text-white"
            >
              <Sliders className="w-3.5 h-3.5 mr-1.5 text-rose-300" /> Edit Colors
            </button>

            <button
              onClick={() => {
                onTriggerResume();
                setMobileMenuOpen(false);
              }}
              className="flex-1 inline-flex justify-center items-center px-3 py-1.5 rounded text-xs font-medium bg-rose-50 text-rose-900 border border-rose-200"
            >
              <FileText className="w-3.5 h-3.5 mr-1" /> Resume
            </button>
          </div>

          <div className="pt-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">Navigation</span>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-1.5 rounded bg-slate-50 text-slate-800 text-sm font-medium hover:bg-slate-100"
                >
                  {link.label}
                </a>
              ))}
            </div>
            {isEditingMode && (
              <button
                onClick={handleAddLink}
                className="mt-2 w-full inline-flex justify-center items-center px-3 py-1.5 text-xs font-medium text-rose-700 bg-rose-50 rounded border border-rose-200"
              >
                <Plus className="w-3 h-3 mr-1" /> Add Custom Link
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
