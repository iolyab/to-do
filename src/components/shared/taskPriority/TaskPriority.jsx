import { useState } from "react";
import { Button } from "../button/Button";

export const TaskPriority = ({ classes, onPriorityChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [priority, setPriority] = useState("Priority");
  const priorities = ["High", "Medium", "Low"];

  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (selectedPriority) => {
    setPriority(selectedPriority);
    let newClassName = "";

    if (selectedPriority === "High") {
      newClassName = classes.highPriority;
    } else if (selectedPriority === "Medium") {
      newClassName = classes.mediumPriority;
    } else {
      newClassName = classes.lowPriority;
    }

    onPriorityChange(newClassName);
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
          {priorities.map((p) => (
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
