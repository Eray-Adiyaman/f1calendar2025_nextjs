"use client"
import { useState } from "react";
import AccordionItem from "./AccordionItem";

export default function Accordion({raceData}) {

    const [somestate,setSomeState] = useState("0")

  return (
      <div>
    {raceData.map((race)=> (
        <AccordionItem key={race.id} race={race} />
    ))}
    {raceData.length === 0 && (
        <p>There are no Race Data Available</p>
    )}
    </div>
  )
}
