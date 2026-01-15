'use client';

import { useState } from "react";

export default function Calendar() {
  const todaysDate = new Date;
  const thisMonth = todaysDate.getMonth();
  const [month, setMonth] = useState(thisMonth);
  const [date, setDate] = useState(todaysDate);
  const [monthCalendar, setMonthCalendar] = useState<Array<Date|undefined>>([]);

  function addMonths(currentDate: Date, months: number) {
    var date = new Date;
    date.setMonth(currentDate.getMonth() + months);
    setMonth(date.getMonth());
    setDate(date);
  }

  function getDaysInMonth(month: number, year: number) {
    const fiveWeeks = 5 * 7;
    const sixWeeks = 6 * 7;

    const startOfMonth = new Date(year, month, 1);
    const lengthOfMonth = (new Date(year, month, -1)).getDay();
    const firstDayOfMonth = startOfMonth.getDay(); // eg Monday

    // Calculate the overall length including days from the previous and next months to be shown
    const length = firstDayOfMonth + lengthOfMonth > fiveWeeks ? sixWeeks : fiveWeeks;

    let daysInMonth = [];
    while (startOfMonth.getMonth() === month) {
      daysInMonth.push(new Date(startOfMonth));
      startOfMonth.setDate(startOfMonth.getDate() + 1);
    }
    console.log(daysInMonth);
    setMonthCalendar(daysInMonth);
    return daysInMonth;
  }

  function previous() {
    addMonths(date, -1);
  }

  function next() {
    addMonths(date, 1);
  }

  return (
    <div>
      <div>
        <h1>Calendar</h1>
      </div>
      <div>
        <button onClick={previous}>Previous</button>
        <button onClick={next}>Next</button>
      </div>
      <div>
        <h2>{`${date.toLocaleString('default', { month : 'long' })}, ${date.toLocaleString('default', { year : 'numeric' })}`}</h2>
        <div className="grid grid-cols-7">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
            (name, index) => (<div key={index}>{name}</div>)
          )}
        </div>
        <div className="grid grid-cols-7 flex-grow">
          {getDaysInMonth(date.getMonth(), date.getFullYear()).map((day, index) => (
            // todo - this should link to the statefull month
            <div key={index}>{day.getDate()}</div>
          ))}
        </div>

      </div>
    </div>
  )
}