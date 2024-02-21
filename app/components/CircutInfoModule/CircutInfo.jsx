import Image from "next/image";
import { Bahrain , Second, Thidr} from ".";

export default function CircutInfo({circutData,circutName}) {
  
  const imgArr = [Bahrain];
  
  // lenght distance - first gp
  //- rotation drs zones corners
  // circut name record recordholder laps

  return (
    <div>
          <div className="labels">
            <label>{`Length `+circutData[2].circutlength}</label>
            <label>{`Race Distance `+circutData[3].raceDistance}</label>
            <label> ---</label>
            <label>{`Frist GP `+circutData[5].firstGPdate}</label>
          </div>
          <div className="labels">
            <label>middle label 1</label>
            <label>{`Rotation `+circutData[7].circutRotation}</label>
            <label>{`DRS Zones `+ circutData[9].drsZones}</label>
            <label>{`Total Corners `+ circutData[8].totalCorner}</label>
          </div>
          <div className="labels">
            <label>{circutName}</label>
            <label>{`Lap Record `+circutData[6].LapRecord[0].time}</label>
            <label>{circutData[6].LapRecord[1].recordHolder}</label>
            <label>{`Laps `+circutData[4].numberoflaps}</label>
          </div>
          <Image src={imgArr[0]} width={750} quality={100} alt="bahrein" />
        </div>
  )
}
