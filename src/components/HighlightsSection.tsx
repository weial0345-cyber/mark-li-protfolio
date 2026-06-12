import React from 'react';
import { 
  PersonalProject, 
  Language, 
  Skill, 
  CreativeWork, 
  Publication, 
  TestScore 
} from '../types/portfolio';
import { EditableText } from './EditableText';
import { 
  Sparkles, 
  Plus, 
  Trash2, 
  Code, 
  Languages, 
  Cpu, 
  Music, 
  FileText, 
  FileCheck, 
  Compass,
  ExternalLink 
} from 'lucide-react';

interface HighlightsSectionProps {
  projects: PersonalProject[];
  languages: Language[];
  skills: Skill[];
  creativeWork: CreativeWork[];
  publications: Publication[];
  testScores: TestScore[];
  careerGoals: string;
  isEditingMode: boolean;

  onUpdateProjects: (projects: PersonalProject[]) => void;
  onUpdateLanguages: (languages: Language[]) => void;
  onUpdateSkills: (skills: Skill[]) => void;
  onUpdateCreativeWork: (works: CreativeWork[]) => void;
  onUpdatePublications: (pubs: Publication[]) => void;
  onUpdateTestScores: (scores: TestScore[]) => void;
  onUpdateCareerGoals: (goals: string) => void;
}

