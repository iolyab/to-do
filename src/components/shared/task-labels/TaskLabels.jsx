import { useState, useEffect } from "react";
import { Btn } from "../button/Button";
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
      <Btn
        onClick={handleIsOpen}
        label={currentLabel || "Labels"}
        size="small"
        // className={classes.customDropDownButtonLabels}
        sx={{ backgroundColor: "white", color: "#45304d", fontSize: "7px" }}
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
              <Btn
                onClick={handleAddLabelClick}
                label="Add label"
                size="small"
                variant="addLabel"
                className={classes.customButton}
                sx={{ backgroundColor: "white" }}
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
                <Btn
                  onClick={handleCreateLabel}
                  icon={"/assets/save.png"}
                  size="small"
                  variant="saveLabel"
                  className={classes.customButton}
                  sx={{ backgroundColor: "white" }}
                >
                  Add
                </Btn>
              </div>
            )}
          </li>
        </ul>
      )}
    </div>
  );
};

export { TaskLabels };
