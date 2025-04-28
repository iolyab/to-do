import React from "react";
import { Layout } from "../../components/layout/Layout";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import localeData from "dayjs/plugin/localeData";
// import format from "date-fns/format";
// import parse from "date-fns/parse";
// import startOfWeek from "date-fns/startOfWeek";
// import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useTasks } from "../../hooks/useTasks";

const BigCalendar = () => {
  // const locales = {
  //   "en-US": require("date-fns/locale/en-US"),
  // };

  // const localizer = dateFnsLocalizer({
  //   format,
  //   parse,
  //   startOfWeek,
  //   getDay,
  //   locales,
  // });

  dayjs.extend(weekday);
  dayjs.extend(localeData);

  const localizer = dayjsLocalizer(dayjs);

  const { tasks } = useTasks();

  const events = tasks.map((task) => ({
    title: task.text,
    start: dayjs(task.deadline).toDate(),
    end: dayjs(task.deadline).add(1, "hour").toDate(),
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
