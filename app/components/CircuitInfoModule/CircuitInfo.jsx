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

export default function CircuitInfo({circuitData,circuitName,circuitIndex}) {
  
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
    <div>
      <div className="labels">
        <label>{`Length ` + circuitData[2].circuitlength}</label>
        <label>{`Race Distance ` + circuitData[3].raceDistance}</label>
        <label> ---</label>
        <label>{`Frist GP ` + circuitData[5].firstGPdate}</label>
      </div>
      <div className="labels">
        <label>middle label 1</label>
        <label>{`Rotation ` + circuitData[7].circuitRotation}</label>
        <label>{`DRS Zones ` + circuitData[9].drsZones}</label>
        <label>{`Total Corners ` + circuitData[8].totalCorner}</label>
      </div>
      <div className="labels">
        <label>{circuitName}</label>
        <label>{`Lap Record ` + circuitData[6].LapRecord[0].time}</label>
        <label>{circuitData[6].LapRecord[1].recordHolder}</label>
        <label>{`Laps ` + circuitData[4].numberoflaps}</label>
      </div>
      <Image src={imgArr[circuitIndex]} quality={100} alt={circuitName} />
    </div>
  );
}
