import React from 'react';
import { LeadershipRole } from '../types/portfolio';
import { EditableText } from './EditableText';
import { Users, Plus, Trash2, CheckCircle2, ChevronRight } from 'lucide-react';

interface LeadershipSectionProps {
  leadership: LeadershipRole[];
  isEditingMode: boolean;
  onUpdateLeadership: (roles: LeadershipRole[]) => void;
}

export const LeadershipSection: React.FC<LeadershipSectionProps> = ({
  leadership,
  isEditingMode,
  onUpdateLeadership
}) => {
  const handleAddRole = () => {
    const newRole: LeadershipRole = {
      id: `lead-${Date.now()}`,
      organization: "New School Club / Varsity Team",
      role: "President / Captain",
      period: "2024 - Present",
      responsibilities: [
        "Managed standard club operations, structured long-term objectives, and coordinated outreach logistics.",
        "Facilitated weekly cross-functional workshops and oversaw budgeting allocations."
      ],
      accomplishments: [
        "Expanded total active student membership by 40% over one academic semester.",
        "Secured first-place regional ranking and earned civic recognition awards."
      ]
    };
    onUpdateLeadership([...leadership, newRole]);
  };

  const handleUpdateRole = (id: string, fields: Partial<LeadershipRole>) => {
    onUpdateLeadership(leadership.map(r => r.id === id ? { ...r, ...fields } : r));
  };

  const handleRemoveRole = (id: string) => {
    onUpdateLeadership(leadership.filter(r => r.id !== id));
  };

  // --- Bullet Point List Item Helpers ---
  const handleAddResponsibility = (roleId: string) => {
    const role = leadership.find(r => r.id === roleId);
    if (role) {
      handleUpdateRole(roleId, {
        responsibilities: [...role.responsibilities, "New primary responsibility or core task..."]
      });
    }
  };

  const handleUpdateResponsibility = (roleId: string, index: number, val: string) => {
    const role = leadership.find(r => r.id === roleId);
    if (role) {
      const updated = [...role.responsibilities];
      updated[index] = val;
      handleUpdateRole(roleId, { responsibilities: updated });
    }
  };

  const handleRemoveResponsibility = (roleId: string, index: number) => {
    const role = leadership.find(r => r.id === roleId);
    if (role) {
      const updated = role.responsibilities.filter((_, i) => i !== index);
      handleUpdateRole(roleId, { responsibilities: updated });
    }
  };

  const handleAddAccomplishment = (roleId: string) => {
    const role = leadership.find(r => r.id === roleId);
    if (role) {
      handleUpdateRole(roleId, {
        accomplishments: [...role.accomplishments, "New highly quantifiable direct accomplishment..."]
      });
    }
  };

  const handleUpdateAccomplishment = (roleId: string, index: number, val: string) => {
    const role = leadership.find(r => r.id === roleId);
    if (role) {
      const updated = [...role.accomplishments];
      updated[index] = val;
      handleUpdateRole(roleId, { accomplishments: updated });
    }
  };

  const handleRemoveAccomplishment = (roleId: string, index: number) => {
    const role = leadership.find(r => r.id === roleId);
    if (role) {
      const updated = role.accomplishments.filter((_, i) => i !== index);
      handleUpdateRole(roleId, { accomplishments: updated });
    }
  };

  return (
    <section id="leadership" className="py-16 sm:py-24 bg-slate-50/60 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-rose-50 text-rose-800 mb-4 border border-rose-100">
            <Users className="w-6 h-6" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            School Clubs & Leadership
          </h2>
          <div className="w-16 h-1 bg-rose-800 mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-base text-slate-600">
            Demonstrating active initiative, organizational leadership, team participation, and sustained operational impact beyond the academic classroom.
          </p>

          {isEditingMode && (
            <div className="mt-6">
              <button
                onClick={handleAddRole}
                className="inline-flex items-center px-4 py-2 text-xs font-semibold text-white bg-rose-800 hover:bg-rose-900 rounded-lg shadow-sm transition-colors"
              >
                <Plus className="w-4 h-4 mr-1.5" /> Add New School Club Role
              </button>
            </div>
          )}
        </div>

        {/* Roles Feed */}
        <div className="space-y-12">
          {leadership.map((role) => (
            <div 
              key={role.id}
              className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200/80 shadow-xs relative"
            >
              
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-100 gap-4">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-rose-50 text-rose-800 border border-rose-100">
                      <EditableText
                        value={role.role}
                        onSave={(val) => handleUpdateRole(role.id, { role: val })}
                        isEditingMode={isEditingMode}
                      />
                    </span>
                    
                    <span className="text-xs font-medium text-slate-400">
                      •
                    </span>

                    <span className="text-xs font-medium text-slate-500">
                      <EditableText
                        value={role.period}
                        onSave={(val) => handleUpdateRole(role.id, { period: val })}
                        isEditingMode={isEditingMode}
                      />
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mt-2">
                    <EditableText
                      value={role.organization}
                      onSave={(val) => handleUpdateRole(role.id, { organization: val })}
                      isEditingMode={isEditingMode}
                    />
                  </h3>
                </div>

                {isEditingMode && (
                  <button
                    onClick={() => handleRemoveRole(role.id)}
                    className="self-start md:self-center inline-flex items-center px-2.5 py-1 text-xs font-medium text-red-600 hover:bg-red-50 rounded border border-red-200"
                  >
                    <Trash2 className="w-3 h-3 mr-1" /> Delete Entire Role
                  </button>
                )}
              </div>

              {/* Responsibilities vs Accomplishments Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
                
                {/* Core Responsibilities */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center">
                      <ChevronRight className="w-3.5 h-3.5 mr-1 text-slate-400" />
                      Core Responsibilities
                    </h4>

                    {isEditingMode && (
                      <button
                        onClick={() => handleAddResponsibility(role.id)}
                        className="text-[11px] text-rose-700 hover:text-rose-900 font-semibold"
                      >
                        + Add Bullet
                      </button>
                    )}
                  </div>

                  <ul className="space-y-2.5">
                    {role.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-600 relative group">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 mr-2.5 shrink-0" />
                        <div className="flex-1">
                          <EditableText
                            value={resp}
                            onSave={(val) => handleUpdateResponsibility(role.id, idx, val)}
                            isEditingMode={isEditingMode}
                            multiline
                          />
                        </div>

                        {isEditingMode && (
                          <button
                            onClick={() => handleRemoveResponsibility(role.id, idx)}
                            className="text-slate-400 hover:text-red-600 ml-1.5 shrink-0"
                            title="Remove bullet"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        )}
                      </li>
                    ))}
                  </ul>

                  {role.responsibilities.length === 0 && (
                    <p className="text-xs text-slate-400 italic">No specific responsibilities added.</p>
                  )}
                </div>

                {/* Key Accomplishments & Impact Statements */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-rose-800 flex items-center">
                      <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-rose-800" />
                      Key Accomplishments & Impact
                    </h4>

                    {isEditingMode && (
                      <button
                        onClick={() => handleAddAccomplishment(role.id)}
                        className="text-[11px] text-rose-700 hover:text-rose-900 font-semibold"
                      >
                        + Add Bullet
                      </button>
                    )}
                  </div>

                  <ul className="space-y-2.5">
                    {role.accomplishments.map((acc, idx) => (
                      <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-800 font-medium relative group">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-800 mt-2 mr-2.5 shrink-0" />
                        <div className="flex-1">
                          <EditableText
                            value={acc}
                            onSave={(val) => handleUpdateAccomplishment(role.id, idx, val)}
                            isEditingMode={isEditingMode}
                            multiline
                          />
                        </div>

                        {isEditingMode && (
                          <button
                            onClick={() => handleRemoveAccomplishment(role.id, idx)}
                            className="text-slate-400 hover:text-red-600 ml-1.5 shrink-0"
                            title="Remove bullet"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        )}
                      </li>
                    ))}
                  </ul>

                  {role.accomplishments.length === 0 && (
                    <p className="text-xs text-slate-400 italic">No specific accomplishments added.</p>
                  )}
                </div>

              </div>

            </div>
          ))}
        </div>

        {leadership.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl border border-slate-200">
            <p className="text-slate-500 text-sm">No school clubs or leadership roles listed.</p>
          </div>
        )}

      </div>
    </section>
  );
};
