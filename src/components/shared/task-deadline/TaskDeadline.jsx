import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Btn } from "../button/Button";
import "./taskDeadline.module.scss";

const TaskDeadline = ({ start, end, onStartChange, onEndChange, classes }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Btn
        onClick={() => setIsOpen(!isOpen)}
        size="small"
        variant="deadlineButton"
        icon={"/assets/deadline-start.png"}
        className={classes.customButton}
        sx={{ backgroundColor: "white" }}
      />
      {isOpen && (
        <div className={classes.deadlinePicker}>
          <label>Start Date & Time</label>
          <DatePicker
            selected={start}
            onChange={onStartChange}
            timeFormat="HH:mm"
            dateFormat="MM-dd-yyyy "
            showTimeInput
            inline
          />
          <label>End Date & Time</label>
          <DatePicker
            selected={end}
            onChange={onEndChange}
            timeFormat="HH:mm"
            dateFormat="MM-dd-yyyy"
            showTimeInput
            inline
            minDate={start}
            minTime={start}
          />
        </div>
      )}
    </div>
  );
};

export { TaskDeadline };
