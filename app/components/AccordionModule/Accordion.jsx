"use client";
import { useState } from "react";
import AccordionItem from "./AccordionItem";
import CircutInfo from "../CircutInfoModule/CircutInfo";

export default function Accordion({ raceData }) {
  const [Index, setIndex] = useState("1");//SET THIS TO NEXT GP ID AS STRING LATER, TO ENSURE IT ALWAYS OPENS THE UPCOMING GP ACCORDION FIRST

  const [circutIndex,setCircut] = useState(0);

  return (
    <div className="flex">
      <div className="accord">
        {raceData.map((race) => (
          <AccordionItem
            key={race.id}
            race={race}
            index={Index}
            setIndex={setIndex}
            setCircut={setCircut}
          />
        ))}
        {raceData.length === 0 && <p>There are no Race Data Available</p>}
      </div>
      <div>
        <CircutInfo circutData={raceData[circutIndex].circutInfo} circutName={raceData[circutIndex].gpName}/>
      </div>
    </div>
  );
}
