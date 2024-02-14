"use client"
import { useState } from "react";
import AccordionItem from "./AccordionItem";

export default function Accordion({raceData}) {

  const [Index,setIndex] = useState()

  return (
      <div className="flex flex-col justify-center ml-3">
    {raceData.map((race)=> (
        <AccordionItem key={race.id} race={race} index={Index} setIndex={setIndex} />
    ))}
    {raceData.length === 0 && (
        <p>There are no Race Data Available</p>
    )}
    </div>
  )
}