export const HighlightsSection: React.FC<HighlightsSectionProps> = ({
  projects,
  languages,
  skills,
  creativeWork,
  publications,
  testScores,
  careerGoals,
  isEditingMode,
  onUpdateProjects,
  onUpdateLanguages,
  onUpdateSkills,
  onUpdateCreativeWork,
  onUpdatePublications,
  onUpdateTestScores,
  onUpdateCareerGoals
}) => {

  // --- Projects Helpers ---
  const handleAddProject = () => {
    const newProj: PersonalProject = {
      id: `proj-${Date.now()}`,
      title: "New High-Impact Personal Project",
      category: "Full-Stack Software / Hardware",
      description: "Detailed breakdown of the architectural framework, design patterns, frameworks utilized, and specific real-world outcomes.",
      link: "",
      tags: ["React", "TypeScript", "Python"]
    };
    onUpdateProjects([...projects, newProj]);
  };

  const handleUpdateProject = (id: string, fields: Partial<PersonalProject>) => {
    onUpdateProjects(projects.map(p => p.id === id ? { ...p, ...fields } : p));
  };

  const handleRemoveProject = (id: string) => {
    onUpdateProjects(projects.filter(p => p.id !== id));
  };

  // --- Languages Helpers ---
  const handleAddLanguage = () => {
    const newLang: Language = {
      id: `lang-${Date.now()}`,
      name: "New Language",
      proficiency: "Professional Working Proficiency"
    };
    onUpdateLanguages([...languages, newLang]);
  };

  const handleUpdateLanguage = (id: string, fields: Partial<Language>) => {
    onUpdateLanguages(languages.map(l => l.id === id ? { ...l, ...fields } : l));
  };

  const handleRemoveLanguage = (id: string) => {
    onUpdateLanguages(languages.filter(l => l.id !== id));
  };

  // --- Skills Helpers ---
  const handleAddSkill = () => {
    const newSkill: Skill = {
      id: `skill-${Date.now()}`,
      name: "New Technical Domain / Framework",
      category: "Core Technical"
    };
    onUpdateSkills([...skills, newSkill]);
  };

  const handleUpdateSkill = (id: string, fields: Partial<Skill>) => {
    onUpdateSkills(skills.map(s => s.id === id ? { ...s, ...fields } : s));
  };

  const handleRemoveSkill = (id: string) => {
    onUpdateSkills(skills.filter(s => s.id !== id));
  };

  // --- Creative Work Helpers ---
  const handleAddCreative = () => {
    const newCW: CreativeWork = {
      id: `cw-${Date.now()}`,
      title: "Original Artistic Output",
      type: "Portfolio Concept",
      description: "Summary of aesthetic direction, creative constraints, and media formats.",
      link: ""
    };
    onUpdateCreativeWork([...creativeWork, newCW]);
  };

  const handleUpdateCreative = (id: string, fields: Partial<CreativeWork>) => {
    onUpdateCreativeWork(creativeWork.map(c => c.id === id ? { ...c, ...fields } : c));
  };

  const handleRemoveCreative = (id: string) => {
    onUpdateCreativeWork(creativeWork.filter(c => c.id !== id));
  };

  // --- Publications Helpers ---
  const handleAddPublication = () => {
    const newPub: Publication = {
      id: `pub-${Date.now()}`,
      title: "Scholarly Article or Workshop Abstract",
      journal: "Prestigious Academic Journal / Symposium",
      date: "Fall 2025",
      link: ""
    };
    onUpdatePublications([...publications, newPub]);
  };

  const handleUpdatePublication = (id: string, fields: Partial<Publication>) => {
    onUpdatePublications(publications.map(p => p.id === id ? { ...p, ...fields } : p));
  };

  const handleRemovePublication = (id: string) => {
    onUpdatePublications(publications.filter(p => p.id !== id));
  };

  // --- Test Scores Helpers ---
  const handleAddTestScore = () => {
    const newTS: TestScore = {
      id: `ts-${Date.now()}`,
      testName: "Standardized Battery",
      score: "Top Percentile",
      date: "Spring 2025",
      details: "Detailed subscore breakdown"
    };
    onUpdateTestScores([...testScores, newTS]);
  };

  const handleUpdateTestScore = (id: string, fields: Partial<TestScore>) => {
    onUpdateTestScores(testScores.map(t => t.id === id ? { ...t, ...fields } : t));
  };

  const handleRemoveTestScore = (id: string) => {
    onUpdateTestScores(testScores.filter(t => t.id !== id));
  };

  return (
    <section id="highlights" className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-rose-50 text-rose-800 mb-4 border border-rose-100">
            <Sparkles className="w-6 h-6" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Additional Highlights
          </h2>
          <div className="w-16 h-1 bg-rose-800 mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-base text-slate-600">
            A comprehensive compilation of supplementary credentials, creative portfolios, technical domain proficiencies, and future intellectual ambitions.
          </p>
        </div>

        {/* 1. Career Goals & Aspirations */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 sm:p-8 text-white shadow-md mb-12 relative overflow-hidden">
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full mix-blend-overlay filter blur-xl pointer-events-none" />
          
          <div className="relative z-10">
            <div className="flex items-center space-x-2 text-rose-300 mb-2">
              <Compass className="w-5 h-5" />
              <h3 className="text-xs font-bold uppercase tracking-widest">
                Long-Term Career & Research Aspirations
              </h3>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-4xl font-serif">
              <EditableText
                value={careerGoals}
                onSave={onUpdateCareerGoals}
                isEditingMode={isEditingMode}
                multiline
              />
            </p>
          </div>
        </div>

        {/* 2. Standardized Test Scores */}
        <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/80 mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <FileCheck className="w-5 h-5 text-rose-800" />
              <h3 className="text-lg font-serif font-bold text-slate-900">
                Standardized Testing Mastery
              </h3>
            </div>
            {isEditingMode && (
              <button
                onClick={handleAddTestScore}
                className="inline-flex items-center px-2.5 py-1 text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 rounded border border-rose-200"
              >
                <Plus className="w-3 h-3 mr-1" /> Add Test Score
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testScores.map((ts) => (
              <div key={ts.id} className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs relative">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-sm font-bold text-slate-900 font-serif">
                    <EditableText
                      value={ts.testName}
                      onSave={(val) => handleUpdateTestScore(ts.id, { testName: val })}
                      isEditingMode={isEditingMode}
                    />
                  </span>
                  <span className="text-lg font-bold text-rose-800 font-mono">
                    <EditableText
                      value={ts.score}
                      onSave={(val) => handleUpdateTestScore(ts.id, { score: val })}
                      isEditingMode={isEditingMode}
                    />
                  </span>
                </div>

                <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                  <span>
                    Date:{' '}
                    <EditableText
                      value={ts.date}
                      onSave={(val) => handleUpdateTestScore(ts.id, { date: val })}
                      isEditingMode={isEditingMode}
                    />
                  </span>

                  {ts.details && (
                    <span className="font-medium text-slate-700">
                      <EditableText
                        value={ts.details}
                        onSave={(val) => handleUpdateTestScore(ts.id, { details: val })}
                        isEditingMode={isEditingMode}
                      />
                    </span>
                  )}
                </div>

                {isEditingMode && (
                  <button
                    onClick={() => handleRemoveTestScore(ts.id)}
                    className="absolute top-2 right-2 text-slate-300 hover:text-red-600 p-1"
                    title="Remove Test Score"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                )}
              </div>
            ))}
          </div>

          {testScores.length === 0 && (
            <p className="text-sm text-slate-400 italic text-center py-2">No standardized test scores explicitly added.</p>
          )}
        </div>

        {/* 3. Personal Projects & Software Portfolios */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Code className="w-5 h-5 text-rose-800" />
              <h3 className="text-lg font-serif font-bold text-slate-900">
                Personal Projects & Technical Portfolio
              </h3>
            </div>
            {isEditingMode && (
              <button
                onClick={handleAddProject}
                className="inline-flex items-center px-2.5 py-1 text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 rounded border border-rose-200"
              >
                <Plus className="w-3 h-3 mr-1" /> Add Project
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((proj) => (
              <div 
                key={proj.id}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-rose-800">
                      <EditableText
                        value={proj.category}
                        onSave={(val) => handleUpdateProject(proj.id, { category: val })}
                        isEditingMode={isEditingMode}
                      />
                    </span>

                    {proj.link && !isEditingMode && (
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-rose-800 transition-colors"
                        title="View Source / Application"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  <h4 className="text-base font-serif font-bold text-slate-900 mb-2">
                    <EditableText
                      value={proj.title}
                      onSave={(val) => handleUpdateProject(proj.id, { title: val })}
                      isEditingMode={isEditingMode}
                    />
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    <EditableText
                      value={proj.description}
                      onSave={(val) => handleUpdateProject(proj.id, { description: val })}
                      isEditingMode={isEditingMode}
                      multiline
                    />
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-mono">
                        {tag}
                      </span>
                    ))}

                    {isEditingMode && (
                      <span className="text-[10px] text-slate-400 italic self-center ml-1">
                        (Edit tags directly inside the source arrays)
                      </span>
                    )}
                  </div>

                </div>

                {isEditingMode && (
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <input
                      type="text"
                      value={proj.link || ""}
                      onChange={(e) => handleUpdateProject(proj.id, { link: e.target.value })}
                      placeholder="Project repo / external URL..."
                      className="w-2/3 text-xs bg-slate-50 border border-slate-300 rounded px-1.5 py-0.5"
                    />
                    <button
                      onClick={() => handleRemoveProject(proj.id)}
                      className="text-xs text-red-600 hover:text-red-800 font-medium"
                    >
                      Remove
                    </button>
                  </div>
                )}

              </div>
            ))}
          </div>

          {projects.length === 0 && (
            <p className="text-sm text-slate-400 italic text-center py-4">No personal projects listed.</p>
          )}
        </div>

        {/* 4. Technical Skills & Languages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Technical Skills */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <Cpu className="w-5 h-5 text-rose-800" />
                <h3 className="text-lg font-serif font-bold text-slate-900">
                  Technical Domains & Skills
                </h3>
              </div>
              {isEditingMode && (
                <button
                  onClick={handleAddSkill}
                  className="inline-flex items-center px-2.5 py-1 text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 rounded border border-rose-200"
                >
                  <Plus className="w-3 h-3 mr-1" /> Add Skill
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <div 
                  key={skill.id}
                  className="inline-flex items-center space-x-1.5 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-800"
                >
                  <span>
                    <EditableText
                      value={skill.name}
                      onSave={(val) => handleUpdateSkill(skill.id, { name: val })}
                      isEditingMode={isEditingMode}
                    />
                  </span>

                  {isEditingMode && (
                    <button
                      onClick={() => handleRemoveSkill(skill.id)}
                      className="text-slate-400 hover:text-red-600 ml-1"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  )}
                </div>
              ))}
            </div>

            {skills.length === 0 && (
              <p className="text-sm text-slate-400 italic py-2">No technical skills configured.</p>
            )}
          </div>

          {/* Languages Spoken */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <Languages className="w-5 h-5 text-rose-800" />
                <h3 className="text-lg font-serif font-bold text-slate-900">
                  Languages Spoken
                </h3>
              </div>
              {isEditingMode && (
                <button
                  onClick={handleAddLanguage}
                  className="inline-flex items-center px-2.5 py-1 text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 rounded border border-rose-200"
                >
                  <Plus className="w-3 h-3 mr-1" /> Add Language
                </button>
              )}
            </div>

            <div className="space-y-3">
              {languages.map((lang) => (
                <div key={lang.id} className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-sm font-bold text-slate-900">
                    <EditableText
                      value={lang.name}
                      onSave={(val) => handleUpdateLanguage(lang.id, { name: val })}
                      isEditingMode={isEditingMode}
                    />
                  </span>

                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-slate-500 italic">
                      <EditableText
                        value={lang.proficiency}
                        onSave={(val) => handleUpdateLanguage(lang.id, { proficiency: val })}
                        isEditingMode={isEditingMode}
                      />
                    </span>

                    {isEditingMode && (
                      <button
                        onClick={() => handleRemoveLanguage(lang.id)}
                        className="text-slate-400 hover:text-red-600"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {languages.length === 0 && (
              <p className="text-sm text-slate-400 italic py-2">No spoken languages listed.</p>
            )}
          </div>

        </div>

        {/* 5. Creative Work & Publications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Creative Work */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <Music className="w-5 h-5 text-rose-800" />
                  <h3 className="text-lg font-serif font-bold text-slate-900">
                    Creative Works & Portfolios
                  </h3>
                </div>
                {isEditingMode && (
                  <button
                    onClick={handleAddCreative}
                    className="inline-flex items-center px-2.5 py-1 text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 rounded border border-rose-200"
                  >
                    <Plus className="w-3 h-3 mr-1" /> Add Creative
                  </button>
                )}
              </div>

              <div className="space-y-4">
                {creativeWork.map((cw) => (
                  <div key={cw.id} className="p-4 rounded-xl bg-slate-50 border border-slate-100 relative">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-sm font-bold text-slate-900 pr-4">
                        <EditableText
                          value={cw.title}
                          onSave={(val) => handleUpdateCreative(cw.id, { title: val })}
                          isEditingMode={isEditingMode}
                        />
                      </h4>
                      <span className="text-[10px] font-bold text-slate-500 bg-slate-200/60 px-2 py-0.5 rounded shrink-0">
                        <EditableText
                          value={cw.type}
                          onSave={(val) => handleUpdateCreative(cw.id, { type: val })}
                          isEditingMode={isEditingMode}
                        />
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      <EditableText
                        value={cw.description}
                        onSave={(val) => handleUpdateCreative(cw.id, { description: val })}
                        isEditingMode={isEditingMode}
                        multiline
                      />
                    </p>

                    {cw.link && !isEditingMode && (
                      <a
                        href={cw.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[11px] text-rose-800 hover:underline mt-2"
                      >
                        <span>Listen / View Portfolio</span>
                        <ExternalLink className="w-2.5 h-2.5 ml-1" />
                      </a>
                    )}

                    {isEditingMode && (
                      <div className="mt-2 pt-2 border-t border-slate-200 flex items-center justify-between">
                        <input
                          type="text"
                          value={cw.link || ""}
                          onChange={(e) => handleUpdateCreative(cw.id, { link: e.target.value })}
                          placeholder="Media/portfolio link..."
                          className="w-3/4 text-xs bg-white border border-slate-300 rounded px-1.5 py-0.5"
                        />
                        <button
                          onClick={() => handleRemoveCreative(cw.id)}
                          className="text-xs text-red-600 hover:text-red-800 font-medium"
                        >
                          Remove
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {creativeWork.length === 0 && (
              <p className="text-sm text-slate-400 italic py-4 text-center">No creative works listed.</p>
            )}
          </div>

          {/* Publications */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-rose-800" />
                  <h3 className="text-lg font-serif font-bold text-slate-900">
                    Scholarly Publications
                  </h3>
                </div>
                {isEditingMode && (
                  <button
                    onClick={handleAddPublication}
                    className="inline-flex items-center px-2.5 py-1 text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 rounded border border-rose-200"
                  >
                    <Plus className="w-3 h-3 mr-1" /> Add Publication
                  </button>
                )}
              </div>

              <div className="space-y-4">
                {publications.map((pub) => (
                  <div key={pub.id} className="p-4 rounded-xl bg-slate-50 border border-slate-100 relative">
                    <h4 className="text-sm font-bold text-slate-900 mb-1">
                      <EditableText
                        value={pub.title}
                        onSave={(val) => handleUpdatePublication(pub.id, { title: val })}
                        isEditingMode={isEditingMode}
                      />
                    </h4>

                    <div className="flex flex-wrap items-center justify-between gap-1 text-xs text-slate-500">
                      <span className="italic">
                        <EditableText
                          value={pub.journal}
                          onSave={(val) => handleUpdatePublication(pub.id, { journal: val })}
                          isEditingMode={isEditingMode}
                        />
                      </span>
                      <span className="font-semibold text-slate-700">
                        <EditableText
                          value={pub.date}
                          onSave={(val) => handleUpdatePublication(pub.id, { date: val })}
                          isEditingMode={isEditingMode}
                        />
                      </span>
                    </div>

                    {pub.link && !isEditingMode && (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[11px] text-rose-800 hover:underline mt-2"
                      >
                        <span>Access Full Article</span>
                        <ExternalLink className="w-2.5 h-2.5 ml-1" />
                      </a>
                    )}

                    {isEditingMode && (
                      <div className="mt-2 pt-2 border-t border-slate-200 flex items-center justify-between">
                        <input
                          type="text"
                          value={pub.link || ""}
                          onChange={(e) => handleUpdatePublication(pub.id, { link: e.target.value })}
                          placeholder="DOI or Paper URL..."
                          className="w-3/4 text-xs bg-white border border-slate-300 rounded px-1.5 py-0.5"
                        />
                        <button
                          onClick={() => handleRemovePublication(pub.id)}
                          className="text-xs text-red-600 hover:text-red-800 font-medium"
                        >
                          Remove
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {publications.length === 0 && (
              <p className="text-sm text-slate-400 italic py-4 text-center">No publications listed.</p>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
