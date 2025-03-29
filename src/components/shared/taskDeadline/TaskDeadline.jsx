import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";
import { Button } from "../button/Button";

const TaskDeadline = ({ deadline, deadlineSet, classes }) => {
  const [isOpen, setIsOpen] = useState(false);

  // const handleAddDeadlineClick = (date) => {
  //   deadlineSet(date);
  //   setIsOpen(false);
  // };

  const handleAddDeadlineClick = (date) => {
    if (typeof deadlineSet === "function") {
      deadlineSet(date);
    } else {
      console.error("deadlineSet is not a function:", deadlineSet);
    }
    setIsOpen(false);
  };

  return (
    <div>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="small"
        variant="deadlineButton"
        label={deadline ? dayjs(deadline).format("YYYY-MM-DD") : "Set Deadline"}
        className={classes.customButton}
      />
      {isOpen && (
        <div className={classes.deadlinePicker}>
          <DatePicker
            selected={deadline}
            onChange={handleAddDeadlineClick}
            dateFormat="MM-dd-yyyy"
            inline
          />
        </div>
      )}
    </div>
  );
};

export { TaskDeadline };
