import dayjs from "dayjs";
import { Toggle } from "./_global/toggle";
import Dropdown from "./_global/dropdown";
import { timeIncrement } from "~/helpers/timeIncrement";

export function Avaliability() {
  const days = Array.from(Array(7).keys());

  return days.map((day) => {
    return (
      <div className="col-md-1" key={day}>
        <div className="grid grid-cols-3 py-2">
          <Toggle label={dayjs().day(day).format("dddd")} />
          <div className="flex">
            <Dropdown
              options={timeIncrement(
                dayjs(`${dayjs().format("YYYY-MM-DD")} 9:00`),
                dayjs(`${dayjs().format("YYYY-MM-DD")} 17:00`)
              )}
            />
            <span className="px-2 text-white">-</span>
            <Dropdown
              options={timeIncrement(
                dayjs(`${dayjs().format("YYYY-MM-DD")} 9:00`),
                dayjs(`${dayjs().format("YYYY-MM-DD")} 17:00`)
              )}
            />
          </div>
        </div>
      </div>
    );
  });
}
