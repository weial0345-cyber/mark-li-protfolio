import React from 'react';
import { Competition } from '../types/portfolio';
import { EditableText } from './EditableText';
import { Trophy, Plus, Trash2, ExternalLink, Sparkles } from 'lucide-react';

interface CompetitionsSectionProps {
  competitions: Competition[];
  isEditingMode: boolean;
  onUpdateCompetitions: (competitions: Competition[]) => void;
}

export const CompetitionsSection: React.FC<CompetitionsSectionProps> = ({
  competitions,
  isEditingMode,
  onUpdateCompetitions
}) => {
  const handleAddCompetition = () => {
    const newComp: Competition = {
      id: `comp-${Date.now()}`,
      name: "International / National Olympiad",
      year: "2025",
      placement: "Gold Medal / 1st Place",
      description: "Detailed description of the competition scale, specific logic, algorithmic heuristics, or experimental rigor that earned top standing among peers.",
      link: ""
    };
    onUpdateCompetitions([...competitions, newComp]);
  };

  const handleUpdateCompetition = (id: string, fields: Partial<Competition>) => {
    onUpdateCompetitions(competitions.map(c => c.id === id ? { ...c, ...fields } : c));
  };

  const handleRemoveCompetition = (id: string) => {
    onUpdateCompetitions(competitions.filter(c => c.id !== id));
  };

  return (
    <section id="competitions" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center space-x-2 text-rose-800 mb-2">
              <Trophy className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-widest">Competitive Standings</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
              Competitions & Results
            </h2>
          </div>

          <div className="mt-4 md:mt-0">
            {isEditingMode ? (
              <button
                onClick={handleAddCompetition}
                className="inline-flex items-center px-3 py-1.5 text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 rounded-lg border border-rose-200 transition-colors"
              >
                <Plus className="w-4 h-4 mr-1" /> Add Competition Entry
              </button>
            ) : (
              <p className="text-xs text-slate-400 font-mono">
                Verified Global & Domestic Achievements
              </p>
            )}
          </div>
        </div>

        {/* Competitions Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {competitions.map((comp, index) => {
            // Apply distinct gold, silver, bronze top-borders for top 3
            const borderColors = [
              "border-t-amber-400",
              "border-t-slate-300",
              "border-t-amber-700",
              "border-t-rose-800"
            ];
            const topBorder = borderColors[index % borderColors.length];

            return (
              <div
                key={comp.id}
                className={`relative flex flex-col justify-between bg-slate-50/70 rounded-2xl p-6 border-t-4 border-x border-b border-slate-200/80 shadow-xs hover:shadow-md transition-all ${topBorder}`}
              >
                <div>
                  
                  {/* Top Bar: Placement + Year */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-md bg-white border border-slate-200 shadow-2xs">
                      <Sparkles className="w-3 h-3 text-amber-500" />
                      <span className="text-xs font-bold text-slate-900">
                        <EditableText
                          value={comp.placement}
                          onSave={(val) => handleUpdateCompetition(comp.id, { placement: val })}
                          isEditingMode={isEditingMode}
                        />
                      </span>
                    </div>

                    <span className="text-xs font-semibold text-slate-500 bg-slate-200/60 px-2 py-0.5 rounded">
                      <EditableText
                        value={comp.year}
                        onSave={(val) => handleUpdateCompetition(comp.id, { year: val })}
                        isEditingMode={isEditingMode}
                      />
                    </span>
                  </div>

                  {/* Competition Name */}
                  <h3 className="text-lg font-serif font-bold text-slate-900 mb-2">
                    <EditableText
                      value={comp.name}
                      onSave={(val) => handleUpdateCompetition(comp.id, { name: val })}
                      isEditingMode={isEditingMode}
                    />
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <EditableText
                      value={comp.description}
                      onSave={(val) => handleUpdateCompetition(comp.id, { description: val })}
                      isEditingMode={isEditingMode}
                      multiline
                    />
                  </p>

                </div>

                {/* Footer Controls / Supporting Link */}
                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  
                  {isEditingMode ? (
                    <div className="w-full space-y-2">
                      <div className="flex items-center space-x-1">
                        <span className="text-[10px] uppercase font-bold text-slate-400">URL:</span>
                        <input
                          type="text"
                          value={comp.link || ""}
                          onChange={(e) => handleUpdateCompetition(comp.id, { link: e.target.value })}
                          placeholder="Optional achievement link..."
                          className="w-full text-xs bg-white border border-slate-300 rounded px-1.5 py-0.5"
                        />
                      </div>
                      
                      <button
                        onClick={() => handleRemoveCompetition(comp.id)}
                        className="w-full inline-flex justify-center items-center px-2 py-1 text-xs font-medium text-red-600 hover:bg-red-50 rounded"
                      >
                        <Trash2 className="w-3 h-3 mr-1" /> Remove Entry
                      </button>
                    </div>
                  ) : (
                    <>
                      {comp.link ? (
                        <a
                          href={comp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-xs font-semibold text-rose-800 hover:text-rose-950 hover:underline"
                        >
                          <span>View Official Results</span>
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      ) : (
                        <span className="text-[11px] text-slate-400 italic">
                          Official Certificate Available
                        </span>
                      )}
                    </>
                  )}

                </div>

              </div>
            );
          })}
        </div>

        {competitions.length === 0 && (
          <div className="text-center py-12 bg-slate-50 rounded-xl border border-slate-200">
            <p className="text-slate-500 text-sm">No competition records currently added.</p>
            {isEditingMode && (
              <button
                onClick={handleAddCompetition}
                className="mt-3 inline-flex items-center px-3 py-1.5 text-xs font-medium text-rose-700 bg-rose-50 rounded border border-rose-200"
              >
                <Plus className="w-3.5 h-3.5 mr-1" /> Add Entry
              </button>
            )}
          </div>
        )}

      </div>
    </section>
  );
};
