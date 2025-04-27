
const priorityOrder = {
    High: 3,
    Medium: 2,
    Low: 1,
    null: 0,
  };

  export const sortMapping = {
    "priority-asc": { field: "priority", order: "asc" },
    "priority-desc": { field: "priority", order: "desc" },
    "deadline-asc": { field: "deadline", order: "asc" },
    "deadline-desc": { field: "deadline", order: "desc" },
  };

  export function getSortParams(value) {
    if(value === "deafult") {
      return {field: "none", order: "none"};
    }
    return sortMapping[value] || {
      field: "none",
      order: "none",
    };

  }

  export function sortByPriority(sortField, sortOrder) {
    return(a, b) => {
      const aPriority = priorityOrder[a[sortField]] || 0;
      const bPriority = priorityOrder[b[sortField]] || 0;

      if (sortOrder === "asc") {
        return aPriority - bPriority;
      } else if (sortOrder === "desc") {
        return bPriority - aPriority;
      }
      return 0;
    }
  }

  export function sortByDeadline(sortField, sortOrder) {
    return(a, b) => {
      const aDeadline = new Date(a[sortField]) || 0;
      const bDeadline = new Date(b[sortField]) || 0;

      if(sortOrder === "asc") {
        return aDeadline - bDeadline;
      }else if (sortOrder === "desc") {
        return bDeadline - aDeadline;
    }
    return 0;
    }
  }

  export function getSortedTasks(tasks, sortField, sortOrder) {
    if (sortOrder === "none" || sortField === "none") return tasks;


    if(sortField === "priority") {
      return tasks.toSorted(sortByPriority(sortField, sortOrder));
    } else if(sortField === "deadline") {
      return tasks.toSorted(sortByDeadline(sortField, sortOrder));
    }

    return tasks;
  };