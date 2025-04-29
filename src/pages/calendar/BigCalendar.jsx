import React from "react";
import { Layout } from "../../components/layout/Layout";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import localeData from "dayjs/plugin/localeData";

import "react-big-calendar/lib/css/react-big-calendar.css";
import { useTasks } from "../../hooks/useTasks";
import { useState } from "react";

const BigCalendar = () => {
  dayjs.extend(weekday);
  dayjs.extend(localeData);

  const localizer = dayjsLocalizer(dayjs);

  const [view, setView] = useState("month");

  const handleView = (newView) => {
    setView(newView);
  };

  const { tasks } = useTasks();

  const events = tasks.map((task) => ({
    title: task.text,
    start: dayjs(task.deadline).toDate(),
    end: dayjs(task.deadline).add(1, "hour").toDate(),
    allDay: true,
  }));

  return (
    <Layout>
      <div>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          views={["month", "week", "day", "agenda"]}
          view={view}
          onView={handleView}
          style={{ height: 672 }}
        />
      </div>
    </Layout>
  );
};

export { BigCalendar };
