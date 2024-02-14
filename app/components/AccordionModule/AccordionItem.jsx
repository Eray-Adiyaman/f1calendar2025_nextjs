"use client"
import { format } from "date-fns";

export default function AccordionItem({ race,index, setIndex }) {

  const sprintTrue = race.sprintWeekend ? "visible" : "hidden";
  const sprintFalse = race.sprintWeekend ? "hidden" : "visible";

  const formatTime = (indexparam) => {
    switch (indexparam) {
      case 0:
        return race.dates[0].raceStart
          ? format(race.dates[0].raceStart, "LLLL d, EEEE H:mm a")
          : " TBD";
      case 1:
        return race.dates[1].qualifySession
          ? format(race.dates[1].qualifySession, "LLLL d, EEEE H:mm a")
          : " TBD";
      case 2:
        return race.dates[2].freepractice3
          ? format(race.dates[2].freepractice3, "LLLL d, EEEE H:mm a")
          : " TBD";
      case 3:
        return race.dates[3].freepractice2
          ? format(race.dates[3].freepractice2, "LLLL d, EEEE H:mm a")
          : " TBD";
      case 4:
        return race.dates[4].freepractice1
          ? format(race.dates[4].freepractice1, "LLLL d, EEEE H:mm a")
          : " TBD";
      case 5:
         return race.dates[5].sprintShootout
         ? format(race.dates[5].sprintShootout, "LLLL d, EEEE H:mm a")
         : " TBD";
      case 6:
        return race.dates[6].sprintStart
         ? format(race.dates[6].sprintStart, "LLLL d, EEEE H:mm a")
         : " TBD";
      default:
        break;
    }
  };

  const handleSetIndex=(Id) => index !== Id && setIndex(Id)

  return (
    <div className="accord">
      <li>
        <button onClick={()=>handleSetIndex(race.id)}>
          {race.gpName}
          { <span> /— {/*index !== race.id && format(race.dates[0].raceStart, "LLL d  H:mma")*/} {race.sprintWeekend ? "Sprint Weekend" : ""}</span> }
        </button>
        {index === race.id && (<div>
          <ul>
            <li>Race Start- {formatTime(0)}</li>
            <li className={sprintTrue} >SPRINT RACE- {formatTime(6)}</li>
            <li className={sprintTrue} >Sprint Shootout(sprint quali)- {formatTime(5)}</li>
            <li>Qualifying Session- {formatTime(1)}</li>
            <li className={sprintFalse}>FP3- {formatTime(2)} </li>
            <li className={sprintFalse}>FP2- {formatTime(3)}</li>
            <li>FP1- {formatTime(4)}</li>
          </ul>
        </div>)}
      </li>
    </div>
  );
}
