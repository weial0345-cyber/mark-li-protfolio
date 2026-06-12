import React, { useState, useEffect } from 'react';
import { PortfolioData, ThemeSettings } from './types/portfolio';
import { INITIAL_PORTFOLIO_DATA } from './data/initialPortfolio';

// Components
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AcademicSection } from './components/AcademicSection';
import { CompetitionsSection } from './components/CompetitionsSection';
import { LeadershipSection } from './components/LeadershipSection';
import { VolunteerSection } from './components/VolunteerSection';
import { AwardsSection } from './components/AwardsSection';
import { HighlightsSection } from './components/HighlightsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

// Modals
import { ThemeCustomizer } from './components/ThemeCustomizer';
import { ResumeGenerator } from './components/ResumeGenerator';

// A fresh storage key ensures Mark Li's data loads cleanly without being overwritten by any previously cached state.
const STORAGE_KEY = 'student_portfolio_data_mark_v1';

export default function App() {
  // Initialize from LocalStorage or fall back to highly detailed pristine initial state
  const [portfolioData, setPortfolioData] = useState<PortfolioData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error("Failed to parse stored portfolio data:", e);
    }
    return INITIAL_PORTFOLIO_DATA;
  });

  // Edit Mode System Toggle
  const [isEditingMode, setIsEditingMode] = useState(false);

  // Modals state
  const [isThemeCustomizerOpen, setIsThemeCustomizerOpen] = useState(false);
  const [isResumeGeneratorOpen, setIsResumeGeneratorOpen] = useState(false);

  // Auto-save changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(portfolioData));
    } catch (e) {
      console.error("Failed to save portfolio data to storage:", e);
    }
  }, [portfolioData]);

  // Partial update coordinator
  const updatePortfolio = (fields: Partial<PortfolioData>) => {
    setPortfolioData(prev => ({ ...prev, ...fields }));
  };

  // Factory reset to original loaded settings
  const handleFactoryReset = () => {
    if (window.confirm("Are you absolutely sure you want to reset all your edits, projects, and customizations back to the default original portfolio state? This action cannot be undone.")) {
      setPortfolioData(INITIAL_PORTFOLIO_DATA);
      setIsThemeCustomizerOpen(false);
      setIsEditingMode(false);
      // Let user know
      setTimeout(() => alert("Portfolio successfully restored to pristine initial state."), 100);
    }
  };

  // Reset Theme specifically
  const handleResetTheme = () => {
    updatePortfolio({
      theme: { ...INITIAL_PORTFOLIO_DATA.theme }
    });
  };

  // Dynamic style injection for theme global consistency
  const appStyle = {
    '--bg-primary': portfolioData.theme.bgColor,
    '--bg-secondary': portfolioData.theme.bgSecondary,
    '--text-primary': portfolioData.theme.textColor,
    '--text-secondary': portfolioData.theme.textSecondary,
    '--accent-primary': portfolioData.theme.accentColor,
    '--accent-light': portfolioData.theme.accentLight,
    fontFamily: portfolioData.theme.fontFamily,
  } as React.CSSProperties;

  return (
    <div 
      className="min-h-screen transition-colors duration-300 antialiased selection:bg-rose-800 selection:text-white"
      style={appStyle}
    >
      
      {/* 1. Sticky Navigation Bar */}
      <Navbar
        name={portfolioData.name}
        navLinks={portfolioData.navLinks}
        isEditingMode={isEditingMode}
        setIsEditingMode={setIsEditingMode}
        onUpdateNavLinks={(links) => updatePortfolio({ navLinks: links })}
        onOpenThemeCustomizer={() => setIsThemeCustomizerOpen(true)}
        onTriggerResume={() => setIsResumeGeneratorOpen(true)}
      />

      {/* Editing Mode Banner Alert */}
      {isEditingMode && (
        <div className="bg-rose-900 text-white py-2 px-4 text-center text-xs font-medium sticky top-16 z-40 shadow-inner animate-pulse flex items-center justify-center space-x-2">
          <span>✏️ <strong>Edit Mode Active:</strong> Click directly on any text, header, title, or score to inline-edit. Use the "+ Add" buttons to inject entries. All changes instantly auto-save.</span>
          <button 
            onClick={() => setIsEditingMode(false)}
            className="ml-3 underline font-bold hover:text-rose-200"
          >
            Exit Edit Mode
          </button>
        </div>
      )}

      {/* Main Content Sections */}
      <main className="space-y-0">
        
        {/* Hero Section */}
        <HeroSection
          name={portfolioData.name}
          photoUrl={portfolioData.photoUrl}
          bio={portfolioData.bio}
          gradeLevel={portfolioData.gradeLevel}
          school={portfolioData.school}
          gpa={portfolioData.gpa}
          major={portfolioData.major}
          contact={portfolioData.contact}
          heroButtons={portfolioData.heroButtons}
          isEditingMode={isEditingMode}
          onUpdate={updatePortfolio}
          onTriggerResume={() => setIsResumeGeneratorOpen(true)}
        />

        {/* Academic Achievements */}
        <AcademicSection
          gpaDetails={portfolioData.gpaDetails}
          courses={portfolioData.courses}
          distinctions={portfolioData.distinctions}
          recognitions={portfolioData.recognitions}
          certifications={portfolioData.certifications}
          researchProjects={portfolioData.researchProjects}
          isEditingMode={isEditingMode}
          onUpdateGpaDetails={(val) => updatePortfolio({ gpaDetails: val })}
          onUpdateCourses={(courses) => updatePortfolio({ courses })}
          onUpdateDistinctions={(distinctions) => updatePortfolio({ distinctions })}
          onUpdateRecognitions={(recognitions) => updatePortfolio({ recognitions })}
          onUpdateCertifications={(certifications) => updatePortfolio({ certifications })}
          onUpdateResearchProjects={(researchProjects) => updatePortfolio({ researchProjects })}
        />

        {/* Competitions & Results */}
        <CompetitionsSection
          competitions={portfolioData.competitions}
          isEditingMode={isEditingMode}
          onUpdateCompetitions={(competitions) => updatePortfolio({ competitions })}
        />

        {/* Extracurriculars & Leadership */}
        <LeadershipSection
          leadership={portfolioData.leadership}
          isEditingMode={isEditingMode}
          onUpdateLeadership={(roles) => updatePortfolio({ leadership: roles })}
        />

        {/* Volunteer & Community Service */}
        <VolunteerSection
          volunteer={portfolioData.volunteer}
          isEditingMode={isEditingMode}
          onUpdateVolunteer={(entries) => updatePortfolio({ volunteer: entries })}
        />

        {/* Scholarships & Awards */}
        <AwardsSection
          awards={portfolioData.awards}
          isEditingMode={isEditingMode}
          onUpdateAwards={(awards) => updatePortfolio({ awards })}
        />

        {/* Additional Highlights */}
        <HighlightsSection
          projects={portfolioData.projects}
          languages={portfolioData.languages}
          skills={portfolioData.skills}
          creativeWork={portfolioData.creativeWork}
          publications={portfolioData.publications}
          testScores={portfolioData.testScores}
          careerGoals={portfolioData.careerGoals}
          isEditingMode={isEditingMode}

          onUpdateProjects={(projects) => updatePortfolio({ projects })}
          onUpdateLanguages={(languages) => updatePortfolio({ languages })}
          onUpdateSkills={(skills) => updatePortfolio({ skills })}
          onUpdateCreativeWork={(creativeWork) => updatePortfolio({ creativeWork })}
          onUpdatePublications={(publications) => updatePortfolio({ publications })}
          onUpdateTestScores={(testScores) => updatePortfolio({ testScores })}
          onUpdateCareerGoals={(careerGoals) => updatePortfolio({ careerGoals })}
        />

        {/* Contact Section */}
        <ContactSection
          contact={portfolioData.contact}
          isEditingMode={isEditingMode}
          onUpdateContact={(contact) => updatePortfolio({ contact: { ...portfolioData.contact, ...contact } })}
          onTriggerResume={() => setIsResumeGeneratorOpen(true)}
        />

      </main>

      {/* Bottom Capstone */}
      <Footer
        name={portfolioData.name}
        school={portfolioData.school}
        isEditingMode={isEditingMode}
      />

      {/* Modal 1: Theme & Colors Customizer */}
      <ThemeCustomizer
        isOpen={isThemeCustomizerOpen}
        onClose={() => setIsThemeCustomizerOpen(false)}
        currentTheme={portfolioData.theme}
        onUpdateTheme={(newTheme: ThemeSettings) => updatePortfolio({ theme: newTheme })}
        onResetTheme={handleResetTheme}
        onFactoryReset={handleFactoryReset}
      />

      {/* Modal 2: Dynamic Printable Resume Export System */}
      <ResumeGenerator
        isOpen={isResumeGeneratorOpen}
        onClose={() => setIsResumeGeneratorOpen(false)}
        data={portfolioData}
      />

    </div>
  );
}
