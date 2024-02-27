
//components
import NavBar from "../components/NavBar";
import RaceList from "../Races/RaceList";
import CircuitInfo from "../components/CircuitInfoModule/CircuitInfo";
import SocialCards from "../components/SocialCards";
import PointsTable from "../components/PointsTable";


export default function Dashboardlayout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <main className="layout">
        <RaceList />
        <PointsTable />
      </main>
    </>
  );
}
