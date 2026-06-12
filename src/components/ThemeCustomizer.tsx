import React from 'react';
import { ThemeSettings } from '../types/portfolio';
import { THEME_PRESETS } from '../data/initialPortfolio';
import { X, RotateCcw, Check, Palette } from 'lucide-react';

interface ThemeCustomizerProps {
  isOpen: boolean;
  onClose: () => void;
  currentTheme: ThemeSettings;
  onUpdateTheme: (newTheme: ThemeSettings) => void;
  onResetTheme: () => void;
  onFactoryReset: () => void;
}

export const ThemeCustomizer: React.FC<ThemeCustomizerProps> = ({
  isOpen,
  onClose,
  currentTheme,
  onUpdateTheme,
  onResetTheme,
  onFactoryReset
}) => {
  if (!isOpen) return null;

  const handlePresetSelect = (presetId: string) => {
    const preset = THEME_PRESETS.find(p => p.id === presetId);
    if (preset) {
      onUpdateTheme({
        ...currentTheme,
        preset: preset.id,
        bgColor: preset.bgColor,
        bgSecondary: preset.bgSecondary,
        textColor: preset.textColor,
        textSecondary: preset.textSecondary,
        accentColor: preset.accentColor,
        accentLight: preset.accentLight
      });
    }
  };

  const handleCustomColorChange = (key: keyof ThemeSettings, value: string) => {
    onUpdateTheme({
      ...currentTheme,
      preset: 'custom',
      [key]: value
    });
  };

  const fonts = [
    { name: "Inter (Modern Minimalist)", value: "'Inter', sans-serif" },
    { name: "Plus Jakarta Sans (Sleek Tech)", value: "'Plus Jakarta Sans', sans-serif" },
    { name: "Playfair Display (Pure Serif Academic)", value: "'Playfair Display', serif" },
    { name: "System Serif (Classic)", value: "Georgia, serif" }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="flex min-h-full items-center justify-center p-4 text-center">
        <div className="relative w-full max-w-lg transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-2xl transition-all border border-slate-100">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center space-x-2">
              <Palette className="w-5 h-5 text-rose-800" />
              <h3 className="text-lg font-serif font-bold text-slate-900">
                Theme & Aesthetic Configuration
              </h3>
            </div>
            <button
              onClick={onClose}
              className="rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-4 space-y-6">
            
            {/* Presets */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                University Prestige Presets
              </label>
              <div className="grid grid-cols-2 gap-2">
                {THEME_PRESETS.map((preset) => {
                  const isSelected = currentTheme.preset === preset.id;
                  return (
                    <button
                      key={preset.id}
                      onClick={() => handlePresetSelect(preset.id)}
                      className={`flex items-center justify-between p-2.5 rounded-lg border text-left transition-all ${
                        isSelected 
                          ? 'border-rose-800 bg-rose-50/50 ring-1 ring-rose-800' 
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div>
                        <span className="block text-xs font-bold text-slate-900">
                          {preset.name}
                        </span>
                        <div className="flex items-center space-x-1 mt-1">
                          <span 
                            className="w-3 h-3 rounded-full border border-slate-300"
                            style={{ backgroundColor: preset.bgColor }}
                          />
                          <span 
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: preset.accentColor }}
                          />
                          <span 
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: preset.bgSecondary }}
                          />
                        </div>
                      </div>
                      {isSelected && <Check className="w-4 h-4 text-rose-800" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Custom Color Overrides */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                Custom Styling Variables
              </label>
              <div className="grid grid-cols-2 gap-3 bg-slate-50 p-3 rounded-lg border border-slate-200">
                
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Primary Background
                  </label>
                  <div className="flex items-center space-x-2">
                    <input 
                      type="color"
                      value={currentTheme.bgColor}
                      onChange={(e) => handleCustomColorChange('bgColor', e.target.value)}
                      className="w-8 h-8 rounded border border-slate-300 cursor-pointer p-0 bg-transparent"
                    />
                    <input 
                      type="text"
                      value={currentTheme.bgColor}
                      onChange={(e) => handleCustomColorChange('bgColor', e.target.value)}
                      className="w-full text-xs bg-white border border-slate-300 rounded px-2 py-1 uppercase font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Card Background
                  </label>
                  <div className="flex items-center space-x-2">
                    <input 
                      type="color"
                      value={currentTheme.bgSecondary}
                      onChange={(e) => handleCustomColorChange('bgSecondary', e.target.value)}
                      className="w-8 h-8 rounded border border-slate-300 cursor-pointer p-0 bg-transparent"
                    />
                    <input 
                      type="text"
                      value={currentTheme.bgSecondary}
                      onChange={(e) => handleCustomColorChange('bgSecondary', e.target.value)}
                      className="w-full text-xs bg-white border border-slate-300 rounded px-2 py-1 uppercase font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Primary Accent Color
                  </label>
                  <div className="flex items-center space-x-2">
                    <input 
                      type="color"
                      value={currentTheme.accentColor}
                      onChange={(e) => handleCustomColorChange('accentColor', e.target.value)}
                      className="w-8 h-8 rounded border border-slate-300 cursor-pointer p-0 bg-transparent"
                    />
                    <input 
                      type="text"
                      value={currentTheme.accentColor}
                      onChange={(e) => handleCustomColorChange('accentColor', e.target.value)}
                      className="w-full text-xs bg-white border border-slate-300 rounded px-2 py-1 uppercase font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Text Tone Primary
                  </label>
                  <div className="flex items-center space-x-2">
                    <input 
                      type="color"
                      value={currentTheme.textColor}
                      onChange={(e) => handleCustomColorChange('textColor', e.target.value)}
                      className="w-8 h-8 rounded border border-slate-300 cursor-pointer p-0 bg-transparent"
                    />
                    <input 
                      type="text"
                      value={currentTheme.textColor}
                      onChange={(e) => handleCustomColorChange('textColor', e.target.value)}
                      className="w-full text-xs bg-white border border-slate-300 rounded px-2 py-1 uppercase font-mono"
                    />
                  </div>
                </div>

              </div>
            </div>

            {/* Typography Selection */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                Primary Body Typography
              </label>
              <select
                value={currentTheme.fontFamily}
                onChange={(e) => handleCustomColorChange('fontFamily', e.target.value)}
                className="w-full text-sm bg-white border border-slate-300 rounded-lg p-2 focus:ring-2 focus:ring-rose-800"
              >
                {fonts.map((f) => (
                  <option key={f.value} value={f.value}>
                    {f.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Persistence Guarantee Note */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-800">
              <span className="font-bold">⚡ Real-time Updates:</span> All theme customizations and edits persist instantly via secure browser <code className="font-mono bg-amber-100 px-1 rounded">localStorage</code>.
            </div>

          </div>

          {/* Footer Actions */}
          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={onFactoryReset}
              className="inline-flex items-center text-xs text-red-600 hover:text-red-800 font-medium"
              title="Completely reset all edits, arrays, and content to pristine original state"
            >
              <RotateCcw className="w-3.5 h-3.5 mr-1" /> Factory Reset Content
            </button>

            <div className="flex space-x-2">
              <button
                onClick={onResetTheme}
                className="px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Reset Theme
              </button>
              <button
                onClick={onClose}
                className="px-4 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-medium hover:bg-slate-800 transition-colors"
              >
                Done
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
