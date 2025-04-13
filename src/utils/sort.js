const priorityOrder = {
    High: 3,
    Medium: 2,
    Low: 1,
    null: 0,
  };

  export const getSortedTasks = (tasks, sortDirection) => {
    if (sortDirection === "none") return tasks;

    return [...tasks].sort((a, b) => {
      if (sortDirection === "low-high" || sortDirection === "high-low") {
        const aPriority = priorityOrder[a.priority] || 0;
        const bPriority = priorityOrder[b.priority] || 0;

        return sortDirection === "low-high"
          ? aPriority - bPriority
          : bPriority - aPriority;
      }
      if (sortDirection === "date-soon" || sortDirection === "date-late") {
        const aDeadline = a.deadline ? new Date(a.deadline) : null;
        const bDeadline = b.deadline ? new Date(b.deadline) : null;

        if (!aDeadline && bDeadline) return 0;
        if (!aDeadline) return 1;
        if (!bDeadline) return -1;

        return sortDirection === "date-soon"
          ? aDeadline - bDeadline
          : bDeadline - aDeadline;
      }
      return 0;
    });
  };