import { useState } from "react";
import { Btn } from "../button/Button";
import "./taskDeadline.module.scss";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const TaskDeadline = ({ start, end, onStartChange, onEndChange, classes }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div>
        <Btn
          onClick={() => setIsOpen(!isOpen)}
          size="small"
          variant="deadlineButton"
          icon={"/assets/deadline-start.png"}
          className={classes.customButton}
          color="secondary"
        />
        {isOpen && (
          <div className={classes.deadlinePicker}>
            <label>Start Date & Time</label>
            <DateTimePicker
              value={start ? dayjs(start) : null}
              onChange={(newValue) =>
                onStartChange(newValue ? newValue.toDate() : null)
              }
              format="MM-DD-YYYY HH:mm"
              sx={{
                backgroundColor: "#fff",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                width: "100%",
              }}
            />
            <label>End Date & Time</label>
            <DateTimePicker
              value={end ? dayjs(end) : null}
              onChange={(newValue) =>
                onEndChange(newValue ? newValue.toDate() : null)
              }
              format="MM-DD-YYYY HH:mm"
              minDateTime={start ? dayjs(start) : undefined}
              sx={{
                backgroundColor: "#fff",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                width: "100%",
              }}
            />
          </div>
        )}
      </div>
    </LocalizationProvider>
  );
};

export { TaskDeadline };
