import type dayjs from "dayjs";

export const timeIncrement = (
  startTime: dayjs.Dayjs,
  endTime: dayjs.Dayjs,
  increments = 15
) => {
  console.log("here");
  console.log(startTime.format("HH:mm"));
  let timeTracker = startTime;
  const timeIncrements: string[] = [];
  while (timeTracker.isBefore(endTime)) {
    timeIncrements.push(timeTracker.format("HH:mm"));
    timeTracker = timeTracker.add(increments, "minute");
  }
  return timeIncrements;
};
