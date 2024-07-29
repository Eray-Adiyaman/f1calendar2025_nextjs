import Image from "next/image";
import {
  Bahrain,
  Jeddah,
  Australia,
  Japan,
  China,
  Miami,
  EmiliaRomagna,
  Monaco,
  Canada,
  Spain,
  Austria,
  Britain,
  Hungary,
  Belgium,
  Netherlands,
  Italia,
  Azerbaijan,
  Singapore,
  Cota,
  Mexico,
  Brazil,
  Vegas,
  Qatar,
  AbuDhabi
} from ".";

export default function CircuitInfo({circuitData,circuitName,circuitArrayIndex}) {
  
  const imgArr = [
    Bahrain,
    Jeddah,
    Australia,
    Japan,
    China,
    Miami,
    EmiliaRomagna,
    Monaco,
    Canada,
    Spain,
    Austria,
    Britain,
    Hungary,
    Belgium,
    Netherlands,
    Italia,
    Azerbaijan,
    Singapore,
    Cota,
    Mexico,
    Brazil,
    Vegas,
    Qatar,
    AbuDhabi
  ];

  // lenght distance - first gp
  //- rotation drs zones corners
  // circuit name record recordholder laps

  return (
    <div className="circuitInfo">
      <div className="label-wrapper">

 <div className="label-container">
        <label>{circuitName}</label>
        <label>Lap Record <p>{ circuitData[6].LapRecord[0].time } </p></label>
        <label><p>{ circuitData[6].LapRecord[1].recordHolder }</p></label>
        <label>Laps <p>{ circuitData[4].numberoflaps } </p></label>
      </div>
      <div className="label-container">
        <label>Rotation <p>{ circuitData[7].circuitRotation }</p></label>
        <label>DRS Zones<p>{ circuitData[9].drsZones }</p></label>
        <label>Total Corners <p> { circuitData[8].totalCorner } </p></label>
      </div>
        <div className="label-container">
        <label>Length<p>{ circuitData[2].circuitlength }km </p></label>
        <label>Race Distance <p>{ circuitData[3].raceDistance }km</p></label>
        <label>Frist GP <p>{ + circuitData[5].firstGPdate}</p></label>
        </div>
      </div>
      <div className="image">
        <Image src={imgArr[circuitArrayIndex]} quality={100} alt={circuitName} />
      </div>
    </div>
  );
}
