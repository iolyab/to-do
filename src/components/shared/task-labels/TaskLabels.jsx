import { useState, useEffect } from "react";
import { Button } from "../button/Button";
import { addLabel } from "../../../services/labels-service";
import { getLabels } from "../../../services/labels-service";
import classes from "./taskLabels.module.scss";

const TaskLabels = ({ labelsSet, currentLabel, labels }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newLabel, setNewLabel] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [availableLabels, setAvailableLabels] = useState([]);

  useEffect(() => {
    const labels = getLabels();
    setAvailableLabels(labels);
  }, []);

  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (selectedLabel) => {
    labelsSet(selectedLabel);
    setIsOpen(false);
  };

  const handleCreateLabel = () => {
    if (newLabel.trim() !== "") {
      addLabel(newLabel);
      labelsSet(newLabel);
      setIsOpen(false);
      setIsAdding(false);
      setNewLabel("");
    }
  };

  const handleAddLabelClick = () => {
    setIsAdding(true);
  };

  return (
    <div>
      <Button
        onClick={handleIsOpen}
        label={currentLabel || "Labels"}
        size="small"
        className={classes.customDropDownButtonLabels}
      />
      {isOpen && (
        <ul className={classes.dropDownMenuLabels}>
          {availableLabels.map((l) => (
            <li
              key={l}
              onClick={() => handleSelect(l)}
              className={`${classes.dropDownItem} ${
                labels.includes(l) ? classes.activeLabel : ""
              }`}
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
