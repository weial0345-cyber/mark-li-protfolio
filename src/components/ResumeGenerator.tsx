import React from 'react';
import { PortfolioData } from '../types/portfolio';
import { FileText, Download, Printer, X, Check } from 'lucide-react';

interface ResumeGeneratorProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
}

export const ResumeGenerator: React.FC<ResumeGeneratorProps> = ({
  isOpen,
  onClose,
  data
}) => {
  const [downloaded, setDownloaded] = React.useState(false);

  if (!isOpen) return null;

  /**
   * Generates a complete, standalone, production-grade printable HTML document
   * embedding elegant professional Google Fonts, print-specific CSS page layouts,
   * and fully live mirroring of all real-time edited academic portfolio data.
   */
  const generateStandaloneHTML = () => {
    const totalVolunteerHours = data.volunteer.reduce((acc, curr) => acc + (Number(curr.hours) || 0), 0);

    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${data.name} - Academic & Professional Resume</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,600;0,700;1,400&display=swap" rel="stylesheet">
  <style>
    :root {
      --primary: #881337;
      --text-main: #0f172a;
      --text-muted: #475569;
      --border: #e2e8f0;
    }
    
    body {
      font-family: 'Inter', sans-serif;
      color: var(--text-main);
      line-height: 1.5;
      margin: 0;
      padding: 0;
      background-color: #ffffff;
      font-size: 11pt;
    }

    /* Print Specific Page Configurations */
    @media print {
      @page {
        size: letter;
        margin: 0.75in;
      }
      body {
        font-size: 10pt;
      }
      .no-print {
        display: none !important;
      }
      .page-break {
        page-break-before: always;
      }
      .avoid-break {
        page-break-inside: avoid;
      }
    }

    /* Resume Document Container */
    .resume-container {
      max-w: 8.5in;
      margin: 0 auto;
      padding: 2rem 1rem;
    }

    /* Header */
    header {
      border-bottom: 2px solid var(--primary);
      padding-bottom: 1.2rem;
      margin-bottom: 1.5rem;
    }
    
    h1 {
      font-family: 'Playfair Display', serif;
      font-size: 28pt;
      color: var(--primary);
      margin: 0 0 0.2rem 0;
      line-height: 1.1;
    }

    .subtitle {
      font-size: 13pt;
      font-weight: 600;
      color: var(--text-muted);
      margin: 0 0 0.6rem 0;
    }

    .contact-row {
      font-size: 9.5pt;
      color: var(--text-muted);
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }
    
    .contact-item {
      display: inline-flex;
      align-items: center;
    }
    .contact-item::after {
      content: "•";
      margin-left: 12px;
      color: #cbd5e1;
    }
    .contact-item:last-child::after {
      content: "";
      margin-left: 0;
    }

    /* Core Sections */
    section {
      margin-bottom: 1.5rem;
    }

    .section-title {
      font-family: 'Playfair Display', serif;
      font-size: 14pt;
      color: var(--primary);
      border-bottom: 1px solid var(--border);
      padding-bottom: 0.2rem;
      margin-top: 0;
      margin-bottom: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    /* Academic Summary Grid */
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      background-color: #f8fafc;
      padding: 0.8rem;
      border-radius: 6px;
      margin-bottom: 1rem;
      border: 1px solid var(--border);
    }
    .stat-box {
      text-align: center;
    }
    .stat-label {
      font-size: 8pt;
      text-transform: uppercase;
      color: var(--text-muted);
      font-weight: 600;
    }
    .stat-val {
      font-size: 11pt;
      font-weight: 700;
      color: var(--text-main);
    }

    /* Generic Lists */
    .entry {
      margin-bottom: 0.8rem;
    }
    .entry-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 0.2rem;
    }
    .entry-title {
      font-weight: 700;
      font-size: 11pt;
    }
    .entry-meta {
      font-size: 9.5pt;
      color: var(--text-muted);
      font-weight: 500;
    }
    .entry-role {
      font-size: 10pt;
      font-weight: 600;
      color: var(--primary);
      margin-bottom: 0.2rem;
    }
    .entry-desc {
      font-size: 9.5pt;
      color: var(--text-muted);
      margin: 0;
    }
    
    ul.bullet-list {
      margin: 0.3rem 0 0 0;
      padding-left: 1.2rem;
      font-size: 9.5pt;
      color: var(--text-muted);
    }
    ul.bullet-list li {
      margin-bottom: 0.2rem;
    }

    /* Coursework Grid */
    .courses-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.5rem;
      font-size: 9.5pt;
    }
    .course-item {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px dashed #e2e8f0;
      padding-bottom: 2px;
    }

    /* Simple Pills */
    .skills-container {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }
    .skill-pill {
      background: #f1f5f9;
      border: 1px solid #cbd5e1;
      padding: 2px 8px;
      font-size: 8.5pt;
      border-radius: 4px;
      font-weight: 500;
    }

    /* Interactive Print Buttons embedded in Standalone file */
    .print-banner {
      background-color: #f8fafc;
      border-bottom: 1px solid var(--border);
      padding: 1rem;
      text-align: center;
      margin-bottom: 1rem;
    }
    .print-btn {
      background-color: var(--primary);
      color: white;
      border: none;
      padding: 8px 16px;
      font-size: 10pt;
      font-weight: 600;
      border-radius: 4px;
      cursor: pointer;
    }
    .print-btn:hover {
      opacity: 0.9;
    }
  </style>
