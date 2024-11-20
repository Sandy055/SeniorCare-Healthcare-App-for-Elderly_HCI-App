import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  isSameMonth,
  isToday,
  parse,
  startOfToday,
  startOfWeek,
} from "date-fns";
// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

function Calendar() {
  const today = startOfToday();
  const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  const colStartClasses = [
    "",
    "col-start-2",
    "col-start-3",
    "col-start-4",
    "col-start-5",
    "col-start-6",
    "col-start-7",
  ];

  const [currMonth, setCurrMonth] = useState(() => format(today, "MMM-yyyy"));
  let firstDayOfMonth = parse(currMonth, "MMM-yyyy", new Date());

  const daysInMonth = eachDayOfInterval({
    start: startOfWeek(firstDayOfMonth),
    end: endOfWeek(endOfMonth(firstDayOfMonth)),
  });

  const getPrevMonth = (event: React.MouseEvent<SVGSVGElement>) => {
    event.preventDefault();
    const firstDayOfPrevMonth = add(firstDayOfMonth, { months: -1 });
    setCurrMonth(format(firstDayOfPrevMonth, "MMM-yyyy"));
  };

  const getNextMonth = (event: React.MouseEvent<SVGSVGElement>) => {
    event.preventDefault();
    const firstDayOfNextMonth = add(firstDayOfMonth, { months: 1 });
    setCurrMonth(format(firstDayOfNextMonth, "MMM-yyyy"));
  };

  return (
    <div className="p-8 flex w-11/12 mx-auto rounded-xl items-center justify-center mt-10 bg-white bg-opacity-40">
      <div className="w-[700px] h-[400px]">
        <div className="flex items-center justify-between">
          <p className="bg-opacity-50 text-xl">
            {format(firstDayOfMonth, "MMMM yyyy")}
          </p>
        </div>
        <hr className="my-6" />
        <div className="grid grid-cols-7 gap-6 sm:gap-12 place-items-center">
          {days.map((day, idx) => {
            return (
              <div key={idx} className="bg-opacity-50">
                {day}
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-7 gap-6 sm:gap-12 mt-8 place-items-center">
          {daysInMonth.map((day, idx) => {
            return (
              <div key={idx} className={colStartClasses[getDay(day)]}>
                <p
                  className={`cursor-pointer flex items-center justify-center bg-opacity-50 h-8 w-8 rounded-full  hover:text-white ${
                    isSameMonth(day, today) ? "text-gray-900" : "text-gray-400"
                  } ${!isToday(day) && "hover:bg-blue-500"} ${
                    isToday(day) && "bg-blue-500 text-white"
                  }`}
                >
                  {format(day, "d")}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Calendar;

// import {
//   add,
//   eachDayOfInterval,
//   endOfMonth,
//   endOfWeek,
//   format,
//   getDay,
//   isSameMonth,
//   isToday,
//   parse,
//   startOfToday,
//   startOfWeek,
// } from "date-fns";
// import { useState } from "react";

// function Calendar({ nextAppointment }: { nextAppointment: string }) {
//   const today = startOfToday();
//   const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
//   const colStartClasses = [
//     "",
//     "col-start-2",
//     "col-start-3",
//     "col-start-4",
//     "col-start-5",
//     "col-start-6",
//     "col-start-7",
//   ];

//   const [currMonth, setCurrMonth] = useState(() => format(today, "MMM-yyyy"));
//   let firstDayOfMonth = parse(currMonth, "MMM-yyyy", new Date());

//   const daysInMonth = eachDayOfInterval({
//     start: startOfWeek(firstDayOfMonth),
//     end: endOfWeek(endOfMonth(firstDayOfMonth)),
//   });

//   const getPrevMonth = (event: React.MouseEvent<SVGSVGElement>) => {
//     event.preventDefault();
//     const firstDayOfPrevMonth = add(firstDayOfMonth, { months: -1 });
//     setCurrMonth(format(firstDayOfPrevMonth, "MMM-yyyy"));
//   };

//   const getNextMonth = (event: React.MouseEvent<SVGSVGElement>) => {
//     event.preventDefault();
//     const firstDayOfNextMonth = add(firstDayOfMonth, { months: 1 });
//     setCurrMonth(format(firstDayOfNextMonth, "MMM-yyyy"));
//   };

//   return (
//     <div className="p-8 flex w-11/12 mx-auto rounded-xl items-center justify-center mt-10 bg-white bg-opacity-40">
//       <div className="w-[700px] h-[400px]">
//         <div className="flex items-center justify-between">
//           <p className="bg-opacity-50 text-xl">
//             {format(firstDayOfMonth, "MMMM yyyy")}
//           </p>
//         </div>
//         <hr className="my-6" />
//         <div className="grid grid-cols-7 gap-6 sm:gap-12 place-items-center">
//           {days.map((day, idx) => {
//             return (
//               <div key={idx} className="bg-opacity-50">
//                 {day}
//               </div>
//             );
//           })}
//         </div>
//         <div className="grid grid-cols-7 gap-6 sm:gap-12 mt-8 place-items-center">
//           {daysInMonth.map((day, idx) => {
//             const isNextAppointment = format(day, "MM/dd/yyyy") === nextAppointment;
//             return (
//               <div key={idx} className={colStartClasses[getDay(day)]}>
//                 <p
//                   className={`cursor-pointer flex items-center justify-center bg-opacity-50 h-8 w-8 rounded-full  hover:text-white ${
//                     isSameMonth(day, today) ? "text-gray-900" : "text-gray-400"
//                   } ${!isToday(day) && "hover:bg-blue-500"} ${
//                     isToday(day) && "bg-blue-500 text-white"
//                   } ${isNextAppointment && "bg-yellow-400 text-black"}`}
//                 >
//                   {format(day, "d")}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Calendar;
