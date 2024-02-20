"use client";
import { useState } from "react";
import AccordionItem from "./AccordionItem";
import CircutInfo from "../CircutInfoModule/CircutInfo";

export default function Accordion({ raceData }) {
  const [Index, setIndex] = useState(1);
 // console.log(raceData[Index-1].circutInfo, raceData[Index-1])

  return (
    <div className="flex">
      <div className="accord">
        {raceData.map((race) => (
          <AccordionItem
            key={race.id}
            race={race}
            index={Index}
            setIndex={setIndex}
          />
        ))}
        {raceData.length === 0 && <p>There are no Race Data Available</p>}
      </div>
      <div>
        <CircutInfo Index={Index} circutData={raceData[Index-1].circutInfo}/>
      </div>
    </div>
  );
}
