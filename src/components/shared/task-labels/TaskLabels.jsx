import { useState, useEffect } from 'react';
import { Button } from '../button/Button';
import { addLabel } from '../../../services/labels-service';
import labelClasses from './taskLabels.module.scss';

const TaskLabels = ({ classes, labelsSet, currentLabel, id, labels }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [label, setLabel] = useState(currentLabel || "Labels");
  const [newLabel, setNewLabel] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const [availableLabels, setAvailableLabels] = useState([]);

  useEffect(() => {
    // console.log('currentLabel', currentLabel);
    try {
      const existingLabels = JSON.parse(localStorage.getItem('defaultLabels'));
      if (!existingLabels) {
        const defaultLabels = ['Work', 'Personal'];
        localStorage.setItem('defaultLabels', JSON.stringify(defaultLabels));
        setAvailableLabels(defaultLabels);
      } else {
        setAvailableLabels(existingLabels);
      }
    } catch (error) {
      console.log('Error parsing labels from localStorage:', error);
    }
  }, []);

  // useEffect(() => {
  //   if (currentLabel) {
  //     setLabel(currentLabel);
  //   }
  // }, [currentLabel]);

  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (selectedLabel) => {
    // setLabel(selectedLabel);
    labelsSet(selectedLabel);
    setIsOpen(false);
  };

  const handleCreateLabel = () => {
    if (newLabel.trim() !== '') {
      addLabel(newLabel);
      labelsSet(newLabel);
      // setLabel(newLabel);
      setIsOpen(false);
      setIsAdding(false);
    }
  };

  const handleAddLabelClick = () => {
    setIsAdding(true);
  };

  console.log('-->', labelClasses.activeLabel);

  return (
    <div>
      <Button
        onClick={handleIsOpen}
        label={labels[0] || 'Labels'}
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
                labels.includes(l) ? labelClasses.activeLabel : ''
              }`}
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
