import dayjs from "dayjs";

export function getFilteredTasks(tasks, filterOption) {
  if(tasks && typeof tasks === 'object') {
    tasks = Object.values(tasks);
  };
  if(!Array.isArray(tasks)) return [];
  
    if (filterOption === "All") return tasks;

    const [type, value] = filterOption.split("-");

    return tasks.filter((task) => {

        if (type === "priority") {
          return task.priority === value;
        }
    
        if (type === "label") {
          return task.labels.includes(value);
        }
    
        if (type === "date") {
          const now = dayjs();
          const deadline = dayjs(task.end);
    
          if (value === "Today") {
            return deadline.isSame(now, "day");
          }
          if (value === "ThisWeek") {
            return deadline.isSame(now, "week");
          }
          if (value === "Today") {
            return deadline.isBefore(now, "day");
          }
        }
        return true;
      });
}


