import React from "react";
import { Layout } from "../../components/layout/Layout";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import localeData from "dayjs/plugin/localeData";

import "react-big-calendar/lib/css/react-big-calendar.css";
import { useTasks } from "../../hooks/useTasks";
import { useState } from "react";

dayjs.extend(weekday);
dayjs.extend(localeData);

const localizer = dayjsLocalizer(dayjs);

const BigCalendar = () => {
  const [view, setView] = useState("month");
  const [currentDate, setCurrentDate] = useState(new Date());
  const { tasks } = useTasks();

  const handleView = (newView) => {
    setView(newView);
  };

  const handleNavigate = (date) => {
    setCurrentDate(date);
  };

  const events = tasks.map((task) => {
    const startDate = task.start ? dayjs(task.start).toDate() : null;
    const endDate = task.end ? dayjs(task.end).toDate() : null;

    const isAllDay = !startDate || !endDate;

    return {
      title: task.text,
      start: startDate,
      end: endDate || dayjs(startDate).add(1, "hour").toDate(),
      allDay: isAllDay,
    };
  });

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
          date={currentDate}
          onNavigate={handleNavigate}
          style={{ height: 672 }}
        />
      </div>
    </Layout>
  );
};

export { BigCalendar };
