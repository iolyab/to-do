import { Button } from "../button/Button";
import { retrievedPriorityOptions } from "../../../services/priority-service";
import { Dropdown } from "../dropdown/Dropdown";
import classes from "./taskPriority.module.scss";

const TaskPriority = ({ priorityChanged, currentPriority }) => {
  const handleSelect = (selectedName) => {
    priorityChanged(selectedName);
  };

  return (
    <div>
      <Dropdown
        trigger={
          <Button
            label={currentPriority || "Priority"}
            size="small"
            className={classes.customDropDownButton}
          />
        }
      >
        <ul className={classes.dropDownMenu}>
          {retrievedPriorityOptions.map((p) => (
            <li
              key={p}
              onClick={() => handleSelect(p)}
              className={classes.dropDownItem}
              classes={classes}
            >
              {p}
            </li>
          ))}
        </ul>
      </Dropdown>
    </div>
  );
};

export { TaskPriority };
