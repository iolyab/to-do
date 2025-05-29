import { Button } from "../button/Button";
import { retrievedPriorityOptions } from "../../../services/priority-service";
import { Dropdown } from "../dropdown/Dropdown";
import classes from "./taskPriority.module.scss";

const TaskPriority = ({ priorityChanged, isUpdatingPriority, disabled }) => {
  const handleSelect = (selectedName) => {
    priorityChanged(selectedName);
  };

  return (
    <div>
      <Dropdown
        trigger={
          <Button
            icon={"/assets/priority.png"}
            size="small"
            className={classes.customDropDownButton}
            disabled={disabled}
            pending={isUpdatingPriority}
          />
        }
        onSelect={handleSelect}
        renderItem={(option) => <span>{option}</span>}
        options={retrievedPriorityOptions}
        className={classes.dropDownItem}
        classes={classes}
      ></Dropdown>
    </div>
  );
};

export { TaskPriority };
