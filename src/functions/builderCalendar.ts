// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const builderCalendar = (month = 0) => {
  const date = new Date();

  date.setMonth(date.getMonth() + month);

  const dateMonth = date.getMonth();

  while (date.getMonth() === dateMonth) {
    date.setDate(date.getDate() - 1);
  }

  const dateWeek = date.getDay();

  if (dateWeek > 0) {
    for (let i = 0; i < dateWeek; i++) {
      date.setDate(date.getDate() - 1);
    }
  }

  const calendar = [];

  for (let i = 0; i < 42; i++) {
    calendar.push({
      day: date.getDate(),
      week: date.getDay(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
    });
    date.setDate(date.getDate() + 1);
  }
  return calendar;
};

export default builderCalendar;
