import Image from "next/image"
import Link from "next/link"
import Logo from "./logo1.png"

export default function NavBar() {
  return (
    <nav>
        <Image 
            src={Logo}
            alt={"F1Calendar logo"}
            width={60}
            quality={100}
            placeholder="blur"
        />
        <h1>Formula 1 2024 Season Calendar</h1>
        <Link href="/">Homepage *</Link>
        
    </nav>
  )
}
