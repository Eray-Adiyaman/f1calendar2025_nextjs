import Image from "next/image";
import bahrein from "/public/Bahrain.png"

export default function CircutInfo() {
  return (
    <div>
          <div className="labels">
            <label>upper label 1</label>
            <label>upper label 2</label>
            <label>upper label 3</label>
            <label>upper label 4</label>
          </div>
          <div className="labels">
            <label>middle label 1</label>
            <label>middle label 2</label>
            <label>middle label 3</label>
            <label>middle label 4</label>
          </div>
          <div className="labels">
            <label>lower label 1</label>
            <label>lower label 2</label>
            <label>lower label 3</label>
            <label>lower label 4</label>
          </div>
          <Image src={bahrein} width={750} quality={100} alt="bahrein" />
        </div>
  )
}
