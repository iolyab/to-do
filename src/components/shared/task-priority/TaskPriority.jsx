import { useState } from 'react';
import { Button } from '../button/Button';
import classes from './taskPriority.module.scss';
import { retrievedPriorityOptions } from '../../../services/priority-service';

const TaskPriority = ({ priorityChanged, currentPriority }) => {
  const [isOpen, setIsOpen] = useState(false);

  // console.log('===>');
  // const priorityOptions = ['High', 'Medium', 'Low'];
  // localStorage.setItem('priorityOptions', JSON.stringify(priorityOptions));

  // const retrievedPriorityOptions = JSON.parse(localStorage.getItem('priorityOptions'));

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
        label={currentPriority || 'Priority'}
        size="small"
        className={classes.customDropDownButton}
      />
      {isOpen && (
        <ul className={classes.dropDownMenu}>
          {retrievedPriorityOptions.map((p) => (
            <li key={p} onClick={() => handleSelect(p)} className={classes.dropDownItem}>
              {p}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { TaskPriority };
