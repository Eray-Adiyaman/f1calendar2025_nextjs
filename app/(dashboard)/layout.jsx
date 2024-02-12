
//components
import NavBar from "../components/NavBar";
import RaceList from "../Races/RaceList";
import CircutInfo from "../components/CircutInfo";
import SocialCards from "../components/SocialCards";
import PointsTable from "../components/PointsTable";


export default function Dashboardlayout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <main className="layout">
        <RaceList />
        <CircutInfo />
        <SocialCards />
        <PointsTable />
      </main>
    </>
  );
}