</head>
<body>

  <!-- Web View Action Trigger (Hidden in print) -->
  <div class="print-banner no-print">
    <p style="margin: 0 0 8px 0; font-size: 9.5pt; color: #475569;">
      You are viewing the auto-generated standalone HTML resume. Click below to print or save as a PDF directly.
    </p>
    <button class="print-btn" onclick="window.print()">🖨️ Print / Save as PDF</button>
    <p style="margin: 6px 0 0 0; font-size: 8pt; color: #94a3b8;">
      For best PDF output, choose "Save as PDF", set Margins to "Default", and uncheck "Headers and footers".
    </p>
  </div>

  <div class="resume-container">
    
    <!-- HEADER -->
    <header>
      <h1>${data.name}</h1>
      <div class="subtitle">${data.major}</div>
      <div class="contact-row">
        <span class="contact-item">${data.contact.email}</span>
        <span class="contact-item">${data.contact.phone}</span>
        ${data.contact.wechat ? `<span class="contact-item">WeChat: ${data.contact.wechat}</span>` : ''}
        ${data.contact.github ? `<span class="contact-item">${data.contact.github.replace('https://', '')}</span>` : ''}
      </div>
    </header>

    <!-- ACADEMIC SUMMARY -->
    <section class="avoid-break">
      <h2 class="section-title">Academic Profile</h2>
      <div class="stats-grid">
        <div class="stat-box">
          <div class="stat-label">Institution</div>
          <div class="stat-val">${data.school}</div>
        </div>
        <div class="stat-box">
          <div class="stat-label">Academic Year</div>
          <div class="stat-val">${data.gradeLevel.split('•')[0]}</div>
        </div>
        <div class="stat-box">
          <div class="stat-label">Academic Standing</div>
          <div class="stat-val" style="color: var(--primary);">${data.gpa}</div>
        </div>
      </div>
      <p style="font-size: 9.5pt; margin-top: 0;">${data.gpaDetails}</p>
    </section>

    <!-- ADVANCED COURSEWORK -->
    ${data.courses.length > 0 ? `
    <section class="avoid-break">
      <h2 class="section-title">Advanced Coursework</h2>
      <div class="courses-grid">
        ${data.courses.map(c => `
          <div class="course-item">
            <span><strong>[${c.category}]</strong> ${c.name}</span>
            ${c.grade ? `<span>${c.grade}</span>` : ''}
          </div>
        `).join('')}
      </div>
    </section>
    ` : ''}

    <!-- STANDARDIZED TEST SCORES -->
    ${data.testScores.length > 0 ? `
    <section class="avoid-break">
      <h2 class="section-title">Standardized Testing</h2>
      <div style="display: flex; gap: 2rem;">
        ${data.testScores.map(t => `
          <div>
            <strong>${t.testName}:</strong> <span style="color: var(--primary); font-weight: 700;">${t.score}</span>
            <span style="font-size: 8.5pt; color: var(--text-muted);">(${t.date})</span>
            ${t.details ? `<div style="font-size: 8.5pt; color: var(--text-muted);">${t.details}</div>` : ''}
          </div>
        `).join('')}
      </div>
    </section>
    ` : ''}

    <!-- RESEARCH & ACADEMIC PROJECTS -->
    ${data.researchProjects.length > 0 ? `
    <section>
      <h2 class="section-title">Research & Academic Projects</h2>
      ${data.researchProjects.map(r => `
        <div class="entry avoid-break">
          <div class="entry-header">
            <span class="entry-title">${r.title}</span>
          </div>
          <div class="entry-role">${r.role} ${r.advisor ? `• <span style="font-size:9pt; color:#64748b;">${r.advisor}</span>` : ''}</div>
          <p class="entry-desc">${r.description}</p>
        </div>
      `).join('')}
    </section>
    ` : ''}

    <!-- COMPETITIONS & RESULTS -->
    ${data.competitions.length > 0 ? `
    <section>
      <h2 class="section-title">Competitions & Results</h2>
      ${data.competitions.map(c => `
        <div class="entry avoid-break">
          <div class="entry-header">
            <span class="entry-title">${c.name}</span>
            <span class="entry-meta">${c.year}</span>
          </div>
          <div class="entry-role" style="color: #b45309;">${c.placement}</div>
          <p class="entry-desc">${c.description}</p>
        </div>
      `).join('')}
    </section>
    ` : ''}

    <!-- LEADERSHIP & EXTRACURRICULARS -->
    ${data.leadership.length > 0 ? `
    <section>
      <h2 class="section-title">Leadership & Extracurriculars</h2>
      ${data.leadership.map(l => `
        <div class="entry avoid-break" style="margin-bottom: 1.2rem;">
          <div class="entry-header">
            <span class="entry-title">${l.organization}</span>
            <span class="entry-meta">${l.period}</span>
          </div>
          <div class="entry-role">${l.role}</div>
          
          ${l.responsibilities.length > 0 ? `
            <ul class="bullet-list">
              ${l.responsibilities.map(r => `<li>${r}</li>`).join('')}
            </ul>
          ` : ''}

          ${l.accomplishments.length > 0 ? `
            <div style="font-size: 8.5pt; font-weight: 700; color: var(--primary); margin-top: 4px; padding-left: 1.2rem;">Key Accomplishments:</div>
            <ul class="bullet-list" style="margin-top: 0;">
              ${l.accomplishments.map(a => `<li>${a}</li>`).join('')}
            </ul>
          ` : ''}
        </div>
      `).join('')}
    </section>
    ` : ''}

    <!-- VOLUNTEER & COMMUNITY SERVICE -->
    ${data.volunteer.length > 0 ? `
    <section class="avoid-break">
      <h2 class="section-title">Community Service (Total: ${totalVolunteerHours} Hours)</h2>
      ${data.volunteer.map(v => `
        <div class="entry" style="margin-bottom: 0.8rem;">
          <div class="entry-header">
            <span class="entry-title">${v.organization}</span>
            <span class="entry-meta"><strong>${v.hours} Hours</strong></span>
          </div>
          <div class="entry-role" style="font-size: 9pt;">${v.role}</div>
          <p class="entry-desc" style="font-size: 9pt;">${v.impact}</p>
        </div>
      `).join('')}
    </section>
    ` : ''}

    <!-- AWARDS & SCHOLARSHIPS -->
    ${data.awards.length > 0 ? `
    <section class="avoid-break">
      <h2 class="section-title">Scholarships & Awards</h2>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.5rem;">
        ${data.awards.map(a => `
          <div style="font-size: 9.5pt;">
            <strong>${a.title}</strong>
            ${a.amount ? `<span style="color: #047857; font-weight: 600;">(${a.amount})</span>` : ''}
            <div style="font-size: 8.5pt; color: var(--text-muted);">${a.category} • ${a.date}</div>
          </div>
        `).join('')}
      </div>
    </section>
    ` : ''}

    <!-- TECHNICAL SKILLS & LANGUAGES -->
    <section class="avoid-break">
      <h2 class="section-title">Technical Domains & Languages</h2>
      
      ${data.skills.length > 0 ? `
      <div style="margin-bottom: 0.6rem;">
        <strong style="font-size: 9.5pt; display: block; margin-bottom: 3px;">Technical Skills:</strong>
        <div class="skills-container">
          ${data.skills.map(s => `<span class="skill-pill">${s.name}</span>`).join('')}
        </div>
      </div>
      ` : ''}

      ${data.languages.length > 0 ? `
      <div>
        <strong style="font-size: 9.5pt; display: block; margin-bottom: 3px;">Languages Spoken:</strong>
        <div style="font-size: 9.5pt; color: var(--text-muted);">
          ${data.languages.map(l => `${l.name} (${l.proficiency})`).join(' • ')}
        </div>
      </div>
      ` : ''}
    </section>

  </div>
