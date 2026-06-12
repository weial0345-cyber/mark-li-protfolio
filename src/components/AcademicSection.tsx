import React from 'react';
import { 
  Course, 
  AcademicDistinction, 
  Recognition, 
  Certification, 
  ResearchProject 
} from '../types/portfolio';
import { EditableText } from './EditableText';
import { 
  BookOpen, 
  Award, 
  FileCheck, 
  Microscope, 
  Plus, 
  Trash2, 
  ExternalLink,
  GraduationCap
} from 'lucide-react';

interface AcademicSectionProps {
  gpaDetails: string;
  courses: Course[];
  distinctions: AcademicDistinction[];
  recognitions: Recognition[];
  certifications: Certification[];
  researchProjects: ResearchProject[];
  isEditingMode: boolean;
  onUpdateGpaDetails: (val: string) => void;
  onUpdateCourses: (courses: Course[]) => void;
  onUpdateDistinctions: (distinctions: AcademicDistinction[]) => void;
  onUpdateRecognitions: (recognitions: Recognition[]) => void;
  onUpdateCertifications: (certifications: Certification[]) => void;
  onUpdateResearchProjects: (projects: ResearchProject[]) => void;
}

export const AcademicSection: React.FC<AcademicSectionProps> = ({
  gpaDetails,
  courses,
  distinctions,
  recognitions,
  certifications,
  researchProjects,
  isEditingMode,
  onUpdateGpaDetails,
  onUpdateCourses,
  onUpdateDistinctions,
  onUpdateRecognitions,
  onUpdateCertifications,
  onUpdateResearchProjects
}) => {

  // --- Course Controls ---
  const handleAddCourse = () => {
    const newCourse: Course = {
      id: `course-${Date.now()}`,
      name: "New Advanced Course",
      category: "AP",
      grade: "A"
    };
    onUpdateCourses([...courses, newCourse]);
  };

  const handleUpdateCourse = (id: string, fields: Partial<Course>) => {
    onUpdateCourses(courses.map(c => c.id === id ? { ...c, ...fields } : c));
  };

  const handleRemoveCourse = (id: string) => {
    onUpdateCourses(courses.filter(c => c.id !== id));
  };

  // --- Distinction Controls ---
  const handleAddDistinction = () => {
    const newDistinction: AcademicDistinction = {
      id: `dist-${Date.now()}`,
      title: "National Merit / Olympiad Honor",
      year: "2025",
      description: "Brief summary of criteria and placement among regional or national peers."
    };
    onUpdateDistinctions([...distinctions, newDistinction]);
  };

  const handleUpdateDistinction = (id: string, fields: Partial<AcademicDistinction>) => {
    onUpdateDistinctions(distinctions.map(d => d.id === id ? { ...d, ...fields } : d));
  };

  const handleRemoveDistinction = (id: string) => {
    onUpdateDistinctions(distinctions.filter(d => d.id !== id));
  };

  // --- Recognition Controls ---
  const handleAddRecognition = () => {
    const newRec: Recognition = {
      id: `rec-${Date.now()}`,
      title: "Principal's List / High Honors",
      date: "Spring 2025"
    };
    onUpdateRecognitions([...recognitions, newRec]);
  };

  const handleUpdateRecognition = (id: string, fields: Partial<Recognition>) => {
    onUpdateRecognitions(recognitions.map(r => r.id === id ? { ...r, ...fields } : r));
  };

  const handleRemoveRecognition = (id: string) => {
    onUpdateRecognitions(recognitions.filter(r => r.id !== id));
  };

  // --- Certification Controls ---
  const handleAddCertification = () => {
    const newCert: Certification = {
      id: `cert-${Date.now()}`,
      name: "Professional Cloud / AI Certification",
      issuer: "Recognized Tech Entity",
      year: "2025",
      link: ""
    };
    onUpdateCertifications([...certifications, newCert]);
  };

  const handleUpdateCertification = (id: string, fields: Partial<Certification>) => {
    onUpdateCertifications(certifications.map(c => c.id === id ? { ...c, ...fields } : c));
  };

  const handleRemoveCertification = (id: string) => {
    onUpdateCertifications(certifications.filter(c => c.id !== id));
  };

  // --- Research Project Controls ---
  const handleAddResearch = () => {
    const newRes: ResearchProject = {
      id: `res-${Date.now()}`,
      title: "Independent Research on Novel Algorithms",
      role: "Principal Investigator",
      advisor: "Mentored by Dr. Smith",
      description: "Comprehensive summary of methodology, experimental validation, and real-world utility."
    };
    onUpdateResearchProjects([...researchProjects, newRes]);
  };

  const handleUpdateResearch = (id: string, fields: Partial<ResearchProject>) => {
    onUpdateResearchProjects(researchProjects.map(r => r.id === id ? { ...r, ...fields } : r));
  };

  const handleRemoveResearch = (id: string) => {
    onUpdateResearchProjects(researchProjects.filter(r => r.id !== id));
  };

  return (
    <section id="academics" className="py-16 sm:py-24 bg-slate-50/50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-rose-50 text-rose-800 mb-4 border border-rose-100">
            <GraduationCap className="w-6 h-6" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Academic Achievements
          </h2>
          <div className="w-16 h-1 bg-rose-800 mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-base text-slate-600">
            A comprehensive overview of rigorous curriculum tracking, standardized mastery, advanced research exploration, and collegiate preparation.
          </p>
        </div>

        {/* 1. GPA Depth & Curriculum Standing */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs mb-12">
          <h3 className="text-lg font-serif font-bold text-slate-900 mb-3 flex items-center">
            <span className="w-2 h-2 rounded-full bg-rose-800 mr-2.5" />
            Curriculum Rigor & GPA Standing
          </h3>
          <p className="text-slate-600 text-base leading-relaxed">
            <EditableText 
              value={gpaDetails}
              onSave={onUpdateGpaDetails}
              isEditingMode={isEditingMode}
              multiline
            />
          </p>
        </div>

        {/* Two-Column Setup for Intermediate Data */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Left Column: Honors / AP / Advanced Courses */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5 text-rose-800" />
                  <h3 className="text-lg font-serif font-bold text-slate-900">
                    Honors/AP/ Courses
                  </h3>
                </div>
                {isEditingMode && (
                  <button
                    onClick={handleAddCourse}
                    className="inline-flex items-center px-2.5 py-1 text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 rounded border border-rose-200"
                  >
                    <Plus className="w-3 h-3 mr-1" /> Add Course
                  </button>
                )}
              </div>

              <div className="space-y-3">
                {courses.map((course) => (
                  <div 
                    key={course.id}
                    className="relative group flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors"
                  >
                    <div className="flex-1 pr-3">
                      <div className="flex items-center space-x-2">
                        <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-slate-200 text-slate-700">
                          {isEditingMode ? (
                            <select
                              value={course.category}
                              onChange={(e) => handleUpdateCourse(course.id, { category: e.target.value as Course['category'] })}
                              className="bg-transparent text-slate-700 font-bold focus:outline-none"
                            >
                              <option value="AP">AP</option>
                              <option value="Honors">Honors</option>
                              <option value="Advanced">Advanced</option>
                            </select>
                          ) : (
                            course.category
                          )}
                        </span>
                        
                        <span className="text-sm font-semibold text-slate-900">
                          <EditableText
                            value={course.name}
                            onSave={(val) => handleUpdateCourse(course.id, { name: val })}
                            isEditingMode={isEditingMode}
                          />
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      {course.grade && (
                        <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-white text-rose-900 border border-slate-200 shadow-2xs">
                          Score/Grade:{' '}
                          <EditableText
                            value={course.grade}
                            onSave={(val) => handleUpdateCourse(course.id, { grade: val })}
                            isEditingMode={isEditingMode}
                          />
                        </span>
                      )}

                      {isEditingMode && (
                        <button
                          onClick={() => handleRemoveCourse(course.id)}
                          className="text-slate-400 hover:text-red-600 p-1"
                          title="Remove Course"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Empty check */}
            {courses.length === 0 && (
              <p className="text-sm text-slate-400 italic py-4 text-center">No advanced courses listed.</p>
            )}
          </div>

          {/* Right Column: Academic Distinctions */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-rose-800" />
                  <h3 className="text-lg font-serif font-bold text-slate-900">
                    Academic Distinctions
                  </h3>
                </div>
                {isEditingMode && (
                  <button
                    onClick={handleAddDistinction}
                    className="inline-flex items-center px-2.5 py-1 text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 rounded border border-rose-200"
                  >
                    <Plus className="w-3 h-3 mr-1" /> Add Distinction
                  </button>
                )}
              </div>

              <div className="space-y-4">
                {distinctions.map((dist) => (
                  <div 
                    key={dist.id}
                    className="relative group p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors"
                  >
                    <div className="flex justify-between items-start">
                      <h4 className="text-sm font-bold text-slate-900 pr-4">
                        <EditableText
                          value={dist.title}
                          onSave={(val) => handleUpdateDistinction(dist.id, { title: val })}
                          isEditingMode={isEditingMode}
                        />
                      </h4>
                      <span className="text-xs font-medium text-rose-800 bg-rose-50 px-2 py-0.5 rounded border border-rose-100 shrink-0">
                        <EditableText
                          value={dist.year}
                          onSave={(val) => handleUpdateDistinction(dist.id, { year: val })}
                          isEditingMode={isEditingMode}
                        />
                      </span>
                    </div>

                    <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                      <EditableText
                        value={dist.description}
                        onSave={(val) => handleUpdateDistinction(dist.id, { description: val })}
                        isEditingMode={isEditingMode}
                        multiline
                      />
                    </p>

                    {isEditingMode && (
                      <button
                        onClick={() => handleRemoveDistinction(dist.id)}
                        className="absolute bottom-2 right-2 text-slate-400 hover:text-red-600 p-1"
                        title="Remove Distinction"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {distinctions.length === 0 && (
              <p className="text-sm text-slate-400 italic py-4 text-center">No academic distinctions listed.</p>
            )}
          </div>

        </div>

        {/* 3. Research & Academic Projects */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Microscope className="w-5 h-5 text-rose-800" />
              <h3 className="text-lg font-serif font-bold text-slate-900">
                Research & Academic Projects
              </h3>
            </div>
            {isEditingMode && (
              <button
                onClick={handleAddResearch}
                className="inline-flex items-center px-2.5 py-1 text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 rounded border border-rose-200"
              >
                <Plus className="w-3 h-3 mr-1" /> Add Research Project
              </button>
            )}
          </div>

          <div className="space-y-6">
            {researchProjects.map((project) => (
              <div 
                key={project.id}
                className="relative p-5 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200/60">
                  <div>
                    <h4 className="text-base font-bold text-slate-900 font-serif">
                      <EditableText
                        value={project.title}
                        onSave={(val) => handleUpdateResearch(project.id, { title: val })}
                        isEditingMode={isEditingMode}
                      />
                    </h4>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <span className="text-xs font-bold text-rose-800">
                        Role:{' '}
                        <EditableText
                          value={project.role}
                          onSave={(val) => handleUpdateResearch(project.id, { role: val })}
                          isEditingMode={isEditingMode}
                        />
                      </span>
                      {project.advisor && (
                        <>
                          <span className="text-slate-300">•</span>
                          <span className="text-xs text-slate-500 italic">
                            <EditableText
                              value={project.advisor}
                              onSave={(val) => handleUpdateResearch(project.id, { advisor: val })}
                              isEditingMode={isEditingMode}
                            />
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  <EditableText
                    value={project.description}
                    onSave={(val) => handleUpdateResearch(project.id, { description: val })}
                    isEditingMode={isEditingMode}
                    multiline
                  />
                </p>

                {isEditingMode && (
                  <div className="mt-3 flex justify-end">
                    <button
                      onClick={() => handleRemoveResearch(project.id)}
                      className="inline-flex items-center text-xs font-medium text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="w-3 h-3 mr-1" /> Remove Project
                    </button>
                  </div>
                )}
              </div>
            ))}

            {researchProjects.length === 0 && (
              <p className="text-sm text-slate-400 italic py-4 text-center">No research projects listed.</p>
            )}
          </div>
        </div>

        {/* 4. Certifications & Merit Recognitions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Principal's List / Recognitions */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <FileCheck className="w-5 h-5 text-rose-800" />
                <h3 className="text-lg font-serif font-bold text-slate-900">
                  Principal’s List & Honor Recognitions
                </h3>
              </div>
              {isEditingMode && (
                <button
                  onClick={handleAddRecognition}
                  className="inline-flex items-center px-2.5 py-1 text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 rounded border border-rose-200"
                >
                  <Plus className="w-3 h-3 mr-1" /> Add Entry
                </button>
              )}
            </div>

            <div className="space-y-3">
              {recognitions.map((rec) => (
                <div 
                  key={rec.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-100"
                >
                  <span className="text-sm font-medium text-slate-800">
                    <EditableText
                      value={rec.title}
                      onSave={(val) => handleUpdateRecognition(rec.id, { title: val })}
                      isEditingMode={isEditingMode}
                    />
                  </span>
                  
                  <div className="flex items-center space-x-3">
                    <span className="text-xs text-slate-400 font-mono">
                      <EditableText
                        value={rec.date}
                        onSave={(val) => handleUpdateRecognition(rec.id, { date: val })}
                        isEditingMode={isEditingMode}
                      />
                    </span>

                    {isEditingMode && (
                      <button
                        onClick={() => handleRemoveRecognition(rec.id)}
                        className="text-slate-400 hover:text-red-600"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {recognitions.length === 0 && (
              <p className="text-sm text-slate-400 italic py-4 text-center">No recognitions listed.</p>
            )}
          </div>

          {/* Certifications */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-rose-800" />
                <h3 className="text-lg font-serif font-bold text-slate-900">
                  Professional Certifications
                </h3>
              </div>
              {isEditingMode && (
                <button
                  onClick={handleAddCertification}
                  className="inline-flex items-center px-2.5 py-1 text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 rounded border border-rose-200"
                >
                  <Plus className="w-3 h-3 mr-1" /> Add Cert
                </button>
              )}
            </div>

            <div className="space-y-3">
              {certifications.map((cert) => (
                <div 
                  key={cert.id}
                  className="p-3.5 rounded-lg bg-slate-50 border border-slate-100 relative"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        <EditableText
                          value={cert.name}
                          onSave={(val) => handleUpdateCertification(cert.id, { name: val })}
                          isEditingMode={isEditingMode}
                        />
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Issuer:{' '}
                        <EditableText
                          value={cert.issuer}
                          onSave={(val) => handleUpdateCertification(cert.id, { issuer: val })}
                          isEditingMode={isEditingMode}
                        />
                      </p>
                    </div>

                    <span className="text-xs font-semibold text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200">
                      <EditableText
                        value={cert.year}
                        onSave={(val) => handleUpdateCertification(cert.id, { year: val })}
                        isEditingMode={isEditingMode}
                      />
                    </span>
                  </div>

                  {cert.link && !isEditingMode && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[11px] text-rose-800 hover:underline mt-2"
                    >
                      <span>Verify Certificate</span>
                      <ExternalLink className="w-2.5 h-2.5 ml-1" />
                    </a>
                  )}

                  {isEditingMode && (
                    <div className="mt-2 pt-2 border-t border-slate-200 flex items-center justify-between">
                      <div className="flex-1 mr-2">
                        <input
                          type="text"
                          value={cert.link || ""}
                          onChange={(e) => handleUpdateCertification(cert.id, { link: e.target.value })}
                          placeholder="Optional credential URL..."
                          className="w-full text-xs bg-white border border-slate-300 rounded px-1.5 py-0.5"
                        />
                      </div>
                      <button
                        onClick={() => handleRemoveCertification(cert.id)}
                        className="text-xs text-red-600 hover:text-red-800 font-medium"
                      >
                        Remove
                      </button>
                    </div>
                  )}

                </div>
              ))}
            </div>

            {certifications.length === 0 && (
              <p className="text-sm text-slate-400 italic py-4 text-center">No certifications listed.</p>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
