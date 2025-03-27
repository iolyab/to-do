import { useState } from "react";
import { Button } from "../button/Button";

const TaskLabels = ({ classes, labelsSet, currentLabel, labels }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [label, setLabel] = useState(currentLabel || "Labels");
  const [newLabel, setNewLabel] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (selectedLabel) => {
    setLabel(selectedLabel);
    labelsSet(selectedLabel);
    setIsOpen(false);
  };

  const handleCreateLabel = () => {
    if (newLabel.trim() && !labels.includes(newLabel)) {
      labelsSet(newLabel);
      setLabel(newLabel);
      setNewLabel("");
      setIsOpen(false);
      setIsAdding(false);
    }
  };

  const handleAddLabelClick = () => {
    setIsAdding(true);
  };

  return (
    <div>
      <Button
        onClick={handleIsOpen}
        label={label}
        size="small"
        className={classes.customDropDownButtonLabels}
      />
      {isOpen && (
        <ul className={classes.dropDownMenuLabels}>
          {labels.map((l) => (
            <li
              key={l}
              onClick={() => handleSelect(l)}
              className={classes.dropDownItem}
              classes={classes}
            >
              {l}
            </li>
          ))}
          <li>
            {!isAdding ? (
              <Button
                onClick={handleAddLabelClick}
                label="Add label"
                size="small"
                variant="addLabel"
                className={classes.customButton}
              />
            ) : (
              <div>
                <input
                  type="text"
                  value={newLabel}
                  onChange={(e) => setNewLabel(e.target.value)}
                  placeholder="Add label..."
                  className={classes.newLabelInput}
                />
                <Button
                  onClick={handleCreateLabel}
                  label="Save"
                  size="small"
                  variant="saveLabel"
                  className={classes.customButton}
                >
                  Add
                </Button>
              </div>
            )}
          </li>
        </ul>
      )}
    </div>
  );
};

export { TaskLabels };
