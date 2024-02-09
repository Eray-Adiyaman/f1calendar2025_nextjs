

//components
import NavBar from "../components/NavBar"
import RaceList from "../Races/RaceList"


export default function Dashboardlayout({children}) {
  return (
    <>
    <NavBar />
    {children}
    <RaceList />
    </>

    )
}
