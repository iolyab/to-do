import React from "react";
import { Layout } from "../../components/layout/Layout";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useTasks } from "../../hooks/useTasks";

const BigCalendar = () => {
  const locales = {
    "en-US": require("date-fns/locale/en-US"),
  };

  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });

  const { tasks } = useTasks();

  const events = tasks.map((task) => ({
    title: task.text,
    start: new Date(task.deadline),
    end: new Date(new Date(task.deadline).getTime() + 60 * 60 * 100),
  }));

  return (
    <Layout>
      <div>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 672 }}
        />
      </div>
    </Layout>
  );
};

export { BigCalendar };
