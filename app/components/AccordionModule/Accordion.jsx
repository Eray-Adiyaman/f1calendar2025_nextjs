"use client";
import { useState } from "react";
import AccordionItem from "./AccordionItem";
import CircuitInfo from "../CircuitInfoModule/CircuitInfo";

export default function Accordion({ raceData }) {
  const [Index, setIndex] = useState("1");//SET THIS TO NEXT GP ID AS STRING LATER, TO ENSURE IT ALWAYS OPENS THE UPCOMING GP ACCORDION FIRST

  const [circuitIndex,setCircuit] = useState(0);

  return (
    <div className="flex">
      <div className="accord">
        {raceData.map((race) => (
          <AccordionItem
            key={race.id}
            race={race}
            index={Index}
            setIndex={setIndex}
            setCircuit={setCircuit}
          />
        ))}
        {raceData.length === 0 && <p>There are no Race Data Available</p>}
      </div>
      <div>
        <CircuitInfo circuitIndex={circuitIndex} circuitData={raceData[circuitIndex].circuitInfo} circuitName={raceData[circuitIndex].gpName}/>
      </div>
    </div>
  );
}
