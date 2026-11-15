import React, { useState, useMemo } from 'react';
import {
  ListTodo,
  AlertCircle,
  Clock,
  Calendar,
  CheckCircle2,
  Circle,
  FileText,
  Plus,
  X,
  ArrowRight,
  Bot,
  Sparkles,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { TASKS_DATABASE } from '../../data/tasks';
import { TaskItem } from '../../types';
import { createLoc } from '../../data/languages';

export const NextStepsTab: React.FC = () => {
  const {
    t,
    getLoc,
    userProfile,
    filterByCitizen,
    setActiveTab,
    taskStatuses,
    updateTaskStatus,
    customTasks,
    addCustomTask,
    setPendingVoiceQuery,
  } = useApp();

  const [activeUrgencyFilter, setActiveUrgencyFilter] = useState<string>('ALL');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // New Custom Task inputs
  const [customTitle, setCustomTitle] = useState('');
  const [customWhy, setCustomWhy] = useState('');
  const [customDeadline, setCustomDeadline] = useState('');

  // Combine database tasks with citizen custom tasks
  const combinedTasks = useMemo(() => {
    const filteredDb = filterByCitizen(TASKS_DATABASE);
    return [...customTasks, ...filteredDb];
  }, [userProfile.role, userProfile.state, userProfile.district, customTasks]);

  // Sort tasks by urgency: 1. Overdue, 2. Due soon, 3. Upcoming, 4. Optional (Requirement 15)
  const sortedTasks = useMemo(() => {
    const urgencyWeight: Record<string, number> = {
      overdue: 1,
      due_soon: 2,
      upcoming: 3,
      optional: 4,
    };

    return [...combinedTasks].sort((a, b) => {
      const weightA = urgencyWeight[a.urgency] || 5;
      const weightB = urgencyWeight[b.urgency] || 5;
      return weightA - weightB;
    });
  }, [combinedTasks]);

  // Filter by urgency tab
  const displayTasks = useMemo(() => {
    if (activeUrgencyFilter === 'ALL') return sortedTasks;
    return sortedTasks.filter((t) => t.urgency === activeUrgencyFilter);
  }, [sortedTasks, activeUrgencyFilter]);

  const handleCreateCustomTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customTitle.trim()) return;

    addCustomTask({
      role: userProfile.role,
      states: 'ALL',
      title: createLoc(customTitle.trim(), customTitle.trim(), customTitle.trim()),
      whyItMatters: createLoc(customWhy.trim() || 'Personal citizen priority', customWhy.trim() || 'Personal priority', customWhy.trim() || 'Personal priority'),
      deadline: createLoc(customDeadline.trim() || 'Next 30 days', customDeadline.trim() || 'Next 30 days', customDeadline.trim() || 'Next 30 days'),
      urgency: 'due_soon',
      requiredDocuments: [],
      status: 'not_started',
    });

    setCustomTitle('');
    setCustomWhy('');
    setCustomDeadline('');
    setIsAddModalOpen(false);
  };

  const getUrgencyBadge = (urgency: TaskItem['urgency']) => {
    switch (urgency) {
      case 'overdue':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-rose-100 text-rose-800 border border-rose-200">
            <AlertCircle className="w-3 h-3 text-rose-600" />
            {t.urgencyOverdue}
          </span>
        );
      case 'due_soon':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-200">
            <Clock className="w-3 h-3 text-amber-600" />
            {t.urgencyDueSoon}
          </span>
        );
      case 'upcoming':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-800 border border-blue-200">
            <Calendar className="w-3 h-3 text-blue-600" />
            {t.urgencyUpcoming}
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200">
            {t.urgencyOptional}
          </span>
        );
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200 max-w-4xl mx-auto">
      {/* Header & Add Custom Task Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-xl bg-sky-100 flex items-center justify-center text-sky-700">
              <ListTodo className="w-4 h-4" />
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-[#091526] tracking-tight">
              {t.nextStepsTitle}
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
            {t.nextStepsSubtitle}
          </p>
        </div>

        <button
          onClick={() => setIsAddModalOpen(true)}
          className="self-start sm:self-auto px-4 py-2.5 bg-gradient-to-r from-[#0369a1] to-[#0d9488] hover:from-[#0284c7] hover:to-[#0f766e] text-white font-bold text-xs rounded-xl transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>{t.btnAddCustomTask}</span>
        </button>
      </div>

      {/* Urgency Filter Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {[
          { key: 'ALL', label: t.tabAll },
          { key: 'overdue', label: t.urgencyOverdue },
          { key: 'due_soon', label: t.urgencyDueSoon },
          { key: 'upcoming', label: t.urgencyUpcoming },
          { key: 'optional', label: t.urgencyOptional },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveUrgencyFilter(tab.key)}
            className={`text-xs px-3.5 py-1.5 rounded-full font-medium whitespace-nowrap transition-all cursor-pointer ${
              activeUrgencyFilter === tab.key
                ? 'bg-gradient-to-r from-[#0369a1] to-[#0d9488] text-white shadow-xs font-semibold'
                : 'bg-white/80 hover:bg-sky-50 text-slate-700 border border-slate-200/80'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tasks List */}
      <div className="space-y-3.5">
        {displayTasks.map((task: TaskItem) => {
          const currentStatus = taskStatuses[task.id] || task.status || 'not_started';
          const isDone = currentStatus === 'completed';

          return (
            <div
              key={task.id}
              className={`bg-white/80 hover:bg-white backdrop-blur-md rounded-3xl p-5 border shadow-2xs hover:shadow-md transition-all space-y-3 ${
                isDone ? 'border-emerald-200/70 bg-emerald-50/20 opacity-80' : 'border-white/80 hover:border-cyan-300'
              }`}
            >
              {/* Top Row: Status checkbox, title, urgency badge */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      updateTaskStatus(
                        task.id,
                        isDone ? 'not_started' : 'completed'
                      )
                    }
                    className="mt-0.5 text-slate-400 hover:text-sky-600 cursor-pointer transition-colors"
                  >
                    {isDone ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    ) : (
                      <Circle className="w-5 h-5" />
                    )}
                  </button>

                  <div>
                    <h3
                      className={`text-sm sm:text-base font-bold leading-snug ${
                        isDone ? 'line-through text-slate-400' : 'text-[#091526]'
                      }`}
                    >
                      {getLoc(task.title)}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {getLoc(task.whyItMatters)}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                  {getUrgencyBadge(task.urgency)}
                  {task.isCustom && (
                    <span className="text-[10px] text-sky-800 bg-sky-50 px-2 py-0.5 rounded-md font-semibold">
                      Custom
                    </span>
                  )}
                </div>
              </div>

              {/* Deadline & Required Documents */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500 pt-1">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-amber-600" />
                  <span className="font-semibold text-slate-700">Deadline:</span>
                  <span>{getLoc(task.deadline)}</span>
                </div>

                {task.requiredDocuments && task.requiredDocuments.length > 0 && (
                  <div className="flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-cyan-600" />
                    <span className="font-semibold text-slate-700">Documents:</span>
                    <span className="truncate max-w-xs">
                      {task.requiredDocuments.map((d) => getLoc(d)).join(', ')}
                    </span>
                  </div>
                )}
              </div>

              {/* Action Buttons Row */}
              <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                {/* Status Dropdown */}
                <select
                  value={currentStatus}
                  onChange={(e) =>
                    updateTaskStatus(task.id, e.target.value as any)
                  }
                  className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1 text-xs font-semibold text-slate-700 cursor-pointer"
                >
                  <option value="not_started">{t.statusNotStarted}</option>
                  <option value="in_progress">{t.statusInProgress}</option>
                  <option value="completed">{t.statusCompleted}</option>
                </select>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setPendingVoiceQuery(`I need help completing this task: ${getLoc(task.title)}. What are my next steps?`);
                      setActiveTab('ai-guide');
                    }}
                    className="py-1.5 px-3 bg-sky-50 hover:bg-sky-100 text-sky-800 font-semibold rounded-xl text-xs transition-colors flex items-center gap-1.5 cursor-pointer border border-sky-200"
                  >
                    <Bot className="w-3.5 h-3.5" />
                    <span>{t.btnAskNirvaha}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab('assist-fill')}
                    className="py-1.5 px-3 bg-gradient-to-r from-[#0369a1] to-[#0d9488] hover:from-[#0284c7] hover:to-[#0f766e] text-white font-bold rounded-xl text-xs transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>{t.tabAssistFill}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Add Custom Task Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-4 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-800">
                  {t.customTaskModalTitle}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Tailored to your {userProfile.role.toUpperCase()} citizen profile
                </p>
              </div>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateCustomTask} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  {t.taskTitleLabel}
                </label>
                <input
                  type="text"
                  required
                  value={customTitle}
                  onChange={(e) => setCustomTitle(e.target.value)}
                  placeholder="e.g. Visit Grama One for Aadhaar-ration linking"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-sky-600"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  {t.taskWhyLabel}
                </label>
                <textarea
                  required
                  rows={2}
                  value={customWhy}
                  onChange={(e) => setCustomWhy(e.target.value)}
                  placeholder="Why this action is critical for your entitlement..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-sky-600"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  {t.taskDeadlineLabel}
                </label>
                <input
                  type="text"
                  required
                  value={customDeadline}
                  onChange={(e) => setCustomDeadline(e.target.value)}
                  placeholder="e.g. By end of next week / 15 Dec"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-sky-600"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-3 py-2 text-slate-500 hover:text-slate-700 font-semibold"
                >
                  {t.btnCancel}
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-r from-[#0369a1] to-[#0d9488] hover:from-[#0284c7] hover:to-[#0f766e] text-white font-bold rounded-xl shadow-xs cursor-pointer"
                >
                  {t.btnSaveTask}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
