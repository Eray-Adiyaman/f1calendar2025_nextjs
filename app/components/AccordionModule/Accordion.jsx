"use client";
import { useState } from "react";
import AccordionItem from "./AccordionItem";
import CircuitInfo from "../CircuitInfoModule/CircuitInfo";

export default function Accordion({ raceData ,circutState,gpState }) {
  const [Index, setIndex] = useState(gpState.toString());//SET THIS TO NEXT GP ID AS STRING LATER, TO ENSURE IT ALWAYS OPENS THE UPCOMING GP ACCORDION FIRST
 // compare dates and set states and create a conditional classname for accordion item to send previous races at the bottom
  const [circuitIndex,setCircuit] = useState(circutState);
   
  return (
    <div className="A-wrapper">
      <div className="accord">
        {raceData.map((race) => (
          <AccordionItem
            key={race.id}
            race={race}
            index={Index}
            setIndex={setIndex}
            setCircuit={setCircuit}
            currentGpNumber={gpState}
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
