import dayjs from "dayjs";

export const getChangedDeadline = (start) => {
  if (!start || !dayjs(start).isValid()) return "";
  
  const today = dayjs();
  const tomorrow = today.add(1, "day");
  const date = dayjs(start);
  
  if (date.isSame(today, "day")) return `Today ${date.format("h:mm A")}`;
  if (date.isSame(tomorrow, "day")) return `Tomorrow ${date.format("h:mm A")}`;
  return date.format("MMM D, h:mm A"); 
};

  // export const formatDateForAirtable = (value) => {
  //   if (!value) return null;
  //   const date = dayjs(value);
  //   return date.isValid() ? date.format('YYYY-MM-DD') : null;
  // };

  export const formatDateForAirtable = (value) => {
    if (!value) return null;
    const date = dayjs(value);
    return date.isValid() ? date.toISOString() : null;
};