import { useState } from "react";
import { Button } from "../button/Button";
import { retrievedPriorityOptions } from "../../../services/priority-service";
import classes from "./taskPriority.module.scss";

const TaskPriority = ({ priorityChanged, currentPriority }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (selectedName) => {
    priorityChanged(selectedName);
    setIsOpen(false);
  };

  return (
    <div>
      <Button
        onClick={handleIsOpen}
        label={currentPriority || "Priority"}
        size="small"
        className={classes.customDropDownButton}
      />
      {isOpen && (
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
      )}
    </div>
  );
};

export { TaskPriority };
