import Accordion from "../components/AccordionModule/Accordion";

async function getRaceCalendarData() {
    const res = await fetch("http://localhost:4000/f12024SeasonCalendarData",{
        
        /*REMOVE REVALIDATION BEFORE DEPLOYMENT */
        next: {
            revalidate: 10
        }
    })

    return  res.json();
}


export default async function RaceList() {
    const RaceCalendarData= await getRaceCalendarData();

  return (
    <div>
     <Accordion raceData={RaceCalendarData} />
    </div>
  )
}
