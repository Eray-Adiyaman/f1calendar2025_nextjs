"use client";
import { format } from "date-fns";

export default function AccordionItem({ race, index, setIndex }) {
  const sprintTrue = race.sprintWeekend ? "visible" : "hidden";
  const sprintFalse = race.sprintWeekend ? "hidden" : "visible";

  const formatTime = (indexparam) => {
    switch (indexparam) {
      case 0:
        return race.dates[0].raceStart
          ? format(race.dates[0].raceStart, "LLL d, EEE H:mm a")
          : " TBD";
      case 1:
        return race.dates[1].qualifySession
          ? format(race.dates[1].qualifySession, "LLL d, EEE H:mm a")
          : " TBD";
      case 2:
        return race.dates[2].freepractice3
          ? format(race.dates[2].freepractice3, "LLL d, EEE H:mm a")
          : " TBD";
      case 3:
        return race.dates[3].freepractice2
          ? format(race.dates[3].freepractice2, "LLL d, EEE H:mm a")
          : " TBD";
      case 4:
        return race.dates[4].freepractice1
          ? format(race.dates[4].freepractice1, "LLL d, EEE H:mm a")
          : " TBD";
      case 5:
        return race.dates[5].sprintShootout
          ? format(race.dates[5].sprintShootout, "LLL d, EEE H:mm a")
          : " TBD";
      case 6:
        return race.dates[6].sprintStart
          ? format(race.dates[6].sprintStart, "LLL d, EEE H:mm a")
          : " TBD";
      default:
        break;
    }
  };

  const handleSetIndex = (Id) => {
    if(Id === index){setIndex(0)}
    index !== Id && setIndex(Id);
  };

  return (
    <div  className={index === race.id ? "AccordionItemExpanded" : "AccordionItem"  }>
        <div className="GpNameTag" onClick={() => handleSetIndex(race.id)}>
          {race.gpName}<span className="time-stamp-element">
              {index !== race.id && format(race.dates[0].raceStart, "LLL d  H:mma")}
              {/* {race.sprintWeekend ? "Sprint Weekend" : ""} */}
            </span>
        </div>
        {index === race.id && (
          <div className="SessionsAndTimers">
              <div>Race Start- <span className="time-stamp-element" >{formatTime(0)}</span></div>
              <p className={sprintTrue}>SPRINT RACE- <span className="time-stamp-element" >{formatTime(6)}</span></p>
              <p className={sprintTrue}>
                Sprint Shootout <span className="time-stamp-element" >{formatTime(5)}</span> 
              </p>
              <p>Qualifying Session- <span className="time-stamp-element" >{formatTime(1)} </span> </p>
              <p className={sprintFalse}>FP3- <span className="time-stamp-element" >{formatTime(2)} </span> </p>
              <p className={sprintFalse}>FP2-  <span className="time-stamp-element" >{formatTime(3)} </span> </p>
              <p>FP1- <span className="time-stamp-element" > {formatTime(4)}</span></p>
          </div>
        )}
    </div>
  );
}
