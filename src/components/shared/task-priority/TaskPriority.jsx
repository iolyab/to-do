import { retrievedPriorityOptions } from "../../../services/priority-service";
import { MuiDropdown } from "../dropdown/Dropdown";
import classes from "./taskPriority.module.scss";

const TaskPriority = ({
  priorityChanged,
  isUpdatingPriority,
  disabled,
  priority,
}) => {
  const handleSelect = (selectedName) => {
    priorityChanged(selectedName);
  };

  return (
    <div>
      <MuiDropdown
        size="small"
        value={priority}
        onSelect={handleSelect}
        options={retrievedPriorityOptions}
        fullWidth={false}
        placeholder="Priority"
        className={classes.dropDownItem}
        classes={classes}
        renderItem={(option) => <span>{option}</span>}
      ></MuiDropdown>
    </div>
  );
};

export { TaskPriority };
