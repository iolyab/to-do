import { TaskList } from "./TaskList";
import { useState } from "react";
import { getSortedTasks } from "../../../../utils/sort";
import { getFilteredTasks } from "../../../../utils/filter";
import { useSelector } from "react-redux";

const TaskListContainer = ({ isSimplified }) => {
  const tasks = useSelector((state) => state.tasks.tasks);

  const [sortParams, setSortParams] = useState({
    field: "none",
    order: "none",
  });

  const sortFields = ["priority", "deadline"];

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
      <TaskList
        isSimplified={isSimplified}
        sortParams={sortParams}
        setSortParams={setSortParams}
        sortFields={sortFields}
        handleFilterChange={handleFilterChange}
        visibleTasks={visibleTasks}
      />
    </div>
  );
};

export { TaskListContainer };
