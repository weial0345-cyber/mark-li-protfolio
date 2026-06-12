import React from 'react';
import { VolunteerEntry } from '../types/portfolio';
import { EditableText } from './EditableText';
import { HeartHandshake, Plus, Trash2, Clock, Sparkles } from 'lucide-react';

interface VolunteerSectionProps {
  volunteer: VolunteerEntry[];
  isEditingMode: boolean;
  onUpdateVolunteer: (entries: VolunteerEntry[]) => void;
}

export const VolunteerSection: React.FC<VolunteerSectionProps> = ({
  volunteer,
  isEditingMode,
  onUpdateVolunteer
}) => {
  const handleAddVolunteer = () => {
    const newVol: VolunteerEntry = {
      id: `vol-${Date.now()}`,
      organization: "Community Impact Foundation / Local Chapter",
      role: "Lead Coordinator / Outreach Member",
      hours: 100,
      impact: "Organized local logistics, provided direct instruction or support to underserved demographics, and managed continuous resource deployment."
    };
    onUpdateVolunteer([...volunteer, newVol]);
  };

  const handleUpdateVolunteer = (id: string, fields: Partial<VolunteerEntry>) => {
    onUpdateVolunteer(volunteer.map(v => v.id === id ? { ...v, ...fields } : v));
  };

  const handleRemoveVolunteer = (id: string) => {
    onUpdateVolunteer(volunteer.filter(v => v.id !== id));
  };

  // Compute total service hours natively
  const totalHours = volunteer.reduce((acc, curr) => acc + (Number(curr.hours) || 0), 0);

  return (
    <section id="volunteer" className="py-16 sm:py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 text-rose-800 mb-2">
              <HeartHandshake className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-widest">Civic Engagement</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
              Volunteer & Community Service
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-2xl">
              Showcasing verified personal sacrifice, outreach initiative, local enrichment, and humanitarian leadership directly benefiting surrounding regional and global populations.
            </p>
          </div>

          {/* Aggregated Hours Indicator */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-800 flex items-center justify-center font-bold font-mono">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase text-slate-400">Total Verified Time</span>
                <span className="text-lg font-bold text-slate-900 font-mono">{totalHours} Hours</span>
              </div>
            </div>

            {isEditingMode && (
              <button
                onClick={handleAddVolunteer}
                className="inline-flex items-center px-4 py-3 text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 rounded-xl border border-rose-200 transition-colors"
              >
                <Plus className="w-4 h-4 mr-1" /> Add Service Entry
              </button>
            )}
          </div>
        </div>

        {/* Volunteer & Service Entries List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {volunteer.map((entry) => (
            <div
              key={entry.id}
              className="relative bg-slate-50/70 rounded-2xl p-6 sm:p-8 border border-slate-200/80 flex flex-col justify-between"
            >
              <div>
                {/* Meta header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded text-xs font-bold bg-white text-slate-800 border border-slate-200 shadow-2xs">
                    <EditableText
                      value={entry.role}
                      onSave={(val) => handleUpdateVolunteer(entry.id, { role: val })}
                      isEditingMode={isEditingMode}
                    />
                  </span>

                  <div className="flex items-center space-x-1 text-rose-800 bg-rose-50 px-2 py-0.5 rounded border border-rose-100">
                    <Sparkles className="w-3 h-3" />
                    <span className="text-xs font-bold font-mono">
                      {isEditingMode ? (
                        <input
                          type="number"
                          value={entry.hours}
                          onChange={(e) => handleUpdateVolunteer(entry.id, { hours: parseInt(e.target.value) || 0 })}
                          className="w-16 bg-white border border-slate-300 rounded px-1 py-0.5 text-center text-xs font-mono"
                        />
                      ) : (
                        entry.hours
                      )}{' '}
                      Hours
                    </span>
                  </div>
                </div>

                {/* Organization Name */}
                <h3 className="text-lg font-serif font-bold text-slate-900 mb-2">
                  <EditableText
                    value={entry.organization}
                    onSave={(val) => handleUpdateVolunteer(entry.id, { organization: val })}
                    isEditingMode={isEditingMode}
                  />
                </h3>

                {/* Impact Statement */}
                <div className="mt-3">
                  <span className="block text-[10px] font-bold uppercase text-slate-400 mb-1">
                    Community Impact Summary
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <EditableText
                      value={entry.impact}
                      onSave={(val) => handleUpdateVolunteer(entry.id, { impact: val })}
                      isEditingMode={isEditingMode}
                      multiline
                    />
                  </p>
                </div>
              </div>

              {/* Editing remove trigger */}
              {isEditingMode && (
                <div className="mt-6 pt-3 border-t border-slate-200 flex justify-end">
                  <button
                    onClick={() => handleRemoveVolunteer(entry.id)}
                    className="inline-flex items-center text-xs text-red-600 hover:text-red-800 font-medium"
                  >
                    <Trash2 className="w-3 h-3 mr-1" /> Remove Entry
                  </button>
                </div>
              )}

            </div>
          ))}
        </div>

        {volunteer.length === 0 && (
          <div className="text-center py-12 bg-slate-50 rounded-xl border border-slate-200">
            <p className="text-slate-500 text-sm">No community service records currently added.</p>
          </div>
        )}

      </div>
    </section>
  );
};
