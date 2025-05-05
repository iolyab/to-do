import { TaskItemContainer } from "../task-item/TaskItemContainer";
import classes from "./taskList.module.scss";
import { TasksSort } from "../../task-sort/TasksSort";
import { TaskFilter } from "../../task-filter/TaskFilter";

const TaskList = ({
  isSimplified,
  sortParams,
  setSortParams,
  sortFields,
  handleFilterChange,
  visibleTasks,
}) => {
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
