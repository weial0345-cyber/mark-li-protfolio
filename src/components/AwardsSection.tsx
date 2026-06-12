import React, { useState } from 'react';
import { Award } from '../types/portfolio';
import { EditableText } from './EditableText';
import { Award as AwardIcon, Plus, Trash2, DollarSign, Bookmark, ShieldCheck, Sparkles } from 'lucide-react';

interface AwardsSectionProps {
  awards: Award[];
  isEditingMode: boolean;
  onUpdateAwards: (awards: Award[]) => void;
}

export const AwardsSection: React.FC<AwardsSectionProps> = ({
  awards,
  isEditingMode,
  onUpdateAwards
}) => {
  const [filter, setFilter] = useState<'All' | Award['category']>('All');

  const handleAddAward = () => {
    const newAward: Award = {
      id: `award-${Date.now()}`,
      title: "Prestigious Scholarship / National Award",
      category: "Scholarship",
      date: "Fall 2025",
      description: "Granted to high-achieving applicants exhibiting academic excellence, service, and leadership integrity.",
      amount: "$10,000"
    };
    onUpdateAwards([...awards, newAward]);
  };

  const handleUpdateAward = (id: string, fields: Partial<Award>) => {
    onUpdateAwards(awards.map(a => a.id === id ? { ...a, ...fields } : a));
  };

  const handleRemoveAward = (id: string) => {
    onUpdateAwards(awards.filter(a => a.id !== id));
  };

  const filteredAwards = filter === 'All' 
    ? awards 
    : awards.filter(a => a.category === filter);

  // Category Icon Resolver
  const getCategoryIcon = (category: Award['category']) => {
    switch (category) {
      case 'Scholarship':
        return <DollarSign className="w-3.5 h-3.5 text-emerald-600" />;
      case 'Academic':
        return <AwardIcon className="w-3.5 h-3.5 text-rose-800" />;
      case 'Certificate':
        return <Bookmark className="w-3.5 h-3.5 text-blue-600" />;
      case 'Badge':
        return <ShieldCheck className="w-3.5 h-3.5 text-purple-600" />;
    }
  };

  return (
    <section id="awards" className="py-16 sm:py-24 bg-slate-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-rose-50 text-rose-800 mb-4 border border-rose-100">
            <AwardIcon className="w-6 h-6" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Scholarships & Awards
          </h2>
          <div className="w-16 h-1 bg-rose-800 mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-base text-slate-600">
            Formal recognitions, merit-based tuition disbursements, accredited mastery certificates, and digital badges representing premier scholastic standings.
          </p>
        </div>

        {/* Filter Controls & Add Trigger */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200/80">
            {(['All', 'Scholarship', 'Academic', 'Certificate', 'Badge'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  filter === cat 
                    ? 'bg-white text-slate-900 shadow-xs' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {isEditingMode && (
            <button
              onClick={handleAddAward}
              className="inline-flex items-center px-3 py-1.5 text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 rounded-lg border border-rose-200 transition-colors"
            >
              <Plus className="w-4 h-4 mr-1" /> Add Custom Award
            </button>
          )}

        </div>

        {/* Awards Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAwards.map((award) => (
            <div
              key={award.id}
              className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                
                {/* Top Badge & Date */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="inline-flex items-center space-x-1.5 px-2 py-0.5 rounded bg-slate-50 border border-slate-100">
                    {getCategoryIcon(award.category)}
                    
                    {isEditingMode ? (
                      <select
                        value={award.category}
                        onChange={(e) => handleUpdateAward(award.id, { category: e.target.value as Award['category'] })}
                        className="bg-transparent text-[11px] font-bold text-slate-700 focus:outline-none"
                      >
                        <option value="Scholarship">Scholarship</option>
                        <option value="Academic">Academic</option>
                        <option value="Certificate">Certificate</option>
                        <option value="Badge">Badge</option>
                      </select>
                    ) : (
                      <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                        {award.category}
                      </span>
                    )}

                  </div>

                  <span className="text-xs font-medium text-slate-400">
                    <EditableText
                      value={award.date}
                      onSave={(val) => handleUpdateAward(award.id, { date: val })}
                      isEditingMode={isEditingMode}
                    />
                  </span>
                </div>

                {/* Award Title */}
                <h3 className="text-base font-serif font-bold text-slate-900 mb-1.5">
                  <EditableText
                    value={award.title}
                    onSave={(val) => handleUpdateAward(award.id, { title: val })}
                    isEditingMode={isEditingMode}
                  />
                </h3>

                {/* Amount / Perk Tag */}
                {award.amount && (
                  <div className="inline-flex items-center space-x-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 mb-2">
                    <Sparkles className="w-3 h-3 text-emerald-600" />
                    <span>
                      <EditableText
                        value={award.amount}
                        onSave={(val) => handleUpdateAward(award.id, { amount: val })}
                        isEditingMode={isEditingMode}
                      />
                    </span>
                  </div>
                )}

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed mt-1">
                  <EditableText
                    value={award.description}
                    onSave={(val) => handleUpdateAward(award.id, { description: val })}
                    isEditingMode={isEditingMode}
                    multiline
                  />
                </p>

              </div>

              {/* Edit mode delete action */}
              {isEditingMode && (
                <div className="mt-4 pt-3 border-t border-slate-100 flex justify-end">
                  <button
                    onClick={() => handleRemoveAward(award.id)}
                    className="text-xs text-red-600 hover:text-red-800 font-medium inline-flex items-center"
                  >
                    <Trash2 className="w-3 h-3 mr-1" /> Remove
                  </button>
                </div>
              )}

            </div>
          ))}
        </div>

        {filteredAwards.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl border border-slate-200">
            <p className="text-slate-500 text-sm">No awards found in this category.</p>
          </div>
        )}

      </div>
    </section>
  );
};
