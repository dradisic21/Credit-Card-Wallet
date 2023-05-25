import { Navbar } from "../../components/Navbar/Navbar";
import { Dashboard } from "../../components/Dashboard/Dashboard";
import "./Home.scss"

export function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <div>
       <Dashboard />
      </div>
    </div>
  );
}
