"use client";
import { useState } from "react";
import AccordionItem from "./AccordionItem";
import CircuitInfo from "../CircuitInfoModule/CircuitInfo";

export default function Accordion({ raceData ,gpState}) {
  const [Index, setIndex] = useState(gpState.toString());
  const [circuitIndex,setCircuit] = useState(0);

  //console.log(jsonBINData" dont forget to add prop")
  

  //finished races moves at the end of the array but their id stays the same, 
  //this creates an array id conflict while setting race and circuit indexes at handleclick function and in the circuitinfo component
  //to rearrange the indexes i take the upcoming gp index as currentgpNumber(gpstate) and assign new array indexes with reIndexArray function when handleclick fires.
  //and i use (circuitIndex+gpState)-1) % raceData.length to reverse the indexes into original position to set circuit images array correctly
  const reIndexArray = (currentGpNumber,Id) => {
    const ArrayLength = raceData.length;
    if(Id >= currentGpNumber)
      { 
        return Id - currentGpNumber;
      }
    if(Id < currentGpNumber){
      return (ArrayLength - currentGpNumber) + parseInt(Id)
      }
  }
    
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
            reIndexArray ={reIndexArray}
            
          />
        ))}
        {raceData.length === 0 && <p>There are no Race Data Available</p>}
      </div>
        <CircuitInfo circuitArrayIndex={((circuitIndex+gpState)-1)%raceData.length} circuitData={raceData[circuitIndex].circuitInfo} circuitName={raceData[circuitIndex].gpName}/>
    </div>
  );
}
