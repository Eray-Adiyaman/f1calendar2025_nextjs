import { format } from "date-fns";

export default function Accordion({ race }) {
  //console.log(race.dates[5].springsession === undefined by default, fill later when data available ) 
  return (
    <>
      <div className="accord" key={race.id}>
        <h2>
          {race.gpName} round-{race.id} {race.sprintWeekend ? "/ Sprint Weekend*" : ""}
        </h2>
        <h6>
          Star--
          {race.dates[0].raceStart
            ? format(race.dates[0].raceStart, "LLLL d, EEEE H:mm a")
            : " TBD"}
        </h6>
        <h6>
          Qual-
          {race.dates[1].qualifySession
            ? format(race.dates[1].qualifySession, "LLLL d, EEEE H:mm a")
            : " TBD"}
        </h6>
        <h6>
          FP3--
          {race.dates[2].freepractice3
            ? format(race.dates[2].freepractice3, "LLLL d, EEEE H:mm a")
            : " TBD"}
        </h6>
        <h6>
          FP2--
          {race.dates[3].freepractice2
            ? format(race.dates[3].freepractice2, "LLLL d, EEEE H:mm a")
            : " TBD"}
        </h6>
        <h6>
          FP1--
          {race.dates[4].freepractice1
            ? format(race.dates[4].freepractice1, "LLLL d, EEEE H:mm a")
            : " TBD"}
        </h6>
        <p>----------------------------------------------------------</p>
      </div>
    </>
  );
}
