import { useState, useEffect } from "react";
import { Button } from "../button/Button";

const TaskPriority = ({ classes, priorityChanged, currentPriority }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [priority, setPriority] = useState(currentPriority || "Priority");

  useEffect(() => {
    if (currentPriority) {
      setPriority(currentPriority);
    }
  }, [currentPriority]);

  const priorityOptions = {
    High: { name: "High", className: classes.highPriority },
    Medium: { name: "Medium", className: classes.mediumPriority },
    Low: { name: "Low", className: classes.lowPriority },
  };

  localStorage.setItem("priorityOptions", JSON.stringify(priorityOptions));

  const retrievedPriorityOptions = JSON.parse(
    localStorage.getItem("priorityOptions")
  );

  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (selectedName) => {
    setPriority(selectedName);

    priorityChanged(priorityOptions[selectedName]);
    setIsOpen(false);
  };

  return (
    <div>
      <Button
        onClick={handleIsOpen}
        label={priority}
        size="small"
        className={classes.customDropDownButton}
      />
      {isOpen && (
        <ul className={classes.dropDownMenu}>
          {Object.keys(retrievedPriorityOptions).map((p) => (
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