</body>
</html>`;

    return htmlContent;
  };

  /**
   * Action 1: Triggers direct download of the fully compliant standalone file
   */
  const handleDownloadHTML = () => {
    const htmlString = generateStandaloneHTML();
    const blob = new Blob([htmlString], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    
    const sanitizedName = data.name.trim().replace(/\s+/g, '_') || "Student";
    const filename = `${sanitizedName}_Resume.html`;

    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  /**
   * Action 2: Opens the pure printable output in a fresh interactive browser tab,
   * automatically calling window.print() so the user can directly pick "Save as PDF".
   */
  const handleDirectBrowserPrint = () => {
    const htmlString = generateStandaloneHTML();
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.open();
      printWindow.document.write(htmlString);
      printWindow.document.close();
      
      // Let content render briefly, then trigger the print modal natively
      printWindow.setTimeout(() => {
        printWindow.print();
      }, 500);
    } else {
      alert("Please allow pop-ups for this site to open the live print preview directly.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Overlay Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="flex min-h-full items-center justify-center p-4 text-center">
        <div className="relative w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 sm:p-8 text-left align-middle shadow-2xl transition-all border border-slate-100">
          
          {/* Header */}
          <div className="flex items-start justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-800 flex items-center justify-center border border-rose-100">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-bold text-slate-900">
                  Dynamic Resume Export System
                </h3>
                <p className="text-xs text-slate-500">
                  Instantly generated from your active live application records
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content Description */}
          <div className="mt-5 space-y-4">
            
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                How this works:
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                This utility translates all your customized portfolio text, advanced coursework, validated volunteer impact hours, and research projects into an optimized, self-contained printable document. 
              </p>
            </div>

            {/* Direct Export Choices */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              {/* Option 1: Standalone Download */}
              <div className="bg-white rounded-xl p-4 border-2 border-slate-200 hover:border-rose-800 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2 text-slate-900 font-bold text-sm mb-1">
                    <Download className="w-4 h-4 text-rose-800" />
                    <span>1. Export HTML Resume</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Downloads <code className="text-rose-800 font-mono bg-rose-50 px-1 rounded">StudentName_Resume.html</code> directly to your machine. Can be easily hosted or sent as an interactive offline document.
                  </p>
                </div>

                <button
                  onClick={handleDownloadHTML}
                  className="mt-4 w-full inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors"
                >
                  {downloaded ? (
                    <>
                      <Check className="w-4 h-4 mr-1 text-emerald-400" /> Downloaded!
                    </>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5 mr-1.5" /> Download .HTML File
                    </>
                  )}
                </button>
              </div>

              {/* Option 2: Live Browser Print / PDF */}
              <div className="bg-white rounded-xl p-4 border-2 border-slate-200 hover:border-rose-800 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2 text-slate-900 font-bold text-sm mb-1">
                    <Printer className="w-4 h-4 text-rose-800" />
                    <span>2. Print / Save as PDF</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Instantly opens the pristine resume in a fresh view and triggers the browser print prompt. Select <strong className="text-slate-800">"Save as PDF"</strong> for absolute perfection.
                  </p>
                </div>

                <button
                  onClick={handleDirectBrowserPrint}
                  className="mt-4 w-full inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs font-semibold text-white bg-rose-800 hover:bg-rose-900 transition-colors"
                >
                  <Printer className="w-3.5 h-3.5 mr-1.5" /> Open Print View
                </button>
              </div>

            </div>

            {/* Clear Documentation for Replacement with Hosted Links */}
            <div className="bg-rose-50/50 rounded-xl p-3.5 border border-rose-100 text-left">
              <span className="block text-[10px] font-bold uppercase text-rose-900 mb-1">
                📌 Developer Notes for PDF Hosting Integration:
              </span>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                To replace this dynamically generated solution with a pre-hosted PDF asset in the future, simply update the <code className="bg-white px-1 py-0.5 rounded border text-rose-800 font-mono">onTriggerResume</code> callback inside <code className="bg-white px-1 py-0.5 rounded border text-rose-800 font-mono">src/App.tsx</code> to forward visitors directly to your hosted asset URL:
              </p>
              <pre className="mt-1.5 bg-slate-900 text-slate-200 p-2 rounded text-[10px] font-mono overflow-x-auto">
{`// Example replacement logic:
window.open("https://example.com/hosted-resume.pdf", "_blank");`}
              </pre>
            </div>

          </div>

          {/* Footer Close */}
          <div className="mt-6 pt-3 border-t border-slate-100 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium transition-colors"
            >
              Close Window
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
