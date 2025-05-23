import dayjs from "dayjs";

export const getChangedDeadline = (start) => {
    if (!start || !dayjs(start).isValid()) return "";

    const today = dayjs();
    const tomorrow = today.add(1, "day");
    const date = dayjs(start);

    if (date.isSame(today, "day")) return "Today";
    if (date.isSame(tomorrow, "day")) return "Tomorrow";
    return date.format("MMM D hA");
  };