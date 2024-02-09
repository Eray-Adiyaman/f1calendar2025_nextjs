import { parseISO, format } from "date-fns"

export default function Accordion({race}) {
    console.log(race.dates[0].raceStart)
    //
  return (
    <>
     <div key={race.id}>
        <h2>{race.gpName} round-{race.id}</h2>
        <h6>{format(race.dates[0].raceStart,"LLLL d, EEEE h:m a")}</h6>
     </div>  
    </>
  )
}
