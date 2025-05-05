import { TaskItemContainer } from "../task-item/TaskItemContainer";
import classes from "./taskList.module.scss";
import { useState } from "react";
import { getSortedTasks } from "../../../../utils/sort";
import { TasksSort } from "../../task-sort/TasksSort";
import { TaskFilter } from "../../task-filter/TaskFilter";
import { getFilteredTasks } from "../../../../utils/filter";

const TaskList = ({ tasks, isSimplified }) => {
  const [sortParams, setSortParams] = useState({
    field: "none",
    order: "none",
  });

  const sortFields = ["priority", "deadline", "title"];

  const [filterOption, setFilterOption] = useState("All");

  const handleFilterChange = (value) => {
    setFilterOption(value);
  };

  const filteredTasks = getFilteredTasks(tasks, filterOption);

  const visibleTasks = getSortedTasks(
    filteredTasks,
    sortParams.field,
    sortParams.order
  );

  return (
    <div>
      <div className={classes.filterSortContainer}>
        <TaskFilter onFilterChange={handleFilterChange} />
        <TasksSort
          sortParams={sortParams}
          onSortChange={setSortParams}
          sortFields={sortFields}
        />
      </div>
      <ul className={classes.taskListContainer}>
        {visibleTasks.map((task) => (
          <TaskItemContainer
            key={task.id}
            task={task}
            isSimplified={isSimplified}
          />
        ))}
      </ul>
    </div>
  );
};

export { TaskList };
