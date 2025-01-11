import { parseISO } from "date-fns";
import Accordion from "../components/AccordionModule/Accordion";

/*DEPLOY WITH THIS ENDPOINT*/
async function getJSONBIN() {
  
  const res = await fetch(`https://api.jsonbin.io/v3/b/${process.env.BIN_ID}`,
                    {
                      method:"GET",
                      withCredentials: true,
                      headers: {
                        "X-Master-key": "",
                        "X-Access-key": `${process.env.ACCESS_KEY}`,
                        "Content-Type": "application/json"
                      }
                    })
      
          return res.json();
} 


// async function getRaceCalendarData() {
//     const res = await fetch("http://localhost:4000/f12025SeasonCalendarData",{
        
//         /*REMOVE REVALIDATION BEFORE DEPLOYMENT */
//         next: {
//             revalidate: 10
//         }
//     })

//     return  res.json();
// }




export default async function RaceList() {
  const data = await getJSONBIN();
  const RaceCalendarData = data.record.f12025SeasonCalendarData
  
  //const RaceCalendarData= await getRaceCalendarData();

  const raceDates = RaceCalendarData.map((race) => parseISO(race.dates[0].raceStart ))
  const now = new Date();
  let circut= 0;
  let gp= 0;  
  for(let i=0;i<raceDates.length;i++){
        if(raceDates[i]< now){
          circut = i+1; 
          gp = i+2;
        }
    }
  //Move finished races at the end of the array to reorganize accordion
   const temp = RaceCalendarData.splice(circut)
   const newRaceOrder = temp.concat(RaceCalendarData)
   if(gp === 0){gp = 1}

  return (
    <div>
     <Accordion raceData={newRaceOrder} gpState ={gp} />
    </div>
  )
}
